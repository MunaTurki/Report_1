
const Hero = () => {
  return (
    <>
   <section id="home"
   className="flex flex-col justify-center gap-10  bg-red-50" >
    <div className="relative  flex  flex-col justify-center items-center w-full p-10" >

     <h1 className="text-xl font-palanquin font-bold mb-2">
     <span id="text1" className=" text-lg xl:whitespace-nowrap relative "> Losers and Winners in the Yemeni Economic Warfare </span>
     </h1>
    
     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1  ">
      <p>
      March marks 10 years of the regional-scale conflict in Yemen. A decade of proxy/civil war on several fronts,
      resulting in what has been widely described as one of the largest humanitarian crises of the 21st century.
      The UN says more than half of the Yemeni population today is <a href="https://news.un.org/en/story/2024/09/1154271" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>dependent on aid.</a>
      </p>
      <p>
      The UN, experts and available data suggest that the lesser-known economic conflict has taken
       the heaviest toll on Yemenis, contributing through mal-nutrition and preventable diseases to more <a href="https://www.undp.org/yemen/publications/assessing-impact-war-yemen-pathways-recovery" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>deaths</a> than the armed conflict. In this story, we follow the timeline of the multilateral economic conflict. Is it the decisive battlefront? And how are Yemenis paying dearly for it?
      </p>
      </article>
     </div>
    </div>
    </section>

   </>
  );
}

export default Hero;
