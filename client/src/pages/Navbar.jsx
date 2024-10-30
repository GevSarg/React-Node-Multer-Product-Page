import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            to="/"
            className="tracking-widest text-xl  font-bold text-white hover:text-purple-200 transition duration-300 mr-4"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
