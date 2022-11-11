import React from 'react';

const ProductInfo = ({ brand, name, unitPrice, discount, percentageValue }) =>
	<div>
		<p>{brand} </p>
		<p>{name} </p>
		<p>
			<strong>
				Rs.{unitPrice - (unitPrice * (discount * percentageValue))}
			</strong>
			<strike> Rs.{unitPrice}</strike>  {discount}% off
		</p>
	</div>;

export default ProductInfo;
