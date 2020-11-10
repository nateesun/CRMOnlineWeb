module.exports = {
  apps : [
    {
      name: 'monitor-ui',
      script: 'index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        REACT_APP_apiServiceEndpoint: 'http://softcrmpkh.dyndns.org:5000',
        REACT_APP_apiLocalRedeem: 'http://localhost:5050/api/redeem',
        REACT_APP_apiLocalMember: 'http://localhost:5050/api/member',
        REACT_APP_apiServiceRedeem: 'http://localhost:5050/api/redeem/server',
        REACT_APP_apiServiceMember: 'http://localhost:5050/api/member/server',
      },
    },
  ],
};
