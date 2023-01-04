import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback={
    <div className='loading-outer'>
      <div className='loading'>LOADING ....
      </div>
    </div>
  }>
    <App />
  </Suspense>
  // </React.StrictMode>
);

