import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App-v3";
// import StarRating from "./StarRating";
// import { useState } from "react";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie will rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={23} color="red" className="test" defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);
