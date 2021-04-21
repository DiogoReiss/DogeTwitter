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
  await client.post('statuses/update', { status: `${message}` }, (error, tweet) => {
    if (error) throw error;
    console.log('tweet feito com sucesso! 🚀');
    return console.log(tweet.created_at);
  })
};
