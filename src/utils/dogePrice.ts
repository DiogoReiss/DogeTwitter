import api from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function getDogePrice() {
  const dogePrice = await api.get(`${process.env.APIURL_DOGEPRICE}` ).then(async (response) => {
    const price = await Number(response.data.data.prices[0].price)
    const exchange = await response.data.data.prices[0].exchange
    return {price, exchange}; 
  });
  return dogePrice;
}
