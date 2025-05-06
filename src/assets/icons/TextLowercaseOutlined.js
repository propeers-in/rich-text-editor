import * as React from "react";
const SvgTextLowercaseOutlined = React.forwardRef((props, svgRef) => {
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
        d="M2.259 8.916c0-1.507 1.205-2.728 2.693-2.728 1.487 0 2.693 1.221 2.693 2.728 0 1.506-1.206 2.728-2.693 2.728-1.488 0-2.693-1.222-2.693-2.728zm2.693-3.75c-2.045 0-3.702 1.679-3.702 3.75 0 2.07 1.657 3.75 3.702 3.75a3.67 3.67 0 002.704-1.19v.598c0 .276.226.5.504.5a.502.502 0 00.505-.5V5.82c0-.276-.226-.5-.505-.5a.502.502 0 00-.504.5v.534a3.67 3.67 0 00-2.704-1.19zm6.913 7.232a.5.5 0 00.726 0l2.017-2.125a.52.52 0 00-.012-.726.498.498 0 00-.713.012l-1.15 1.212V5.878a.509.509 0 00-.505-.513.509.509 0 00-.505.513v4.893l-1.15-1.212a.498.498 0 00-.713-.012.52.52 0 00-.012.726l2.017 2.125z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgTextLowercaseOutlined.displayName = "SvgTextLowercaseOutlined";
const MemoForwardRef = React.memo(SvgTextLowercaseOutlined);
export default MemoForwardRef;
