import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/actions";
import "./pagination.css";

const counterPages = (countItems) => {
  const countPage = Math.ceil(countItems / 10);
  const pages = [];
  for (let i = 1; i < countPage + 1; i++) {
    pages.push(i);
  }
  return pages;
};

function Pagination(props) {
  const countItems = useSelector((state) => state.countPage);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const pagesItems = counterPages(countItems);
  return (
    <ul className="paginate uk-pagination">
      {pagesItems.map((item) => {
        const classActive = item === currentPage ? "uk-active active" : "";
        return (
          <li key={item} className={classActive}>
            <span onClick={() => dispatch(loadPosts(item))}>{item}</span>{" "}
          </li>
        );
      })}
    </ul>
  );
}

export default connect()(Pagination);
