import getPriceEURUSD from '../src/utils/getPriceEURUSD';

describe('test price EUR-USD external api', () => {
  it('should return the EUR-USD price', async () => {
    const response = await getPriceEURUSD();
    
    expect(response.price).toBe(1.209); // the EUR-USD price 26/04/2021
  })
})