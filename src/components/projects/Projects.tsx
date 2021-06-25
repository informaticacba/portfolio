import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "../ImageModal";
import {
  jsIcon,
  tsIcon,
  javaIcon,
  githubIcon as GHicon,
  expandIcon as ExpandIcon,
  openIcon as OpenIcon,
} from "src/assets/svgs";
import { AnimatePresence } from "framer-motion";

interface ItemProps {
  Icon: any;
  src: string;
  title: string;
  subtitle: string;
  date: string;
  github?: string;
  href?: string;
}

const ProjectItem: React.FC<ItemProps> = ({
  Icon,
  src,
  title,
  subtitle,
  date,
  href,
  github,
}) => {
  const [modalShown, setModalShown] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {modalShown && <ImageModal {...{ setModalShown, src }} />}
      </AnimatePresence>
      <div className="relative flex items-center justify-center overflow-hidden rounded-xl group">
        <div className="absolute z-20 w-10/12 p-4 transition-all duration-500 bg-black opacity-0 rounded-xl h-5/6 group-hover:opacity-70 group-hover:w-full group-hover:h-full">
          <div className="flex items-center">
            <div>
              <h1>{title}</h1>
            </div>

            <button
              className="absolute top-4 right-4 group focus:outline-none"
              onClick={() => setModalShown(!modalShown)}
            >
              <ExpandIcon className="w-6 h-6 text-gray-400 transition-all group-focus:text-white group-active:w-5 group-active:h-5" />
            </button>
          </div>
        </div>
        <div className="relative image-container">
          <Image src={src} alt={src} layout="fill" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 overflow-hidden rounded-md">
            <Icon />
          </div>

          <div>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs text-gray-400">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center">
          {!!href && (
            <a
              className="w-6 h-6 mr-4 overflow-hidden text-gray-300 rounded-md focus:outline-none"
              href={href}
              target="_blank"
            >
              <OpenIcon />
            </a>
          )}
          {!!github && (
            <a
              className="w-6 h-6 mr-4 overflow-hidden rounded-md focus:outline-none"
              href={github}
              target="_blank"
            >
              <GHicon />
            </a>
          )}
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 lg:text-6xl">
        Projects.
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ProjectItem
          Icon={tsIcon}
          src="/projects/pythagoras.png"
          title="Jookey"
          subtitle="Web & Mobile Application"
          github="https://github.com/princejoogie/jookey"
          date="Apr 25, 2020"
        />
        <ProjectItem
          Icon={tsIcon}
          src="/projects/chamaeleon.png"
          title="Genesis"
          subtitle="Mobile Application"
          github="https://github.com/apc-genesis"
          date="Apr 16, 2020"
        />
        <ProjectItem
          Icon={jsIcon}
          src="/projects/chamaeleon.png"
          title="Joog Uno"
          subtitle="Web Application"
          github="https://github.com/princejoogie/hiwam0"
          date="Mar 29, 2020"
        />
        <ProjectItem
          Icon={jsIcon}
          src="/projects/pythagoras.png"
          title="Pythagoras"
          subtitle="Web Application"
          href="https://pythagoras.netlify.app/"
          github="https://github.com/princejoogie/pythagoras"
          date="Oct 11, 2020"
        />
        <ProjectItem
          Icon={jsIcon}
          src="/projects/chamaeleon.png"
          title="Chamaeleon"
          subtitle="Web Application"
          href="https://chamaeleon.io/"
          github="https://github.com/princejoogie/chamaeleon"
          date="Sep 07, 2020"
        />
        <ProjectItem
          Icon={javaIcon}
          src="/projects/uApp.png"
          title="uApp"
          subtitle="Mobile Application"
          github="https://github.com/princejoogie/uaap_app"
          date="Oct 7, 2019"
        />
      </div>
    </div>
  );
};

export default Projects;
