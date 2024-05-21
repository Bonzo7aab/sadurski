import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-100 bg-gray-800">
            <div className='container flex py-24 mx-auto md:px-16'>
                <div className="flex flex-col justify-center w-full mb-12 tracking-wide">
                    <h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Me</h1>
                    <p>Looking for new job all the time!</p>
                    <p className="underline underline-offset-4">michalsadurski89@email.com</p>
                    <div className="mt-8">
                        <span className="inline-flex gap-4">
                            <a className="text-gray-400 cursor-pointer hover:text-cp2-600">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w -5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 cursor-pointer hover:text-cp2-600">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap mx-auto tracking-wide">
                    <div className="w-1/2 p-2">
                        <div className="relative">
                            <label htmlFor="name" className="text-sm leading-7">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-1 leading-8 bg-gray-800 border border-gray-700 outline-none bg-opacity-40 focus:border-cp2-700" />
                        </div>
                    </div>
                    <div className="w-1/2 p-2">
                        <div className="relative">
                            <label htmlFor="email" className="text-sm leading-7">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-1 leading-8 bg-gray-800 border border-gray-700 outline-none bg-opacity-40 focus:border-cp2-700" />
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <div className="relative">
                            <label htmlFor="message" className="text-sm leading-7">Message</label>
                            <textarea id="message" name="message" className="w-full h-32 px-3 py-1 leading-6 bg-gray-800 border border-gray-700 outline-none resize-none bg-opacity-40 focus:border-cp2-700"></textarea>
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <button className="flex justify-center w-full px-8 py-2 text-lg duration-200 border-2 rounded border-cp2-600 focus:outline-none text-cp2-600 hover:text-cp2-400 hover:border-cp2-400">Get in touch</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer