import NavigationBar  from "@/objects/navbar";
import { Rooms } from '@/objects/rooms';

export default function HomePage(){
    return(
        <>
        <NavigationBar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-xl md:text-4xl lg:text-5xl overline decoration-black-500 decoration-solid decoration-5 text-center text-dark p-10">Book Your Next Stay With Us!</h2>
            <div className="container-fluid rounded-lg border-1 shadow-xl sm:p-6 md:p-8 lg:p-10 bg-[#18019E] theme-dark">
                <Rooms />
            </div>
        </div>
        </>
    );
}