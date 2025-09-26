// components/MySkill.tsx
import { FaReact, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" />, level: 60 },
  { name: 'Figma', icon: <FaFigma className="text-purple-500" />, level: 85 },
  { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500" />, level: 80 },
  { name: 'Next.js', icon: <FaReact className="text-black" />, level: 80 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 60 },
  { name: 'GitHub', icon: <FaGithub className="text-gray-700" />, level: 90 },
];

export default function MySkill() {
  return (

    
    <section className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
              <div
                className="bg-green-400 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}



