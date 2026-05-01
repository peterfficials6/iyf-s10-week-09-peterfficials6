function Footer() {
    return (
        <footer className="bg-slate-800 text-white text-center py-6 mt-auto">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-blue-300">Twitter</a>
                    <a href="#" className="hover:text-blue-300">GitHub</a>
                    <a href="#" className="hover:text-blue-300">Discord</a>
                </div>
                <p className="text-sm text-gray-400">
                    &copy; 2026 CommunityHub. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
}

export default Footer;