"use client";

import { motion } from "framer-motion";
import { AnimatedShinyTextDemo } from "@/components/Header";
import { SparklesText } from "@/components/magicui/sparkles-text";
import Navbar from "@/components/Navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <HeroHighlight className='flex flex-col min-h-screen py-10'>
      <div className='flex-1'>
        <Navbar />
        <h1 className='text-white py-16 text-center'>
          <AnimatedShinyTextDemo />
        </h1>
        {/*<div className='text-white flex flex-col items-center'>
          <SparklesText className='font-semibold text-8xl leading-tight'>
            CloudClipper
          </SparklesText>
          <p className='text-xl text-gray-300 font-medium leading-10'>
            Download videos online effortlessly by pasting the link, <br />choosing
            quality, and{" "}
            <span className='bg-[#3A6BE1] text-black rounded-xl px-2 pb-1'>
              clicking download instantly.
            </span>
          </p>
        </div>*/}

        <SparklesText
          text='CloudClipper'
          className=' mb-6 text-white text-center text-8xl'
        />
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0]
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className='text-xs px-4 md:text-xl lg:text-xl font-semibold text-zinc-300 max-w-4xl leading-relaxed lg:leading-8 text-center mx-auto '
        >
          Download videos online effortlessly by pasting the link,
          <br /> choosing quality, and &nbsp;{" "}
          <Highlight className='text-black dark:text-whites'>
            clicking download instantly.
          </Highlight>
        </motion.h1>

        <div className='text-white flex space-x-14 justify-center pt-20'>
          <FaXTwitter size={25} />
          <FaInstagram size={25} />
          <FaYoutube size={25} />
          <FaFacebook size={25} />
          <FaSnapchat size={25} />
        </div>
        <Hero />
      </div>
      <Footer />
    </HeroHighlight>
  );
}
