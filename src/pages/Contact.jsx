import React from 'react';
import "../pages/contact.css"

const Contact = () => {
    return (
        <div className='container mx-auto mb-6'>
            <div className='bgContact w-full h-96 relative'>
                <h1 className="text-6xl text-red-500 text-center top-5">Contact Us</h1>
            </div>
            <div className='mt-9 text-center'>
                <div className='lg:flex justify-between items-center gap-x-6'>
                    <div className='mb-7 lg:mb-0'>
                        <h1>Let's Start a Conversation</h1>
                        <h1>Ask How We Can Help You:</h1>
                        <h5>Another leader on our list of the best contact us page examples is Tune.</h5>
                        <p>The contact form targets new prospects, so they can easily send presale queries. Just below their form, they also feature a call to action targeting their existing customers.</p>
                        <p>Tune features a beautiful hero image at the top of their contact us page in their header. On the left side just below the hero image, they describe their company and also explain why new prospects should contact them using their form published on the right side.</p>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Name
                            <input type="text" className="grow" placeholder="Daisy" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            Email
                            <input type="email" className="grow" placeholder="daisy@site.com" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            <kbd className="kbd kbd-sm">⌘</kbd>
                            <input type="number" className="grow" placeholder="Contact" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            <input type="text" className="grow" placeholder="type your massage" />
                            <span className="badge badge-info">Optional</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-3">
                            <input type="url" className="grow" placeholder="your image" />
                            <span className="badge badge-info">Optional</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;