import { Header } from "./Components/Header";
import { Post } from "./Post";

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Uéliton Camargo" 
        content="Apenas um texto" 
      />

      <Post 
        author="Lucas Silva"
        content="Texto aleatório"
      />

    </>
  )
}

