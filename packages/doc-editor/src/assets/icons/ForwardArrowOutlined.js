import * as React from "react";
const SvgForwardArrowOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      ref={svgRef}
      color={"#707070"}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.354 2.146A.5.5 0 008.5 2.5v3h-1A6.5 6.5 0 001 12a.5.5 0 001 0 1.5 1.5 0 011.5-1.5h5v3a.5.5 0 00.854.354l5.5-5.5a.5.5 0 000-.708l-5.5-5.5zM9.49 9.9A.501.501 0 019.5 10v2.293L13.793 8 9.5 3.707V6a.5.5 0 01-.5.5H7.5a5.5 5.5 0 00-5.001 3.209A2.492 2.492 0 013.5 9.5H9a.5.5 0 01.49.4z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgForwardArrowOutlined.displayName = "ForwardArrowOutlined";
const MemoForwardRef = React.memo(SvgForwardArrowOutlined);
export default MemoForwardRef;
