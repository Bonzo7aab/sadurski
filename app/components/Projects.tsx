"use client"

import { Parallax } from "react-scroll-parallax"
import { projects } from "../_data"

const Buttons = ({ siteLink, githubLink }: { siteLink: string, githubLink: string | null }) =>
  <div className="flex overflow-hidden divide-x divide-gray-700 rounded-sm bg-lace-300 rtl:flex-row-reverse w-fit">
    {githubLink && <a href={githubLink} target="_blank" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 gap-x-3 hover:bg-cp2-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
      </svg>
      <span>Github</span>
    </a>}
    <a href={siteLink} target="_blank" className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 gap-x-3 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="25" height="25"><g><path d="M72.81,86.58c-3.83,4.63-8.47,9.22-13.89,13.77c1.17-0.16,2.34-0.35,3.48-0.57c3.13-0.63,6.13-1.55,9.04-2.81 c1.48-0.64,2.92-1.33,4.3-2.08l0.11,0.32c0.53,1.51,1.23,2.76,2.06,3.76c-1.52,0.82-3.08,1.58-4.68,2.26 c-3.22,1.39-6.54,2.4-9.96,3.1c-3.41,0.7-6.95,1.04-10.59,1.04s-7.14-0.35-10.59-1.04c-3.38-0.66-6.64-1.67-9.83-3.03 c-0.03,0-0.09-0.03-0.13-0.06c-3.16-1.36-6.16-3-8.98-4.87c-2.81-1.86-5.4-4.01-7.78-6.38c-2.4-2.37-4.52-4.96-6.38-7.78 c-1.9-2.81-3.51-5.82-4.87-8.98c-1.39-3.22-2.4-6.54-3.1-9.96C0.35,59.86,0,56.32,0,52.69c0-3.63,0.35-7.14,1.04-10.59 c0.66-3.38,1.68-6.64,3.03-9.83c0-0.03,0.03-0.09,0.06-0.13c1.36-3.19,3-6.16,4.87-8.98c1.86-2.81,4.01-5.4,6.38-7.78 c2.37-2.4,4.96-4.52,7.78-6.38c2.81-1.9,5.82-3.51,8.98-4.87c3.22-1.39,6.54-2.4,9.96-3.1C45.51,0.35,49.05,0,52.69,0 s7.14,0.35,10.59,1.04c3.38,0.66,6.64,1.67,9.83,3.03c0.03,0,0.09,0.03,0.13,0.06c3.16,1.36,6.16,3,8.98,4.87 c2.81,1.86,5.4,4.01,7.78,6.38c2.4,2.37,4.52,4.96,6.38,7.78c1.9,2.81,3.51,5.82,4.87,8.98c1.39,3.22,2.4,6.54,3.1,9.96 c0.04,0.2,0.08,0.4,0.12,0.6l-5.11-1.8c-0.59-2.37-1.36-4.67-2.34-6.92c-0.79-1.86-1.68-3.63-2.65-5.34l0,0H78.92 c1.21,2.07,2.27,4.13,3.18,6.19l-6.2-2.18c-0.73-1.33-1.52-2.67-2.38-4.01h-9.03c-1.06-0.33-2.2-0.41-3.31-0.24 c-0.35,0.06-0.7,0.14-1.05,0.24h-5.14v21.74h5.07l1.62,4.61h-6.69v21.74h14.35l1.62,4.61H54.99V97.6 C61.5,92.26,66.84,86.86,71,81.46L72.81,86.58L72.81,86.58z M112.3,92.8c-0.77,0.69-1.96,0.7-2.66,0L95.66,78.9l-6.63,13.19 c-2,3.98-5.56,5.78-7.24,1.02L61.68,36c-0.41-1.17,0.08-1.64,1.24-1.23l57.1,20.1c4.76,1.68,2.95,5.24-1.02,7.24l-13.19,6.63 l13.9,13.97c0.69,0.7,0.69,1.9,0,2.66L112.3,92.8L112.3,92.8L112.3,92.8z M46.49,100.35c-7.46-6.26-13.43-12.58-17.86-18.99H14.06 c1.39,1.9,2.94,3.67,4.61,5.34c2.18,2.18,4.52,4.11,7.08,5.82c2.53,1.71,5.28,3.19,8.25,4.46C34.04,97,34.07,97,34.1,97.03 c2.88,1.2,5.85,2.15,8.94,2.75c1.14,0.22,2.31,0.41,3.48,0.57H46.49L46.49,100.35z M11.03,76.74H25.7 c-4.08-7.14-6.29-14.41-6.54-21.74H4.68c0.13,2.53,0.41,4.96,0.89,7.36c0.63,3.13,1.55,6.13,2.81,9.04 C9.17,73.26,10.05,75.03,11.03,76.74L11.03,76.74z M4.68,50.38h14.57c0.54-7.21,2.94-14.44,7.21-21.74H11.03 c-0.98,1.71-1.86,3.48-2.65,5.34c-0.03,0.03-0.03,0.06-0.06,0.09c-1.2,2.88-2.15,5.85-2.75,8.94C5.09,45.42,4.77,47.85,4.68,50.38 L4.68,50.38z M14.03,24.02h15.39C33.82,17.7,39.6,11.35,46.81,4.96c-1.3,0.16-2.56,0.35-3.79,0.6c-3.13,0.63-6.13,1.55-9.04,2.81 c-2.94,1.26-5.69,2.75-8.25,4.46c-2.56,1.71-4.9,3.63-7.08,5.82c-1.67,1.68-3.22,3.44-4.61,5.34V24.02L14.03,24.02z M58.57,4.96 c7.24,6.38,13.02,12.74,17.38,19.06h15.39c-1.39-1.9-2.94-3.67-4.61-5.34c-2.18-2.18-4.52-4.11-7.08-5.82 c-2.53-1.71-5.28-3.19-8.25-4.46c-0.03-0.03-0.06-0.03-0.09-0.06c-2.88-1.2-5.85-2.15-8.94-2.75c-1.26-0.25-2.53-0.44-3.79-0.6 V4.96L58.57,4.96z M54.99,7.96v16.06h15.3C66.28,18.71,61.19,13.37,54.99,7.96L54.99,7.96z M50.38,97.6V81.35H34.29 C38.43,86.79,43.81,92.23,50.38,97.6L50.38,97.6z M50.38,76.74V54.99H23.77c0.28,7.3,2.75,14.54,7.3,21.74H50.38L50.38,76.74z M50.38,50.38V28.64H31.86c-4.74,7.36-7.4,14.6-8,21.74H50.38L50.38,50.38z M50.38,24.02V7.96c-6.19,5.4-11.28,10.75-15.3,16.06 H50.38L50.38,24.02z"/></g></svg>
      <span>Otwórz</span>
    </a>
  </div>

