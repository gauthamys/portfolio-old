import Polaroid from "./Polaroid";

function PolaroidStory() {
    return (
        <div className="mt-6 mx-20 flex flex-col justify-between">
            <div className="grid grid-cols-6 gap-6 p-10 mx-[10%]">
                <p className="col-span-3">lorem ipsum lorem </p>
                <div className="col-start-5 col-span-2">
                    <Polaroid imgSrc={"bg-profile"} description={"text 1"}rotate={false} />
                </div>
            </div>
            <div className="grid grid-cols-3 p-10 mx-[10%]">
                <div className="col-span-1">
                    <Polaroid imgSrc={"bg-profile"} description={"text 1"} rotate={true} />
                </div>
                <p className="col-span-2 text-center">lorem ipsum</p>
            </div>
            <div className="grid grid-cols-3 p-10 mx-[10%]">
                <div className="col-span-1">
                    <Polaroid imgSrc={"bg-profile"} description={"text 1"} rotate={false} />
                </div>
                <p className="col-span-2 text-center">lorem ipsum</p>
            </div>
        </div>
    )
}

export default PolaroidStory;