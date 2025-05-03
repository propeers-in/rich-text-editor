import * as React from "react";
const SvgTextAlignCenterOutlined = React.forwardRef((props, svgRef) => {
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
        d="M2 3a.5.5 0 000 1h12a.5.5 0 000-1H2zM2 9a.5.5 0 000 1h12a.5.5 0 000-1H2zM3.5 6.5A.5.5 0 014 6h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 12a.5.5 0 000 1h8a.5.5 0 000-1H4z"
      />
    </svg>
  );
});
SvgTextAlignCenterOutlined.displayName = "SvgTextAlignCenterOutlined";
const MemoForwardRef = React.memo(SvgTextAlignCenterOutlined);
export default MemoForwardRef;
