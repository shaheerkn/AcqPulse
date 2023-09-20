import Header from './components/header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesWithLottie from './components/FeaturesWithLottie';
import Faqs from './components/Faqs';
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
      <CustomizedSearch />
    </main>
    <Footer />
    </>
  )
}
