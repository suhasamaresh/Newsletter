import motion from 'framer-motion';
import Categories from './pages/Categories';
import Explore from './pages/Explore'
import Button from '@/app/pages/Button';
import Footer from './pages/Footer';
import Nav from '@/components/Nav';
import RootLayout from './layout';

export default function Home() {
  return (
    <section id='home'>
    <div>
    <section className="bg-black justify-center items-center" >
      <div className="text-center md:pt-[118px] pt-[50px]">
        <img
          src="news1.webp"
          alt="Description of the image"
          className="md:h-[200px] md:w-[200px] mx-auto h-[150px] w-[150px]"
        />
        <h1 className="font-oi text-[#D2B7E5] md:text-6xl text-3xl mt-4 pt-4">
          Dive into
          <br className="pt-5" /> Newsletter <br />
          Nirvana!
        </h1>
      </div>
      <div className="flex justify-center md:space-x-10 space-x-7 pt-10 pb-14">
        <button className="bg-[#B185DB] py-3 px-6 rounded-3xl text-black font-bold text-xl">Explore</button>
        <button className="bg-white py-3 rounded-3xl px-6 font-bold text-xl ">Subscribe</button>
      </div>
    </section>
    <Categories/>
    <Explore/>
    <Button/>
    <Footer/>
    </div>
    </section>
  );
}
