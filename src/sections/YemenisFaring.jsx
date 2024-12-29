import LineChart3 from "../Component/LineChart3";

const YemenisFaring = () => {
  return (
    <>
    <section id="home"
     className="flex flex-col justify-center gap-10  bg-red-50" >
     <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
      <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative"> Now- How are Yemenis faring? </span>
      </h1>

      <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1">
    
      <p>
      To track how the livelihood of Yemenis has changed through the last decade, 
      we use a unit of a basic food basket. A household of 4 will need 10 baskets per month to satisfy minimum caloric intake.
      An average teacher was able to afford 10 baskets with one-third of their income in 2014 (estimated at 60,000 Riyals). 
      Today, they can only afford one under IRG control and four under Houthi control,
      assuming that they received their wages regularly to start with.
      </p>
      <p>
      <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/brokering-ceasefire-yemens-economic" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>According to the International Crisis Group </a>
       “The combined hunger-humanitarian crisis does not result from a lack of basic goods […]. 
      Rising prices have been the primary problem since 2018”. This situation has been largely driven by actions taken by the Houthis and the IRG to undermine rivals, but to undermine the very ability of Yemenis to survive. 
      </p>
     
      </article>
      </div>

      <LineChart3 />
     </div>
    </section>
 
    </>

  );
}

export default YemenisFaring;
