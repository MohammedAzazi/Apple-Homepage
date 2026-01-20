import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import iPhone17png from './Images/iPhone17.png'
import iPhoneShowcase from './Images/iPhoneShowcase.png'
import Airpods from './Images/Airpods.png'
import iPadAirLogo from './Images/iPadAirLogo.png'
import iPadAir from './Images/iPadAir.png'
import AppleLogo from './Images/AppleLogo.png'
import AppleWatchLogo from './Images/AppleWatchLogo.png'
import AppleWatch from './Images/AppleWatch.png'
import iPadSpiral from './Images/iPadSpiral.png'
import MacBook from './Images/Macbook.png'
import WatchLogo from './Images/WatchLogo.png'
import WatchSprial from './Images/WatchSpiral.png'
import TradeLogo from './Images/TradeLogo.png'
import Tradein from './Images/Tradein.png'



import Navbar from './Components/Navbar'
import TopSection from './Components/TopSection'
import WatchBox from './Components/WatchBox'
import ImageCarousel from './Components/ImageCarousel'
import Footer from './Components/Footer'


function App() {

  return (
    <>

    <Navbar/>  

    <div className='flex flex-col gap-3'>

    <TopSection 
      sectionClass={"flex flex-col bg-gray-100 p-20 pb-0 text-black justify-center items-center gap-2"}
      mainHeader={"Wrapping up this special season."} 
      subHeader={"There's still time to make their holiday one of a kind."}
      subHeaderClass={"text-2xl"}
      buttonText={"Shop gifts"}
      image={iPhone17png}
      imageClass={"w-200"}
      warningText={"*This is a non-commercial recreation of Apple's homepage built for educational purposes. Not affiliated with Apple Inc.*"}
      />

    <TopSection 
      sectionClass={"flex flex-col bg-gray-100 p-10 pb-0 text-black justify-center items-center gap-2"}
      mainHeader={"iPhone"} 
      subHeader={"Say hello to the latest generation of iPhone."}
      subHeaderClass={"text-2xl"}
      buttonText={"Learn more"}
      additionalButton={"Shop iPhone"}
      image={iPhoneShowcase}
      imageClass={"w-135 mt-5"}
      />

    <TopSection 
      sectionClass={"flex flex-col bg-gray-100 p-10 pb-0 text-black justify-center items-center gap-2"}
      mainHeader={"Airpods Pro 3"} 
      subHeader={"The world's best in-ear Active Noise Cancellation."}
      subHeaderClass={"text-2xl"}
      buttonText={"Learn more"}
      additionalButton={"Buy"}
      image={Airpods}
      imageClass={"w-175 mt-5 mb-5"}
      />

      <div className="w-full grid grid-cols-2 gap-3 box-border">
        <TopSection 
          sectionClass={"bg-gradient-to-b from-sky-200 to-gray-100 w-auto h-145 flex flex-col p-10 pb-0 text-black justify-center items-center gap-2 ml-3"}
          logoHeader={iPadAirLogo}
          logoClass={"w-40 mt-5"}
          subHeader={"Now supercharged by the M3 chip."}
          subHeaderClass={"text-2xl"}
          buttonText={"Learn more"}
          additionalButton={"Buy"}
          image={iPadAir}
          imageClass={"w-75 mt-5 mb-10"}
          />

        <TopSection
          sectionClass={"bg-gray-100 w-auto h-145 flex flex-col p-10 pb-0 text-black justify-center items-center gap-2 mr-3"}
          logoHeader={AppleWatchLogo}
          logoClass={"w-90 mt-5"}
          subHeader={"The ultimate way to watch your health."}
          subHeaderClass={"text-2xl"}
          buttonText={"Learn more"}
          additionalButton={"Buy"}
          image={AppleWatch}
          imageClass={"w-max mt-5 mb-10"}
          />

        <TopSection
          sectionClass={"bg-gray-100 w-auto h-145 flex flex-col p-10 pb-0 text-black justify-center items-center gap-2 ml-3"}
          mainHeader={"iPad"}
          subHeader={"Now with the speed of the A16 chip and double the starting storage."}
          subHeaderClass={"max-w-sm text-lg md:text-xl lg:text-2xl xl:text-2xl"}
          buttonText={"Learn more"}
          additionalButton={"Buy"}
          image={iPadSpiral}
          imageClass={"w-60 mt-5 mb-10"}
          />

        <TopSection
          sectionClass={"bg-gradient-to-b from-sky-200 to-gray-100 w-auto h-145 flex flex-col p-10 pb-0 text-black justify-center items-center gap-2 mr-3"}
          mainHeader={"MacBook Air"}
          subHeader={"Sky blue color. Sky high performance with M4."}
          subHeaderClass={"text-2xl max-w-xs"}
          buttonText={"Learn more"}
          additionalButton={"Buy"}
          image={MacBook}
          imageClass={"w-125 mt-5 mb-10"}
          />

        <WatchBox
          sectionClass={"bg-gray-100 w-auto h-145 flex flex-col p-10 pb-0 text-black justify-center items-center gap-2 ml-3"}
          image={WatchSprial}
          logoHeader={WatchLogo}
          logoClass={"w-50"}
          subHeader={"Walk it. Talk it. Track it. Love it."}
          subHeaderClass={"text-2xl max-w-xs"}
          buttonText={"Learn more"}
          additionalButton={"Buy"}
          imageClass={"w-175 mt-5 mb-10"}
          />

        <TopSection
          sectionClass={"bg-gray-100 w-auto h-145 flex flex-col p-10 pb-0 text-black justify-center items-center gap-2 mr-3"}
          logoHeader={TradeLogo}
          logoClass={"w-45"}
          subHeader={"Upgrade and save. It's that easy."}
          subHeaderClass={"text-2xl max-w-xs"}
          buttonText={"See what your device is worth"}
          image={Tradein}
          imageClass={"w-150 mt-5 mb-10"}
          />
      </div>

      <ImageCarousel />
      
    </div>

    <Footer />

    </>
  )
}

export default App
