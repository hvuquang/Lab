import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MySection from "./components/MySection";
import MyButton from "./components/MyButton";
import MyComponent from "./components/MyComponent";
import MyInput from "./components/MyInput";

const array = ["First", "Second", "Third"];

const object = {
  first: 1,
  second: 2,
  third: 3,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// exercise 1.3
// const root = ReactDOM.createRoot(document.getElementById("root"));

// function render({second}) {
//   root.render(
//     <main>
//       <MyButton />
//       <MyButton text={second.text} disabled={second.disabled} />
//     </main>
//   );
// }

// render({
//     second: {
//       text: "Second Button",
//       disabled:true,
//     },
// });

root.render(
  <React.StrictMode>
    <App />
    {/* exercise 0 */}
    <p>
      Hello, <strong>JSX</strong>
    </p>
    {/* exercise 0.1  */}
    <div>
      <button />
      <code />
      <input />
      <label />
      <p />
      <pre />
      <select />
      <table />
      <ul />
    </div>
    {/* exercise 0.2 */}
    <section>
      <header>
        <h1>A header</h1>
      </header>
      <nav>
        <a href="item">Nav item</a>
      </nav>
      <main>
        <p>The main content ....</p>
      </main>
      <footer>
        <small>&copy; 2021</small>
      </footer>
    </section>
    {/* exercise 0.3 */}
    <MySection>
      <MyButton>My Button Text</MyButton>
    </MySection>
    {/* exercise 0.4 */}
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <h1>Object</h1>
      <ul>
        {Object.keys(object).map((i) => (
          <li key={i}>
            <strong>{i}: </strong>
            {object[i]}
          </li>
        ))}
      </ul>
    </section>

    {/* exercise 1.0 */}
    <MyComponent />

    {/* exercise 4.1 */}

    <div
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#d0f0c0",
        background: "gray",
        border: "1px outset #d0f0c0",
        margin: 20,
      }}
    >
      Green is the prime color of the world
    </div>

    {/* exercise 4.2 */}
    
    {/* exercise 4.6 */}
    <div
      style={{
        textAlign: "center",
        fontSize: 15,
        color: "#d0f0c0",
        background: "gray",
        border: "1px solid #d0f0c0",
        margin: 20,
      }}
    >
      Green is the prime color of the world
    </div>
    {/* exercise 3 */}
    <MyInput></MyInput>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
