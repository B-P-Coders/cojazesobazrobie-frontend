import React from 'react'
import { DeferredContent } from 'primereact/deferredcontent';
import { itemTemplate } from ',./itemTemplate/itemTemplate.jsx';

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
            name: 'UW'
        }, // Do that 20 times
        {
            name: 'UWr'
        },
        {
            name: 'PWr'
        }
    ];

  return (
    <div>
        {/* <DataView value={schools} itemTemplate={itemTemplate} /> */}
    </div>
  )
}


export default List