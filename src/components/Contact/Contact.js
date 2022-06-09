import React from 'react';
import map from '../../img/map.png'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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
            <h1 id="contact" className='text-4xl text-primary uppercase text-center my-12'>Contact Me</h1>
            <div className='mx-32 mb-12'>
                <div className='grid gap-5 grid-cols-2 '>
                    <div style={{
                        background: `url(${map})`,
                        backgroundSize: 'cover'
                    }} className='p-5 rounded-lg'>
                        <div className='grid grid-cols-3 border-b border-dashed border-base-200 py-5'>
                            <div className='col-span-1 grid grid-cols-2 gap-5'>
                                <strong className='text-secondary'> Address</strong>
                                <strong> :</strong>
                            </div>
                            <p className=' col-span-2'>Debidwar, Cumilla, Bangladesh</p>
                        </div>
                        <div className='grid grid-cols-3 border-b border-dashed border-base-200 py-5'>
                            <div className='col-span-1 grid grid-cols-2 gap-5'>
                                <strong className='text-secondary'> Phone</strong>
                                <strong> :</strong>
                            </div>
                            <p className=' col-span-2'>+880 1864-607704</p>
                        </div>
                        <div className='grid grid-cols-3 border-b border-dashed border-base-200 py-5'>
                            <div className='col-span-1 grid grid-cols-2 gap-5'>
                                <strong className='text-secondary'> Email</strong>
                                <strong> :</strong>
                            </div>
                            <p className=' col-span-2'>sabbirahmed1023@gmail.com</p>
                        </div>

                    </div>
                    <div className='bg-base p-5 rounded-lg'>
                        <form onSubmit={sendEmail}>
                            <div className='flex gap-2'>
                                <div class="mb-6 w-full">
                                    <input type="text" name='name' className="bg-base border border-primary text-gray text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5" placeholder='Name' required />
                                </div>
                                <div class="mb-6 w-full">
                                    <input type="user_email" name='email' className="bg-base border border-primary text-gray text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5" placeholder='Email' required />
                                </div>
                            </div>
                            <div class="mb-6">
                                <input type="text" name='subject' className="bg-base border border-primary text-gray text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5" placeholder='Subject' required />
                            </div>
                            <div>
                                <textarea rows="4" name='message' className="block p-2.5 w-full text-sm text-gray bg-base rounded-lg border border-primary focus:ring-secondary focus:border-secondary" placeholder="Message..."></textarea>
                            </div>

                            <div className='flex justify-end'>
                                <button className='bg-secondary text-base py-2 px-5 rounded-full mt-6'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;