import React from 'react';
import CartList from './CartList';
import PurchasePrice from './PurchasePrice';

const PurchaseDetails = (context) =>
	<div className="cart-content">
		<div className="cart">
			<CartList { ...context }/>
		</div>
		<PurchasePrice { ...context }/>
	</div>;

export default PurchaseDetails;
