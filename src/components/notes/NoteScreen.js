import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes'

export const NoteScreen = () => {

    const dispatch = useDispatch()
    const { active } = useSelector(state => state.notes)
    const [valuesForm, handleInputChange, reset] = useForm(active)
    const { title, body, url } = valuesForm;

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active);
            activeId.current = active.id
        }
    }, [active, reset])

    useEffect(() => {
        dispatch(activeNote(valuesForm.id, { ...valuesForm }))
    }, [valuesForm, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="whats happened today"
                    className="notes_textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>
                {
                    url &&
                    <div className="notes_image">
                        <img
                            src="https://as.com/betech/imagenes/2016/10/20/portada/1476917621_605512_1476917718_noticia_normal.jpg"
                            alt="imagen"
                        />
                    </div>
                }
            </div>
        </div>
    )
}
