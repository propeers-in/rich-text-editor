import * as React from "react";
const SvgTableOutlined = React.forwardRef((props, svgRef) => {
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
        d="M4 1.5A2.5 2.5 0 001.5 4v8A2.5 2.5 0 004 14.5h8a2.5 2.5 0 002.5-2.5V4A2.5 2.5 0 0012 1.5H4zm9.5 8v-3h-5v3h5zm-5 1h5V12a1.5 1.5 0 01-1.5 1.5H8.5v-3zm-1-1v-3h-5v3h5zm-5 1h5v3H4A1.5 1.5 0 012.5 12v-1.5zm0-5h5v-3H4A1.5 1.5 0 002.5 4v1.5zm6 0h5V4A1.5 1.5 0 0012 2.5H8.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgTableOutlined.displayName = "SvgTableOutlined";
const MemoForwardRef = React.memo(SvgTableOutlined);
export default MemoForwardRef;
