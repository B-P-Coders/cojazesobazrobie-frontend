import React from "react";
import { DeferredContent } from "primereact/deferredcontent";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

import { itemTemplate } from "../itemTemplate/itemTemplate.jsx";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import "./List.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function List({ data, setData }) {
  const [first, setFirst] = useState(0);
  const host = import.meta.env.VITE_BACKEND;

  const rows = 7; // for example
  let totalRecords = 25; // for example
  const isLastPage = (first, rows, totalRecords) => {
    return first + rows >= totalRecords;
  };
  const handlePageChange = (event) => {
    setFirst(event.first);
    // other logic if needed
  };
  useEffect(() => {
    if (isLastPage) {
      //więcej danych
      /* axios
        .get(host + "/schools?offset=25")
        //http://localhost:3000/schools
        .then((response) => {
          setData(data + response.data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
*/
      totalRecords += 25;
    }
  }, [isLastPage]);
  return (
    <div id="bottom">
      <DataView
        value={data}
        itemTemplate={itemTemplate}
        paginator
        first={first}
        rows={7}
        onPage={handlePageChange}
      />
      {/* <DataView value={schools} itemTemplate={itemTemplate} /> */}
      {isLastPage(first, rows, totalRecords) && (
        <div>You're on the last page!</div>
      )}
    </div>
  );
}

export default List;
