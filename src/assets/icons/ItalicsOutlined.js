import * as React from "react";
const SvgItalicsOutlined = React.forwardRef((props, svgRef) => {
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
        d="M7.875 2c0-.345.28-.625.625-.625h4a.625.625 0 110 1.25h-1.583l-4.48 10.75H7.5a.625.625 0 110 1.25h-4a.625.625 0 110-1.25h1.583l4.48-10.75H8.5A.625.625 0 017.875 2z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgItalicsOutlined.displayName = "ItalicsOutlined";
const MemoForwardRef = React.memo(SvgItalicsOutlined);
export default MemoForwardRef;
