import React from 'react'

const Hero = () => {
  return (
    <div>
        <section>
            <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                    <h1 className="mb-4 text-6xl">I MAKE
                        <br />
                        <p className='ml-12 font-bold text-yellow-400 text-8xl'>WEBSITES</p>
                    </h1>
                </div>
                <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero