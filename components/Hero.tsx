import React from "react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center items-center w-full h-[85vh]">
        <video
          autoPlay
          muted
          loop
          className="rounded-xl w-full h-[85vh] object-cover z-0"
        >
          <source src="/beach.mp4" type="video/mp4" />
        </video>
        {/* Overlay for darkening the video and centering text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black drop-shadow-lg m-10 text-center">
              Change is Possible. Start Your Journey Today.
            </h1>
            <h2 className="text-xl md:text-2xl text-white drop-shadow-lg m-10 text-center">
              Offering thoughtful and expert psychological care for adults seeking change, insight, and a greater sense of well-being.
            </h2>
          </div>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 mt-4 shadow-lg cursor-pointer">
            Book a Free Consult
          </button>
        </div>
      </div>
    </div>
  );
};
