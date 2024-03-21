import Image from "next/image";
import PropTypes from "prop-types";

const CourseCard = ({data}) => {
    return (
        <div className="overflow-hidden rounded-xl shadow-xl  bg-[#dbd8d8]">
           <Image className="w-full" src={"https://selfrealization.in/wp-content/uploads/2023/01/SR.jpg"} width={500} height={500} alt="card_image"/>

           <div className=" p-5">
            <h2 className="md:text-3xl text-2xl font-bold my-2">Self Realization</h2>
            
            <p className="md:text-xl text-lg font-semibold">Online Course</p>
            <p className="md:text-xl text-lg font-semibold py-1">Timing : February 26th onwards</p>
            <p className="md:text-xl text-lg font-bold text-black font-secoundryFont mt-2">Course Fee: <span className="px-3 py-1 bg-red-500 rounded-md text-white md:text-lg text-sm font-serif">300/-</span></p>

            <div className="flex justify-between items-center">
                <button className="mt-7 shadow-gray-400 shadow-lg bg-white md:text-lg text-base font-bold px-5 py-1 rounded-md hover:bg-gray-500 hover:text-white transition-all duration-300">Enroll Now</button>

                <p className="md:text-lg text-base mt-6 italic border border-black px-4 rounded-md">Start Date : Going On</p>
            </div>
           </div>
        </div>
    );
};

export default CourseCard;

CourseCard.propTypes = {
 data: PropTypes.object   
}