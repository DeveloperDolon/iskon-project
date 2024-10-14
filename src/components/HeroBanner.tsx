import bannerImage from "@/assets/bannerImg.jpg";

const HeroBanner = () => {
  return (
    <div
      className="md:h-[87vh] sm:h-[400px] h-[300px]"
      style={{
        background: `url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default HeroBanner;
