import React from "react";

type Props = {
    FIO:string;
    Phone:string;
    Organization:string;
    Department:string;
    Doctor:string;
    Type_appeal:string;
    Messages:string;
};

const RowTable = ({FIO,Phone,Organization,Department,Doctor,Type_appeal,Messages}: Props) => {
  return (
    <div className="row-table">
        <div className="title-row">
        </div>
      <div className="cell">
        <div className="cell-label">Ф.И.О.:</div>
        {FIO}
      </div>
      <div className="cell">
        <div className="cell-label">Номер телефона:</div>
        {Phone}
      </div>
      <div className="cell">
        <div className="cell-label">Организация:</div>
       {Organization}
      </div>
      <div className="cell">
        <div className="cell-label">Отделение:</div>
        {Department}
      </div>
      <div className="cell">
        <div className="cell-label">Врач:</div>
        {Doctor}
      </div>
      <div className="cell">
        <div className="cell-label">Тип обращения:</div>
        {Type_appeal}
      </div>
      <div className="cell">
        <div className="cell-label"><h3>Сообщение</h3></div>
        {Messages}
      </div>
    </div>
  );
};

export default RowTable;
