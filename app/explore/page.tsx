import Image from "next/image";
import Categories from "@/components/Category";
import Hi from "@/components/Hi";
import CardList from "@/components/CardList";
import Pagination from "@/components/Pagination";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
const featured = () => {
  return (
    <div className="mt-8">
      <h1 className="md:text-[76px] text-[46px] md:pl-20 md:pr-20 lg:pr-40 lg:pl-40 pl-10 pr-10">
        <b> Hey!, This is Suhas.</b> Discover my stories and ideas here.
      </h1>
      <div className="mt-30 xl:flex items:center gap-[50px] md:pl-20 md:pr-20 lg:pr-40 lg:pl-40 pl-10 pr-10">
        <div className="flex-1 h-[350px] relative ">
          <Image
            src="/wah.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 flex-col gap-[20px]">
          <h1 className="text-[40px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="text-[20px] font-light .text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            dolorem debitis commodi ipsam iure, repudiandae dolorum voluptas
            recusandae, autem nam voluptates ad quidem impedit similique
            distinctio voluptate consequatur tenetur iste.
          </p>
          <button className="py-2 px-4 w-max border-none mt-8 bg-black rounded-md text-gray-300">
            Read more!
          </button>
        </div>
      </div>
      <Categories />
      <div className="lg:flex gap-[30px]">
        <CardList />
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default featured;
