import sendHelloWorld from "../app"
import http from '../utils/axios'
describe('sendHelloWorld', () => {
  test('Should return an object', async () => {
    const mockResponse = { message: 'Olá, Teste' } 
    http.get = jest.fn(() => ({data: mockResponse}))

    const expectedResponse = { message: 'Olá, Teste' }
    const response = await sendHelloWorld("Teste")

    expect(response).toMatchObject(expectedResponse)
  })
})