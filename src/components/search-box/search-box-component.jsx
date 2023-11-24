import { Component } from "react";
import "./search-box.styles.css"

class SearchBox extends Component {
    render() {
        const onChange = this.props.onChangeHandler;
        const placeholder = this.props.placeholder;
        const className = this.props.className;
        
        return (
          <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          />
        );
    }
}

export default SearchBox;