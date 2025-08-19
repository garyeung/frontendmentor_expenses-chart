interface totalProps{
    amount: number,
    compare: string
}
function Total(props:totalProps){

    return(
        <div className="flex justify-between text-myMediumBrown border-myCream border-t-2 pt-5 my-4">
            <div className="">
            <h2 className="capitalize text-sm">Total this month</h2>
            <p className="text-myDarkBrown text-3xl sm:text-4xl font-bold">${props.amount}</p>
            </div>
            <div className="text-right flex flex-col justify-end">
                <p className="text-myDarkBrown text-sm font-bold">{props.compare}</p>
                <h3 className="text-sm ">from last month</h3>
            </div>
        </div>
    );
}

export default Total;