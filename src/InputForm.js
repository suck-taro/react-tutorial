import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input name="title" type="text" placeholder="Title" /><br />
                    <textarea name="desc" placeholder="Description"></textarea><br />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        )
    }
}

export default InputForm;