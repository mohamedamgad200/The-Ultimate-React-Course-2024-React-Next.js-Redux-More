import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //Know that return only one tag so
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numberPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numberPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from.All from
            our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We'r still working on our menu.Please come back later:)</p>
      )}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name} />
        ))}
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          photoName="pizzas/funghi.jpg"
        />
      </ul> */}
    </main>
  );
}
function Pizza({ pizzaObject }) {
  // console.log(props);
  // console.log(pizzaObject);
  // if (pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {/* {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObject.price}</span>
        )} */}
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOPen = hour >= openHour && hour <= closeHour;
  console.log(isOPen);
  //   if (hour >= openHour && hour <= closeHour) alert("We'r currently open!");
  //   else alert("Sorry we're closed");
  //   console.log(hour);
  // if (!isOPen) return <p>closed</p>;
  return (
    <footer className="footer">
      {isOPen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We'r happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We'r currently open!");
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open from{openHour}:00 to {closeHour}:00 .Come Visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//React before 18
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />,document.getElementById("root"));
