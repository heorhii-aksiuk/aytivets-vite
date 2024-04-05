// import React from 'react';

function AppBar() {
  return (
    <header className="h-12 bg-pink-500 fixed top-0 w-full text-zinc-200 border-b border-gray-900 drop-shadow-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex">
          {/* <img className="mr-3 mt-1 h-10 w-10" src={logo}></img> */}
          <div>
            <p className="font-poppins text-8xl text-slate-300/85 leading-7">
              Aytivets
            </p>
          </div>
        </div>
        <p className="font-mono text-slate-300/85">v.0.0</p>
      </div>
    </header>
  );
}

export default AppBar;
