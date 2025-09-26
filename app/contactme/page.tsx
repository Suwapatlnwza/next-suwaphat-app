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
          <p className="text-lg">
            Contact <span className="text-orange-400">Me</span>
          </p>
          <h1 className="mt-2 text-2xl font-semibold">
            let's get in touch! <span className="text-orange-400"></span><br />
          </h1>
          <h1 className="mt-4 text-1xl font-semibold">
            <span className="mt-20 text-orange-400">Email : </span>__________________<br/>
            <span className="mt-20 text-orange-400">Phone : </span>__________________<br/>
            <span className="mt-20 text-orange-400">Name : </span> __________________<br/>
            <span className="mt-20 text-orange-400">Address : </span>__________________<br/>
            <span className="mt-20 text-orange-400">Content : </span>__________________<br/>
            
             <div className="md:col-span-2 flex items-center gap-3 mt-4">
          <input type="checkbox" id="newsletter" className="accent-orange-500" />
          <label htmlFor="newsletter" className="text-sm text-gray-300">
            I would like to receive the newsletter.
          </label>
        </div>

            <button
            type="submit"
            className=" mt-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Submit
          </button>



          </h1>

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