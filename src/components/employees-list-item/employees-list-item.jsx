import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, shouldIncrease, isLiked } =
    props;

  let classNames = "list-group-item d-flex justify-content-between";
  let increaseClassname = "increase";
  let likeClassname = "like";

  if (shouldIncrease) {
    classNames = classNames + " " + increaseClassname;
  }

  if (isLiked) {
    classNames = classNames + " " + likeClassname;
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="isLiked"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          data-toggle="shouldIncrease"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
