import React from 'react';
import AddToCartButton from './AddToCartButton';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const Product = (context) => {
	const {
		product,
	} = context;

	return <div className="product">
		<ProductImage { ...product }/>
		<ProductInfo { ...product }/>
		<AddToCartButton { ...context }/>
	</div>
	;
};

export default Product;
