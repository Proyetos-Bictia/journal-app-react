import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes'

export const NoteScreen = () => {

    const dispatch = useDispatch()
    const { active } = useSelector(state => state.notes)
    const [valuesForm, handleInputChange, reset] = useForm(active)
    const { title, body , id} = valuesForm;

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active);
            activeId.current = active.id
        }
    }, [active, reset])

    useEffect(() => {
        dispatch(activeNote(valuesForm.id, { ...valuesForm }))
    }, [valuesForm, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id))
    }

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
                    active.url &&
                    <div className="notes_image">
                        <img
                            src={active.url}
                            alt="imagen"
                        />
                    </div>
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
