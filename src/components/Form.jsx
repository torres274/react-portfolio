import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

// Store your EmailJS public key in .env as VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = 'default_service'
const EMAILJS_TEMPLATE_ID = 'template_contact'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'user_XHHNmf63k96zsusaD0wt3'

export default function Form() {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const message = watch('message') ?? ''
    const messageChars = 200 - message.length

    const onSubmit = async () => {
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY }
            )
            navigate('/success')
        } catch (error) {
            console.error('EmailJS error:', error)
            setSubmitError('Something went wrong. Please try again or email me directly.')
            setIsSubmitting(false)
        }
    }

    return (
        <div className="Form__container">
            <h1>How can I help you?</h1>

            <form id="contact-form" ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="Form__input">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        {...register('name', { required: true, maxLength: 100 })}
                    />
                    {errors.name?.type === 'required' && (
                        <div className="alert" role="alert">Name is required</div>
                    )}
                </div>

                <div className="Form__input">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email', {
                            required: true,
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' }
                        })}
                    />
                    {errors.email?.type === 'required' && (
                        <div className="alert" role="alert">Email is required</div>
                    )}
                    {errors.email?.type === 'pattern' && (
                        <div className="alert" role="alert">{errors.email.message}</div>
                    )}
                </div>

                <div className="Form__input">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        {...register('message', { required: true, maxLength: 200 })}
                    />
                    <p className="message-chars" aria-live="polite">
                        <i>{messageChars} characters remaining</i>
                    </p>
                    {errors.message?.type === 'required' && (
                        <div className="alert alert-message" role="alert">Message is required</div>
                    )}
                    {errors.message?.type === 'maxLength' && (
                        <div className="alert alert-message" role="alert">Message cannot exceed 200 characters</div>
                    )}
                </div>

                {submitError && (
                    <div className="alert Form__submit-error" role="alert">{submitError}</div>
                )}

                <div className="Form__button_container">
                    <button type="submit" className="button" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                </div>

            </form>
        </div>
    )
}
