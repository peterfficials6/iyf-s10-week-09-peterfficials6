import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button, Card, LoadingSpinner, ErrorMessage } from '../components/shared';

function PostDetail() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPost = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            );
            if (!response.ok) throw new Error('Post not found');
            const data = await response.json();
            setPost(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [postId]);

    if (loading) return <LoadingSpinner text="Loading post..." />;
    if (error) return <ErrorMessage message={error} onRetry={fetchPost} />;
    if (!post) return <ErrorMessage message="Post not found" />;

    return (
        <div className="max-w-2xl mx-auto">
            <Button 
                variant="ghost" 
                size="small" 
                onClick={() => navigate(-1)}
                className="mb-4"
            >
                ← Back
            </Button>

            <Card>
                <h1 className="text-3xl font-bold text-slate-800 mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-500 mb-6 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-3">
                        User {post.userId}
                    </span>
                    <span>•</span>
                    <span className="ml-3">Jan 2026</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
                    <Button variant="danger">❤️ Like</Button>
                    <Button variant="outline">💬 Comment</Button>
                    <Button variant="ghost">🔗 Share</Button>
                </div>
            </Card>
        </div>
    );
}

export default PostDetail;