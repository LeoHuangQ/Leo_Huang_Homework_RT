import React, { useEffect, useState } from "react";

export default function Table(props) {
  const {
    data,
    columnName,
    columnValue,
    pageSize = 1,
    sortedBy,
    order,
    sx,
  } = props;
  const columnAll = Object.keys(data[0]);
  if (sortedBy) {
    data.sort((a, b) => {
      return order === 1 ? a.sortedBy - b.sortedBy : b.sortedBy - a.sortedBy;
    });
  }
  const totalCount = data.length; // 6 rows

  const pages = Math.floor(totalCount / pageSize);
  const pagesList = Array.from({ length: pages }, (_, index) => index);
  // let dataValid = data;

  // const [dataValid, setDataValid] = useState(data);
  const [dataValid, setDataValid] = useState(data.slice(0, pageSize));

  const handleClick = (range) => {
    setDataValid(data.slice(pageSize * range, pageSize * (range + 1)));
  };
 

  return (
    <div>
      <table style={sx ? sx : {}}>
        <thead>
          <tr>
            {columnName
              ? columnName.map((col) => {
                  return <th key={col}>{col}</th>;
                })
              : columnAll.map((col) => {
                  return <th key={col}>{col}</th>;
                })}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, pageSize).map((row) => {
            return (
              <tr>
                {columnValue
                  ? columnValue.map((col) => {
                      return <td>{row[col]}</td>;
                    })
                  : columnAll.map((col) => {
                      return <td>{row[col]}</td>;
                    })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: pageSize !== 1 ? "inline" : "none" }}>
        <label>TotalPage: {pages}</label>
        {pagesList.map((page) => {
          return (
            <button
              key={page}
              onClick={() => {
                handleClick(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
