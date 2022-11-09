import React from 'react';
import '../App.scss';
const CartList = (context) => {
	const {
		state: { cartItems },
	} = context;

	return <ul>
		{cartItems.map((purchaseItem, index) =>
			<li key={ index }>
				<img src={ purchaseItem.image } alt={ purchaseItem.name }/>
				<div className="cart-product-info">
					<div> {purchaseItem.brand} </div>
					<div> {purchaseItem.name} </div>
					<PurchaseQuantityControl
						{ ...{ ...context, purchaseItem } }
					/>
				</div>
			</li>)}
	</ul>;
};

const PurchaseQuantityControl = (context) => {
	const { actions: { addProductToCart }, purchaseItem } = context;

	return <div>
		<button> - </button>
		&nbsp;{purchaseItem.quantity}&nbsp;
		<button
			onClick={ () => addProductToCart(purchaseItem) }
		>
			+ </button>
	</div>;
};

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
