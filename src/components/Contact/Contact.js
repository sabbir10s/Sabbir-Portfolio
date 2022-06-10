import React from 'react';
import map from '../../img/map.png'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

const Contact = () => {

    const sendEmail = e => {
        e.preventDefault()
        const name = e.target.name.value;
        emailjs.sendForm('service_hejba76', 'template_xxcvyor', e.target, 'Eaihc3JItxJDAUTLh')
            .then((result) => {
                if (result.status === 200) {
                    e.target.reset()
                    toast.success(`Hey, ${name} your email successfully send`)
                }
            }, (error) => {
                if (error) {
                    toast.error(error.text)
                }
            });
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div>
                <h1 id="contact" className='text-5xl text-base-100 opacity-30 font-bold uppercase text-center mt-14'>Contact Me</h1>
                <div className='lg:mx-32'>
                    <div className='grid gap-5 lg:grid-cols-2 mt-12'>
                        <div style={{
                            background: `url(${map})`,
                            backgroundSize: 'cover'
                        }} className='p-5 rounded-lg'>
                            <div className='grid grid-cols-3 border-b border-dashed border-text-success py-5'>
                                <div className='col-span-1 grid grid-cols-2 gap-5'>
                                    <strong className='text-secondary'> Address</strong>
                                    <strong> :</strong>
                                </div>
                                <p className=' col-span-2 text-success'>Debidwar, Cumilla, Bangladesh</p>
                            </div>
                            <div className='grid grid-cols-3 border-b border-dashed border-text-success py-5'>
                                <div className='col-span-1 grid grid-cols-2 gap-5'>
                                    <strong className='text-secondary'> Phone</strong>
                                    <strong> :</strong>
                                </div>
                                <p className=' col-span-2 text-success'>+880 1864-607704</p>
                            </div>
                            <div className='grid grid-cols-3 border-b border-dashed border-text-success py-5'>
                                <div className='col-span-1 grid grid-cols-2 gap-5'>
                                    <strong className='text-secondary'> Email</strong>
                                    <strong> :</strong>
                                </div>
                                <p className=' col-span-2 text-success'>sabbirahmed1023@gmail.com</p>
                            </div>

                            <div className='grid grid-cols-3 border-b border-dashed border-text-success py-5'>
                                <div className='col-span-1 grid grid-cols-2 gap-5'>
                                    <strong className='text-secondary'>Social</strong>
                                    <strong> :</strong>
                                </div>
                                <div className='col-span-2 flex gap-5 text-base text-lg'>
                                    <a className='bg-base-100 rounded-full p-2' href="https://www.linkedin.com/in/sabbir10s/" target="_blank"><GrLinkedinOption /></a>
                                    <a className='bg-base-100 rounded-full p-2' href="https://www.facebook.com/sabbir10s/" target="_blank"><FaFacebookF /></a>


                                </div>
                            </div>


                        </div>
                        <div className='p-5 rounded-lg'>
                            <form onSubmit={sendEmail}>
                                <div className='flex gap-2'>
                                    <div class="mb-6 w-full">
                                        <input type="text" name='name' className="bg-info border-0 text-success text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5" placeholder='Name' required />
                                    </div>
                                    <div class="mb-6 w-full">
                                        <input type="user_email" name='email' className="bg-info border-0 text-success text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5" placeholder='Email' required />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <input type="text" name='subject' className="bg-info border-0 text-success text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5" placeholder='Subject' required />
                                </div>
                                <div>
                                    <textarea rows="4" name='message' className="block p-2.5 w-full text-sm text-success bg-info rounded-lg border-0 focus:ring-secondary focus:border-secondary" placeholder="Message..."></textarea>
                                </div>

                                <div className='flex justify-end'>
                                    <button className='bg-secondary text-base-100 py-2 px-5 rounded-full mt-6'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;