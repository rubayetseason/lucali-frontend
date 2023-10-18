"use client";
import { classNames } from "@/utils/classNames";
import { useEffect, useState } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-[#e2a851] hover:bg-[#f1ad46] inline-flex items-center rounded-full p-3 text-black shadow-sm transition-opacity focus:outline-none"
        )}
      >
        <IoArrowUpSharp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
