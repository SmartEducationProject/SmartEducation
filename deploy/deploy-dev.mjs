import deploy from "./deploy.mjs";
import config from './config.mjs';

deploy({
    distDir: config.distDir + '/dev/dist', // dist文件夹在服务器的位置
    imageName: config.imageName + '-dev',
    containerName: config.containerName + '-dev',
    imageTag: '2.6',
    port: '8003'
})