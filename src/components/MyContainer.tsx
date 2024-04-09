import PropTypes from "prop-types";


const MyContainer = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className="max-w-[1350px] lg:px-0 md:px-5 sm:px-5 px-4 mx-auto">
            {children}
        </div>
    );
};

export default MyContainer;

MyContainer.propTypes = {
    children : PropTypes.node
}