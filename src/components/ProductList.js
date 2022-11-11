import React from 'react';
import '../App.scss';
import Product from './Product';

const ProductList = (context) => {
	const { config: { productList }} = context;

	return <div className="product-list">
		{productList.map((product, index) =>
			<Product
				key={ index }
				{ ...{ ...context, product } }
			/>)}
	</div>;
};

export default ProductList;
