import * as React from "react";
const SvgTextUnderlinedOutlined = React.forwardRef((props, svgRef) => {
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
        d="M4 2a.5.5 0 00-1 0v5.5a5 5 0 0010 0V2a.5.5 0 00-1 0v5.5a4 4 0 01-8 0V2zM2.5 14a.5.5 0 000 1h11a.5.5 0 000-1h-11z"
      />
    </svg>
  );
});
SvgTextUnderlinedOutlined.displayName = "SvgTextUnderlinedOutlined";
const MemoForwardRef = React.memo(SvgTextUnderlinedOutlined);
export default MemoForwardRef;
