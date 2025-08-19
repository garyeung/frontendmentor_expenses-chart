export interface balanceProps {
    amount: number,
    logo: string
}

function Balance(props: balanceProps){

    return (
    <>
    <div className="bg-mySoftRed text-white rounded-2xl flex justify-between p-5">
        <div>
           <h6 className="text-xs capitalize">my balance</h6>
           <p className="font-bold text-lg sm:text-xl md:text-2xl mt-1 ">${props.amount}</p>
        </div>
        <div className="flex justify-center">
        <img className="w-4/5" src={props.logo} alt="logo"/>
        </div>
    </div>
    </>);
}

export default Balance;