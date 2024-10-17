import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";


const Hero = () => {
  return (
    <div className="min-h-screen lg:h-screen w-full flex items-center flex-col lg:flex-row">
      <div className="h-full w-full lg:px-10 lg:pr-0 lg:py-5 p-5">
        <HeroLeft/>
      </div>
      <div className="h-full lg:w-[40vw] w-full lg:px-10 lg:py-5 px-5 pb-5">
        <HeroRight/>
      </div>
    </div>
  );
};

export default Hero;
