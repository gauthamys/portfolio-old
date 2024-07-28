import Polaroid from "./Polaroid";

function PolaroidStory() {
    return (
        <div className="mt-4 pt-2 mr-12 ml-0 mb-10 z-50 overflow-y-auto h-[29rem] snap-y snap-mandatory shadow-outer shadow-xl">
            <div className="polaroid-story-container">
                <div className="col-span-1">
                    <Polaroid imgSrc={"/profile.png"} description={"University of Illinois Chicago"} rotate={false} month={"Aug '24"} date={"15"} />
                </div>
                <div className="col-span-4 border-4 relative -z-10 notepad">
                    <p className="absolute left-24 top-8 text-2xl text-blue-600 font-mono">
                        Started my Master's Degree in Computer Science! <br />
                        <span className="polaroid-text text-blue-600">lorem ipsum</span>
                    </p>
                </div>
            </div>
            <div className="polaroid-story-container">
                <div className="col-span-4 border-4 relative -z-10 terminal">
                    <p className="absolute left-24 top-8 text-xl">Started my first Full time job @ IDFC FIRST</p>
                </div>
                <div className="col-span-1">
                    <Polaroid imgSrc={"/day1work.jpg"} description={"Day 1 of my first job"} rotate={true} month={"Feb '24"} date={"23"} />
                </div>
            </div>
            <div className="polaroid-story-container">
                <div className="col-span-1">
                    <Polaroid imgSrc={"/graduation.jpg"} description={"Graduation (PES University)"} rotate={false} month={"Oct '23"} date={7} />
                </div>
                <div className="col-span-4 border-4 relative -z-10 notepad">
                    <p className="absolute left-24 top-8">lorem ipsum</p>
                </div>
            </div>
            <div className="polaroid-story-container mb-6">
                <div className="col-span-4 border-4 relative -z-10 terminal">
                    <p className="absolute left-24 top-8"> lorem ipsum</p>
                </div>
                <div className="col-span-1">
                    <Polaroid imgSrc={"/opslyft.jpg"} description={"My first internship (Also my 21st birthday)"} rotate={true} month={"Apr '22"} date={"18"} />
                </div>
            </div>
        </div>
    )
}

export default PolaroidStory;