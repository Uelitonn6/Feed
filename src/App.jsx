import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import styles from './App.module.css'

import './global.css'

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

