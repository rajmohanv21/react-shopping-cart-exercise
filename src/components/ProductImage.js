import React from 'react';

const ProductImage = ({ image, name }) =>
	<div className="productImage">
		<img src={ image } alt={ name }/>
	</div>;

export default ProductImage;
