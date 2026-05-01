import useFetch from '../Hooks/useFetch';
import PostCard from './Post/PostCard';
import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';

function ApiPostList({ onLike, onDelete }) {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );

    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} />;
    if (!posts) return <ErrorMessage message="No posts found" />;

    const formattedPosts = posts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.body.substring(0, 100) + '...',
        author: `User ${post.userId}`,
        date: 'Jan 2026',
        likes: 0
    }));

    return (
        <div className="space-y-4">
            {formattedPosts.map(post => (
                <PostCard 
                    key={post.id}
                    post={post}
                    onLike={onLike}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ApiPostList;