import * as React from "react";
const SvgLinkOutlined = React.forwardRef((props, svgRef) => {
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
        d="M9.354 3.354a2.328 2.328 0 013.293 3.292l-1.88 1.88a2.5 2.5 0 01-3.535 0l-.378-.38a.5.5 0 10-.707.708l.378.378a3.5 3.5 0 004.95 0l1.879-1.878a3.328 3.328 0 00-4.707-4.708l-1.5 1.5a.5.5 0 10.707.708l1.5-1.5z"
      />
      <path
        fill="#707070"
        d="M5.232 7.475a2.5 2.5 0 013.536 0l.379.379a.5.5 0 00.707-.708l-.379-.378a3.5 3.5 0 00-4.95 0L2.647 8.646a3.328 3.328 0 104.707 4.707l1.5-1.5a.5.5 0 10-.707-.707l-1.5 1.5a2.328 2.328 0 01-3.293-3.292l1.878-1.88z"
      />
    </svg>
  );
});
SvgLinkOutlined.displayName = "LinkOutlined";
const MemoForwardRef = React.memo(SvgLinkOutlined);
export default MemoForwardRef;
