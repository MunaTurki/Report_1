import { yemenMap } from "../assets";

const InitialLoses = () => {
  return (
    <>
    <section id="home"
    className="flex flex-col justify-center gap-10  bg-red-50" >
    <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
     <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative ">  2015 - The Initial Loses  </span>
     </h1>

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1   ">
      <p>
      On March 26, 2015, a broad coalition of Arab countries, backed by Western allies and led by Saudi Arabia, 
      launched a military intervention in Yemen. The intervention came at the request of Yemen's caretaker president,
      Abd Rabbuh Mansur Hadi, who had been ousted by the Iranian-backed Houthis. The Houthis, who had formed an alliance with Saleh loyalists, 
      used the oil subsidy cuts introduced by Hadi's transitional government as an excuse to call their already underway military expansion from their base in Saada, 
      the northernmost governorate, a "revolution". 
      </p>
      <p>
      Coalition intervention took the form of airstrikes, military training and support for government forces and their allies.
      A naval blockade was also imposed to enforce a UN-mandated arms embargo on both the Houthis and Saleh. 
      By the end of 2015, the country was fragmenting into zones of varying territorial control. Frontline fighting,
      which quickly shifted from Aden in the south to central Yemen,
      severely damaged infrastructure. Oil and gas exports grounded to a halt. 
      Imports, including critical supplies of food, fuel, and medicine, were reduced and delayed by Saudi restrictions. By the turn of 2016, 
      the front lines roughly separated the north from the south and have largely persisted to this day.
      
      </p>
      </article>
     </div>

      <img 
      className="max-w-full py-5"
      src= {yemenMap}
      alt="map" />
      
  
     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1 ">
      <p>
      During 2015, the Central Bank of Yemen remained neutral which allowed for fiscal stability.
      However, government revenues <a href="https://reliefweb.int/report/yemen/yemen-socio-economic-update-issue-12-march-2016-enar" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>fell sharply</a>, both due to the suspension of exports and international financing, 
      as well as a decline in tax revenues.  Overall, the GDP decreased by half from 2014 to 2015, 
      and this <a href="https://www.undp.org/yemen/publications/assessing-impact-war-yemen-pathways-recovery" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>loss has never been really recovered</a> since. The Central Bank, 
      which could not raise enough revenue, struggled to ensure imports of basic goods and payroll. 
      </p>
      <p>
      Teachers, along with all Yemenis, will live through the interruption of the school year and payroll. 
      Fuel shortages will make it difficult to maintain electricity in major cities, and food shortages will be felt for the first time.
      Many school buildings will be lost to shelling and air stricks along the front line or will be used to house displaced people.
      </p>
      </article>
     </div>

    </div>
   
    </section>
 
    </>
  );
}

export default InitialLoses;

