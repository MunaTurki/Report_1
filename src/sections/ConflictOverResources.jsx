import LineChart2 from "../Component/LineChart2";
import StackedBarChart from "../Component/StackBar";

const ConflictOverResources = () => {
  return (
    <>
    <section id="home"
    className="flex flex-col justify-center gap-10  bg-red-50" >
    <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
      <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative">  2021 -2022 The Conflict Over Resources  </span>
      </h1>

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1">
        <p>
        Beginning in 2021, the Houthis pushed attacks on gas-rich Marib in an attempt to gain fuel resources and revenues, 
        but failed to seize the Wadi district where the oil facilities are located. In response to the multiple offenses, the IRG, 
        through the coalition, will <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/brokering-ceasefire-yemens-economic" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>stop</a> approving fuel shipments to Houthi areas several times, forcing the Houthis to import through IRG-controlled ports. 
        The tightened blockade led to high prices and shortages in the Houthi-controlled areas, drawing further <a href="C:\Users\USER\Downloads\Torture-in-slow-motion (1).pdf" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>criticism</a> of the IRG and the coalition. 
       </p> 
        <p>
        The IRG was able to divert revenues from most imports to its territories,
        although the de facto forces controlling different parts of the south and claiming self-control made it <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/brokering-ceasefire-yemens-economic" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>unclear</a> how much of these revenues reached the public budget.
        Meanwhile, the government <a href="https://www.aa.com.tr/en/middle-east/yemen-government-accuses-houthis-of-causing-fuel-crisis/2525307"  className='text-gray-800 underline'>accuses</a> the Houthis of inflating prices and running black markets during fuel shortages, in order to compansate for losses in revenues and to finance their regime and armed forces. Data suggests that fuel has always been more expensive in Houthi territories regardless of import restrictions.
        </p>
      </article>
    </div>

      <LineChart2 />

      <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1">
        <p>
        After a UN-sponsored truce in April of 2022, 
        restrictions were lifted on Houthi controlled ports.
        Imports shifted largely to flow into the country from the west coast instead of the IRG-controlled southern ports. 
        </p>
        <p>
        In October 2022, the Houthis will <a href="https://www.reuters.com/world/middle-east/yemeni-government-forces-intercept-houthi-drones-attacking-southern-oil-terminal-2022-10-21/" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>begin</a> attacking the oil terminals and ports used by the government for exports.
        By attacking government-controlled ports,
        they will be forcing more imports to flow through ports on the west coast under their control. 
        </p>
       <p>
       Oil exports never recovered to pre-war levels, but they were the means by which the IRG collected the revenue it needed to continue issuing payrolls and running services between 2018 and 2022.
       The Houthis didn't manage to control oil or gas producing terretorries, but they were determined to prevent the IRG from exporting any of it,
       even to their territories.  
      </p>
      </article>
      </div>
     
      <StackedBarChart />  

    </div>
    </section>
    </>

  );
}

export default ConflictOverResources;


