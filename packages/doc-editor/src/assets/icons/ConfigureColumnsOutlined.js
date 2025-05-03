import * as React from "react";
const SvgConfigureColumnsOutlined = React.forwardRef((props, svgRef) => {
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
        d="M3 15.239h10a1.5 1.5 0 001.5-1.5v-10a1.5 1.5 0 00-1.5-1.5H3a1.5 1.5 0 00-1.5 1.5v10a1.5 1.5 0 001.5 1.5zm3.5-1v-11h3v11h-3zm-1 0H3a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h2.5v11zm5-11v11H13a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgConfigureColumnsOutlined.displayName = "ConfigureColumnsOutlined";
const MemoForwardRef = React.memo(SvgConfigureColumnsOutlined);
export default MemoForwardRef;
