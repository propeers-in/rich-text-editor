import * as React from "react";
const SvgCaretOpenedFilled = React.forwardRef((props, svgRef) => {
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
        d="M7.646 7.885a.5.5 0 00.708 0l2.793-2.793a.5.5 0 00-.354-.853H5.207a.5.5 0 00-.353.853l2.792 2.793zM7.646 9.592a.5.5 0 01.708 0l2.793 2.793a.5.5 0 01-.354.854H5.207a.5.5 0 01-.353-.854l2.792-2.793z"
      />
    </svg>
  );
});
SvgCaretOpenedFilled.displayName = "CaretOpenedFilled";
const MemoForwardRef = React.memo(SvgCaretOpenedFilled);
export default MemoForwardRef;