const Tag = ({ text }: { text: string }) => 
  <span className="inline-flex items-center px-2 py-1 text-xs text-gray-600 bg-transparent border rounded-sm shadow-sm border-ebony-500">
    {text}
  </span>

const Project = ({ data: { image, name, description, github, site, tags } }: { data: { image: string, name: string, description: string, github: string | null, site: string, tags: Array<string> } }) => 
  <div className="relative block mb-6 border-ebony-200 lg:mb-0 border-x-2">
    <div className="flex">
      <div className="relative flex w-full mx-4 -mt-4 overflow-hidden bg-no-repeat bg-cover rounded-sm">
        <img src={`/${image}`} className="w-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between">
        <h5 className="my-auto text-lg font-bold">{name}</h5>
        <Buttons githubLink={github} siteLink={site} />
      </div>
      <Parallax opacity={[0, 1, 'easeOutQuint']}>
        <p className="my-4">{description}</p>
      </Parallax>
      <div className="flex gap-2 mt-4">
        {tags.map((tagName: string) => <Tag key={tagName} text={tagName} />)}
      </div>
    </div>
  </div>

const Projects = () => {
  return (
    <div className="relative py-64 bg-lace-300">
      <svg viewBox="0 0 81 18" className="absolute top-0 left-0 font-sans opacity-10">
        <text x="0" y="15" className="font-extrabold">PROJECTS</text>
      </svg>
      <div className="container grid gap-16 px-2 md:px-16 md:grid-cols-2">
        {projects.map((data) => <Project key={data.name} data={data} />)}
      </div>
    </div>
  )
}

export default Projects