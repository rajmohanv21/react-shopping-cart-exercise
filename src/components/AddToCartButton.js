import React from 'react';
const AddToCartButton = ({
	actions: { addProductToCart },
	product,
}) =>
	<button
		onClick={ () => addProductToCart(product) }
		disabled={ !(product.availableQuantity > 0) }
	>
		{(product.availableQuantity > 0
			&& 'Add To Cart') || 'Sold out'}
	</button>;

export default AddToCartButton;
