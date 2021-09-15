import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import "animate.css"

import itImg from '../public/erp.png'
import energyImg from '../public/energy.png'
import welcomeImg from '../public/welcoming.svg'

import LCard from '../components/LCard'
import RCard from '../components/RCard'

export default function Home() {
  const [heroImg, setHeroImg]= React.useState(welcomeImg)
  return (
    <React.Fragment>
      <Head>
        <title>Wahni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-1 min-h-screen p-5 md:p-10 pb-40">
        <div className="bgi h-full pb-10">
          <div className="">
            <h3 className="text-4xl font-bold text-white bg-1">Wahni Technologies</h3>
          </div>
          <div className="p-5 md:p-10 mt-20">
            <div className="rounded grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mx-auto">
                <LCard title="Wahni Energy" image={energyImg} defImg={welcomeImg} desc="Energy efficient products without a compromise in quality and service helps us thrive in the market." setHeroImg={setHeroImg}/>
              </div>
              <div className="mx-auto">
                <RCard title="Wahni IT" image={itImg} defImg={welcomeImg} desc="Our ERP services revolve around FOSS products. From implementation to training to support, we cover it all." setHeroImg={setHeroImg}/>
              </div>
              <div className="mx-auto bg-1 hidden md:block">
                <Image src={heroImg} className="w-50" alt="welcome" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
