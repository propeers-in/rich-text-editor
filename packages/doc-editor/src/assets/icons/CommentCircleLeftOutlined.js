import * as React from "react";
const SvgCommentCircleLeftOutlined = React.forwardRef((props, svgRef) => {
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
        d="M8 2a6 6 0 00-5.456 8.5.5.5 0 01.04.285l-.487 3.127 3.232-.449a.5.5 0 01.27.037A6 6 0 108 2zM1 8a7 7 0 114.33 6.473l-3.095.43a1 1 0 01-1.126-1.144l.464-2.982A6.979 6.979 0 011 8z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgCommentCircleLeftOutlined.displayName = "CommentCircleLeftOutlined";
const MemoForwardRef = React.memo(SvgCommentCircleLeftOutlined);
export default MemoForwardRef;
