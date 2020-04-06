import React from "react";
import * as Message from "../contants/Message";

function Product(props) {
  var { product, onChangeMessage } = props;

  const showRatings = (rating) => {
    const result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + i} className="fa fa-star-o"></i>);
    }
    return result;
  };

  const onAddToCart = (product) => {
    props.onAddToCart(product);
    onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  };

  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={product.image} className="img-fluid" alt="" />
          <div>
            <div className="mask waves-light waves-effect waves-light"></div>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <p>{product.name}</p>
            </strong>
          </h4>
          <ul className="rating">
            <li>{showRatings(product.rating)}</li>
          </ul>
          <p className="card-text">{product.description}</p>
          <div className="card-footer">
            <span className="left">{product.price}$</span>
            <span className="right">
              <p
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Add to Cart"
                onClick={() => onAddToCart(product)}
              >
                <i className="fa fa-shopping-cart"></i>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
