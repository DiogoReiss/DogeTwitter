import api from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function getDogePrice() {
  const dogePrice = await api.get(`${process.env.APIURL_DOGEPRICE}` ).then(async (response) => {
    const res = String( await response.data.status)
    const price = Number( await response.data.data.prices[0].price)
    const exchange = await response.data.data.prices[0].exchange
    return {res, price, exchange}; 
  });
  return dogePrice;
}
