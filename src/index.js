import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { createStore } from 'redux'
import manageUsers from './reducers/manageUsers'

// we wrap store in a function for testing purposes
// 


export function configureStore(){
	return createStore(manageUsers)

}



// ReactDOM.render( <App store={configureStore()} >, document.getElementById('root')
// );
