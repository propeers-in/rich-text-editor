import * as React from "react";
const SvgMinusOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="#1C1B1F"
      viewBox="0 0 16 16"
      ref={svgRef}
      {...props}
    >
      <path fill="currentColor" d="M4.5 8.5v-1h7v1h-7z" />
    </svg>
  );
});
SvgMinusOutlined.displayName = "MinusOutlined";
const MemoForwardRef = React.memo(SvgMinusOutlined);
export default MemoForwardRef;
