import React from "react";

function Nav() {
  function ATag(props) {
    return (
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-gray-500 mr-4 text-lg"
      >
        {props.text}
      </a>
    );
  }

  return (
    <nav className="mx-6 p-6 flex items-center justify-between flex-wrap bg-transparent ">
      <div className="flex items-center flex-shrink-0 text-gray-600 mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Min Thu Kyaw
        </span>
      </div>

      <div className="w-full block flex-wrap lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <ATag text="Home" />
          <ATag text="About" />
          <ATag text="Skills" />
          <ATag text="Work" />
          <ATag text="Contact" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-lg text-gray-500">Light</span>
        <div>
          <input type="checkbox" name="" id="toggle" className="hidden" />

          <label htmlFor="toggle">
            <div className="w-9 h-5 flex items-center bg-gray-300 rounded-full p1">
              <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform"></div>
            </div>
          </label>
        </div>
        <span className="text-lg text-gray-500">Dark</span>
      </div>
    </nav>
  );
}

export default Nav;
