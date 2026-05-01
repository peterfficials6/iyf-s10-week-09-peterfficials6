import { Card } from '../components/shared';

function About() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">About CommunityHub</h1>
            
            <Card>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                    CommunityHub is built to help developers share knowledge, discover new ideas, 
                    and grow together. We believe in open learning and collaborative growth.
                </p>
            </Card>

            <Card>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Features</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Share posts and tutorials</li>
                    <li>Like and comment on content</li>
                    <li>Search and filter posts</li>
                    <li>Responsive design for all devices</li>
                </ul>
            </Card>

            <Card>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    {['React', 'React Router', 'Tailwind CSS', 'Vite'].map(tech => (
                        <span 
                            key={tech}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default About;