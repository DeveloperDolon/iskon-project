import PropTypes from "prop-types";


const MyContainer = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className="max-w-7xl md:px-0 sm:px-5 px-4 mx-auto">
            {children}
        </div>
    );
};

export default MyContainer;

MyContainer.propTypes = {
    children : PropTypes.node
}