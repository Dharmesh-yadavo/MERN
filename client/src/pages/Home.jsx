import Noise from "@/Components/Noise";
import { BackgroundAnimation } from "../Components/ui/BackgroundAnimation";

export const Home = () => {
  return (
    <>
      <BackgroundAnimation>
        <section className="min-h-screen flex items-center justify-center">
          <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={1}
            patternAlpha={10}
          />
          <div className="max-w-6xl w-full  md:grid-cols-2 gap-10 items-center">
            <main className=" pt-20 pb-40">
              <div className="max-w-44 bg-gray-100 py-1 border rounded-sm">
                <p className="text-base  font-roboto text-gray-700 text-center">
                  Eleavate Your Carrer
                </p>
              </div>
              <h1 className="font-amiri font-semibold italic text-7xl text-gray-900 mt-6  mb-8">
                Master your craft.
                <br />
                Unleash your potential.
              </h1>
              <p className="max-w-lg text-xl text-gray-700 mb-10">
                Expert-led, premium courses equip you with in-demand skills and
                practical expertise to accelerate your career momentum.
              </p>
              <a
                href="#"
                className="flex items-center text-lg font-semibold text-gray-900 hover:text-pink-600 transition-colors duration-200"
              >
                Discover how
              </a>
            </main>
          </div>
        </section>
      </BackgroundAnimation>
    </>
  );
};
