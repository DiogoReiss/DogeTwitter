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
  client.post('statuses/update', { status: `${message}` }, (error, tweet, response) => {
    if (error) throw error;
    return console.log(tweet);
  })
};
