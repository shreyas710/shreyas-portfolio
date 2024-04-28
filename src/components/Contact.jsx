import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import {styles} from "../styles.js";
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '../hoc';

// template_qinvijn
// service_wrmgpia
// DamKALgVQat7dQVAeL4Ux

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});

    }
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_wrmgpia', 'template_qinvijn', {
            message_html: form.message,
            message_name: form.name,
            reply_to: form.email
        }, 'Fz0LWFTNEtewiSXWU').then(() => {
            setLoading(false);
            alert("Thank you for reaching out! I'll get back to you soon.");
            setForm({
                name: '',
                email: '',
                message: ''
            });
            formRef.current.reset();
        }).catch((err) => {
            console.error(err.text);
            setLoading(false);
            alert("An error occurred. Please try again later.");
        })
    }

    return (
        <div className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
            <div
                className={`flex-[0.75] bg-black-100 p-8 rounded-2xl`}>
                <p className={`${styles.sectionSubText}`}>Get in Touch</p>
                <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
                <form ref={formRef} onSubmit={handleSubmit} className={`mt-12 flex flex-col gap-8`}>
                    <label className={`flex flex-col`}><span
                        className={`text-white font-medium`}>Your Name</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                           className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}/>

                    <label className={`flex flex-col`}><span
                        className={`text-white font-medium`}>Your Email</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                           className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}/>

                    <label className={`flex flex-col`}><span
                        className={`text-white font-medium`}>Your Message</span></label>
                    <textarea rows="7" name="message" value={form.message} onChange={handleChange}
                              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}/>

                    <button
                        className={`bg-white py-3 px-8 outline-none w-fit text-tertiary font-bold shadow-md shadow-primary rounded-xl`}
                        type="submit">{loading ? "Sending . . ." : "Send"}</button>
                </form>
            </div>

            <div
                className={`xl:flex-1 xl:h-auto md:h-[550px] h-[350px]`}>
                <EarthCanvas/>
            </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");