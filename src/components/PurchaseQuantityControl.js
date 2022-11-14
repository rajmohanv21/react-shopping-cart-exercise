import React from 'react';
import productValidation from '../services/validation';

const PurchaseQuantityControl = (context) => {
	const { actions: {
		addProductToCart,
		removeProductFromCart,
	},
	purchaseItem } = context;
	const isProductAvailable
	= productValidation.checkProductAvailability(purchaseItem);

	return <div>
		<button
			onClick={ () => removeProductFromCart(purchaseItem) }
		> - </button>
		&nbsp;{purchaseItem.quantity}&nbsp;
		<button
			onClick={ () => addProductToCart(purchaseItem) }
			disabled={ !isProductAvailable }
		>
			+ </button>
	</div>;
};

export default PurchaseQuantityControl;
