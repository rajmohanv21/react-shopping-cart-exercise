const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addProductToCart = (context) => {
	const { state: { cartItems }, data: { id }} = context;

	const productExistInCart = cartItems.filter((item) =>
		item.id === id).length;

	const cartItemList = (!productExistInCart
		&& addNewProduct(context))
		|| updateProductQuantity(context);

	return {
		cartItems: cartItemList,
		totalPrice: calculateTotalPrice(cartItemList),
	};
};

const addNewProduct = (context) => {
	const { state: { cartItems },
		data,
		config: { increment }} = context;

	return [...cartItems,
		{
			...data,
			quantity: increment,
			price: increment * data.unitPrice,
		}];
};

const updateProductQuantity = (context) => {
	const { state: { cartItems }, data: { id }} = context;

	return cartItems.map((purchaseItem) =>
		(purchaseItem.id === id && updatePurchasedItem(purchaseItem))
		|| purchaseItem);
};

const updatePurchasedItem = (purchaseItem) => {
	purchaseItem.quantity += 1;
	purchaseItem.price = purchaseItem.quantity * purchaseItem.unitPrice;
	return purchaseItem;
};

const calculateTotalPrice = (cartItems) =>
	cartItems.reduce((a, c) => a + c.price, 0);

const actions = {
	increaseCount,
	addProductToCart,
};

export default actions;
