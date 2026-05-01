import { Link } from 'react-router-dom';
import { Button, Card } from '../components/shared';
import PostList from '../components/Post/PostList';

function Home() {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                <h1 className="text-3xl font-bold mb-4">Welcome to CommunityHub</h1>
                <p className="text-lg mb-6 opacity-90">
                    Share your knowledge, discover amazing content, connect with developers worldwide.
                </p>
                <Link to="/posts">
                    <Button variant="secondary" size="large">
                        Explore Posts →
                    </Button>
                </Link>
            </Card>

            {/* Recent Posts */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-slate-800">Recent Posts</h2>
                    <Link to="/posts" className="text-blue-600 hover:underline">
                        View All →
                    </Link>
                </div>
                <PostList limit={3} />
            </div>
        </div>
    );
}

export default Home;