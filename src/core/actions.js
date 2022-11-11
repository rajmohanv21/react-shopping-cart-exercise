
const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addProductToCart = (context) => {
	const {
		state: { cartItems },
		data: { id },
		config: { cartAction: { addProduct }},
	} = context;

	const productExistInCart = cartItems.filter((item) =>
		item.id === id).length;
	const purchaseItemAction = { actionOnCart: addProduct };
	const cartItemsWithQtyAndPrice = (!productExistInCart
		&& addNewProduct(context))
		|| updateProductQuantity({ ...{ ...context, purchaseItemAction }});

	return {
		cartItems: cartItemsWithQtyAndPrice,
		totalPrice: calculateTotalPrice(cartItemsWithQtyAndPrice),
	};
};

const removeProductFromCart = (context) => {
	const { config: { cartAction: { removeProduct }}} = context;
	const purchaseItemAction = { actionOnCart: removeProduct };

	const cartItemsWithQtyAndPrice
		= updateProductQuantity({ ...{ ...context, purchaseItemAction }});

	const updatedCartItemList
		= cartItemsWithQtyAndPrice.filter((purchaseItem) =>
			purchaseItem.quantity >= 1);

	return {
		cartItems: updatedCartItemList,
		totalPrice: calculateTotalPrice(updatedCartItemList),
	};
};

const addNewProduct = (context) => {
	const { state: { cartItems },
		data,
		config: { increment, percentageValue }} = context;

	return [...cartItems,
		{
			...data,
			quantity: increment,
			isProductAvailable: checkProductAvailability(data),
			price: calculatePrice({ ...{ ...data, percentageValue }}),
		}];
};

const calculatePrice = ({ quantity = 1,
	unitPrice,
	discount,
	percentageValue }) =>
	quantity * (unitPrice - (unitPrice * (discount * percentageValue)));

const updateProductQuantity = (context) => {
	const { state: { cartItems }, data: { id }} = context;

	return cartItems.map((purchaseItem) =>
		(purchaseItem.id === id
			&& updatePurchasedItem({ ...{ ...context, purchaseItem }}))
		|| purchaseItem);
};

const updatePurchasedItem = (context) => {
	const {
		purchaseItemAction: { actionOnCart },
		purchaseItem,
		config: { cartAction: { addProduct },
			percentageValue },
	} = context;

	(actionOnCart === addProduct && purchaseItem.quantity++)
		|| purchaseItem.quantity--;
	purchaseItem.isProductAvailable = checkProductAvailability(purchaseItem);
	purchaseItem.price
	= calculatePrice({ ...{ ...purchaseItem, percentageValue }});
	return purchaseItem;
};

const checkProductAvailability = ({ availableQuantity, quantity = 1 }) =>
	quantity < availableQuantity;

const calculateTotalPrice = (cartItems) =>
	cartItems.reduce((a, c) => a + c.price, 0);

const actions = {
	increaseCount,
	addProductToCart,
	removeProductFromCart,
};

export default actions;
