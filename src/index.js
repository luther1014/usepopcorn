import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRatings from "./StarRatings";

function Test() {
  const [rating, setRating] = React.useState(0);
  function handleSetRatings(rating) {
    setRating(rating);
  }
  return (
    <div>
      <StarRatings maxRating={10} onSetRatings={handleSetRatings} />
      <p>This movie was rated {rating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRatings
      maxRating={5}
      messages={["Terrible", "Bad", "Average", "Good", "Excellent"]}
    />
    <StarRatings maxRating={10} color="red" size={36} defaultRating={7} />
    <StarRatings />
    <Test />
  </React.StrictMode>
);
