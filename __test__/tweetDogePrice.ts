import tweet from '../src/utils/tweetDogePrice';

describe('test twitter api', (message = 'teste') => {
  it('should return success status', async () => {
    var response = await tweet(message);
    expect(response.status).toBe('tweet feito com sucesso! 🚀')
  })
})