import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function Paging(prop) {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        style={{ width: "100px", textAlign:"center" }}
        onClick={() => {
          prop.fun(number);
        }}
        key={number}
        active={number === prop.var}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
}
export default Paging;
