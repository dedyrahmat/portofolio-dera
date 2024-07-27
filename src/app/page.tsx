
import ThemeSwitcher from "@/app/_components/ThemeSwitcher";
import Socials from "@/app/_components/Socials";
import Image from "next/image";
import Summary from "@/app/_components/Summary";
import AboutMe from "@/app/_components/AboutMe";
import Experience from "@/app/_components/Experience";
import Quotes from "@/app/_components/Quotes";

export default function Home() {
  return (
    <main className="md:pt-24 p-6 max-w-7xl mx-auto">
      {/* <ThemeSwitcher /> */}
      <div className="block md:grid md:grid-cols-3 md:gap-x-12">

        <section className="mb-12 md:col-span-2">
          <h1 className="font-extrabold md:text-5xl text-3xl">Dedy Rahmat</h1>
          <p className="md:text-2xl text-base font-semibold">Software Engineer based in Jakarta, Indonesia.</p>
          <p className="md:text-xl text-sm">{new Date().getFullYear() - 1999} years old.</p>
          <section className="block my-6 md:hidden">
            <div className="border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-red-400">
              <article className="w-full h-full">
                <figure className="w-full h-1/2 border-black border-b-2 px-6 py-2 text-center">
                  <h2 className="font-black text-3xl text-gray-100">HELLO</h2>
                  <h3 className="font-semibold text-gray-100">my name is Dedy Rahmat</h3>
                </figure>
                <div className="w-full h-96 overflow-hidden">
                  <Image
                    src="/IMG_19602.png"
                    alt="profile"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    priority
                    className="rounded-bl-md rounded-br-md object-center object-contain"
                  />
                </div>
              </article>
            </div>
          </section>
          <Summary />
          <Socials className="mb-16" />
        </section>
        <section className="hidden md:block">
          <div className="border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-red-400">
            <article className="w-full h-full">
              <figure className="w-full h-1/2 border-black border-b-2 px-6 py-2 text-center">
                <h2 className="font-black text-3xl text-gray-100">HELLO</h2>
                <h3 className="font-semibold text-gray-100">my name is Dedy Rahmat</h3>
              </figure>
              <div className="w-full h-96 overflow-hidden">
                <Image
                  src="/IMG_19602.png"
                  alt="profile"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  priority
                  className="rounded-bl-md rounded-br-md object-center object-contain"
                />
              </div>
            </article>
          </div>
        </section>
      </div>

      <Quotes />
      <AboutMe />
      <Experience />
      <footer className="text-center">
        <p className="text-sm">Made with ❤️ by <a href="https://github.com/dedyrahmat" target="_blank" rel="noreferrer">Dedy Rahmat</a></p>
      </footer>
    </main>
  );
}
