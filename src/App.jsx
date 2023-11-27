import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import styles from './App.module.css'

import './global.css'

// author: { avatar_url = "", name = "", role = "" }
//publishedAt = Date()
//content = String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Uelitonn6.png',
      name: 'Uéliton Camargo',
      role: 'Web developer'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },        
    ],
    publishetAt: new Date('2023-11-22 10:44:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },        
    ],
    publishetAt: new Date('2023-11-27 11:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          { posts.map(post => {
              return (
                <Post 
                  author= { post.author }
                  content= { post.content }
                  publishetAt= { post.publishetAt }
                />
              )
          }) }
        </main>
      </div>

    </>
  )
}

