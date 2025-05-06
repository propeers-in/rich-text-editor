import * as React from "react";
const SvgImageSquareOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      ref={svgRef}
      {...props}
    >
      <path
        fill="#707070"
        fillRule="evenodd"
        d="M1.5 4A2.5 2.5 0 014 1.5h8A2.5 2.5 0 0114.5 4v8a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 12V4zm1 6.207V12A1.5 1.5 0 004 13.5h7.793L6.56 8.268a1.5 1.5 0 00-2.122 0L2.5 10.208zm10.404 2.99L7.268 7.561a2.5 2.5 0 00-3.536 0L2.5 8.793V4A1.5 1.5 0 014 2.5h8A1.5 1.5 0 0113.5 4v8c0 .489-.234.923-.596 1.197zM8.5 5.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM10.25 5a.75.75 0 100 1.5.75.75 0 000-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgImageSquareOutlined.displayName = "ImageSquareOutlined";
const MemoForwardRef = React.memo(SvgImageSquareOutlined);
export default MemoForwardRef;
