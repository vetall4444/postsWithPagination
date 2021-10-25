import React from "react";
import { connect } from "react-redux";

function Pagination(props) {
  const { countPage } = props;
  return <h1>{countPage}</h1>;
}

const mapStateToProps = (state) => {
  return { countPage: state.countPage };
};
export default connect(mapStateToProps)(Pagination);
