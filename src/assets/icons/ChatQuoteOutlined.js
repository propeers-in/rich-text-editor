import * as React from "react";
const SvgChatQuoteOutlined = React.forwardRef((props, svgRef) => {
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
        d="M4 3.239a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h1.796a1.5 1.5 0 011.13.512L8 13.979l1.075-1.228a1.5 1.5 0 011.129-.512H12a1.5 1.5 0 001.5-1.5v-2a.5.5 0 011 0v2a2.5 2.5 0 01-2.5 2.5h-1.796a.5.5 0 00-.377.17l-1.45 1.659a.5.5 0 01-.753 0l-1.451-1.659a.5.5 0 00-.377-.17H4a2.5 2.5 0 01-2.5-2.5v-6a2.5 2.5 0 012.5-2.5h3a.5.5 0 010 1H4zm5.5-1a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5h1v.5a.5.5 0 01-.5.5h-.5a.5.5 0 000 1h.5a1.5 1.5 0 001.5-1.5v-2.5a.5.5 0 00-.5-.5H9.5zm3.5 0a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5h1v.5a.5.5 0 01-.5.5H13a.5.5 0 000 1h.5a1.5 1.5 0 001.5-1.5v-2.5a.5.5 0 00-.5-.5H13z"
        clipRule="evenodd"
      />
    </svg>
  );
});
SvgChatQuoteOutlined.displayName = "ChatQuoteOutlined";
const MemoForwardRef = React.memo(SvgChatQuoteOutlined);
export default MemoForwardRef;
