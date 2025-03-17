import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa"/>
        </div>
          <h2>Suas tarefas</h2>
          <TaskList/>
        <div></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
