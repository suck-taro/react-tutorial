import React from "react";
import PropTypes from "prop-types";

class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.done} onClick={this.props.checkItem} />
        <span>{this.props.title}</span>
        <span> / {this.props.price} Yen </span>
        <a href="#" onClick={this.props.deleteItem}>
          delete
        </a>
        <p>{this.props.desc}</p>
      </li>
    );
  }
}

ShoppingItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  done: PropTypes.bool,
  deleteItem: PropTypes.func,
  checkItem: PropTypes.func
};

export default ShoppingItem;
