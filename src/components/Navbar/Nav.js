import React from 'react';

const Nav = () => {
    return (
        <nav>
        <button class="md:hidden" @click="navOpen = !navOpen">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
           >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
           </svg>
        </button>
        <ul
           class="
              fixed
              left-0
              right-0
              min-h-screen
              px-4
              pt-8
              space-y-4
              bg-blue-500
              text-white
              transform
              transition
              duration-300
              translate-x-full
              md:relative md:flex md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0
           "
           : class="{'translate-x-full': !navOpen}"
           : class="{'translate-x-0': navOpen}"
    >
    <li class="">
        <a href="#" @click="navOpen = false">Home</a>
           </li >
    <li class="">
        <a href="#features" @click="navOpen = false">Features</a>
           </li >
    <li>
        <a href="#about" @click="navOpen = false">About</a>
           </li >
    <li>
        <a href="#contact" @click="navOpen = false">Contact</a>
           </li >
        </ul >
     </nav >
    );
};

export default Nav;