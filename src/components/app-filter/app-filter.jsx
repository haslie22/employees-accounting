import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    {
      name: "all",
      label: "Все сотрудники",
    },
    {
      name: "like",
      label: "На повышение",
    },
    {
      name: "greaterThan1000",
      label: "З/П больше 1000$",
    },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const isActive = props.filter === name;
    const classes = isActive ? "btn-light" : "btn-outline-light";

    return (
      <button
        className={`btn ${classes}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
