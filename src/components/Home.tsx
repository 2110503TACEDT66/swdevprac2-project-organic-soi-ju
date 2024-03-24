import HomeFooter from "./HomeFooter";

export default function HomeText(){
    return(
        <div className="mb-16">
            <div className="w-[45%] ml-[5%] my-32">
            <p className="mb-2 text-3xl">Why Massage ?</p>
            <p className="text-lg">Massage can reduce stress, increase relaxation, reduce pain and muscular soreness 
                and tension, improve circulation, energy, and alertness, decrease blood pressure 
                and heart rate, and enhance immunological function.</p>
            </div>
            <HomeFooter/>
        </div>
    );
}