/**
 * 常量配置
 * 用于配置 webpack.DefinePlugin
 */

const NODE_ENV = process.env.NODE_ENV || 'development';

/* === config start === */
// common
const COMMON_CONF = {
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
};

// envs
const ENV_CONF = {
  // dev
  dev: {
    SERVER_API_BASEURL: JSON.stringify('https://zuul-ut.nakedhub.com/'),
  },
  // ut
  ut: {
    SERVER_API_BASEURL: JSON.stringify('https://zuul-ut.nakedhub.com'),
  },
  // prod
  prod: {
    SERVER_API_BASEURL: JSON.stringify('https://api.wework.cn/chinaos'),
  },
};

// module.exports
module.exports = Object.assign({}, COMMON_CONF, ENV_CONF[APP_ENV]);
