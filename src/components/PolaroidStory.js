import Polaroid from "./Polaroid";

function PolaroidStory() {
    return (
        <div className="mt-4 pt-2 mr-12 ml-2 mb-10 z-50 overflow-y-auto h-[29rem] snap-y snap-mandatory">
            <div className="grid grid-cols-5 h-4/5 snap-center p-10 pb-0 pt-12 mb-0 mx-[1%]">
                <div className="col-span-1">
                    <Polaroid imgSrc={"/profile.png"} description={"University of Illinois Chicago"} rotate={false} month={"Aug '24"} date={"15"} />
                </div>
                <div className="col-span-4 border-4 relative -z-10">
                    <p className="absolute left-24 top-8">lorem ipsum</p>
                </div>
            </div>
            <div className="grid grid-cols-5 h-4/5 snap-center p-10 pb-0 pt-12 mx-[1%]">
                <div className="col-span-4 border-4 relative -z-10">
                    <p className="absolute left-24 top-8">lorem ipsum</p>
                </div>
                <div className="col-span-1">
                    <Polaroid imgSrc={"/day1work.jpg"} description={"Day 1 of my first job"} rotate={true} month={"Feb '24"} date={"23"} />
                </div>
            </div>
            <div className="grid grid-cols-5 h-4/5 snap-center p-10 pb-0 mb-0 pt-12 mx-[1%]">
                <div className="col-span-1">
                    <Polaroid imgSrc={"/graduation.jpg"} description={"Graduation (PES University)"} rotate={false} month={"Oct '23"} date={7} />
                </div>
                <div className="col-span-4 border-4 relative -z-10">
                    <p className="absolute left-24 top-8">lorem ipsum</p>
                </div>
            </div>
            <div className="grid grid-cols-5 h-4/5 snap-center p-10 pb-0 pt-12 mx-[1%]">
                <div className="col-span-4 border-4 relative -z-10">
                    <p className="absolute left-24 top-8">lorem ipsum</p>
                </div>
                <div className="col-span-1">
                    <Polaroid imgSrc={"/opslyft.jpg"} description={"My first internship (Also my 21st birthday)"} rotate={true} month={"Apr '22"} date={"18"} />
                </div>
            </div>
        </div>
    )
}

export default PolaroidStory;