import { React } from 'react';
import './App.scss';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';
import Header from './components/Header';

const App = (context) =>
	<div className="App" role="application">
		<Header/>
		<BodyContent { ...context }/>
		<Footer/>
	</div>;

export default App;
