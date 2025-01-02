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
      In a country divided economically and politically, with a growing number of conflicts. 
        Yemenis seem to be on a path of losing more and more of their livelihoods, drawn into more conflicts and far from finding an end to longstanding ones.
        Purchasing power in the IRG areas is steadily declining, 
        while the Houthis are <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/brokering-ceasefire-yemens-economic" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>accused of obstructing international humanitarian efforts </a>
        by arresting more UN and diplomatic staff. To understand how more than 18 million Yemenis are in need of humanitarian aid today, 
        the purchasing power of one unit of a basic food basket has been tracked over the past decade.
        A household of 4 needs 10 baskets per month to meet the minimum caloric intake. 
        In 2014, an average family could afford 10 baskets with one third of their income (estimated at 60,000 Riyals).
        Today, they can afford only one under IRG control and four under Houthi control, 
        assuming they received their salaries regularly in the first place.
      </p>
       <LineChart3 />
      <p>
       “The combined hunger-humanitarian crisis does not result from a lack of basic goods […]. 
      Rising prices have been the primary problem since 2018”, <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/brokering-ceasefire-yemens-economic" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'> qouting the International Crisis Group</a>. This situation has been largely driven by actions taken by the Houthis and the IRG to undermine each other economically, but to undermine the very ability of Yemenis to survive. 
      </p>
      <p>
      <i>This draft report has been created by Muna Turki as a sample to apply for DW data journalism position. Please visit the following Github repository for all relevant files for creating this material:  <a href="https://github.com/MunaTurki/Report_1" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>https://github.com/MunaTurki/Report_1</a></i>
      </p>

      </article>
      </div>

     
     </div>
    </section>
 
    </>

  );
}

export default YemenisFaring;
