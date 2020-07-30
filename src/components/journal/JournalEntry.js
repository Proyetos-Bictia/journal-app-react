import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.iecisa.com/export/sites/web_iecisa/documents/blogs/20171213-iecisa-imagen-de-marca.jpg)'
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    sdjfaslkfjaf sjfsa lkfjsaf saf jsaf saf sfkjsalf kjafjfjsafafkjdsaf dsaf dsafj dsaf 
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
