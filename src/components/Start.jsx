import React from 'react'

import { CONTACT_EMAIL } from '../config/contact'

const Start = () => {
    return (
        <React.Fragment>
            <div id="contact" className="Start__container">
                <div className="Start__box">
                    <h1>Let’s Work Together</h1>
                    <h2>
                        Interested in complex engineering work across backend, cloud, and full-stack delivery.
                        Whether it&apos;s a project or a conversation—I&apos;d welcome a note.
                    </h2>
                    <div className="Start__actions">
                        <a className="button" href={`mailto:${CONTACT_EMAIL}`}>Get in Touch</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Start
