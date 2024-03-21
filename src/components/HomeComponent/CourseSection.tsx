import MyContainer from "../MyContainer";
import CourseCard from "./CourseCard";


const CourseSection = () => {
    return (
        <MyContainer>
            <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold text-blue-400 font-secoundryFont md:mt-16 sm:mt-14 mt-12 text-center">Our Courses</h1>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-8 md:mt-10 mt-7">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </MyContainer>
    );
};

export default CourseSection;