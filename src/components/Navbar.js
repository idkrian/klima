/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <view className='inset-x-0 top-0 bg-black'>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src = {Logo} alt="Logo" className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" />
                <span className="font-semibold text-xl tracking-tight">Klima</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
            </div>
            </nav>        
        </view>
    );
}