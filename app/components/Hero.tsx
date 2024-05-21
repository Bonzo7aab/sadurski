import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <div className="flex flex-col h-screen tracking-wide text-center bg-gradient-to-b from-white to-lace-300">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="mb-4 text-4xl font-semibold">{t('title')}</div>
                <div className="text-xl font-light">{t('description1')}<br />{t('description2')}</div>
            </div>
    
            <div className="absolute bottom-0 transform -translate-x-1/2 left-1/2">
                <div className="pb-2 font-semibold">scroll</div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} version="1.1" viewBox="0 0 800 800"><g stroke-width="10" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-0.30901699437494734,0.9510565162951536,-0.9510565162951536,-0.30901699437494734,921.0294042680404,161.18419123191745)"><path d="M256 250.46721839904785Q456 202.46721839904785 400 394.46721839904785Q351 617.4672183990479 544 538.4672183990479 " marker-end="url(#SvgjsMarker3388)"></path></g><defs><marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker3388"><polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="black"></polygon></marker></defs></svg> */}

                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="45px" height="60px" viewBox="0 0 24 24" id="down-arrow" data-name="Flat Color">
                    <path id="primary" d="M15.71,17.29a1,1,0,0,0-1.42,0L13,18.59V3a1,1,0,0,0-2,0V18.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,15.71,17.29Z" />
                </svg>
            </div>
        </div>
    )
  }
  
  export default Hero