function ErrorMessage({ message, onRetry }) {
    return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center my-5">
            <span className="text-3xl block mb-2.5">⚠️</span>
            <p>{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="bg-blue-500 text-white px-5 py-2.5 rounded mt-2.5 hover:bg-blue-600">
                    Try Again
                </button>
            )}
        </div>
    );
}

export default ErrorMessage;