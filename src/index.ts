import getDogePrice from './utils/dogePrice';
import tweetDogePrice from './utils/tweetDogePrice';
import schedule from 'node-schedule';

const wallet = 46.900;
const initialPrice = 0.37;

console.log('bot online <3')

const tweet = schedule.scheduleJob('* * 1 * * *', async () => {
  const dogePrice = await getDogePrice();
  const message = initialPrice > dogePrice.price ? `Diogo está puto & triste com o valor do DOGECOIN :( 
    \n VALOR ATUAL EM DOLARES: $${wallet * dogePrice.price} 
    \n QUANTIDADE DE DOGECOINS: ${wallet} 
    \n COTAÇÃO DO DOGECOIN NO MERCADO : ${dogePrice.price}` : `Diogo está feliz p caralhos com o valor do DOGECOIN :D 
    \n VALOR ATUAL: $${wallet * dogePrice.price}
    \n QUANTIDADE DE DOGECOINS: ${wallet} 
    \n COTAÇÃO DO DOGECOIN NO MERCADO : ${dogePrice.price}`
  tweetDogePrice(message);
  console.log('tweet feito com sucesso!');
});