import api from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function getPriceEURUSD() {
  const priceEURUSD = await api.get(`${process.env.APIURL_EURUSD}`).then(async (response) => {
    const price = await Number(response.data.EURUSD.high)
    return price;
  });
  return priceEURUSD;
};
