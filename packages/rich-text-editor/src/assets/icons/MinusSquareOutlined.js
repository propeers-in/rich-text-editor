import * as React from "react";
const MinusSquareOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 20 20"
      fill="none"
      ref={svgRef}
      color={"#707070"}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.875 5C1.875 3.27411 3.27411 1.875 5 1.875H15C16.7259 1.875 18.125 3.27411 18.125 5V15C18.125 16.7259 16.7259 18.125 15 18.125H5C3.27411 18.125 1.875 16.7259 1.875 15V5ZM5 3.125C3.96447 3.125 3.125 3.96447 3.125 5V15C3.125 16.0355 3.96447 16.875 5 16.875H15C16.0355 16.875 16.875 16.0355 16.875 15V5C16.875 3.96447 16.0355 3.125 15 3.125H5Z"
        fill={"currentColor"}
      />
      <path
        d="M6.25 9.375C5.90482 9.375 5.625 9.65482 5.625 10C5.625 10.3452 5.90482 10.625 6.25 10.625H13.75C14.0952 10.625 14.375 10.3452 14.375 10C14.375 9.65482 14.0952 9.375 13.75 9.375H6.25Z"
        fill={"currentColor"}
      />
    </svg>
  );
});
MinusSquareOutlined.displayName = "MinusSquareOutlined";
const MemoForwardRef = React.memo(MinusSquareOutlined);
export default MemoForwardRef;
