"use client"

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi";
import { useLang } from "@/contexts/LangContext";

const Home = () => {
  const { t, lang } = useLang();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t.home.role}</span>
            <h1 className="h1 mb-6">
              {t.home.greeting}<br />
              <span className="text-accent">{t.home.name}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-muted-high">{t.home.description}</p>
            {/** btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/cv/ariadna-maldonado-cv-${lang}.pdf`}
                download
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>{t.home.downloadCV}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/** photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}

export default Home
