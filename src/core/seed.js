import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	cartItems: config.initialProductInCart,
	totalPrice: config.initialPurchasePrice,
};

export default seed;
