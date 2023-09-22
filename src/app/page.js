import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesWithLottie from './components/FeaturesWithLottie';
import Faqs from './components/Faqs';
import Pricing from "./components/Pricing";
import CustomizedSearch from './components/CustomizedSearch';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Features />
      <FeaturesWithLottie />
      <Faqs />
       <Pricing />
      <CustomizedSearch />
    </main>
    <Footer />
    </>
  )
}
