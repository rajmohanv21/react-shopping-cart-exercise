const percentageValue = 0.01;

const calculatePrice = (data) => data.quantity * calculateDiscountPrice(data);

const calculateDiscountPrice = ({ unitPrice, discount }) =>
	unitPrice - (unitPrice * (discount * percentageValue));

const calculateTotalPrice = ({ state: { cartItems }}) =>
	cartItems.reduce((a, c) => a + c.price, 0);

const priceCalculation = {
	calculatePrice,
	calculateDiscountPrice,
	calculateTotalPrice,
};

export default priceCalculation;
