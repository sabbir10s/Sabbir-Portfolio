import React from 'react';

const About = () => {
    return (
        <>
            <div className='bg-base grid grid-cols-2 gap-10 mx-32 mt-28 p-7'>
                <div>
                    <div className='grid grid-cols-3 border-b border-dashed border-base-200 py-5'>
                        <div className='col-span-1 grid grid-cols-2 gap-5'>
                            <strong className='text-secondary'> Age</strong>
                            <strong> :</strong>
                        </div>
                        <p className=' col-span-2'>25 Years</p>
                    </div>
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

                <div>
                    <h2>Hello! I’m Steve Morgan</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. <br /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                </div>
            </div>
        </>
    );
};

export default About;