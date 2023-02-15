import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css'


const root = ReactDOM.createRoot(document.querySelector('.container-fluid'));
root.render(
  <>
    <header>header </header>
    <main>
      <div className="container h-100">
          <div className="row h-100">
            <aside className="right-aside col-2 h-100 r_tbdr">Right-aside</aside>
            <section className="col-8 h-100 r_tbdr">section</section>
            <aside className="left-aside col-2 h-100 r_tbdr">Left-aside</aside>
          </div>
      </div>
    </main>
    
    <footer>footer</footer>
  </>
);
