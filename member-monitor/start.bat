call pm2 delete -s server-monitor
call pm2 delete -s ui-monitor
call pm2 start ./monitor-server/bin/www --name server-monitor -i 2
call pm2 start ./monitor-ui/server/index.js --name ui-monitor -i 2
