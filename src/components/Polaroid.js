function Polaroid({imgSrc, description, rotate}) {
    return (
        <div className={`w-48 h-64 bg-white border-2 relative origin-top-right ${rotate ? "rotate-[10deg]" : "rotate-[-10deg]"}`}>
            <div className={`absolute w-44 h-44 left-1/2 -translate-x-1/2 mt-2 ${imgSrc} bg-bottom`}></div>
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-44 text-center text-xl font-bold polaroid-text">{description}</div>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-32 h-12 bg-orange-500 opacity-30"></div>
            <Calendar rotate={rotate} month={"Dec"} date={19}/>
        </div> 
    )
}

function Calendar({rotate, month, date}) {
    return (
        <div className={`absolute flex flex-col w-24 h-24 bg-white rounded-lg ${rotate ? "rotate-[-10deg] left-[-3rem]" : "rotate-[10deg] right-[-3rem]"}`}>
            <div className="rounded-t-lg w-full h-[40%] bg-red-700 text-white text-center font-sans font-bold text-sm p-2">{month}</div>
            <div className="grow text-2xl font-sans font-bold relative">
                <p className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">{date}</p>
            </div>
        </div>
    )
}

export default Polaroid;