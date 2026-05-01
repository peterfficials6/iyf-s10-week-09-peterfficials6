import { Link } from 'react-router-dom';

function Sidebar() {
    const popularPosts = [
        { id: 1, title: 'React Best Practices', views: 1200 },
        { id: 2, title: 'JavaScript ES2026', views: 980 },
        { id: 3, title: 'CSS Grid Mastery', views: 850 }
    ];

    return (
        <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg mb-3 text-slate-800">About</h3>
                <p className="text-gray-600 text-sm">
                    CommunityHub is a place to share knowledge and connect with developers.
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg mb-3 text-slate-800">Popular Posts</h3>
                <ul className="space-y-2">
                    {popularPosts.map(post => (
                        <li key={post.id}>
                            <Link 
                                to={`/posts/${post.id}`}
                                className="text-sm text-blue-600 hover:underline block"
                            >
                                {post.title}
                                <span className="text-gray-400 ml-2">({post.views} views)</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg mb-3 text-slate-800">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'CSS', 'Node.js', 'Design'].map(tag => (
                        <span 
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;