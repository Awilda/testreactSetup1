import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CompOne from './components/component1';
import CompTwo from './components/component2';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hi, hope it saves!</h1>
				<CompOne />
				<CompTwo />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));