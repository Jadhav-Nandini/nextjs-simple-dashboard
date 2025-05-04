
"use client";

import Link from "next/link";
import { FaTasks, FaChartBar, FaCog, FaUsers } from "react-icons/fa";

const dashboardItems = [
  {
    title: "Tasks",
    description: "Organize, prioritize, and track your daily activities effortlessly.",
    icon: <FaTasks className="text-2xl text-blue-600" />,
    href: "/dashboard/tasks",
  },
  {
    title: "Analytics",
    description: "Dive deep into your performance data and unlock insights.",
    icon: <FaChartBar className="text-2xl text-green-600" />,
    href: "/dashboard/analytics",
  },
  {
    title: "Settings",
    description: "Personalize your dashboard preferences and account settings.",
    icon: <FaCog className="text-2xl text-purple-600" />,
    href: "/dashboard/settings/account",
  },
  {
    title: "Users",
    description: "View and manage your application's users.",
    icon: <FaUsers className="text-2xl text-yellow-600" />,
    href: "/dashboard/users",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-100 p-10 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Stay on top of your workflow, monitor progress, and customize your experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {dashboardItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="bg-[#f0f4f8] p-6 rounded-2xl shadow-[2px_2px_1px_gray] transition-transform hover:scale-105  cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                {item.icon}
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
