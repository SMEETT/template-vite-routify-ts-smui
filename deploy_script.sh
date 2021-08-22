mkdir /var/lib/pm2node/SMUI_demo
cd /var/lib/pm2node/SMUI_demo
npm install --production=false
npm run build
npm run prepare
pm2 delete smui_demo
pm2 restart ecosystem.config.js
pm2 save