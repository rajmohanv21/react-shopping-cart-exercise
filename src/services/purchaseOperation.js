import priceCalculation from './priceCalculation';
import productValidation from './validation';

const addProduct = (context) => {
	const { state: { cartItems }, data } = context;
	const isProductExistInCart = productValidation.checkProductInCart(context);

	return (!isProductExistInCart ? [...cartItems, { ...data }] : cartItems)
		.map((purchaseItem) =>
			(purchaseItem.id === data.id
				? addProductQuantity(purchaseItem)
				: purchaseItem));
};

const removeProduct = ({ state: { cartItems }, data: { id }}) => cartItems
	.map((purchaseItem) =>
		(purchaseItem.id === id
			? removeProductQuantity(purchaseItem)
			: purchaseItem))
	.filter((purchaseItem) => purchaseItem.quantity >= 1);

const addProductQuantity = (purchaseItem) => {
	purchaseItem.quantity = (purchaseItem.quantity || 0) + 1;
	purchaseItem.price = priceCalculation.calculatePrice({ ...purchaseItem });
	return purchaseItem;
};

const removeProductQuantity = (purchaseItem) => {
	purchaseItem.quantity--;
	purchaseItem.quantity > 0 && (purchaseItem.price
		= priceCalculation.calculatePrice({ ...purchaseItem }));
	return purchaseItem;
};

const purchaseOperation = {
	addProduct,
	removeProduct,
};

export default purchaseOperation;
