import React from "react";

const About = () => {
  const skiills =[
    {name:"UI & UX Designing",image:"/src/assets/ruler-pen.png" },
    {name:"WEB DEVELOPMENT",image:"/src/assets/code.png" },
    {name:"MOBILE DEVELOPMENT",image:"/src/assets/android.png"},
    {name:"WEB SCRAPING WITH PYHTON",image:"/src/assets/python-svg.png"},
    
  ]
  return (
    <div className="py-10 md:10px px-7  md:mt-[-18rem] mt-[-10rem]">
      <h1 className="text-3xl text-purple-600 font-semibold mt-5">About me:</h1>
      <p className="my-5 leading-[2] md:w-2/3">
        Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI
        designer, and Mobile developer. I jhave honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </p>
      <div className="md:flex md:items-center my-7 ">
        <div className="text-8xl text-purple-600">5+</div>
        <p className="text-white text-2xl md:ml-5">Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.</p>
      </div>

      {/* skills */}

      <div className="flex flex-col md:flex-row md:items-center justify-end border pr-10  ">
        {skiills.map((skill,index) =>(
          <div key={index} className="md:w-[256px] md:h-[254px] bg-slate-400 hover:bg-purple-600 md:m-3 my-3 p-5 flex flex-col items-baseline justify-end shadow-sm">
            <img src={skill.image} alt={skill.name} />
            <p className="text-white text-2xl mt-3 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
