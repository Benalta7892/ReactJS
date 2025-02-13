import PropTypes from "prop-types";
import { Children } from "react";

const Two = ({ children }) => children;

Two.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Two;
