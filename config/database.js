const { DB_USERNAME, DB_PASSWORD } = require("./config");

module.exports = {
  MongoURI: `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds147451.mlab.com:47451/ok-charlie`
};
