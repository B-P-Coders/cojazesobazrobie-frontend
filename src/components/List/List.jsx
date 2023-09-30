import React from "react";
import { DeferredContent } from "primereact/deferredcontent";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

import { itemTemplate } from "../itemTemplate/itemTemplate.jsx";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import "./List.module.css";

function List() {
  let [schools, setSchools] = React.useState(null);

  schools = [
    {
      name: "AGH",
    },
    {
      name: "UJ",
    },
    {
      name: "PK",
    },
    {
      name: "UW",
    }, // Do that 20 times
    {
      name: "UWr",
    },
    {
      name: "PWr",
    },
    {
      name: "AGH",
    },
    {
      name: "UJ",
    },
    {
      name: "PK",
    },
    {
      name: "UW",
    }, // Do that 20 times
    {
      name: "UWr",
    },
    {
      name: "PWr",
    },
    {
      name: "AGH",
    },
    {
      name: "UJ",
    },
    {
      name: "PK",
    },
    {
      name: "UW",
    }, // Do that 20 times
    {
      name: "UWr",
    },
    {
      name: "PWr",
    },
  ];

  return (
    <div id="bottom">
      <DataView
        value={schools}
        itemTemplate={itemTemplate}
        paginator
        rows={7}
      />
      {/* <DataView value={schools} itemTemplate={itemTemplate} /> */}
    </div>
  );
}

export default List;
