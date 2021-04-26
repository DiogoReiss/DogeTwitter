import twitter from 'twitter';
import dotenv from 'dotenv';

dotenv.config();

const client = new twitter(
  {
    consumer_key: `${process.env.TWITTER_APIKEY}`,
    consumer_secret: `${process.env.TWITTER_SECRETAPIKEY}`,
    access_token_key: `${process.env.TWITTER_ACCESSTOKEN}`,
    access_token_secret: `${process.env.TWITTER_ACCESSTOKENSECRET}`
  }
);

export default async function tweetDogePrice(message: string) {
  await client.post('statuses/update', { status: `${message}` }, (error) => {
    var status  = ''
    if (error) {
      status = 'tweet não foi feito com sucesso'
      return status;
    } else {
      status = 'tweet feito com sucesso! 🚀'
      return status;
    };
  })
  return {status}
};
