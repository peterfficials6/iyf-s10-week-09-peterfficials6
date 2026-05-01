// New complete version
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import Posts from './pages/Post';
import PostDetail from './pages/PostDetail';
import About from './pages/About';

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
                <main className="lg:col-span-3">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/posts/:postId" element={<PostDetail />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <aside className="hidden lg:block lg:col-span-1">
                    <Sidebar />
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default App;