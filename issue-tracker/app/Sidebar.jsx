// components/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Default Filters</h1>
      </div>
      <nav className="mt-10 menu bg-base-200 w-56 rounded-box">
        <ul>
          <li className="mb-2">
            <Link
              href="/issues"
              className="block p-3 hover:bg-gray-700 rounded-md"
            >
              All issues
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/" className="block p-3 hover:bg-gray-700 rounded-md">
              My open issues
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/" className="block p-3 hover:bg-gray-700 rounded-md">
              Reported by me
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/" className="block p-3 hover:bg-gray-700 rounded-md">
              Open issues
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
