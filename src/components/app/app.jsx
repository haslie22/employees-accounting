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
      term: "",
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

  onToggleProp = (id, prop) => {
    console.log(prop);
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item,
      ),
    }));
  };

  searchEmployee = (employees, term) => {
    if (term.length === 0) {
      return employees;
    }

    return employees.filter((employee) => {
      return employee.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;

    const employeesNumber = data.length;
    const increaseNumber = data.filter((item) => item.shouldIncrease).length;
    const likedNumber = data.filter((item) => item.isLiked).length;

    const visibleEmployees = this.searchEmployee(data, term);

    return (
      <div className="app">
        <AppInfo
          employeesNumber={employeesNumber}
          increaseNumber={increaseNumber}
          likedNumber={likedNumber}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployeesList
          data={visibleEmployees}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
