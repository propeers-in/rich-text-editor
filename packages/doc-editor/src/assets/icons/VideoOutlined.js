import * as React from "react";
const SvgVideoOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
      ref={svgRef}
      {...props}
    >
      <path
        fill="#707070"
        fillRule="evenodd"
        d="M3.5 3.739a2.5 2.5 0 00-2.5 2.5v5a2.5 2.5 0 002.5 2.5h6a2.5 2.5 0 002.5-2.5v-.793l1.293 1.293c.63.63 1.707.183 1.707-.707V6.306a1 1 0 00-1.64-.768L12 6.671V6.24a2.5 2.5 0 00-2.5-2.5h-6zM12 7.973v1.059l2 2V6.306l-2 1.667zm-1-1.734a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgVideoOutlined.displayName = "SvgVideoOutlined";
const MemoForwardRef = React.memo(SvgVideoOutlined);
export default MemoForwardRef;
