import getDogePrice from './utils/dogePrice';
import tweetDogePrice from './utils/tweetDogePrice';
import getPriceEURUSD from './utils/getPriceEURUSD';
import schedule from 'node-schedule';

const wallet = 48.65;
const initialPrice = 0.3317;

console.log('The bot are going to the moon with the big dawg :) 🚀')

const tweet = schedule.scheduleJob('* * 1 * * *', async () => {
  const dogePrice = await getDogePrice();
  const eurPrice = Number(await getPriceEURUSD());
  const convertDogePrice = dogePrice.price / eurPrice;
  const myWalletPrice = wallet * convertDogePrice;
  const message = initialPrice > convertDogePrice ? `Diogo está puto & triste com o valor do DOGECOIN 😭
    \n VALOR ATUAL DAS MINHAS MOEDAS: €${myWalletPrice} 🪙
    \n QUANTIDADE DE DOGECOINS: ${wallet} 💸
    \n COTAÇÃO DO DOGECOIN NO MERCADO : ${convertDogePrice} 💹` : `Diogo está feliz p caralhos com o valor do DOGECOIN 😍 
    \n VALOR ATUAL DAS MINHAS MOEDAS: $${myWalletPrice}
    \n QUANTIDADE DE DOGECOINS: ${wallet} 💸
    \n COTAÇÃO DO DOGECOIN NO MERCADO : ${convertDogePrice} 💹`
  tweetDogePrice(message);
});