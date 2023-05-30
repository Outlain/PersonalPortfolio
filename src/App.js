
import React, { Suspense, lazy } from 'react';

import './App.css';
import { NavBar } from './components/NavBar'
// import { Banner } from './components/Banner'
// import { Skills } from "./components/Skills"
// import { Projects } from './components/Projects'
// import { Contact } from './components/Contact';
import { Analytics } from '@vercel/analytics/react';

const Banner = lazy(() => import('./components/Banner'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));


// const Banner = React.lazy(() => import('./components/Banner'));


function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<div className='loading'></div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div className='loading'></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className='loading'></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className='loading'></div>}>
        <Contact />
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;