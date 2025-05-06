import * as React from "react";
const SvgSmileySatisfiedEyesOutlined = React.forwardRef((props, svgRef) => {
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
        d="M10.475 10.475a.5.5 0 00-.707-.707 2.5 2.5 0 01-3.536 0 .5.5 0 10-.707.707 3.5 3.5 0 004.95 0zM10.25 7.5a.75.75 0 100-1.5.75.75 0 000 1.5zM6.5 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
      <path
        fill="#707070"
        fillRule="evenodd"
        d="M8 1a7 7 0 100 14A7 7 0 008 1zM2 8a6 6 0 1112 0A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgSmileySatisfiedEyesOutlined.displayName = "SmileySatisfiedEyesOutlined";
const MemoForwardRef = React.memo(SvgSmileySatisfiedEyesOutlined);
export default MemoForwardRef;
