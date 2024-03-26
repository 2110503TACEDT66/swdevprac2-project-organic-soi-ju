import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Banner(){
    return(
        <div>
            <div className="w-full my-3 relative flex flex-row">
                <div className="w-6/12 h-auto relative ml-3">
                    <Image src={"/images/massage1.png"} alt="massage" width={600} height={400} priority objectFit='cover' sizes="100vw"
                    className="w-full h-full"/>
                    <p className="z-20 ml-3 p-10 left-0 top-0 text-5xl absolute text-james font-light">Burn your Spine</p>
                </div>
                <div className="w-3/12 flex flex-col relative justify-between ml-3">
                    <div className="w-full h-[49%] relative">
                        <Image src={"/images/massage2.png"} alt="massage" width={300} height={200} sizes="100vw"
                        className="w-full h-full"/>
                        <p className="z-20 absolute ml-1 px-14 bottom-10 right-0 text-2xl text-white font-light">Trans fat</p>
                        <p className="z-20 absolute ml-3 px-5 my-3 bottom-0 right-0 text-2xl text-white font-light">to your skin</p>
                    </div>
                    <div className="w-full h-[49%] relative">
                        <Image src={"/images/massage3.png"} alt="massage" width={300} height={200} sizes="100vw"
                        className="w-full h-full"/>
                        <p className="z-20 absolute ml-1 px-2 py-5 bottom-8 right-126 text-2xl text-white font-light">Herone Essence</p>
                        <p className="z-20 absolute ml-3 px-0 py-5 bottom-0 right-126 text-2xl text-white font-light">Calm yourself down</p>
                    </div>
                </div>
                <div className="w-3/12 h-auto mx-3 relative">
                    <Image src={"/images/massage4.png"} alt="massage" width={300} height={400} sizes="100vw"
                    className="w-full h-full"/>
                    <p className="z-20 absolute ml-3 px-8 py-5 top-0 left-0 text-3xl text-white font-light">Scent of CO2</p>
                </div>
            </div>
            <div className="mt-5 w-full flex flex-col items-center justify-center text-primary">
                Discover More
                <ExpandMoreIcon fontSize="large"/>
            </div>
        </div>
        
    );
}