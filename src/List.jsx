import React from "react";
import Button from "./Button";

const List = () => (
  <React.Fragment>
    <header>
      <h1>Whamazon</h1>
    </header>
    <section>
      <h3>Buy a book today</h3>
      <div className="products">
        <ul>
          <li>
            <img alt="" src="./images/book1.jpg" />
            <div className="info">
              <div className="title">Book 1</div>
              <div className="desc">
                An incredible book about incredible things that you should
                definitely read.
              </div>
            </div>
            <Button name="Book 1" />
          </li>
          <li>
            <img alt="" src="./images/book2.jpg" />
            <div className="info">
              <div className="title">Book 2</div>
              <div className="desc">
                An incredible book about incredible things that you should
                definitely read.
              </div>
            </div>
            <Button name="Book 2" />
          </li>
          <li>
            <img alt="" src="./images/book3.jpg" />
            <div className="info">
              <div className="title">Book 3</div>
              <div className="desc">
                An incredible book about incredible things that you should
                definitely read.
              </div>
            </div>
            <Button name="Book 3" />
          </li>
        </ul>
      </div>
    </section>
  </React.Fragment>
);

export default List;
