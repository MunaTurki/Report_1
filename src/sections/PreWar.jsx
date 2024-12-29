import PieChart from "../Component/PieChart";

const PreWar = () => {
  return (
<>
  <section id="home"
    className="flex flex-col justify-center gap-10  bg-red-50" >
   <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
      <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative">  Till 2014 - Pre-war Economy of Yemen  </span>
      </h1>

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 ">
      <p>
      The Yemeni economy is usually described as a hydrocarbon under-developed economy with a huge public sector. 
      Up till 2014, oil revenues were contributing to almost half of the government budget. 
      A stunning figure of 80% of exports are centered around oil while <a href="https://reliefweb.int/report/yemen/food-affordability-conflict-torn-yemen-light-ukraine-war-2023?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>90% of food demand</a> is imported.  
      </p>
      </article>
     </div>

     
      <PieChart />
   

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1">
      <p>
      Transitional development plans were promised under the regime of Ali Abdullah Saleh. Saleh,
      who ruled unified Yemen since 1990, is <a href="https://digitallibrary.un.org/record/788246?v=pdf" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>accused</a> of corruption and deepening divisions. 
      The two and a half decades leading up to 2015 were anything but stable, with a major civil war in 1994 between the newly unified north and south,
      six wars with the Houthis in the north (2004-2010), and a national war against al-Qaeda in the south that intensified (2009-2011).
      </p>
      <p>
      In 2011, Saleh was forced to step down as a result of the Arab Spring protests.
      The political transition process was later interrupted by the Houthis, who entered Sana'a in 2014 in alliance with forces loyal to Saleh. 
      Yemen's economy, already consumed by political instability and years of poor governance, was heading toward full-scale conflict, with   <a href="https://documents1.worldbank.org/curated/en/376891524812213584/pdf/125815-WP-PUBLIC-YemenReportFinalAprilcompressed.pdf" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>a third</a> of the population risking food insecurity.
      </p>
      </article>
     </div>
      
   
    </div>
  </section>
 
</>
  );
}

export default PreWar;



