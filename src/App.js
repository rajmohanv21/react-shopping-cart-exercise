import { React } from 'react';
import './App.scss';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = (context) =>
	<div className="App" role="application">
		<Header/>
		<div className="main-content">
			<ProductList { ...context }/>
			<Cart/>
		</div>
		<Footer/>
	</div>;

export default App;
