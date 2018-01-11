/*
Update this config with your own mongodb database connections.
*/


module.exports = {
  development: {
    db: 'mongodb://localhost:27017/developmentDB'
  },
  test: {
    db: 'mongodb://localhost:27017/testDB'
  },
  production: {
    db: 'mongodb://localhost:27017/productionDB'
  }
};