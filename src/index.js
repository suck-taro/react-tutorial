    import React from "react";
    import ReactDOM from "react-dom";
    import PropTypes from "prop-types";

    class Parent extends React.Component {
      render() {
        return (
          <div>
            <Children value={'World'} />
            <Children value={'世界'} />
          </div>
        );
      }
    }

    class Children extends React.Component {
      render() {
        return <h2>Hello {this.props.value}</h2>;
      }
    }

    Children.propTypes = {
      value: PropTypes.string
    };

    ReactDOM.render(
      <div>
        <Parent />
      </div>,
      document.getElementById("root")
    );
