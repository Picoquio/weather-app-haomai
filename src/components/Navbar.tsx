import { useNavigate } from "react-router-dom";
import HaomaiLogo from '../../public/haomai_logo.png';

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
                                <p className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Haomai's Weather Forecast</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div>
        </nav>
    )
}
