import React from 'react';

const PurchasePrice = ({ state: { totalPrice }}) =>
	<div className="purchase-price">
		<div>Amount Payable</div>
		<div>Rs.{totalPrice}</div>
	</div>;

export default PurchasePrice;
