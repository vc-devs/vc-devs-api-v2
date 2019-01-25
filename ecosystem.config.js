module.exports = {
    apps: [{
        name: 'vc-dev-api-v2',
        script: 'ts-node',
        instances: 1,
        // exec_mode: "fork",
        watch: true,
        log_date_format: "YYYY-MM-DD HH:mm:ss",
        args: [
            'ts-node -- -P tsconfig.json src/app.ts',
            '--color'
        ],
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};