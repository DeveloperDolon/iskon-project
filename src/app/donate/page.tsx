"use client";
import MyContainer from "@/components/MyContainer";
import donateImage from "../../assets/self.jpg";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import "./style.css";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import userIcon from "../../assets/userIcon.png";
import CourseCard from "@/components/HomeComponent/CourseCard";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10
    }
};

const page: React.FC = () => {
    const [currentValue, setCurrentValue] = useState<Number>(0);
    const [hoverValue, setHoverValue] = useState<Number>(0);
    const stars = Array(5).fill(0);


    const handleClick = (value: number) => {
        setCurrentValue(value);
    }

    const handleMouseOver = (newHoverValue: number) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(0);
    }

    return (
        <>
            <MyContainer>
                <div className="grid relative md:grid-cols-2 grid-cols-1 gap-10 md:mt-14 mt-12 border-b border-black pb-16 font-latoFont">
                    <div className="image-container border overflow-hidden">
                        <Image
                            className="w-full h-full border donate-img hover:scale-110 duration-200 transition-all"
                            src={donateImage}
                            alt="Zoomable Image"
                        />
                    </div>

                    <div>
                        <p className="md:text-2xl text-xl font-bold text-blue-500 font-latoFont">Donate Us...</p>
                        <div className="flex gap-5 items-center">
                            <p className="md:text-xl text-lg font-semibold font-latoFont">Enter Your Donation Amount: </p>

                            <div className="flex items-center gap-2">
                                <input type="number" className="border-2 font-latoFont rounded-lg md:text-lg text-base text-center font-bold234343 md:w-28 w-24 border-black py-3 px-2" />
                                <FaBangladeshiTakaSign className="md:text-xl text-lg" />
                            </div>

                            <button className="md:text-xl text-lg font-bold bg-blue-400 text-white md:py-2 py-1 md:px-4 px-3 hover:opacity-80 duration-300 transition-all rounded-xl">Pay Now</button>
                        </div>
                    </div>
                    <div className="bg-yellow-500 md:w-36 w-32 h-1 absolute -bottom-1"></div>
                </div>

                <h5 className="font-latoFont md:text-xl text-lg font-semibold mt-7">Reviews :</h5>

                <div className="md:mt-10 mt-7">
                    <div className="flex gap-7">
                        <Image className="rounded-full md:w-16 w-14 md:h-16 h-14" src={userIcon} alt="User Icon" />

                        <div className="space-y-4">
                            <p className="font-latoFont md:text-xl text-lg italic">Your review is awaiting approval</p>

                            <div className='w-fit' style={styles.container}>
                                <div style={styles.stars} className="">
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={24}
                                                // onClick={() => handleClick(index + 1)}
                                                // onMouseOver={() => handleMouseOver(index + 1)}
                                                // onMouseLeave={handleMouseLeave}
                                                color={5 > index ? colors.orange : colors.grey}
                                                style={{
                                                    marginRight: 10,
                                                    cursor: "pointer"
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>

                            <p className="md:text-lg text-base font-latoFont">This is my review....</p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-10 mt-7 border border-gray-500 md:p-7 p-5 rounded">
                    <h3 className="md:text-2xl text-xl font-latoFont">Add a review</h3>
                    <p className="md:text-base text-sm md:py-5 py-4 font-latoFont">Your email address will not be published. Required fields are marked*</p>

                    <div className="flex gap-5 items-center md:pb-5 pb-4">
                        <p className="font-latoFont md:text-xl text-lg ">Your Rating * </p>
                        <div className='w-fit' style={styles.container}>
                            <div style={styles.stars} className="">
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                            style={{
                                                marginRight: 10,
                                                cursor: "pointer"
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <form>
                        <label htmlFor="" className="md:text-xl text-lg font-latoFont">Your Review *</label> <br />
                        <textarea rows={5} className="w-full font-latoFont px-5 py-3 border-gray-500 rounded-md border mt-3" />

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                            <div>
                                <label htmlFor="" className="font-latoFont md:text-lg text-base">Name * </label>
                                <input type="text" required className="font-latoFont block w-full px-5 py-3 mt-2 border border-gray-400 rounded-md" placeholder="Enter your name" />
                            </div>

                            <div>
                                <label htmlFor="" className="font-latoFont md:text-lg text-base">Email * </label>
                                <input type="email" required className="font-latoFont block w-full px-5 py-3 mt-2 border border-gray-400 rounded-md" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-5">
                            <input type="checkbox" className="md:h-5 md:w-5 h-3 w-3" />
                            <span className="md:text-lg text-base font-semibold">Save my name, email, and website in this browser for the next time I comment.</span>
                        </div>

                        <button type="submit" className="font-latoFont font-semibold uppercase md:text-lg text-base mt-8 bg-blue-700 text-white md:py-2 py-1 md:px-4 px-3 rounded-full hover:opacity-60 transition-all duration-300">Submit</button>
                    </form>
                </div>
                <div className="border-t-2 pt-2">
                    There will be some feature in future.
                </div>
            </MyContainer>
        </>
    );
};

export default page;