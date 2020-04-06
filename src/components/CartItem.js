import React from "react";
import * as Message from "../contants/Message";

function CartItem(props) {
  var {
    item,
    onDeleteProductInCart,
    onChangeMessage,
    onUpdateProductInCart,
  } = props;
  var { quantity } = item;

  var onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  };

  var showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  var onDelete = (product) => {
    onDeleteProductInCart(product);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  return (
    <tr>
      <th scope="row">
        <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            onClick={() => onUpdateQuantity(item.product, item.quantity - 1)}
            className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
          >
            <p>—</p>
          </label>
          <label
            onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}
            className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
          >
            <p>+</p>
          </label>
        </div>
      </td>
      <td>{showSubTotal(item.product.price, item.quantity)}$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
          onClick={() => onDelete(item.product)}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
