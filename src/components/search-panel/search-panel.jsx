import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  onUpdateLocalSearch = (e) => {
    const term = e.target.value;

    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        value={this.state.term}
        placeholder="Найти сотрудника"
        onChange={this.onUpdateLocalSearch}
      />
    );
  }
}

export default SearchPanel;
