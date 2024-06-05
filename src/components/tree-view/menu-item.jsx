import React, { useState } from "react";
import Treeview from ".";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }
  return (
    <li>
      <div className="flex ">
        <p>{item.label}</p>
        {item && item.children ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item && item.children && displayCurrentChildren[item.label] ? <Treeview menus={item.children} /> : null}
    </li>
  );
}
