import * as React from "react";
const SvgTextTOutlined = React.forwardRef((props, svgRef) => {
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
        d="M1 2a.5.5 0 01.5-.5h10.833a.5.5 0 110 1H7.417V14a.5.5 0 01-1 0V2.5H1.5A.5.5 0 011 2z"
      />
      <path
        fill="#707070"
        d="M14.5 8.045a.5.5 0 110 1h-2.208V14a.5.5 0 11-1 0V9.045H9.083a.5.5 0 010-1H14.5z"
      />
    </svg>
  );
});
SvgTextTOutlined.displayName = "SvgTextTOutlined";
const MemoForwardRef = React.memo(SvgTextTOutlined);
export default MemoForwardRef;
