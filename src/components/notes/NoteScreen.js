import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="whats happened today"
                    className="notes_textarea"
                >

                </textarea>
                <div className="notes_image">
                    <img 
                        src="https://as.com/betech/imagenes/2016/10/20/portada/1476917621_605512_1476917718_noticia_normal.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
