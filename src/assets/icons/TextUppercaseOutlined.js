import * as React from "react";
const SvgTextUppercaseOutlined = React.forwardRef((props, svgRef) => {
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
        d="M6.229 3.467a.5.5 0 01.259.268l3.519 7.943a.504.504 0 01-.254.664.499.499 0 01-.66-.255L7.926 9.453H4.124l-1.167 2.634a.499.499 0 01-.66.255.503.503 0 01-.254-.664l3.52-7.943a.5.5 0 01.666-.268zM7.48 8.448L6.025 5.162 4.57 8.448h2.912zM12 5.389c.136 0 .265.055.36.153l2 2.08c.191.199.186.517-.012.71a.498.498 0 01-.708-.012L12.5 7.134v4.787a.501.501 0 01-.5.503.501.501 0 01-.5-.503V7.134L10.36 8.32a.498.498 0 01-.708.012.504.504 0 01-.011-.71l2-2.08A.499.499 0 0112 5.389z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgTextUppercaseOutlined.displayName = "SvgTextUppercaseOutlined";
const MemoForwardRef = React.memo(SvgTextUppercaseOutlined);
export default MemoForwardRef;
