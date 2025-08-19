import Balance from "./Balance";
import { useState } from "react";
import logoURL from '../assets/logo.svg';
import data from '../data.json';
import Bar from "./Bar";
import Total from "./Total";

const fakeMonthlyAmount = [363.53,478.33];

function Chart(){

  const balance = 921.48;
  const total = fakeMonthlyAmount;
  const [barsData, setBarsData] = useState(data.map((item, index) => {
    return {
      ...item,
      active: false,
      hover: false,
      id:index 
    }
  }));

  const thisMonth = total[total.length-1];
  const diff = thisMonth-total[0];
  const compare = (diff >= 0? "+":"-")+(diff/thisMonth*10).toFixed(1)+"%";


  const handleHover = (index:number) => {
    setBarsData((prevBarsData) =>
      prevBarsData.map((bar, i) =>
        i === index ? { ...bar, hover: !bar.hover } : bar
      )
    );
  };

  const handleActive = (index: number) => {
    setBarsData((preBarsData) => 
        preBarsData.map((bar, i) =>
         (i === index)? {...bar, active: !bar.active}: {...bar, active: false}))
  }


  const barList = barsData.map((item) => <Bar key={item.id} props={item} handleActive={handleActive} handleHover={handleHover} />)

    return(
    <div className='w-fit'>
      <Balance amount={balance} logo={logoURL}/>
      <div className="bg-myVeryPaleOrange mt-4 rounded-2xl text-myDarkBrown p-2 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold">Spending - Last 7 days</h1>
          <div className="flex flex-row h-52 md:h-60 justify-between">
           {barList}
          </div>
          <Total amount={thisMonth} compare={compare}/>
      </div>
    </div>
    );
} 

export default Chart;