import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import '../App.scss';

const BodyContent = (context) =>
	<div className="body-content">
		<ProductList { ...context }/>
		<Cart { ...context }/>
	</div>;

export default BodyContent;
