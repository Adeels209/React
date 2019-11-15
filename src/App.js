import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div className="App">
        <Layout>
          <BurgerBuilder/>
        </Layout>
    </div>
  );
}

export default App;
