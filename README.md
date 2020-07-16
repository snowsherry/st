安装依赖
 npm install
 
部署配置
    .env 文件 设置 VUE_APP_BASE_PATH
    根域名
        VUE_APP_BASE_PATH='/'
    二级域名  $name
        VUE_APP_BASE_PATH='/$name/'
        nginx配置 目录访问
                location / {
                            alias /opt/tigerye/account/us/; //服务器项目对应地址 全路径
                           try_files $uri $uri/ /$name/index.html;
                    }
       
npm run build 
    构建生成对应的静态HTml 目录
    部署该文件