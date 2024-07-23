function Polaroid({imgSrc, description, rotate, date, month, year}) {
    return (
        <div className={`w-48 h-64 bg-white border-2 scale-110 relative ${rotate ? "rotate-[10deg] origin-top-right" : "rotate-[-10deg] origin-top-left translate-x-4"}`}>
            <img className={`absolute w-44 h-44 left-1/2 -translate-x-1/2 mt-2 bg-bottom object-cover`} src={imgSrc}></img>
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-44 text-center text-xs polaroid-text">{description}</div>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-32 h-12 bg-orange-500 text-center opacity-30">
                <span className="font-sans text-slate-900">{year}</span>
            </div>
            <Calendar rotate={rotate} month={month} date={date} year={year}/>
        </div> 
    )
}

function Calendar({rotate, month, date}) {
    return (
        <div className={`absolute flex flex-col w-20 h-20 bg-white rounded-lg ${rotate ? "rotate-[-10deg] left-[-3rem]" : "rotate-[10deg] right-[-3rem]"}`}>
            <div className="w-full h-[40%] rounded-t-lg bg-red-700 text-white text-center font-sans font-bold text-xs p-2">{month}</div>
            <div className="grow font-sans font-bold relative">
                <p className="absolute left-1/2 top-1/2 text-sm -translate-y-1/2 -translate-x-1/2">{date}</p>
            </div>
        </div>
    )
}

export default Polaroid;