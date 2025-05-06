import * as React from "react";
const SvgTextBoldOutlined = React.forwardRef((props, svgRef) => {
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
        fillRule="evenodd"
        d="M3 1.75a.75.75 0 00-.75.75v11c0 .414.336.75.75.75h7.25a3.5 3.5 0 001.573-6.627A3.5 3.5 0 009.25 1.75H3zm6.25 5.5a2 2 0 100-4h-5.5v4h5.5zm-5.5 1.5v4h6.5a2 2 0 100-4h-6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgTextBoldOutlined.displayName = "SvgTextBoldOutlined";
const MemoForwardRef = React.memo(SvgTextBoldOutlined);
export default MemoForwardRef;
