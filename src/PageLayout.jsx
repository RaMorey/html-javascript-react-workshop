import React from "react";

const PageLayout = ({ children }) => (
  <div className="App">
    <header>
      <h1>Whamazon</h1>
    </header>
    <section>
      <h3>Buy a book today</h3>
      {children}
    </section>
  </div>
);

export default PageLayout;
