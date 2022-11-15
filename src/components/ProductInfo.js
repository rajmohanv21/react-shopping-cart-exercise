import React from 'react';
import priceCalculation from '../services/priceCalculation';

const ProductInfo = (product) => {
	const { brand, name, unitPrice, discount } = product;

	return <div className="productInfo">
		<p>{brand} </p>
		<p>{name} </p>
		<p>
			<strong>
				Rs.{priceCalculation.calculateDiscountPrice(product)}
			</strong>
			<strike> Rs.{unitPrice}</strike>  {discount}% off
		</p>
	</div>;
};

export default ProductInfo;
