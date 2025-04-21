'use client';
import React from 'react';

const ResumeButton = () => {
  return (
    <div className="fixed top-[3%] left-[83%] z-50">
      <a href="/resume.pdf" download>
        <button className="w-[150px] cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
          <div className="relative overflow-hidden w-full text-center">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Resumé
            </p>
            <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Download
            </p>
          </div>
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;
