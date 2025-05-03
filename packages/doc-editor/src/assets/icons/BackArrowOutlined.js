import * as React from "react";
const SvgBackArrowOutlined = React.forwardRef((props, svgRef) => {
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
        fill={"currentColor"}
        fillRule="evenodd"
        d="M6.646 2.146A.5.5 0 017.5 2.5v3h1A6.5 6.5 0 0115 12a.5.5 0 01-1 0 1.5 1.5 0 00-1.5-1.5h-5v3a.5.5 0 01-.854.354l-5.5-5.5a.5.5 0 010-.708l5.5-5.5zM6.51 9.9A.501.501 0 006.5 10v2.293L2.207 8 6.5 3.707V6a.5.5 0 00.5.5h1.5a5.5 5.5 0 015.001 3.209A2.491 2.491 0 0012.5 9.5H7a.5.5 0 00-.49.4z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgBackArrowOutlined.displayName = "BackArrowOutlined";
const MemoForwardRef = React.memo(SvgBackArrowOutlined);
export default MemoForwardRef;
