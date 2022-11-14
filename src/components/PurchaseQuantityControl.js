import React from 'react';
import productValidation from '../services/validation';

const AddCartButtonControl = ({ actions: {
	addProductToCart,
	getTotal,
},
purchaseItem }) =>
	<button
		onClick={ () => {
			addProductToCart(purchaseItem);
			getTotal();
		} }
		disabled={ !productValidation.checkProductAvailability(purchaseItem) }
	>
		+ </button>;

const RemoveCartButtonControl = ({ actions: {
	removeProductFromCart,
	getTotal,
},
purchaseItem }) =>
	<button
		onClick={ () => {
			removeProductFromCart(purchaseItem);
			getTotal();
		} }
	> - </button>;

const PurchaseQuantityControl = (context) => {
	const { purchaseItem } = context;

	return <div>
		<RemoveCartButtonControl { ...context }/>
		&nbsp;{purchaseItem.quantity}&nbsp;
		<AddCartButtonControl { ...context }/>
	</div>;
};

export default PurchaseQuantityControl;
