import * as React from "react";
const SvgStrikethroughOutlined = React.forwardRef((props, svgRef) => {
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
        d="M7.832 2.4c-1.718 0-3.11 1.381-3.11 3.085 0 .418.084.817.236 1.18h1.316a1.926 1.926 0 01-.402-1.18c0-1.074.877-1.944 1.96-1.944h2.791a.573.573 0 00.575-.57.573.573 0 00-.575-.571H7.832zM9.36 8.572c-.469 0-.857 0-1.272-.002 1.083 0 1.96.87 1.96 1.945a1.952 1.952 0 01-1.96 1.944H5.297a.573.573 0 00-.575.57c0 .316.257.571.575.571h2.791c1.718 0 3.11-1.381 3.11-3.085 0-.737-.26-1.413-.694-1.943H9.36z"
        clipRule="evenodd"
      />
      <path
        fill="#707070"
        fillRule="evenodd"
        d="M3.2 8.001c0-.315.257-.57.575-.57h8.37c.318 0 .575.255.575.57 0 .315-.257.57-.575.57H3.774a.573.573 0 01-.574-.57z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgStrikethroughOutlined.displayName = "SvgStrikethroughOutlined";
const MemoForwardRef = React.memo(SvgStrikethroughOutlined);
export default MemoForwardRef;
