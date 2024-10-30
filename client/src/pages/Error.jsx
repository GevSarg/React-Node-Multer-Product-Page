import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-300 to-red-200 p-8">
      <h1 className="text-5xl font-bold text-red-700 mb-4">Oops!</h1>
      <p className="text-xl text-gray-700 mb-8">Something went wrong.</p>
      <Link
        to="/"
        className="mt-6 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
