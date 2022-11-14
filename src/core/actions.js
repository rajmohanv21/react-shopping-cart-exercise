import purchaseOperation from '../services/purchaseOperation';
import priceCalculation from '../services/priceCalculation';

const addProductToCart = (context) => ({
	cartItems: purchaseOperation.addProduct(context),
});

const removeProductFromCart = (context) => ({
	cartItems: purchaseOperation.removeProduct(context),
});

const getTotal = (context) => ({
	totalPrice: priceCalculation.calculateTotalPrice(context),
});

const actions = {
	addProductToCart,
	removeProductFromCart,
	getTotal,
};

export default actions;
