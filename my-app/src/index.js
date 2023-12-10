import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Subham- Custom script for fav-tab message
function changeTabText(newText) {
  document.title = newText;
}

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    changeTabText("We miss you!");
  } else {
    changeTabText("Welcome Back to Barsane");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
