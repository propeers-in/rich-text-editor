import * as React from "react";
const SvgVideosOutlined = React.forwardRef((props, svgRef) => {
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
        d="M7.8 8.339a.5.5 0 00-.8.4v3a.5.5 0 00.8.4l2-1.5a.5.5 0 000-.8l-2-1.5z"
      />
      <path
        fill="#707070"
        fillRule="evenodd"
        d="M4 2.239a2.5 2.5 0 00-2.5 2.5v8a2.5 2.5 0 002.5 2.5h8a2.5 2.5 0 002.5-2.5v-8a2.5 2.5 0 00-2.5-2.5H4zm1.5 1H4a1.5 1.5 0 00-1.5 1.5v.5h3v-2zm1 2v-2h3v2h-3zm-4 1v6.5a1.5 1.5 0 001.5 1.5h8a1.5 1.5 0 001.5-1.5v-6.5h-11zm8-3v2h3v-.5a1.5 1.5 0 00-1.5-1.5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgVideosOutlined.displayName = "SvgVideosOutlined";
const MemoForwardRef = React.memo(SvgVideosOutlined);
export default MemoForwardRef;
