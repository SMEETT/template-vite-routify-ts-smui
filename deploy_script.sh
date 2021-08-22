mkdir /var/lib/pm2node/SMUI_Demo
cd /var/lib/pm2node/SMUI_Demo
npm install --production=false
npm run build
npm run prepare
pm2 delete smui_demo
pm2 restart ecosystem.config.js
pm2 saves