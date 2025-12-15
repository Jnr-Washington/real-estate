'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
// import { useNavigate } from 'react-router-dom';

interface NavItem {
label: string;
href: string;
}

const navItems: NavItem[] = [
{ label: 'Home', href: '/' },
{ label: 'Gallery', href: '/' },
{ label: 'My Bookings', href: '/' },
{ label: 'Contact Us', href: '/' },
{ label: 'CheckOut', href: '/' },
];

export default function NavigationBar() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// const navigate = useNavigate(); //lets us navigate programmatically
// const handleLoginClick = () => {
//     navigate('/')
// };
// const handleSignupClick = () => {
//     navigate('/')
// };
const logoStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#10B981', // green-600
};
return (
<>
    <nav className="bg-[#18019e] shadow-xl sticky top-0 z-50 rounded-lg m-1 ">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        {/* ---- LEFT: Logo + Desktop links ---- */}
        <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600" style={logoStyle}>
            <a href="#">HOMES</a>
            </h1>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center ml-10 space-x-8">
            {navItems.map((item) => (
                <a
                key={item.label}
                href={item.href}
                className="text-gray-200 dark:text-gray-200 hover:text-blue-400 dark:hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                {item.label}
                </a>
            ))}
            </div>
        </div>

        {/* ---- RIGHT: Auth buttons (desktop) ---- */}
        <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="hollow-button">
            Login
            </Button>
            <Button variant='outline' className='filled-button'>Sign Up</Button>
        </div>

        {/* ---- Mobile menu button ---- */}
        <div className="md:hidden">
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hollow-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-expanded={isMobileMenuOpen}
            >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
                <Menu className="block h-6 w-6 " aria-hidden="true" />
            )}
            </button>
        </div>
        </div>
    </div>

    {/* ---- Mobile Navigation ---- */}
    {isMobileMenuOpen && (
        <div className="md:hidden ">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 bg-white dark:bg-gray-800">
            {navItems.map((item) => (
            <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
                {item.label}
            </a>
            ))}

            {/* Mobile auth buttons (still at the bottom of the menu) */}
            <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" className="hollow-button w-full">
                Login
            </Button>
            <Button className="w-full">Sign Up</Button>
            </div>
        </div>
        </div>
    )}
    </nav>
</>
);
}