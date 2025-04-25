import Link from "next/link"


const Home = () => {
  return (
    <div className="h-screen w-screen bg-blue-600/15 flex items-center justify-center px-6 ">
      <div className="max-w-screen bg-white m-3 sm:m-0 rounded-2xl p-10
      shadow-[2px_2px_3px_pink,-2px_-3px_3px_] 
      
      ">
        <h1 className="sm:text-4xl text-2xl font-bold ">
          Welcome to the Dashboard App
        </h1>
        <p>
          Manage your tasks, track analytics, and stay organized with a clean and inituitive dashboard experience
        </p>
        <Link href="/dashboard" className=" bg-blue-300 p-2 ">
        Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Home






