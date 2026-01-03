import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen h-[16vh] flex flex-col justify-center items-center border-t bg-black">
      <div className="flex flex-row text-white gap-1">
        <p>currently working on</p>
        <Link
          target="_blank"
          href="https://www.saha.co.nz"
          className="text-blue-500"
        >
          <u>Saha</u>
        </Link>
        <p>and grinding leetcode 😔</p>
      </div>
    </footer>
  );
}
