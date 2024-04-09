import MyContainer from "@/components/MyContainer";


const page = () => {
    return (
        <>
            <div className="bg-[#007991] h-48 rounded-br-full"></div>

            <MyContainer>
                <form className="md:w-1/2 w-full md:my-10 my-6 flex flex-col gap-5">
                    <div>
                        <label htmlFor="language" className="pb-2 block font-latoFont font-bold">Select your language/আপনার ভাষা নির্বাচন করুন*</label>
                        <select className="block w-full py-2 px-3 border rounded border-gray-500 font-latoFont">
                            <option className="font-latoFont" selected disabled >Choose the language</option> 
                            <option className="font-latoFont" value="eng">English</option>
                            <option className="font-latoFont" value="bn">বাংলা</option>
                        </select>
                    </div>

                    <div className="">
                        <label htmlFor="language" className="pb-2 block font-latoFont font-bold">Select Quiz/কুইজ নির্বাচন করুন*</label>
                        <select className="block w-full py-2 px-3 border rounded border-gray-500 font-latoFont">
                            <option className="font-latoFont" selected disabled >Choose the quiz </option>  
                            <option className="font-latoFont" value="vhagavad gita">Vhagavad Gita/ভগবদ্গীতা</option>
                            <option className="font-latoFont" value="mahavarath">Mahavarath/মহাভারথ</option>
                            <option className="font-latoFont" value="krishan quiz">Krishna Quiz/কৃষ্ণ কুইজ</option>
                            <option className="font-latoFont" value="ramayan">Ramayan/রামায়ণ</option>
                        </select>
                    </div>

                    <div>
                        <button type="submit" className="py-2 px-5 bg-gray-300 md:text-lg hover:bg-gray-600 hover:text-white transition-all duration-300 text-base font-latoFont rounded-lg">Submit</button>
                    </div>
                </form>
            </MyContainer>
        </>
    );
};

export default page;