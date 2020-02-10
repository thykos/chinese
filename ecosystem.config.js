module.exports = {
  apps : [{
    name: 'shi-hanyu',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512mb',
  }],

  deploy : {
    production : {
      user : 'site',
      host : '167.71.47.40',
      ref  : 'origin/master',
      repo : 'git@github.com:thykos/chinese.git',
      path : '/home/site/www/front',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
