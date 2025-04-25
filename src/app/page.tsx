import Link from "next/link"


const Home = () => {
  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center px-6 ">
      <div className="max-w-screen bg-white rounded-2xl sm:p-10 p-7 shadow-[2px_2px_5px_gray,-1px_-1px_5px_gray]  ">
        <h1 className="sm:text-4xl text-3xl font-bold  text-slate-800 mb-5 tracking-tight">
          Welcome to the Dashboard App
        </h1>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Manage your tasks, track analytics, and stay organized with a clean and inituitive dashboard experience
        </p>
        <Link href="/dashboard" className=" bg-indigo-500 text-white px-5 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition duration-400 font-medium ">
        Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Home
