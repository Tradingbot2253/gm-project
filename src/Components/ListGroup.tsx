import { useState } from "react";

function ListGroup() {
  const items = ["Rice", "Beans", "Peace", "Potatoes", "Vegies"];
  if (items.length === 0) {
    return (
      <>
     <h1>List not found</h1>
   <p>no list</p>
  </>
 );
  }
  
  const [selectIndex,setSelectedIndex]=useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no Iteem found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
