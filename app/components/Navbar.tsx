
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-8'>
        <div className='text-4xl tracking-wide text-white font-marker'>Sadurski</div>
        <div className="flex items-center gap-8 font-semibold">
            <div className="text-xl">48 694 762 655</div>
            <div className="text-xl">pl | en</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
    </div>
  )
}

export default Navbar