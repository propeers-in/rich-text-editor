import * as React from "react";
const SvgTextIndent = React.forwardRef((props, svgRef) => {
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
        stroke="#707070"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 8L5 5.5 2.5 3"
      />
      <path
        stroke="#707070"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M7.5 3h6M7.5 8h6M2.5 13h11"
      />
    </svg>
  );
});
SvgTextIndent.displayName = "SvgTextIndent";
const MemoForwardRef = React.memo(SvgTextIndent);
export default MemoForwardRef;
