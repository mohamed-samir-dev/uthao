"use client";
import Image from "next/image";

const TestimonialImage = () => {
  return (
    <div className="flex justify-center lg:justify-end order-first lg:order-last">
      <div className="relative w-full max-w-xs sm:max-w-sm">
        <Image
          src="/man.webp"
          alt="Mohammed Samier - Client testimonial"
          width={400}
          height={500}
          className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default TestimonialImage;