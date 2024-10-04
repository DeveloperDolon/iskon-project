import PropTypes from "prop-types";

const MyContainer = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div
      className={`max-w-[1350px] lg:px-0 md:px-5 sm:px-5 px-4 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default MyContainer;

MyContainer.propTypes = {
  children: PropTypes.node,
};
