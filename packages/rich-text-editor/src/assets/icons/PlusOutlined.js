import * as React from "react";
const SvgPlusOutlined = React.forwardRef((props, svgRef) => {
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
        d="M8.375 3.5a.375.375 0 10-.75 0v4.125H3.5a.375.375 0 100 .75h4.125V12.5a.375.375 0 00.75 0V8.375H12.5a.375.375 0 000-.75H8.375V3.5z"
      />
    </svg>
  );
});
SvgPlusOutlined.displayName = "PlusOutlined";
const MemoForwardRef = React.memo(SvgPlusOutlined);
export default MemoForwardRef;
