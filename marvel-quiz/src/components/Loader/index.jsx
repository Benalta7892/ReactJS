/* eslint-disable react/prop-types */

const Loader = ({ loadingMsg, styling }) => {
  return (
    <>
      <div className="loader"></div>
      <p style={styling}>{loadingMsg}</p>
    </>
  );
};
export default Loader;
