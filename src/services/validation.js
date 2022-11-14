
const productValidation = {
	checkProductInCart: ({ state: { cartItems }, data: { id }}) =>
		Boolean(cartItems.filter((item) => item.id === id).length),

	checkProductAvailability: ({ availableQuantity, quantity = 1 }) =>
		quantity < availableQuantity,
};

export default productValidation;
