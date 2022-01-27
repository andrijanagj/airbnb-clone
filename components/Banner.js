import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div
      className="relative h-[300px] 
      sm:h-[400px] 
      lg:h-[500px] 
      el:h-[600px]
    2xl:h-[700px]"
    >
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-medium sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-purple-400 bg-white px-10 py-4 
        shadow-md 
        rounded-full
        font-bold my-3 hover:shadow-xl active:scale-90 transition duration-200"
        >
          Im flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
