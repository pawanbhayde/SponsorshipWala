import React from "react";
import Image from "next/image";
import { img1 } from "../public/images";
// import Button from "@/Components/Button";


const Button = ({btnName}) => {
  return (
    <div className=''>
      <button className='bg-yellow-200 px-6 py-3 border-solid border-slate-400 border-2 rounded-xl'>
        {btnName}
      </button>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="w-screen px-10 mx-auto max-w-7xl overflow-x-hidden">
      <div className=" flex flex-col justify-center h-[90vh] gap-12">
        <div className="flex gap-20">
          <div className="w-6/12">
            {/* LEFT */}
            <h5 className="">Sponsorships at your Finger Tips!</h5>
            <h2 className="text-5xl font-bold leading-snug">
              Struggling to get Sponsorships?
            </h2>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              vero, consectetur facere aperiam illo nesciunt doloribus quod
              debitis consequatur minima quaerat corporis quis voluptatem rem
              quam veniam quia? Cupiditate, totam.
            </p>
          </div>

          <div className="w-4/12">
            {/* Right */}
            <Image src={img1} width={600} height={600} />
          </div>
        </div>

        <div className="flex gap-8">
          <Button btnName={"Let's Do this"} />

          <Button btnName={"Register"} />
        </div>
      </div>

      <div className="w-2/4 mx-auto flex text-center justify-center items-center h-3/6">
        <div>
          <h5>Sponsorships at your fingertips!</h5>

          <h2 className="font-bold text-4xl leading-loose">
            We're Here For You!
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            eum, ducimus ullam unde consequuntur atque consequatur provident ut
            quos autem assumenda facilis alias, magnam voluptatem tempore error
            eius. Nemo, voluptate.
          </p>
        </div>
      </div>

      <div className=" flex h-screen items-center">
        <div className="flex gap-20">
          <div className="w-4/12">
            {/* Right */}
            <Image src={img1} width={600} height={600} />
          </div>

          <div className="w-2/4">
            {/* LEFT */}
            <h5 className="">Sponsorships at your Finger Tips!</h5>
            <h2 className="text-5xl font-bold leading-snug">
              Struggling to get Sponsorships?
            </h2>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              vero, consectetur facere aperiam illo nesciunt doloribus quod
              debitis consequatur minima quaerat corporis quis voluptatem rem
              quam veniam quia? Cupiditate, totam.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
