import React from "react";
import PhotoServices from "./services/service-json";
const service = new PhotoServices();
function App() {
  service.getPosts().then((data) => {
    console.log(data);
  });
  service.getComments(4).then((data) => {
    console.log(data);
  });
  return <div className="App"></div>;
}

export default App;
