import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './Info.jsx'
import About  from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'


function App() {
  return (
    <div className='main--container'>
      <div className='secondary--container'>
        <Info/>
        <div className='about--interest'>
          <About/>
          <Interests/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 