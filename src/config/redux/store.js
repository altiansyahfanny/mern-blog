import reducer from './reducer/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

// const store = createStore(reducer);
const store = createStore(reducer, compose(applyMiddleware(thunk)))


export default store;