import LineChart from "../Component/LineChart";

const MassiveInflation = () => {
  return (
<>
  <section id="home"
    className="flex flex-col justify-center gap-10  bg-red-50" >
   <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
      <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative">  2017 – 2020  The Massive Inflation   </span>
      </h1>

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat leading-8">
      <p>
      The loss of oil revenues, tax revenues,
      and general mistrust in the fragmented economy led to a severe deficit in the public budget. 
      Mainly to finance imports and pay the huge public sector, the Central Bank in Aden began a massive expansion of its overdraft with the government by printing and issuing new money, 
      leading to massive inflation and further devaluation of the national currency.
      </p>
      <p>
      Gradually, many services and products were priced in hard currencies such as Saudi Riyals and U.S. 
      Dollars. Both governing bodies failed to stabilize funding for basic services such as electricity, water, and health care. 
      Basic goods, including staple foods, were out of reach for many Yemenis. 
      Many of them now don't have stable wages.
      </p>
      <p>
      In December 2019, the Houthis announced a <a href="https://www.aljazeera.net/ebusiness/2019/12/25/%D8%A7%D9%84%D8%AD%D9%88%D8%AB%D9%8A%D9%88%D9%86-%D9%8A%D9%85%D9%86%D8%B9%D9%88%D9%86-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A8%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A9" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>ban</a> on the newly printed Yemeni Riyal notes,
      limiting transactions to those involving the pre-2016 prints. Since the IRG only controls less than a quarter of consumer markets,
      this tactical move flooded the IRG economy with the new prints spiraling further inflation. 
      </p>
      </article>
     </div>

     <LineChart />

     <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1 ">
      <p>
      Civil servants whose incomes remain fixed 
      at pre-war rates - including teachers - under IRG control
      will feel the exponential decline in their purchasing power in real time.
  
      </p>
      </article>
     </div>

     
   </div>
  </section>
 
</>
  );
}

export default MassiveInflation;



