import React from 'react';
import '../App.scss';
import PurchaseDetails from './PurchaseDetails';
import EmptyCart from './EmptyCart';

const Cart = (context) => {
	const { state: { cartItems }} = context;

	return <div className="cart-panel">
		{(Boolean(cartItems.length)
			&& <PurchaseDetails { ...context }/>)
			|| <EmptyCart/>}

	</div>;
};

export default Cart;
