type MyProfileProps = {
  name: string
  studentId: string
  role: string
  image: string
}

export default function MyProfile({
  name,
  studentId,
  role,
  
}: MyProfileProps) {
  return (
    <div className="w-64 rounded-xl bg-gray-900 p-5 text-center text-white shadow-lg">
      <h2 className="text-sm text-orange-400 mb-2">{name}</h2>
      <img
        src="/me.png"
            alt="profile"
        className="mx-auto h-40 w-40 rounded-xl object-cover"
      />
      <p className="mt-3 text-sm font-semibold">STU ID : {studentId}</p>
      <p className="text-xs text-gray-400">{role}</p>

      {/* Social Icons /}
      <div className="mt-3 flex justify-center gap-4 text-lg">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-google"></i></a>
      </div>

      {/ Button */}
      <button className="mt-4 w-full rounded-lg bg-orange-500 py-2 font-semibold hover:bg-orange-600">
        HIRE ME !
      </button>
    </div>
  )
}