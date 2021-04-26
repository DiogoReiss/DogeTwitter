import getDogePrice from '../src/utils/dogePrice';

describe('test doge price api', () => {
  it('should get doge price from external api', async () => {
    const response = await getDogePrice();
    expect(response.res).toBe('success');
  })

  it('the price should be a number', async () => {
    const response = await getDogePrice();
    expect(response.price).toBe(0.26385); // the doge price 26/04/2021
  })
});