import React from "react";
import { connect } from "react-redux";
import "./pagination.css";

const counterPages = (countItems) => {
  const countPage = Math.ceil(countItems / 10);
  const pages = [];
  for (let i = 1; i < countPage + 1; i++) {
    pages.push(<p key={i}>{i}</p>);
  }
  return pages;
};

function Pagination(props) {
  const { countItems } = props;
  const pagesItems = counterPages(countItems);
  return <div className="paginate">{pagesItems}</div>;
}

const mapStateToProps = (state) => {
  return { countItems: state.countPage };
};
export default connect(mapStateToProps)(Pagination);
