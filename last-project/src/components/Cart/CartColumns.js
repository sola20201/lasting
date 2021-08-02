import React, { Component } from "react";
export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">እቃዎች</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">የእቃው ስም</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">ዋጋ</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">ብዛት</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">የተወገደ</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">አጠቃላይ</p>
          </div>
        </div>
      </div>
    );
  }
}