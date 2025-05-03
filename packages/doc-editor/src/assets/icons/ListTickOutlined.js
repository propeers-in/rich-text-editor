import * as React from "react";
const SvgListTickOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={17}
      fill="none"
      viewBox="0 0 16 17"
      ref={svgRef}
      {...props}
    >
      <g fill="#707070" clipPath="url(#ListTickOutlined_svg__clip0_47_6856)">
        <path d="M1.5 3.239a.5.5 0 000 1h13a.5.5 0 000-1h-13zM14.845 12.1a.5.5 0 10-.69-.723l-2.805 2.671-1.005-.957a.5.5 0 10-.69.724l1.35 1.286a.5.5 0 00.69 0l3.15-3zM1 8.739a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM1.5 13.239a.5.5 0 100 1h6a.5.5 0 000-1h-6z" />
      </g>
      <defs>
        <clipPath id="ListTickOutlined_svg__clip0_47_6856">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(0 .739)" />
        </clipPath>
      </defs>
    </svg>
  );
});
SvgListTickOutlined.displayName = "ListTickOutlined";
const MemoForwardRef = React.memo(SvgListTickOutlined);
export default MemoForwardRef;
