
export interface barProps {
    id: number,
    amount: number,
    day: string,
    active: boolean
    hover: boolean
}
function Bar({props,handleActive, handleHover}:{
    props:barProps, 
    handleActive: (id:number) => void,
    handleHover: (id:number) => void,
})
    {

  const height = Math.round(props.amount/100*100) + '%';

  return (
    <div className="flex flex-col justify-end gap-2 items-center w-fit ">
      <div className={`bg-myDarkBrown text-white text-xs md:text-sm p-1 md:px-2 rounded-md font-bold transition-opacity ${props.hover? "opacity-100": "opacity-0"}`}>
        <span>${props.amount}</span>
      </div>
      <div
        className={`w-8 md:w-10 ${props.active ? 'bg-myCyan' : 'bg-mySoftRed'} rounded-md group transition-opacity ${props.hover? "opacity-70": "opacity-100"}`}
        style={{height}}
      onMouseEnter={() => handleHover(props.id)}
      onMouseLeave={() => handleHover(props.id)}
      onClick={() => handleActive(props.id)}></div>
      <h6 className="text-myMediumBrown text-sm text-center">{props.day}</h6>
    </div>
  );
}

export default Bar;