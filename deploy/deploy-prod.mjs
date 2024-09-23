import deploy from "./deploy.mjs";
import config from './config.mjs';

deploy({
    distDir: config.distDir + '/prod', // dist文件夹在服务器的位置
    imageName: config.imageName + '-prod',
    containerName: config.containerName + '-prod',
    imageTag: '2.0',
    port: '80'
})