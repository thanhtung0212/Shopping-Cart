import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
