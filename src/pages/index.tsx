import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-2">Tony Dyleuth</h1>
      <p className="text-gray-400 mb-8">
        Professional Software Engineer based in Los Angeles, California.
        I&apos;m passionate about creating simple, beautiful web experiences.
      </p>

      <section className="mb-4">
        <h3 className="text-lg mb-2">Personal Projects</h3>
        <ul>
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
      </section>
    </Layout>
  );
}
