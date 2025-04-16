"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavBarConfigs } from "@/constants/configs/GeneralConfigs";

function MainHeader() {
  const pathName = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo className="text-2xl" />
          </div>
          <nav className="flex justify-center items-center space-x-8 overflow-x-auto px-5 mx-5 h-full">
            {NavBarConfigs.map((config, index) => {
              return (
                <Link
                  key={index}
                  href={config.href}
                  className={clsx(
                    "text-gray-900 font-light hover:text-indigo-600 text-center",
                    { "font-bold! ": pathName === config.href }
                  )}
                >
                  {config.label}
                </Link>
              );
            })}
          </nav>
          <div>
            <Link href="/login" className="button_black">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="mr-2 w-4 h-auto"
              />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
