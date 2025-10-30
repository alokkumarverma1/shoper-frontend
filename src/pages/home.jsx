import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
 


 useEffect(() => {
  if(window.innerWidth < 600) return;
  const ass = gsap.context(() => {

    gsap.from(".left-data", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.to(".name", {  
      y: -100, 
      x:30,    
      delay: 1.5,
      duration: 1,
      fontSize: "160px",
      ease: "power3.out",
    });
         gsap.from(".home-about", {  
      y: 70,     
      opacity:0,
      delay: 1.7,
      duration: 1,
      ease: "power3.out",
    });
      gsap.from(".home-item", {  
      y: 70,     
      opacity:0,
      delay: 1.7,
      duration: 1,
      ease: "power3.out",
    });

    // scroll area
    gsap.from(".store-img",{
      y:80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".store-img",
        scroller:"body",   
        start:"top 60%", 
        end:"top 30%",
        scrub:2, 
      }
    })
      gsap.from(".store-data",{
      y:80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".store-data",
        scroller:"body",   
        start:"top 60%", 
        end:"top 30%",
        scrub:2, 
      }
    })

     gsap.from(".store-img1",{
      y:80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".store-img1",
        scroller:"body",   
        start:"top 60%", 
        end:"top 30%",
        scrub:2, 
      }
    })
      gsap.from(".store-data1",{
      y:80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".store-data1",
        scroller:"body",   
        start:"top 60%", 
        end:"top 30%",
        scrub:2, 
      }
    })

     gsap.from(".store-img2",{
      y:80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".store-img2",
        scroller:"body",   
        start:"top 60%", 
        end:"top 30%",
        scrub:2, 
      }
    })
      gsap.from(".store-data2",{
      y:80,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".store-data2",
        scroller:"body",   
        start:"top 60%", 
        end:"top 30%",
        scrub:2, 
      }
    })


  });
  return () => ass.revert();
}, []);

  return (
    <>
      <div className="home main-color pb-20  relative min-h-screen w-full flex  sm:flex-row flex-col sm:justify-center items-center overflow-hidden px-4 pt-15  sm:px-0">
       
       <div className="h-full w-full flex  sm:flex-row flex-col-reverse sm:justify-center items-center overflow-hidden">
         <div className="left-data gap-2 relative w-full sm:w-1/2 flex flex-col flex- justify-center items-center  text-center sm:text-left mb-8 sm:mb-0 p-2 sm:p-0">
          <h1 className="name text-[60px] sm:text-[180px] font-bold title">
            Shoper
          </h1>
          <p className="home-about text-sm sm:text-center px-2 sm:px-0 sm:absolute bottom-13">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum beatae eveniet
            optio maiores similique veritatis, quam nam eaque sit exercitationem repudiandae
            
          </p>
            <button
              className=" bg-white sm:absolute shadow-md hover:shadow-lg transition-shadow sm:bottom-0 home-about 
               h-9 w-50 rounded-[10px] text-black"
            >
              Explore
            </button>
        </div>
         <div className="home-img sm:w-150 w-full flex justify-center items-center">
          <img src="homeing.png" alt="" className="w-full h-full" />
         </div>

       </div>

        <div className="down w-full text-balck flex flex-col sm:flex-row sm:justify-around gap-3 sm:gap-0 sm:absolute sm:bottom-10">
          <div className="home-item flex justify-center items-center flex-col">
               <p className="home-item bg-white h-9 w-full sm:w-40 flex justify-center items-center shadow-md hover:shadow-lg rounded-[10px]">
            Best Offers
          </p>
          </div>
           <div className="home-item flex justify-center items-center flex-col">
                  <p className="home-item bg-white h-9 w-full sm:w-40 flex justify-center items-center shadow-md hover:shadow-lg rounded-[10px]">
            24/7 Support
          </p>
          </div>
           <div className="home-item flex justify-center items-center flex-col">
          <p className="home-item bg-white h-9 w-full sm:w-40 flex justify-center items-center shadow-md hover:shadow-lg rounded-[10px]">
            Big Discount
          </p>
          </div>
         
        </div>
      </div>

      {/* Second Section */}
      <div className="home-secend1 main-color sm:h-80 h-130 p-3 sm:p-10 w-full flex flex-col sm:flex-row justify-around items-center">
        <div className="store-img h-full sm:w-80 ">
         <img src="nearshop.png" alt="" className="h-full w-full"/>
        </div>
        <div className="store-data h-full sm:w-100 w-full   text-center flex justify-center sm:p-5 items-center flex-col">
          <h1 className="font-bold sm:text-2xl text-[20px] title">All Nearest Store on Shoper</h1>
          <p className="border-b-2 border-b-orange-600 pb-2">Discover nearby stores and exclusive local deals with Shoper. 
Shop conveniently from trusted sellers in your area and get everything you need — all in one place.
</p>
        </div>
      </div>
      {/* Second Section */}
      <div className="home-secend main-color sm:h-80 h-100 p-3 sm:p-10 w-full flex flex-col-reverse sm:flex-row justify-around items-center">
      <div className="store-data1 h-full sm:w-100 w-full   text-center flex justify-center sm:p-5 items-center flex-col">
          <h1 className="font-bold sm:text-2xl text-[20px] title">Available all trading faishon</h1>
          <p className="border-b-2 border-b-orange-600 pb-2">Stay ahead of the style curve with the latest fashion trends, handpicked for you. 
From clothing to accessories, explore top deals and elevate your look effortlessly.
</p>
        </div>
          <div className="store-img1 h-full sm:w-80 ">
         <img src="trandingfaishon.png" alt="" className="h-full w-full"/>
        </div>
      </div>

     {/* Second Section */}
      <div className="home-secend main-color mb-30 sm:h-80 h-100 p-3 sm:p-10 w-full flex flex-col sm:flex-row justify-around items-center">
          <div className="store-img2 h-full sm:w-80 ">
         <img src="fastdelivery.png" alt="" className="h-full w-full"/>
        </div>
       <div className="store-data2 h-full sm:w-100 w-full   text-center flex justify-center sm:p-5 items-center flex-col">
          <h1 className="font-bold sm:text-2xl text-[20px] title">Fast & Reliable Delivery</h1>
          <p className="border-b-2 border-b-orange-600 pb-2">Enjoy lightning-fast deliveries right to your doorstep. 
With Shoper’s trusted partners, your orders arrive on time — every time.
</p>
        </div>
      </div>
    </>
  );
}

export default Home;
