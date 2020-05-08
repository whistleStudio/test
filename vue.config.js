module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './', 
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "asar": false,
        "appId": "ss",
        "productName":"ss",//项目名，也是生成的安装文件名，即aDemo.exe
        "copyright":"Copyright © 2020",//版权信息
        "directories":{
            "output":"./dist_win"//输出文件路径
        },
        "win":{//win相关配置
          // "icon":"./public/favicon.ico",//图标，当前图标在根目录下，注意这里有两个坑
          "target": [
            {
              "target": "nsis",//利用nsis制作安装程序
              "arch": [
                "x64"//64位
              ]
            }
          ]
        }
      }
    }

  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "components": "@/components",
      }
    }
  }
}
