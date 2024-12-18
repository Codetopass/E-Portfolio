import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
        <div className="absolute w-[32rem] h-[32rem] rounded-full bg-gray-300 blur-3xl opacity-50"></div>
      <Image
        src="/gabpic.png"
        className="relative object-cover object-right w-96 h-96 lg:w-[30rem] lg:h-[30rem] rounded-full"
        alt="profile"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Photo;
