import * as React from "react";
const SvgTextCaseOutlined = React.forwardRef((props, svgRef) => {
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
        fillRule="evenodd"
        d="M5.028 3.243a.498.498 0 01.26.267l3.519 7.904a.5.5 0 01-.914.407L6.726 9.2H2.924l-1.167 2.62a.5.5 0 01-.914-.407l3.52-7.904a.498.498 0 01.665-.267zM6.281 8.2L4.825 4.93 3.369 8.2H6.28zM8.466 9.2a3 3 0 015.192-2.048V6.7a.5.5 0 111 0v5a.5.5 0 11-1 0v-.452A3 3 0 018.466 9.2zm3-2a2 2 0 100 4 2 2 0 000-4z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgTextCaseOutlined.displayName = "SvgTextCaseOutlined";
const MemoForwardRef = React.memo(SvgTextCaseOutlined);
export default MemoForwardRef;
