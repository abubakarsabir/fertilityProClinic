module.exports = {
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 30000,
  timeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 770,
  retries: 2,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://stg-clinic-novo.fertilitypro.com/',
  },
}
