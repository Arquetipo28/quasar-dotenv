const { config } = require('../index.js')

describe('config', () => {
  test('return old test env', () => {
    const processEnvResult = config()
    expect(processEnvResult).toBeDefined()
    expect(processEnvResult).toHaveProperty('TEST_VAR')
    expect(processEnvResult['TEST_VAR']).toEqual('test message')
  })

  // New Quasar refers to unnecessary stringify for env
  test('return new test env', () => {
    const processEnvResult = config({}, false)
    expect(processEnvResult).toBeDefined()
    expect(processEnvResult).toHaveProperty('TEST_VAR')
    expect(processEnvResult['TEST_VAR']).toEqual('test message')
  })
})

