"use client";

import React from "react";
import Image from "next/image";
// import miniMartImg from "@/public/minimart-story.jpg";

export default function About() {
  return (
    <section className="max-w-11/12 mx-auto md:px-20 mt-10 md:mt-40 flex flex-col md:flex-row items-center gap-10">
      
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold">
          About Us
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          MiniMart started as a small idea — to make shopping simple, inspiring, and stress-free. 
          We believe everyone should be able to discover quality products easily, without the hassle of crowded stores or confusing online shops. 
          Every item in our catalog is carefully chosen to bring value and joy, whether it’s for your home, your hobbies, or just everyday essentials. 
          Explore our store, find something new, and see how MiniMart makes shopping not just convenient, but enjoyable. 
          We’re here to inspire your choices and make every click count!
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <Image 
          src={"/About.png"} 
          alt="MiniMart Story" 
          className="rounded-2xl bg-primary/20"
          width={400} 
          height={300} 
          priority
        />
      </div>

    </section>
  );
}