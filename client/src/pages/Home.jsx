import Noise from "@/Components/Noise";
import { BackgroundAnimation } from "../Components/ui/BackgroundAnimation";
import { AnimateIcon } from "@/Components/animate-ui/icons/icon";
import { ArrowDown } from "@/Components/animate-ui/icons/arrow-down";

export const Home = () => {
  return (
    <>
      {/* <BackgroundAnimation> */}
      <section className="min-h-screen flex items-center justify-center">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={1}
          patternAlpha={15}
        />
        <BackgroundAnimation />
        <div className="max-w-6xl w-full  md:grid-cols-2 gap-10 items-center">
          <main className=" pt-20 pb-40">
            <div className="max-w-44 bg-gray-50 py-1 border rounded-sm">
              <p className="text-base  font-roboto text-gray-700 text-center">
                Eleavate Your Carrer
              </p>
            </div>
            <h1 className="font-amiri font-semibold italic text-7xl text-gray-900 mt-6  mb-8">
              Master your craft.
              <br />
              Unleash your potential.
            </h1>
            <p className="max-w-lg text-xl text-gray-700 mb-10 mt-10">
              Expert-led, premium courses equip you with in-demand skills and
              practical expertise to accelerate your career momentum.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center text-lg font-semibold text-gray-900 hover:translate-y-[-1px]"
              >
                Discover how
              </a>
              <AnimateIcon animateOnHover className="">
                <ArrowDown className="w-7 h-7 bg-black text-white p-2 rounded-full animate-pulse" />
              </AnimateIcon>
            </div>
          </main>
        </div>
      </section>
      {/* </BackgroundAnimation> */}
    </>
  );
};
