import * as React from "react";
const SvgRootCrossOutlined = React.forwardRef((props, svgRef) => {
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
        d="M8.14 2.838a.5.5 0 01.472-.338H14a.5.5 0 010 1H8.97l-3.313 9.662a.5.5 0 01-.945.005L3.062 8.5H2a.5.5 0 010-1h1.415a.5.5 0 01.471.333l1.29 3.647L8.14 2.838z"
      />
      <path
        fill="#707070"
        d="M13.854 6.646a.5.5 0 010 .708L12.207 9l1.647 1.646a.5.5 0 01-.708.708L11.5 9.707l-1.646 1.647a.5.5 0 01-.708-.708L10.793 9 9.146 7.354a.5.5 0 11.708-.708L11.5 8.293l1.646-1.647a.5.5 0 01.708 0z"
      />
    </svg>
  );
});
SvgRootCrossOutlined.displayName = "RootCrossOutlined";
const MemoForwardRef = React.memo(SvgRootCrossOutlined);
export default MemoForwardRef;
