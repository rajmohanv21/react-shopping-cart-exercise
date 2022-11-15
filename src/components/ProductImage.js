import React from 'react';

const ProductImage = ({ image, name }) =>
	<div className="product-image">
		<img src={ image } alt={ name }/>
	</div>;

export default ProductImage;
