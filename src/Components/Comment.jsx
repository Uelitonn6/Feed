import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment({ content }) {
    return (
        <div className={ styles.comment }>
            <Avatar hasBorder={ false } src="https://avatars.githubusercontent.com/u/62194043?v=4" />

            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Uéliton Camargo</strong>

                            <time title='17 de Novembro às 08:13h' dateTime='2023-11-17 08:13:40'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}