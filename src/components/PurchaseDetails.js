import React from 'react';
import CartList from './CartList';
import PurchasePrice from './PurchasePrice';

const PurchaseDetails = (context) =>
	<div className="cart-content">
		<CartList { ...context }/>
		<PurchasePrice { ...context }/>
	</div>;

export default PurchaseDetails;
