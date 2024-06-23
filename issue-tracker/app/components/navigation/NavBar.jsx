import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Issue Tracker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 z-10">
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <Link href={"/"}>
          <button className="btn btn-primary">Sign In</button>
        </Link>
        <Link href={"/issues/new"}>
          <button className="btn btn-secondary">Create Issue</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
