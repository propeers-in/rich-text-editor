import * as React from "react";
const SvgCodeOutlined = React.forwardRef((props, svgRef) => {
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
        d="M9.603 3.96a.37.37 0 01.22.474L6.87 12.557a.37.37 0 01-.694-.252L9.13 4.182a.37.37 0 01.473-.221zM5.33 6.288a.37.37 0 01-.047.52L3.408 8.369l1.875 1.563a.37.37 0 01-.473.567L2.594 8.653a.37.37 0 010-.567L4.81 6.24a.37.37 0 01.52.047zm5.34 0a.37.37 0 01.52-.047l2.216 1.846a.37.37 0 010 .567l-2.216 1.846a.37.37 0 11-.473-.567l1.875-1.563-1.875-1.562a.37.37 0 01-.047-.52z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgCodeOutlined.displayName = "CodeOutlined";
const MemoForwardRef = React.memo(SvgCodeOutlined);
export default MemoForwardRef;
