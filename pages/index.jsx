import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import Image from "next/image";

import { useState } from "react";
import ImageComp  from "../Components/ImageComp";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-butrons ">DevelopedByRj.</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 dark:text-white ">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Mathialagan Rajinth
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl ">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
        <section>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-white">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-1">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-1">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-1">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <ImageComp />
        </section>
      </main>
    </div>
  );
}
