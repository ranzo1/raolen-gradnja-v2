import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <a href="#">
          <img src="/logo.svg" alt="Logo" />
        </a>
        {/* nav */}
        <nav>
          {/* nav mobile trigger */}
          <div className="cursor-pointer lg:hidden" id="nav_trigger_btn">
            <i className="ri-menu-4-line text-4xl text-primary"></i>
          </div>
          <ul
            className="fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300"
            id="nav_menu"
          >
            <li>
              <Link href="#hero">Početna</Link>
            </li>
            <li>
              <Link href="#about">O Nama</Link>
            </li>
            <li>
              <Link href="#location">Lokacija</Link>
            </li>
            <li>
              <Link href="#work">Ponuda</Link>
            </li>
            <li>
              <Link href="#news">Objekti</Link>
            </li>
            <li>
              <Link href="#contact">Kontakti</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
