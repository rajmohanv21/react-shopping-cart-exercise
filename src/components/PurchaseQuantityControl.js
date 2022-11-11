import React from 'react';

const PurchaseQuantityControl = (context) => {
	const { actions: {
		addProductToCart,
		removeProductFromCart,
	},
	purchaseItem } = context;

	return <div>
		<button
			onClick={ () => removeProductFromCart(purchaseItem) }
		> - </button>
		&nbsp;{purchaseItem.quantity}&nbsp;
		<button
			onClick={ () => addProductToCart(purchaseItem) }
			disabled={ !purchaseItem.isProductAvailable }
		>
			+ </button>
	</div>;
};

export default PurchaseQuantityControl;
