"use client"

import LocaleSwitcher from "./locale-switcher"

const Navbar = () => {
  return (
    <nav className='fixed z-10 flex items-center justify-between w-full h-10 p-8 bg-white border-b border-gray-200'>
        <div className='text-2xl tracking-wide font-cairo'>{'<Sadurski/>'}</div>
        <div className="flex items-center gap-8">
            <div className="relative flex justify-center duration-300 rounded-full cursor-pointer w-52 group">
              <svg className="duration-300 opacity-100 group-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.2109 8.84009C18.0578 8.09677 17.6931 7.41362 17.1609 6.87256C16.6288 6.33149 15.9516 5.95549 15.2109 5.79004" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 7.51001C21.6283 6.19924 20.928 5.00529 19.9655 4.04102C19.003 3.07674 17.8101 2.37408 16.5 2" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className="absolute top-0 duration-300 -translate-x-1/2 opacity-0 left-1/2 group-hover:opacity-100" onClick={() =>  navigator.clipboard.writeText('694762655')}>694 762 655</div>
            </div>
            <LocaleSwitcher />
            <svg xmlns="http://www.w3.org/2000/svg" className="block w-10 h-10 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
    </nav>
  )
}

export default Navbar