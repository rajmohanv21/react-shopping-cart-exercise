import React from 'react';
import '../App.scss';

const ProductImage = ({ image, name }) =>
	<div className="productImage">
		<img src={ image } alt={ name }/>
	</div>;

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

const AddToCartButton = ({
	actions: { addProductToCart },
	product,
}) =>
	<button
		onClick={ () => addProductToCart(product) }
		disabled={ !(product.availableQuantity > 0) }
	>
		{(product.availableQuantity > 0
			&& 'Add To Cart') || 'Sold out'}
	</button>;

const Product = (context) => {
	const {
		product,
		config: { percentageValue },
	} = context;

	return <div className="productTile">
		<div className="product">
			<ProductImage { ...product }/>
			<div className="productInfo">
				<ProductInfo { ...{ ...product, percentageValue } }/>
				<AddToCartButton { ...context }/>
			</div>
		</div>
	</div>
	;
};

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
