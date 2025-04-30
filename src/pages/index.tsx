import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/Layout";

export default function Home() {
  const fullBio =
    "Hi I'm Tony :) I'm a Professional Software Engineer based in Los Angeles, California. I'm passionate about creating simple, beautiful web experiences.";
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-2">Tony Dyleuth</h1>
      <div className="relative mb-8 h-24 text-gray-400">
        <p className="invisible">{fullBio}</p>
        <div className="absolute top-0 left-0">
          <Typewriter
            words={[fullBio]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={45}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </div>
      </div>

      {/* <section className="mb-4">
        <h3 className="text-lg mb-2">Personal Projects</h3>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://github.com/tdyleuth/video-library"
              className="text-gray-400 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Titles Library
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tdyleuth/theNews"
              className="text-gray-400 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              News Search
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tdyleuth/tdyleuth.github.io"
              className="text-gray-400 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio Website v1.0
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tdyleuth/whack-a-virus"
              className="text-gray-400 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whack A Virus Game
            </a>
          </li>
        </ul>
      </section> */}
    </Layout>
  );
}
