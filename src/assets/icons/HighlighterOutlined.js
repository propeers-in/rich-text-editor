import * as React from "react";
const SvgHighlighterOutlined = React.forwardRef((props, svgRef) => {
  return (
    <svg
      width={16}
      height={16}
      fill="#333333"
      viewBox="0 0 16 16"
      ref={svgRef}
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.025 9.154L7.29 7.42l-3.294 3.294a.192.192 0 00-.058.141c0 .056.02.103.058.141l1.45 1.452a.192.192 0 00.142.057c.055 0 .102-.019.14-.057l3.296-3.295zm-1.02-2.446L9.737 8.44l3.303-3.304a.2.2 0 00.058-.147.2.2 0 00-.058-.148l-1.438-1.438a.2.2 0 00-.147-.058.2.2 0 00-.148.058L8.004 6.708zM6.95 6.356l3.139 3.139-3.657 3.656a1.156 1.156 0 01-.843.362c-.322 0-.603-.12-.844-.362l-.084-.084-.25.248a1.201 1.201 0 01-.85.352H2.195c-.138 0-.232-.062-.281-.184-.05-.123-.025-.233.073-.332l1.38-1.38-.072-.071a1.156 1.156 0 01-.362-.844c0-.32.121-.602.362-.843L6.95 6.356zm0 0l3.662-3.661c.24-.241.522-.362.844-.362.32 0 .602.12.843.362l1.451 1.451c.241.241.362.522.362.844 0 .321-.12.602-.362.843L10.09 9.495 6.95 6.356z"
      />
    </svg>
  );
});
SvgHighlighterOutlined.displayName = "HighlighterOutlined";
const MemoForwardRef = React.memo(SvgHighlighterOutlined);
export default MemoForwardRef;
