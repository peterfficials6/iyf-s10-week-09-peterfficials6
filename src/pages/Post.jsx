import { useState } from 'react';
import PostList from '../components/Post/PostList';
import CreatePost from '../components/Post/CreatePost';
import { Button } from '../components/shared';

function Posts() {
    const [showCreate, setShowCreate] = useState(false);
    const [posts, setPosts] = useState([
        { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics...', author: 'John Doe', date: 'Jan 15, 2026', likes: 5 },
        { id: 2, title: 'JavaScript Best Practices', excerpt: 'Write cleaner code...', author: 'Jane Smith', date: 'Jan 14, 2026', likes: 3 },
        { id: 3, title: 'CSS Grid vs Flexbox', excerpt: 'When to use each...', author: 'Bob Johnson', date: 'Jan 13, 2026', likes: 8 }
    ]);

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
        setShowCreate(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-slate-800">All Posts</h1>
                <Button 
                    variant="primary" 
                    onClick={() => setShowCreate(!showCreate)}
                >
                    {showCreate ? 'Cancel' : '+ New Post'}
                </Button>
            </div>

            {showCreate && (
                <CreatePost 
                    onAddPost={handleAddPost}
                    onClose={() => setShowCreate(false)} 
                />
            )}

            <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
        </div>
    );
}

export default Posts;