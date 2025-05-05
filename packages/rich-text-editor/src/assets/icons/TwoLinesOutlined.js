import * as React from "react";
const SvgTwoLinesOutlined = React.forwardRef((props, svgRef) => {
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
        d="M1.5 6a.5.5 0 000 1h13a.5.5 0 000-1h-13zM1.5 9a.5.5 0 000 1h6a.5.5 0 000-1h-6z"
      />
    </svg>
  );
});
SvgTwoLinesOutlined.displayName = "SvgTwoLinesOutlined";
const MemoForwardRef = React.memo(SvgTwoLinesOutlined);
export default MemoForwardRef;
