import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ReservationForm from './ReservationForm';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showReserve, setShowReserve] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Open Houses', path: '/dates' },
        { name: 'Properties', path: '/travel' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'Services', path: '/private-jets' }
    ];

    return (
        <>
            <header
                className={classNames(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out font-sans",
                    {
                        "bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg": scrolled,
                        "bg-transparent py-8": !scrolled
                    }
                )}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className={classNames(
                                "w-10 h-10 rounded-none border border-white/30 flex items-center justify-center transition-all duration-300",
                                { "bg-white text-black border-white": !scrolled, "bg-brand-gold text-white border-brand-gold": scrolled }
                            )}>
                                <span className="font-serif italic text-xl">E</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-white text-lg tracking-[0.2em] leading-none">ESTATE</span>
                                <span className="text-[10px] text-white/60 tracking-[0.4em] uppercase leading-none mt-1">Collective</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navItems.map(item => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="relative group py-2"
                            >
                                <span className={classNames(
                                    "text-xs uppercase tracking-[0.15em] transition-colors duration-300",
                                    { "text-white/70 group-hover:text-white": !scrolled, "text-white/80 group-hover:text-brand-gold": scrolled, "font-semibold text-white": location.pathname === item.path }
                                )}>
                                    {item.name}
                                </span>
                                <span className={classNames(
                                    "absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full",
                                    { "w-full": location.pathname === item.path }
                                )}></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-8">
                        <Link to="/contact" className="hidden md:block text-xs uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors">
                            Log In
                        </Link>
                        <button
                            onClick={() => setShowReserve(true)}
                            className={classNames(
                                "px-8 py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 border",
                                {
                                    "bg-white text-black border-white hover:bg-transparent hover:text-white": !scrolled,
                                    "bg-brand-gold text-white border-brand-gold hover:bg-transparent hover:text-brand-gold": scrolled
                                }
                            )}
                        >
                            Inquire
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {showReserve && <ReservationForm onClose={() => setShowReserve(false)} />}
            </AnimatePresence>
        </>
    );
}
