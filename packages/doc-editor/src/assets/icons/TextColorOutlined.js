import * as React from "react";
const SvgTextColorOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="#333333"
      viewBox="0 0 16 14"
      ref={svgRef}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.952 12.453a.5.5 0 01-.242-.664L7.542 3.57a.5.5 0 01.455-.29.5.5 0 01.455.29l3.832 8.218a.5.5 0 11-.906.422l-.77-1.652H5.386l-.77 1.652a.5.5 0 01-.664.242zm6.19-2.893l-2.145-4.6-2.144 4.6h4.289z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgTextColorOutlined.displayName = "SvgTextColorOutlined";
const MemoForwardRef = React.memo(SvgTextColorOutlined);
export default MemoForwardRef;
