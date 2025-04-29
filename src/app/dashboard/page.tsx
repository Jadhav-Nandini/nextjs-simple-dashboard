
import Link from "next/link"

const Dashboard = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-100 to-indigo-100 p-10 ">

        {/* heading section */}
      <div className="text-center ">
        <h1 className=" text-3xl  sm:text-5xl  font-bold font-heading mb-4">Welcome to Your Dashboard</h1>
        
        <p className="font-heading font-light text-gray-600  max-w-2xl mx-auto leading-relaxed mb-5">Stay on top of your workflow, montior progress, and customize your experience - everything you need, all in one place.</p>

      </div>
      <div className="bg-[#f0f4f8] rounded-2xl max-w-5xl mx-auto shadow-[5px_5px_5px_gray,-5px_-5px_5px_gray]  p-15 grid  grid-cols-1 sm:grid-cols-3 gap-4 ">
        {/* cards section */}
        <Link href="/dashboard/tasks" >
        <div className="rounded-2xl p-5 shadow-[2px_2px_6px_gray,-2px_-2px_6px_gray] h-full hover:scale-95 transform transition-all ">
          <div className="flex">
          <h2 className="font-heading font-medium">Tasks</h2> <span>📋</span>
          </div>
        <p className="font-heading font-extralight">
          Organize, prioritize, and track your daily activities effortlessly.
        </p>
        </div>
        </Link>

        <Link href="/dashboard/analytics" >
        <div className="rounded-2xl p-5 shadow-[2px_2px_6px_gray,-2px_-2px_6px_gray] h-full hover:scale-95 transform transition-all ">
          <div className="flex">
          <h2 className="font-heading font-medium">Analytics</h2> <span>📊</span>
          </div>
        <p className="font-heading font-extralight">
        Dive deep into your performance data and unlock powerful insights.
        </p>
        </div>
        </Link>

        <Link href="/dashboard/settings/account" >
        <div className="rounded-2xl p-5 shadow-[2px_2px_6px_gray,-2px_-2px_6px_gray] h-full hover:scale-95 transform transition-all ">
          <div className="flex">
          <h2 className="font-heading font-medium">Settings</h2> <span>⚙️</span>
          </div>
        <p className="font-heading font-extralight">
        Personalize your dashboard preferences and account settings.
        </p>
        </div>
        </Link>

        

        

        
      </div>

      
    </div>
  )
}

export default Dashboard

