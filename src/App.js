import PhotoServices from "./services/service-json";
import React from "react";
const service = new PhotoServices();
function App() {
  service.getPosts().then((items) => console.log(items));
  service.getComments(5).then((items) => console.log(items));

  return <div className="App"></div>;
}

export default App;
