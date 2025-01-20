import BarChart from "../Component/BarChar";

const PublicSector = () => {
  return (
<>
  <section id="home"
    className="flex flex-col justify-center gap-10  bg-red-50" >
   <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
      <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative">  Meet a Yemeni Teacher – Public Sector in Yemen  </span>
      </h1>

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8">
      <p>
      The public sector,
      which provides services ranging from education and health care to electricity generation,
      employs about one-third of the country's workforce and about two-thirds of its female workforce.
      Yemeni public sector salaries have not been adjusted for inflation for the past 10 years.
      </p>
      </article>
     </div>


     <BarChart />
    
     

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1">
      <p>
      Public school teachers have traditionally been used as a proxy for the middle class in the context of the Yemeni economy,
      largely due to the availability and simplicity of data. In 2014, meeting basic food needs was already challenging for teachers. 
      Here is how the life of a middle-class Yemeni will deteriorate further.
      </p>
      </article>
     </div>
      
   
    </div>
  </section>
 
</>
  );
}

export default PublicSector;
