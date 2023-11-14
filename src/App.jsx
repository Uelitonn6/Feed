import { Header } from "./Components/Header";
import { Post } from "./Post";

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./Components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          <Post 
            author="Uéliton Camargo" 
            content="Apenas um texto" 
          />

          <Post 
            author="Lucas Silva"
            content="Texto aleatório"
          />
          
        </main>
      </div>

    </>
  )
}

