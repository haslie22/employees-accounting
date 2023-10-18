import { Component } from "react";

import "./app.css";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "John Smith",
          salary: 800,
          shouldIncrease: false,
          isLiked: true,
        },
        {
          id: 2,
          name: "Alex Radler",
          salary: 3000,
          shouldIncrease: false,
          isLiked: false,
        },
        {
          id: 3,
          name: "Jessica Bill",
          salary: 4000,
          shouldIncrease: true,
          isLiked: false,
        },
      ],
    };

    this.maxId = this.state.data.length;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      shouldIncrease: false,
      isLiked: false,
      id: ++this.maxId,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newEmployee],
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id
          ? { ...item, shouldIncrease: !item.shouldIncrease }
          : item,
      ),
    }));
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item,
      ),
    }));
  };

  render() {
    const employeesNumber = this.state.data.length;
    const increaseNumber = this.state.data.filter(
      (item) => item.shouldIncrease,
    ).length;
    const likedNumber = this.state.data.filter((item) => item.isLiked).length;

    return (
      <div className="app">
        <AppInfo
          employeesNumber={employeesNumber}
          increaseNumber={increaseNumber}
          likedNumber={likedNumber}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleLike={this.onToggleLike}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
