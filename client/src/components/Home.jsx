import React from "react";
import Typed from 'react-typed';
import img from '../assets/image1.png';

function Home() {
  return (
    <div className="bg-[#1a1a29] h-screen md:px-10 px-7 my-14 py-4 " id="home">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white">
            <h6 className="text-3xl mt-12">Hello,I am</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">Shafy Ali</h1>
            <Typed className='text-xl text-purple-400'
                    strings={['Mern Stack Developer', 'React Developer', 'Node Developer', 'JavaScript']}
                    typeSpeed={100}
                    loop = {true}
                    backSpeed={100}

                />
                <div className="mt-5">
                  <button className="btn transition-all duration-500 rounded bg-purple-700 text-white hover:bg-white py-2 px-4">About me</button>
                  <button className="btn outline py-1.5 px-6 rounded border-none ml-5 text-white">Projects</button>
                </div>
          </div>

           {/* image  */}
           <div className="w-[300px] py-2 order-first md:order-last relative">
            <img  className="rounded-[50%] shadow-lg w-full h-full object-cover object-center" 
            width="300px" height="300px" 
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw" src={img} alt="" />
           
           </div>

        </div>        

      </div>
      {/* divider */}

      <div className="h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block">

      </div>
    </div>
  );
}

export default Home;
