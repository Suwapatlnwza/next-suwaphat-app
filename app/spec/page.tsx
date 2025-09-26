import sidebar from "../component/myprofile";
import myprofile from "../component/myprofile";
import myskill from "../component/myskill";

export default function Spec() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex w-[900px] rounded-2xl bg-gray-800 p-8 text-white shadow-lg">
        
        {/* Left Side (Profile) */}
        <div className="flex w-1/3 flex-col items-center border-r border-gray-700 pr-6">
          <img
            src="/me.png"
            alt="profile"
            className="h-32 w-32 rounded-2xl object-cover"
          />
          <h2 className="mt-4 font-semibold">Suwaphat</h2>
          <p className="text-sm text-gray-400">STU ID: 6552410017</p>
          <p className="text-sm text-grat-400">Fullstack Web Developer</p>

          {/* Socials */}
          <div className="mt-4 flex gap-3 text-xl">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
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
            My <span className="text-orange-400">Specialization</span>
          </p>
          <h1 className="mt-2 text-2xl font-bold">
            Front-End Developer
            <p className="text-sm text-gray-400">Front-End is where i weave code and creativity to shape captivating and user-centric digital experiences</p>

          </h1>
          <h1 className="mt-2 text-2xl font-bold">
            UX/UI Designer
            <p className="text-sm text-gray-400">UX/UI Design is my palette for blending art and user psychology into seamless and delightful interactions</p>
          </h1>
          <h1 className="mt-2 text-2xl font-bold">
            Graphic Designer
            <p className="text-sm text-gray-400">As a graphic designer I transform ideas into visually striking and impactful design</p>
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