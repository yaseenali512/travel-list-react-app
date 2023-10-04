import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to packing list</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = numPacked > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <footer className="stats">
      {percent === 100 ? (
        "You got everything! Ready to go ✈️"
      ) : (
        <em>
          You have {numItems} items on your list & you have {numPacked} (
          {percent}% )
        </em>
      )}
    </footer>
  );
}
