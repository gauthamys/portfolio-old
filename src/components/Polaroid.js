function Polaroid({imgSrc, description}) {
    return (
        <div className="w-48 h-64 bg-white border-2 relative rotate-[-10deg]">
            <div className={`absolute w-44 h-44 left-1/2 -translate-x-1/2 mt-2 ${imgSrc} bg-bottom`}></div>
            <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-44 text-center font-bold polaroid-text">{description}</div>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-32 h-12 bg-orange-500 opacity-30"></div>
        </div> 
    )
}

export default Polaroid;