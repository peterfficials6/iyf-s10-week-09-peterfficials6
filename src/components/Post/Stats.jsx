function Stats({ totalPosts, totalLikes }) {
    return (
        <div className="flex gap-6 bg-slate-700 text-white p-6 rounded-xl mb-6 shadow-md">
            <span className="text-lg font-medium">📊 {totalPosts} posts</span>
            <span className="text-lg font-medium">❤️ {totalLikes} total likes</span>
        </div>
    );
}

export default Stats;