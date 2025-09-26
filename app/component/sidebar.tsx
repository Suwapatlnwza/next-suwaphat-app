"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaList,
  FaBriefcase,
  FaCommentDots,
} from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GoFileCode } from "react-icons/go";

const menus = [
  { href: "/", icon: <FaHome size={20} />, label: "Home" },
  { href: "/aboutme", icon: <FaUser size={20} />, label: "Profile" },
  { href: "/eduexp", icon: <MdCastForEducation size={20} />, label: "Notifications" },
  { href: "/spec", icon: <FaList size={20} />, label: "Tasks" },
  { href: "/projects", icon: <FaBriefcase size={20} />, label: "Tasks" },
  { href: "/skills", icon: <GoFileCode size={20} />, label: "Jobs" },
  { href: "/contactme", icon: <FaCommentDots size={20} />, label: "Messages" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (

    <div
      className="fixed top-1/2 right-110 -translate-y-1/2
                 bg-neutral-500 rounded-2xl shadow-xl p-1
                 
                 backdrop-blur-md border border-gray-900"
    >
      <div className="flex flex-col items-center space-y-6">
        {menus.map((menu, i) => {

          const isActive = pathname === menu.href;
          return (
            <Link
              key={i}
              href={menu.href}
              className={"flex items-center justify-center w-10 h-10 rounded-lg transition-colors"}
                
            >
              {menu.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}