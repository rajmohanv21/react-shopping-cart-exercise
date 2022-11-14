import React from 'react';
import AddToCartButton from './AddToCartButton';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const Product = (context) => {
	const {
		product,
	} = context;

	return <div className="productTile">
		<div className="product">
			<ProductImage { ...product }/>
			<div className="productInfo">
				<ProductInfo { ...product }/>
				<AddToCartButton { ...context }/>
			</div>
		</div>
	</div>
	;
};

export default Product;
