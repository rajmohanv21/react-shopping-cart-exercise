import priceCalculation from './priceCalculation';
import productValidation from './validation';

const addProduct = (context) => {
	const isProductExistInCart = productValidation.checkProductInCart(context);

	const { state: { cartItems }, data } = context;

	const cartItemsList
		= !isProductExistInCart ? [...cartItems, { ...data }] : cartItems;

	cartItemsList.map((purchaseItem) => {
		purchaseItem.id === data.id
			&& (purchaseItem.quantity = (purchaseItem.quantity || 0) + 1);
		purchaseItem.id === data.id
			&& (purchaseItem.price
				= priceCalculation.calculatePrice({ ...purchaseItem }));
		return purchaseItem;
	});

	return cartItemsList;
};

const removeProduct = ({ state: { cartItems }, data: { id }}) => {
	const cartItemsList = cartItems
		.map((purchaseItem) => {
			purchaseItem.id === id && purchaseItem.quantity--;
			(purchaseItem.id === id && purchaseItem.quantity > 0)
				&& (purchaseItem.price
					= priceCalculation.calculatePrice({ ...purchaseItem }));
			return purchaseItem;
		})
		.filter((purchaseItem) => purchaseItem.quantity >= 1);

	return cartItemsList;
};

const purchaseOperation = {
	addProduct,
	removeProduct,
};

export default purchaseOperation;
