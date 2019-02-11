import React from "react";
import ShoppingItem from "./ShoppingItem";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      textName: "",
      textDescription: "",
      textPrice: 0
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  addItem() {
    const list = this.state.items;
    list.push({
      name: this.state.textName,
      desc: this.state.textDescription,
      price: this.state.textPrice,
      done: false
    });
    this.setState({ items: list });
  }

  deleteItem(i) {
    const list = this.state.items;
    list.splice(i, 1);
    this.setState({ items: list });
  }

  checkItem(i) {
    const list = this.state.items;
    const item = list[i];
    item.done = !item.done;
    this.setState({ items: list });
  }

  render() {
    const itemList = this.state.items.map((item, i) => {
      return (
        <ShoppingItem
          key={i}
          id={i}
          deleteItem={this.deleteItem}
          checkItem={this.checkItem}
          {...item}
        />
      );
    });

    return (
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.textName}
            onChange={e => this.setState({ textName: e.target.value })}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={this.state.textPrice}
            onChange={e => this.setState({ textPrice: e.target.value })}
          />{" "}
          yen
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={this.state.textDescription}
            onChange={e => this.setState({ textDescription: e.target.value })}
          />
        </div>
        <input
          type="button"
          value="add"
          onClick={() => {
            this.addItem();
          }}
        />
        <ul>{itemList}</ul>
      </div>
    );
  }
}

export default ShoppingList;
