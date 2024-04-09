import PropTypes from "prop-types";

const AboutTitle = ({ title }) => {
    return (
        <div>
            <h2 className="md:text-5xl text-3xl font-semibold font-latoFont w-fit mx-auto px-5 pb-3 border-b-2 border-red-800 mt-10 mb-7">
                {title}
            </h2>
        </div>
    );
};

export default AboutTitle;
AboutTitle.propTypes = {
    title: PropTypes.string
}