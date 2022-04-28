import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import './index.css';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
