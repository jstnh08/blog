import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/baseball.jpg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="min-h-screen dark:bg-black dark:text-white/60">
        <div className="bg-parallax bg-center bg-cover h-screen sm:bg-fixed">
          <div className="bg-black/80 w-full h-5/6 flex flex-col items-center justify-center gap-6">
            <h1 className="font-semibold text-4xl md:text-6xl sm:text-5xl flex gap-x-3">
              Welcome to the{" "}
              <div className="flex flex-col w-fit gap-y-2">
                <span className="font-bold">CodePlaybook</span>
                <div className="w-full h-1.5 bg-blue-700 rounded-full" />
              </div>
            </h1>
            <h2 className="text-lg md:text-2xl sm:text-xl text-white max-w-[45ch] text-center font-thin">
              A unique blog that combines our love of programming and sports,
              providing posts that followers of each can enjoy
            </h2>
          </div>
          <div className="h-1/6 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-black"></div>
        </div>
        <div className="min-h-screen px-24 py-4">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-white/85 font-semibold text-2xl">
              Latest Blogs
            </h3>
            <div className="flex flex-col gap-y-6">
              <FeaturedBlogPost image={"/baseball.jpg"} />
              <FeaturedBlogPost image={"/fag.jpg"} />
              <FeaturedBlogPost image={"/code.jpeg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FeaturedBlogPost({ image, title, description }) {
  return (
    <div className="py-4 px-6 bg-[#121212] flex h-fit gap-x-8 w-fit rounded-lg">
      <div className="w-52 flex-shrink-0">
        <img className="w-full h-full object-cover rounded-3xl" src={image} />
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="bg-blue-600/20 py-1 px-3 w-fit text-xs rounded-full">
          Baseball
        </p>
        <h3 className="font-semibold text-lg pt-1.5 text-white/85">
          Programming an MLB-level Baseball Simulation, Part 1
        </h3>
        <p className="max-w-[45ch] text-sm">
          In this post, I walk through my journey creating a realistic
          simulation program that can simulate seasons worth of baseball games,
          returning realistic stats.
        </p>
        <span className="font-semibold text-xs pt-1.5">Justin Hudacsko</span>
      </div>
    </div>
  );
}

export default App;
