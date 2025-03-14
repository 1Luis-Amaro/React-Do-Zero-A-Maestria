import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.css'

function App() {
  return (
    <div className="App">
       <Header/>
       <main className={styles.main}></main>
       <h1>Conteudo...</h1>
       <Footer/>
    </div>
  );
}

export default App;
