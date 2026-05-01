import { useState } from 'react';
import { Button, Input, Card } from '../shared';

function CreatePost({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        const newPost = {
            id: Date.now(),
            title,
            excerpt: content.substring(0, 100) + '...',
            author: 'You',
            date: new Date().toLocaleDateString(),
            likes: 0
        };

        onAddPost(newPost);
        setTitle('');
        setContent('');
    };

    return (
        <Card title="Create New Post" className="mb-6">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title"
                    required
                />
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Content
                    </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post content..."
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <Button type="submit" variant="primary">
                    Publish Post
                </Button>
            </form>
        </Card>
    );
}

export default CreatePost;