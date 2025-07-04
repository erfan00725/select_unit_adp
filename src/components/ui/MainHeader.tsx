"use client";
import React, { Suspense, useEffect, useState } from "react"; // Import useState
import Logo from "./common/Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import faBars and faTimes
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NavBarConfigs } from "@/constants/configs/GeneralConfigs";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { urls } from "@/constants/urls";

// Main header component
function MainHeader() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const session = useSession();

  useEffect(() => {
    setIsAuthenticated(session.status === "authenticated");
  }, [session.status, pathName]);

  if (!isAuthenticated) {
    return null; // Render nothing if loading or unauthenticated
  }

  // Function to handle user sign out
  const handleSignOut = () => {
    signOut({ redirectTo: "/login" })
      .then(() => {
        toast.success("خروج با موفقیت انجام شد");
      })
      .catch(() => {
        toast.error("خطا در خروج از حساب کاربری");
      });
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 print:hidden print:h-0!">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={urls.dashboard}>
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center xl:space-x-4 space-x-2 h-full text-sm xl:text-base">
            {NavBarConfigs.map((config, index) => (
              <Suspense key={index}>
                <Link
                  key={index}
                  href={config.href}
                  className={clsx(
                    "text-gray-900 font-light hover:text-indigo-600 text-center whitespace-nowrap", // Added whitespace-nowrap
                    { "font-bold text-indigo-600": pathName === config.href } // Adjusted active style
                  )}
                >
                  {config.label}
                </Link>
                <div
                  className="border-l-[1px] border-gray-500 h-[80%] last-of-type:hidden"
                  key={index + "line"}
                />
              </Suspense>
            ))}
          </nav>

          {/* Desktop Sign Out Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleSignOut}
              className="button_black  xl:!text-base !text-sm"
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="ml-2 w-4 h-auto" // Changed mr-2 to ml-2 for RTL consistency
              />
              خروج
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={clsx(
          "xl:hidden",
          {
            block: isMenuOpen,
            hidden: !isMenuOpen,
          },
          "absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-40"
        )}
      >
        <div className="flex flex-col space-y-4">
          {NavBarConfigs.map((config, index) => (
            <Link
              key={index}
              href={config.href}
              className={clsx(
                "text-gray-900 font-light hover:text-indigo-600 text-center py-2",
                {
                  "font-bold text-indigo-600 bg-gray-100 rounded":
                    pathName === config.href,
                }
              )}
              onClick={toggleMenu} // Close menu on link click
            >
              {config.label}
            </Link>
          ))}
          <button
            onClick={() => {
              handleSignOut();
              toggleMenu(); // Close menu after sign out
            }}
            className="button_black w-full mt-4"
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="ml-2 w-4 h-auto" // Changed mr-2 to ml-2
            />
            خروج
          </button>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
