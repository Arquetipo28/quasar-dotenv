const { config } = require('../index.js')

test('returns test env config', () => {
  const processEnvResult = config()
  expect(processEnvResult).toBeDefined()
  expect(processEnvResult).toHaveProperty('TEST_VAR')
  expect(processEnvResult['TEST_VAR']).toEqual('test message')
})
