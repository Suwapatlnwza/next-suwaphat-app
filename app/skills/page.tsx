import Sidebar from "../component/sidebar";
import myprofile from "../component/myprofile";
import myskill from "../component/myskill";


interface Skills {
  id: number;
  name: string;
  level: string;
}

export default function Skills() {
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
            My  <span className="text-orange-400">Skills</span>,<br />
          </h1>
          <p className="mt-4 text-sm text-gray-400">
          </p>
      </div>
            <div>
            </div>
          </div>
    </main>
  )
}