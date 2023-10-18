import "./employees-list.css";

import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleLike }) => {
  const elements = data.map((item) => {
    const { id, ...props } = item;

    return (
      <EmployeesListItem
        key={id}
        {...props}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleLike={() => onToggleLike(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
