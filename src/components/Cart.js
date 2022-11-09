import React from 'react';
import '../App.scss';
const CartList = ({ state: { cartItems }}) => <ul>
	{cartItems.map((purchaseItem, index) =>
		<li key={ index }>
			<img src={ purchaseItem.image } alt={ purchaseItem.name }/>
			<div className="cart-product-info">
				<div> {purchaseItem.brand} </div>
				<div> {purchaseItem.name} </div>
				<div>
					<span> - </span>
					{purchaseItem.quantity}
					<span> + </span>
				</div>
			</div>
		</li>)}
</ul>;

const PurchasePrice = ({ state: { totalPrice }}) =>
	<div className="purchase-price">
		<div>Amount Payable</div>
		<div>Rs.{totalPrice}</div>
	</div>;

const PurchaseDetails = (context) =>
	<div className="cart-content">
		<div className="cart">
			<CartList { ...context }/>
		</div>
		<PurchasePrice { ...context }/>
	</div>;

const EmptyCart = () =>
	<div className="empty-cart-message">
		No products are available in cart
	</div>;

const Cart = (context) => {
	const { state: { cartItems }} = context;

	return <div className="cart-panel">
		{(cartItems.length > 0
			&& <PurchaseDetails { ...context }/>)
			|| <EmptyCart/>}

	</div>;
};

export default Cart;
