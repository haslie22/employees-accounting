import "./app-info.css";

const AppInfo = ({ employeesNumber, increaseNumber, likedNumber }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>Общее число сотрудников: {employeesNumber}</h2>
      <h2>Премию получат: {increaseNumber}</h2>
      <h2>Идут на повышение: {likedNumber}</h2>
    </div>
  );
};

export default AppInfo;
