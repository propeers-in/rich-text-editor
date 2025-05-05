import * as React from "react";
const SvgSubscriptOutlined = React.forwardRef((props, svgRef) => {
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
        d="M9.657 12.165a.498.498 0 10.71-.7L6.96 8.005l3.52-3.469a.49.49 0 10-.688-.698l-3.52 3.47-3.468-3.523a.498.498 0 10-.71.7l3.468 3.522-3.457 3.408a.49.49 0 00.688.698L6.25 8.705l3.407 3.46zM11.773 10.058a.49.49 0 00-.493.486.49.49 0 00.493.486h1.116c.202 0 .366.161.366.36 0 .2-.164.36-.366.36h-.247c-.752 0-1.362.6-1.362 1.341 0 .74.61 1.341 1.362 1.341h1.107a.49.49 0 00.493-.486.49.49 0 00-.493-.486h-1.107a.372.372 0 01-.375-.369c0-.203.168-.368.375-.368h.247c.747 0 1.354-.597 1.354-1.333s-.607-1.332-1.354-1.332h-1.116z"
      />
    </svg>
  );
});
SvgSubscriptOutlined.displayName = "SvgSubscriptOutlined";
const MemoForwardRef = React.memo(SvgSubscriptOutlined);
export default MemoForwardRef;
