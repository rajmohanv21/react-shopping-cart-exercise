import purchaseOperation from '../services/purchaseOperation';
import priceCalculation from '../services/priceCalculation';

const addProductToCart = (context) => {
	const cartItemsList = purchaseOperation.addProduct(context);
	const totalPrice = priceCalculation.calculateTotalPrice(cartItemsList);

	return {
		cartItems: cartItemsList,
		totalPrice: totalPrice,
	};
};

const removeProductFromCart = (context) => {
	const cartItemsList = purchaseOperation.removeProduct(context);
	const totalPrice = priceCalculation.calculateTotalPrice(cartItemsList);

	return {
		cartItems: cartItemsList,
		totalPrice: totalPrice,
	};
};

const actions = {
	addProductToCart,
	removeProductFromCart,
};

export default actions;
