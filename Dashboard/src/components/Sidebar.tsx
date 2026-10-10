
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
  title: string;
  username: string;
};

const Sidebar = ({ title, username }: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(0);
  const location = useLocation();

  const menuItems = [
    { id: 1, name: "Home", path: "/dashboard" },
    { id: 2, name: "Users", path: "/users" },
    { id: 3, name: "Analytics", path: "/analytics" },
    { id: 4, name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col border-r border-gray-800 bg-gray-950 p-5 text-white">
      <div className="mb-8 border-b border-gray-800 pb-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
          {title.charAt(0)}
        </div>

        <h1 className="text-lg font-bold tracking-tight">{title}</h1>
        <p className="mt-1 text-xs text-gray-500">
          Workspace dashboard
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-xl bg-gray-900 p-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-400">
          {username.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">  
          <p className="truncate text-sm font-semibold">{username}</p>
          <p className="mt-1 text-xs text-gray-500">Dashboard user</p>
        </div> 
      </div>

     
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Menu
        </p>

        <button
          type="button"
          aria-expanded={sidebarOpen}
          aria-label={sidebarOpen ? "Collapse navigation" : "Expand navigation"}
          className="rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? "Hide" : "Show"}
        </button>
      </div>
      {sidebarOpen && (
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                to={item.path}
                key={item.id}
                className={`flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-400 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <span className="mr-3 text-xs">
                  {["⌂", "♙", "▥", "⚙"][item.id - 1]}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}

     
      <div className="mt-auto pt-8">
        <div className="mb-4 flex items-center justify-between border-t border-gray-800 pt-5">
          <p className="text-sm text-gray-400">Notifications</p>

          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-500/20 px-2 text-xs font-bold text-blue-400">
            {notifications}
          </span>
        </div>

        <button
          type="button"
          className="w-full rounded-lg border border-gray-800 px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-700 hover:bg-gray-900 hover:text-white"
          onClick={() => setNotifications((prev) => prev + 1)}
        >
          + Add notification
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
