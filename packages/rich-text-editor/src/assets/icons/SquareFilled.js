import * as React from "react";
const SvgSquareFilled = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      ref={svgRef}
      {...props}
    >
      <rect width={12} height={12} x={2} y={2} fill="#333" rx={2.5} />
    </svg>
  );
});
SvgSquareFilled.displayName = "SvgSquareFilled";
const MemoForwardRef = React.memo(SvgSquareFilled);
export default MemoForwardRef;
