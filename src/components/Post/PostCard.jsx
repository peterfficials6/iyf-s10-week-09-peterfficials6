import { Link } from 'react-router-dom';
import { Button, Card } from '../shared';

function PostCard({ post, onLike, onDelete }) {
    return (
        <Card className="mb-4 hover:shadow-lg transition-shadow">
            <Link 
                to={`/posts/${post.id}`} 
                className="text-xl font-bold text-slate-800 hover:text-blue-600 block mb-2"
            >
                {post.title}
            </Link>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>By {post.author}</span>
                <span>{post.date}</span>
            </div>
            <div className="flex gap-2">
                <Button 
                    variant="danger" 
                    size="small" 
                    onClick={() => onLike(post.id)}
                >
                    ❤️ {post.likes}
                </Button>
                <Button 
                    variant="ghost" 
                    size="small" 
                    onClick={() => onDelete(post.id)}
                >
                    🗑️ Delete
                </Button>
            </div>
        </Card>
    );
}

export default PostCard;