"use client";
import MyContainer from "@/components/MyContainer";
import donateImage from "../../assets/self.jpg";
import React from "react";
import Image from "next/image";
import "./style.css";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const page: React.FC = () => {

    return (
        <>
            <MyContainer>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mt-14 mt-12">
                    <div className="image-container border overflow-hidden">
                        <Image
                            className="w-full h-full border donate-img hover:scale-110 duration-200 transition-all"
                            src={donateImage}
                            alt="Zoomable Image"
                        />
                    </div>

                    <div>
                        <p className="md:text-2xl text-xl font-bold text-blue-500">Donate Us...</p>
                        <div>
                            <p>Enter Your Donation Amount: </p>

                            <input type="number" />
                            <FaBangladeshiTakaSign className="md:text-2xl text-xl"/>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </>
    );
};

export default page;