import React from 'react';
import '../App.scss';

const ProductImage = ({ image, name }) =>
	<div className="productImage">
		<img src={ image } alt={ name }/>
	</div>;

const ProductInfo = ({ brand, name, unitPrice }) =>
	<div>
		<p>{ brand } </p>
		<p>{ name } </p>
		<p><strong>Rs.{ unitPrice } </strong></p>
	</div>;

const Product = (context) => {
	const { actions: { addProductToCart }, product } = context;

	return <div className="productTile">
		<div className="product">
			<ProductImage { ...product }/>
			<div className="productInfo">
				<ProductInfo { ...product }/>
				<button onClick={ () => addProductToCart(product) }>
					Add To Cart
				</button>
			</div>
		</div>
	</div>
	;
};

const ProductList = (context) => {
	const { config: { productList }} = context;

	return <div className="product-list">
		{productList.map((product, index) =>
			<Product key={ index } { ...{ ...context, product } }/>)}
	</div>;
};

export default ProductList;
