
import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
export default class Cart extends Component {
  render() {
    return (
        <section>
            <ProductConsumer>
            {value => {
               const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                   <Title name="የተመረጡ" title="እቃዎች" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />

                </React.Fragment>
              );
            } else{
                return <EmptyCart/>; 
            }
          }}
            </ProductConsumer>
           
            </section>        
    );
  }
}

/*import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                   <Title name="የተመረጡ" title="እቃዎች" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}*/