import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="bg-[#219EBC] text-white p-8 flex flex-col items-center justify-center rounded-2xl mt-16">
      <Image src="/assets/avatar.png" width="100" height="36" alt="avatar" />
      <h4 className="text-xl font-semibold mt-8">Still have questions?</h4>
      <p className="mt-2 text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <a href="#" className="bg-primary text-white py-3 px-5 mt-8 font-semibold rounded-lg transition-all hover:bg-white hover:text-secondary">Get in touch</a>
    </div>
  );
};

export default GetInTouch;
