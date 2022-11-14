const calculatePrice = (data) => {
	const { quantity } = data;

	return quantity * calculateDiscountPrice(data);
};

const calculateDiscountPrice = ({ unitPrice, discount }) => {
	const percentageValue = 0.01;

	return unitPrice - (unitPrice * (discount * percentageValue));
};

const calculateTotalPrice = ({ state: { cartItems }}) =>
	cartItems.reduce((a, c) => a + c.price, 0);

const priceCalculation = {
	calculatePrice,
	calculateDiscountPrice,
	calculateTotalPrice,
};

export default priceCalculation;
