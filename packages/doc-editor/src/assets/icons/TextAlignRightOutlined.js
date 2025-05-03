import * as React from "react";
const SvgTextAlignRightOutlined = React.forwardRef((props, svgRef) => {
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
        d="M2 3a.5.5 0 000 1h12a.5.5 0 000-1H2zM2 9a.5.5 0 000 1h12a.5.5 0 000-1H2zM5.5 6.5A.5.5 0 016 6h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM6 12a.5.5 0 000 1h8a.5.5 0 000-1H6z"
      />
    </svg>
  );
});
SvgTextAlignRightOutlined.displayName = "SvgTextAlignRightOutlined";
const MemoForwardRef = React.memo(SvgTextAlignRightOutlined);
export default MemoForwardRef;
