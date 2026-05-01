function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-10 h-10',
        large: 'w-16 h-16'
    };

    return (
        <div className="text-center p-10">
            <div className={`spinner ${sizeClasses[size]}`}></div>
            <p>{text}</p>
        </div>
    );
}

export default LoadingSpinner;