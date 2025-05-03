import * as React from "react";
const SvgListBulletsOutlined = React.forwardRef((props, svgRef) => {
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
        d="M2.5 2a1 1 0 100 2 1 1 0 000-2zM6 2.5a.5.5 0 000 1h8a.5.5 0 000-1H6zM6 7.5a.5.5 0 000 1h8a.5.5 0 000-1H6zM5.5 13a.5.5 0 01.5-.5h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM1.5 8a1 1 0 112 0 1 1 0 01-2 0zM2.5 12a1 1 0 100 2 1 1 0 000-2z"
      />
    </svg>
  );
});
SvgListBulletsOutlined.displayName = "ListBulletsOutlined";
const MemoForwardRef = React.memo(SvgListBulletsOutlined);
export default MemoForwardRef;
