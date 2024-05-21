const textLoop = (children: string, density: number) => {
    let content = [];
    for (const num of Array(density)) {
        content.push(<li key={num}>{children}</li>)
    }
    return content;
}

export const TextMarquee = ({children, density = 2, weight = 'normal', size = 'base'}: {children: string, density: number, weight?: string, size?: string}) => {
    return <div className={`font-${weight} text-${size} tracking-wider relative flex gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}>
        <ul className="flex justify-around min-w-full uppercase shrink-0 animate-marquee">
            {textLoop(children, density)}
        </ul>
        <ul className="flex justify-around min-w-full uppercase shrink-0 animate-marquee" aria-hidden='true'>
            {textLoop(children, density)}
        </ul>
    </div>
}