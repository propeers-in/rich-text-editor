import * as React from "react";
const SvgSuperscriptOutlined = React.forwardRef((props, svgRef) => {
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
        d="M11.772 1.599a.492.492 0 00-.494.49c0 .27.221.49.494.49h1.115c.202 0 .366.163.366.364 0 .2-.164.363-.366.363h-.247c-.752 0-1.362.606-1.362 1.353s.61 1.353 1.362 1.353h1.107c.273 0 .494-.22.494-.49 0-.272-.221-.491-.494-.491H12.64a.373.373 0 01-.374-.372c0-.205.168-.372.374-.372h.247c.748 0 1.354-.602 1.354-1.344 0-.743-.606-1.344-1.354-1.344h-1.115zM2.101 11.493a.492.492 0 00.695.698L6.25 8.755l3.404 3.489a.498.498 0 10.714-.697L6.958 8.052l3.524-3.504a.492.492 0 00-.694-.698L6.27 7.348 2.804 3.796a.498.498 0 00-.713.696l3.472 3.559-3.462 3.442z"
      />
    </svg>
  );
});
SvgSuperscriptOutlined.displayName = "SvgSuperscriptOutlined";
const MemoForwardRef = React.memo(SvgSuperscriptOutlined);
export default MemoForwardRef;
