import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";
export function Sidebar() {
  return (
    <div>
      <aside className="bg-black h-screen w-[20%] fixed flex flex-col items-center justify-evenly ">
        {/* Logo  */}
        <div>
          <h2 className="logo text-[2rem] bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text font-bold w-[200px]">
            PAGEBUZZ
          </h2>
        </div>
        {/* Links  */}
        <div>
          {NavLinks.map((link, index) => (
            <div key={index} className="flex justify-start" >
              <Link href={link.link} className="flex items-center text-[#8C8C8C] hover:text-white text-[1.1rem] transition-all gap-1">
                {link.icon && <span className="">{link.icon}</span>}
                <p>{link.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
