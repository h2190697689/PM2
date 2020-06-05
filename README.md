# PM2  

## PM2是什么
- PM2 是具有内置负载均衡器的Node.js应用程序的生场运行时和进程管理器

## 安装
- npm install pm2 -g

## 启动
- pm2 start app.js 
- pm2 start app.js --name demo  // 启动应用并设置name

## 停止服务
- pm2 stop all    //停止所有应用
- pm2 stop [AppName]   // 根据应用名停止指定应用
- pm2 stop [ID]  //根据应用ID停止指定应用

## 删除应用
- pm2 delete all  
- pm2 delete [AppName]
- pm2 delete [ID]

## 创建开机自启动
- pm2 startup

## 更新pm2
- pm2 updatePM2
- pm2 update 

## 监听模式
- pm2 start app.js --watch   // 当文件发生变化，自动重启

## 静态服务器
- pm2 serve ./dist 9090

## 启用集群模式(自动负载均衡)
- pm2 start app.js -i max
//max 表示PM2将自动检测可用CPU的数量并运行尽可能多的进程
//max可以自定义，如果是4核CPU，设置为2者占用2个

## 重新启动
- pm2 restart app.js

## 0秒停机重新加载
- pm2 reload app.js  //重新启动所有进程，始终保持至少一个进程在运行
- pm2 gracefulReload all   //优雅地以群集模式重新加载所有应用程序

## 查看启动列表
- pm2 list

## 查看每个应用占用情况
- pm2 monit

## 显示应用程序所有信息
- pm2 show [Name]  // 根据name查看
- pm2 show [ID]  //根据id查看

## 查看某一个进程信息
- pm2 describe [ID]

## 查看日志
- pm2 logs 
- pm2 logs [Name]
- pm2 logs [ID]

## 保存当前应用列表
- pm2 save

## 重启保存的应用列表
- pm2 resurrect

## 清除保存的应用列表
- pm2 cleardump

## 保存并恢复PM2进程
- pm2 update

## pm2配置文件方式
- pm2 ecosystem  // 生成一个示例JSON配置文件
- pm2 init 