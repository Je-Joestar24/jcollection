export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 test-class">
            <div className="container mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome to JCollection
                    </h1>
                    <p className="text-xl text-gray-700 text-center mb-8">
                        This is the home page of your React application with Tailwind CSS integrated!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                            Get Started
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}