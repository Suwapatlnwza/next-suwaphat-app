import Sidebar from "../component/sidebar";
import myprofile from "../component/myprofile";
import myskill from "../component/myskill";


export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex w-[900px] rounded-2xl bg-gray-800 p-8 text-white shadow-lg">
        
        {/* Left Side (Profile) */}
        <div className="flex w-1/3 flex-col items-center border-r border-gray-5000 pr-6">
        <h2 className="mt-6 font-bold">Suwaphat</h2>
          <img
            src="/me.png"
            alt="profile"
            className="h-32 w-32 rounded-2xl object-cover"
          />
          <p className="text-sm text-gray-400">STU ID: 6552410017</p>
          <p className="text-sm text-grat-400">Fullstack Web Developer</p>

          {/* Socials */}
          <div className="mt-4 flex gap-3 text-xl">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>

          {/* Button */}
          <button className="mt-6 rounded-lg bg-orange-500 px-6 py-2 font-semibold hover:bg-orange-600">
            HIRE ME !
          </button>
        </div>

        {/* Right Side (About) */}
        <div className="flex w-2/3 flex-col pl-8">
          
          <h1 className="mt-2 text-2xl font-bold">
            Featured <span className="text-orange-400">Project</span><br />
          </h1>
          <h1 className="mt-2 text-1xl font-bold">
            Manage Task App - Fullstack Web Development <span className="text-orange-400"></span><br />
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            here's my latest project built with next.js and Laravel. using TailwindCSS on the front-end watch the videos to see the responsive page in action!
          </p>

         {/* รูปภาพ*/}
            <div className="mt-5 bg-neutral-150 rounded-lg overflow-hidden shadow-md">
              <img
                src="/image 1.png" 
                alt="Project Demo"
                width={400}
              height={250}
                className="w-120 h-auto rounded-lg"
              />
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            </div>

          {/* Stats */}
          <div className="mt-6 flex gap-12">
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}