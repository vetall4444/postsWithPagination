import React from "react";
import { connect } from "react-redux";

function Pagination(props) {
  const { countItems } = props;
  const countPage = Math.ceil(countItems / 10);
  const pages = [];

  for (let i = 1; i < countPage + 1; i++) {
    pages.push(<p>{i}</p>);
  }
  return <div>{pages}</div>;
}

const mapStateToProps = (state) => {
  return { countItems: state.countPage };
};
export default connect(mapStateToProps)(Pagination);
