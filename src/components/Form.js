import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { init, sendForm } from 'emailjs-com';
import { useHistory } from 'react-router';

init("user_XHHNmf63k96zsusaD0wt3")

export default function Form() {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // Setting a random ID number to the user
    const [contactNumber, setContactNumber] = useState("000000");
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }

    const onSubmit = (data) => {
        const form = document.querySelector('#contact-form');
        generateContactNumber();
        sendForm('default_service', 'template_contact', '#contact-form')
            .then(function (response) {
                form.reset();
                if (response.status === 200) {
                    history.push('/success')
                }
            }, function (error) {
                console.log('Failed to send message!', error);
            });
    }

    const message = watch('message') || "";
    const messageChars = 100 - message.length;

    return (
        <React.Fragment>
            <div className="Form__container">
                <h1>How can I help you?</h1>

                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>

                    <input type='hidden' name='id' value={contactNumber} />

                    <div className="Form__input">
                        <label>Name</label>
                        <input
                            type="text"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("name", { required: true, maxLength: 100 })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <div className="alert" role="alert">Name is required<br /></div>
                        )}
                    </div>

                    <div className="Form__input">
                        <label>Email</label>
                        <input
                            type="email"
                            aria-invalid={errors.email ? "true" : "false"}
                            {...register("email", { required: true })}
                        />
                        {errors.email && errors.email.type === "required" && (
                            <div className="alert" role="alert">Email is required<br /></div>
                        )}
                    </div>

                    <div className="Form__input">
                        <label>Message</label>
                        <textarea
                            rows="5"
                            aria-invalid={errors.message ? "true" : "false"}
                            {...register("message", { required: true, maxLength: 200 })}
                        ></textarea>
                        <p className='message-chars'><i>{messageChars}</i></p>
                        {errors.message && errors.message.type === "required" && (
                            <div className="alert alert-message" role="alert">Message is required<br /></div>
                        )}
                    </div>

                    <div className="Form__button_container">
                        <input type="submit" className="button" value="Submit" />
                    </div>

                </form>
            </div>
        </React.Fragment>
    )
}