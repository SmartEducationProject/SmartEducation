import { NodeSSH } from "node-ssh";
import path from 'path';
import config from './config.mjs'

export default async (_config) => {
    const { distDir, imageName, containerName, imageTag, port } = _config;

    const ssh = new NodeSSH();

    try {
        /** @description 连接服务器 */
        console.log('🛠️  connect...');
        await ssh.connect({
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password
        });
        console.log('✅ connect success');


        /** @description 上传dist文件夹 */
        await runCommand(`rm -rf ${distDir}/dist`, { cwd: distDir })// 删除原项目的文件
        console.log('🛠️  put directory...');
        await ssh.putDirectory(path.resolve(process.cwd(), 'dist'), path.resolve(distDir, "dist"), {
            recursive: true,
            concurrency: 10,
            // validate: function (itemPath) { },
            // tick: function (localPath, remotePath, error) { }
        });
        console.log('✅ put directory success');


        /** @description 创建项目镜像 */
        console.log('🛠️  build images...');
        await runCommand(`docker build -f ../Dockerfile -t ${imageName}:${imageTag} .`, { cwd: distDir });
        console.log('✅ build images success');


        /** @description 创建容器并启动 */
        await buildContainer();


        console.log('💫 Project deployed successfully!!!');
        console.log(`💫 The project is deployed on port ${port}`);
    } catch (error) {
        console.log(`❌❌ ${error}`);
    } finally {
        ssh.dispose();
    }

    /**
     * @description 通过 ssh 在服务器上运行命令
     * @param {*} cmd shell 命令
     */
    async function runCommand (cmd, config = { isStdout: true }) {
        const result = await ssh.execCommand(cmd, {
            cwd: config?.cwd,
            onStdout: config?.onStdout,
            onStderr: config?.onStderr ?? ((chunk) => {
                console.log(`❌ ${cmd} got some error`);
                console.log(chunk.toString('utf8'));
            }),
        });

        config.isStdout && result.stdout && console.log(result.stdout);
        return result;
    }

    /**
     * @description 创建容器并启动
     */
    async function buildContainer () {
        console.log('🛠️  build container...');

        const _containerName = `${containerName}-v${imageTag.split(".").join("-")}`;

        const result = await runCommand(`docker run -d --name ${_containerName} -p ${port}:80 --restart=always ${imageName}:${imageTag}`);

        if (result.stderr.includes("port is already allocated")) {
            // 端口被占用
            console.log('🛠️  stop and remove the old container...');
            const psResult = await runCommand("docker ps -a", { isStdout: false });
            const oldContainerName = psResult.stdout.match(/(?<=0\.0\.0\.0:[0-9]*->80\/tcp)(.*)/g)[0].trim();
            await runCommand(`docker stop ${oldContainerName}`);
            await runCommand(`docker rm ${oldContainerName}`);
            await runCommand(`docker start ${_containerName}`);
        } else if (result.stderr.includes("already in use by container")) {
            // 有相同名字的容器
            console.log('🛠️  stop and remove the old container...');
            await runCommand(`docker stop ${_containerName}`);
            await runCommand(`docker rm ${_containerName}`);
            await buildContainer();
        }

        console.log('✅ build container success');
    }
}