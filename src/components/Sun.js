import SunSvg from '../icons8-sun.svg'

function Sun() {
    return (
        <div className={`absolute -z-50 top-6 left-6 animate-sunPath`}>
            <img src={SunSvg} className='w-20 h-20'/>
        </div>
    )
}

export default Sun;