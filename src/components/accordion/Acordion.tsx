import { useState } from "react";
import { accordionData } from "./data";

export default function Accordion() {
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [newExpand, setNewExpand] = useState(new Set());

  function handleMultiSelection(title: string) {
    setIsOpen(null);
    const isNewExpand = new Set(newExpand);
    isNewExpand.has(title) ? isNewExpand.delete(title) : isNewExpand.add(title);
    setNewExpand(isNewExpand);
  }

  function handleIsOpen(title: string | null) {
    setIsOpen(title === isOpen ? null : title);
  }

  return (
    <div>
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable Multi Selection
      </button>
      <div>
        {accordionData.map((item, index) => {
          return (
            <div key={index}>
              <h1
                onClick={() =>
                  enableMultipleSelection
                    ? handleMultiSelection(item.title)
                    : handleIsOpen(item.title)
                }
              >
                {item.title}
              </h1>
              <p>
                {enableMultipleSelection && newExpand.has(item.title) ? (
                  <div>{item.content} </div>
                ) : (
                  item.title === isOpen && item.content
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
