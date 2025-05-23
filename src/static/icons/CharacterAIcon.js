import React from "react";

const CharacterAIcon = ({ width = 14, height = 12, fill = "#333333" }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M23.899,21.958L16.609,3.142c-1.512-4.142-7.711-4.139-9.222,.006L.101,21.958c-.299,.772,.084,1.642,.857,1.941,.773,.299,1.642-.084,1.941-.857l1.953-5.042h14.296l1.953,5.042c.299,.78,1.188,1.154,1.941,.857,.772-.299,1.156-1.168,.857-1.941ZM6.014,15L10.183,4.238c.697-1.668,2.933-1.672,3.632-.006l4.171,10.768H6.014Z"
      />
    </svg>
  );
};

export default CharacterAIcon;
