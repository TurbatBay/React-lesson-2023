import React, { useState } from "react";

function PascalTriangle({ n }) {
  const [triangle, setTriangle] = useState(generateTriangle(n));

  function generateTriangle(n) {
    let triangle = [];
    for (let i = 0; i < n; i++) {
      triangle[i] = new Array(i + 1);
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
    return triangle;
  }

  return (
    <table>
      <tbody>
        {triangle.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PascalTriangle;
