import React from 'react';
import ProductImage from './ProductImage';
import PurchaseQuantityControl from './PurchaseQuantityControl';

const CartList = (context) => {
	const {
		state: { cartItems },

	} = context;

	return <ul>
		{cartItems.map((purchaseItem, index) =>
			<li key={ index }>
				<ProductImage { ...purchaseItem }/>
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

export default CartList;
