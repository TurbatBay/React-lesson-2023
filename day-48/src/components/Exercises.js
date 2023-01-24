import React from "react";

export default function Exercises() {
  let array = [1, 2, 3, 4, 1];
  function filterNumbers(arr, number) {
    return arr.filter((a) => a === number);
  }

  function findNumberCount(arr) {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      const result = filterNumbers(arr, i);
      const resultObject = {
        i: result.length,
      };
      newArr = [...newArr, resultObject];
    }
    return newArr;
  }

  const numbers = findNumberCount(array);
  console.log(numbers);
  return (
    <div>
      <h2>Exercises</h2>
      <h3>1st</h3>
      {numbers &&
        numbers.map((n, index) => {
          return (
            <div key={index}>
              <p>
                {index} {n.i}{" "}
              </p>
            </div>
          );
        })}
    </div>
  );
}
