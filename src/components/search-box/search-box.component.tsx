import React, { Component, ReactNode } from "react";
import "./search-box.style.css";

interface SearchBoxProps {
  type: string;
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBox extends Component<SearchBoxProps> {
  render(): ReactNode {
    const { type, className, placeholder, onChangeHandler } = this.props;

    return (
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
