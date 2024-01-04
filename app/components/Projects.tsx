const Projects = () => {
  return (
    <div>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
              <h1 className="mb-2 text-2xl font-medium sm:text-3xl">My work</h1>
              <div className="w-20 h-1 bg-yellow-400 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-400 lg:w-1/2 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 bg-gray-800 rounded-lg bg-opacity-40">
                <img className="object-contain mb-6 rounded aspect-video" src="/films.png" alt="content" />
                <h2 className="mb-4 text-lg font-medium text-yellow-400">FI|MS</h2>
                <p className="text-base leading-relaxed">Personal website with drone filming, video editing.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 bg-gray-800 rounded-lg bg-opacity-40">
                <img className="object-contain mb-6 rounded aspect-video" src="/grizzly.png" alt="content" />
                <h2 className="mb-4 text-lg font-medium text-yellow-400">Grizzly Fight Club</h2>
                <p className="text-base leading-relaxed">Wordpress based site. Making some adjustments, few upgrades here and there and updating content.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 bg-gray-800 rounded-lg bg-opacity-40">
                <img className="object-contain mb-6 rounded aspect-video" src="/beads.jpeg" alt="content" />
                <h2 className="mb-4 text-lg font-medium text-yellow-400">Gorallo</h2>
                <p className="text-base leading-relaxed">Business card page about making your own jewelery from beads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects