import * as React from "react";
const SvgTextAlignJustifiedOutlined = React.forwardRef((props, svgRef) => {
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
        d="M2 3a.5.5 0 000 1h12a.5.5 0 000-1H2zM2 9a.5.5 0 000 1h12a.5.5 0 000-1H2zM1.5 6.5A.5.5 0 012 6h12a.5.5 0 010 1H2a.5.5 0 01-.5-.5zM2 12a.5.5 0 000 1h12a.5.5 0 000-1H2z"
      />
    </svg>
  );
});
SvgTextAlignJustifiedOutlined.displayName = "SvgTextAlignJustifiedOutlined";
const MemoForwardRef = React.memo(SvgTextAlignJustifiedOutlined);
export default MemoForwardRef;
