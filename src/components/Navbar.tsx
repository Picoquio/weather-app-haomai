import { useNavigate } from "react-router-dom";
import HaomaiLogo from '../../public/haomai_logo.png';

/**
 * Navbar superior del sitio
 * @returns 
 */
export const Navbar = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 sticky top-0">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div
                        onClick={navigateHome}
                        className="flex items-center justify-center sm:items-stretch sm:justify-start cursor-pointer">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src={HaomaiLogo} alt="Your Company" />
                        </div>
                        <div className="hidden  sm:block">
                            <div className="flex space-x-4">
                                <p className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Haomai's Weather Finder</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
