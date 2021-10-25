import React from "react";
import PostsList from "./components/postsList/postsList";
import Pagination from "./components/pagination/pagination";
function App() {
  return (
    <div className="App">
      <PostsList />
      <Pagination />
    </div>
  );
}

export default App;
