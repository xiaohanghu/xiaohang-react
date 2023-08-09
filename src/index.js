import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode> 
//     {/*React.StrictMode needs to trigger some methods and lifecycle hooks twice... 
//     https://stackoverflow.com/questions/62324139/why-is-my-react-component-rendering-twice-on-initial-load
//     */}
//     <App /> 
//   </React.StrictMode>
// );

root.render(
  <App /> 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
