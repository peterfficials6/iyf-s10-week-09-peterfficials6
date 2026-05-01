import PostCard from './PostCard';

function PostList({ posts = [], onLike, onDelete }) {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                <p className="text-lg">No posts found</p>
                <p className="text-sm mt-2">Create your first post to get started!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {posts.map(post => (
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

export default PostList;