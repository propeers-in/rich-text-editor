import * as React from "react";
const SvgAddOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="#333333"
      viewBox="0 0 16 16"
      ref={svgRef}
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.5 2a.5.5 0 00-1 0v5.5H2a.5.5 0 000 1h5.5V14a.5.5 0 001 0V8.5H14a.5.5 0 000-1H8.5V2z"
      />
    </svg>
  );
});
SvgAddOutlined.displayName = "AddOutlined";
const MemoForwardRef = React.memo(SvgAddOutlined);
export default MemoForwardRef;
