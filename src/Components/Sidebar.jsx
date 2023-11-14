import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={ styles.sidebar }>
            <img 
                className={ styles.cover }
                src="https://images.unsplash.com/photo-1699467367886-aab057167218?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={ styles.profile }>
                <img className={ styles.avatar } src="https://avatars.githubusercontent.com/u/62194043?v=4" />
                <strong>Uéliton Camargo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}