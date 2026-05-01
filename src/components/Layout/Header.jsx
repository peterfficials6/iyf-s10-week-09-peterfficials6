import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-blue-300">
                    🏘️ CommunityHub
                </Link>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/posts"
                        className={({ isActive }) => 
                            isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300'
                        }
                    >
                        Posts
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => 
                            isActive ? 'text-blue-300 font-semibold' : 'hover:text-blue-300'
                        }
                    >
                        About
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2">
                    <Link to="/" className="block hover:text-blue-300">Home</Link>
                    <Link to="/posts" className="block hover:text-blue-300">Posts</Link>
                    <Link to="/about" className="block hover:text-blue-300">About</Link>
                </nav>
            )}
        </header>
    );
}

export default Header;