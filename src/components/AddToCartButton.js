import React from 'react';
import productValidation from '../services/validation';

const AddToCartButton = ({
	actions: { addProductToCart },
	product,
}) => {
	const isProductAvailable
	= productValidation.checkProductAvailability(product);

	return (
		<button
			onClick={ () => addProductToCart(product) }
			disabled={ !isProductAvailable }
		>
			{ isProductAvailable ? 'Add To Cart' : 'Sold out'}
		</button>);
};

export default AddToCartButton;
