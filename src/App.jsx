import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Home from './features/Home/Home';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
