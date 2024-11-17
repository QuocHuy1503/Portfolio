"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            I&apos;m Huy,  A creative and results-driven third-year web development
            student with strong expertise in both front-end and back-end
            technologies. Proficient in building real-world projects using a
            variety of modern frameworks, eager to contribute to a dynamic
            software team. Eager to leverage technical skills and creative
            problem-solving abilities to contribute to a forward-thinking
            software development team.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                require offer
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500"placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
