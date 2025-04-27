import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center p-8">
      <main className="flex flex-col items-start w-full max-w-2xl">
        {children}
      </main>
      <footer className="mt-12 text-sm text-gray-500 flex gap-4">
        <a
          href="mailto:tony.dyleuth@gmail.com"
          className="text-gray-300 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
        >
          contact
        </a>
        <a
          href="https://github.com/tdyleuth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/tdyleuth/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
        >
          linkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1Z7H87Ycc5Nq3pa3nW3-LO4-djEDL7BAv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 hover:underline transition duration-200 ease-in-out"
        >
          resume
        </a>
      </footer>
    </div>
  );
}
