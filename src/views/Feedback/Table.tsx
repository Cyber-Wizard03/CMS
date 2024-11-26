import React, { useEffect, useState } from "react";
import "./style.scss";
import RowTable from "./RowTable";
type Props = {};

const Table = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.guzkod.ru/api/FeedbackMessages")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <h2>Обратная связь </h2>
      <div className="Table_feedback">
        {data.map((item: any) => (
          <RowTable
            FIO={item.FIO}
            Phone={item.Phone}
            Organization={item.Organization}
            Department={item.Department}
            Doctor={item.Doctor}
            Type_appeal={item.Type_appeal}
            Messages={item.Messages}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;

function setPosts(data: any) {
  throw new Error("Function not implemented.");
}
