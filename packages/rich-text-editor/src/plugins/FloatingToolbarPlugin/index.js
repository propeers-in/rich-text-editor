import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import React, { useEffect, useState } from "react";

export function FloatingToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [position, setPosition] = useState({ top: 0, left: 0, show: false });

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const anchorElement = editor.getElementByKey(selection.anchor.key);
          if (anchorElement) {
            const rect = anchorElement.getBoundingClientRect();
            setPosition({
              top: rect.top - 40,
              left: rect.left,
              show: !selection.isCollapsed(),
            });
          }
        } else {
          setPosition(prev => ({ ...prev, show: false }));
        }
      });
    });
  }, [editor]);

  if (!position.show) return null;

  return (
    <div
      className="floating-toolbar"
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 100,
        display: "flex",
        gap: "4px",
        padding: "4px",
        background: "white",
        borderRadius: "4px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <span style={{ fontFamily: "serif" }}>Aa</span>
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        B
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontStyle: "italic",
        }}
      >
        I
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          textDecoration: "underline",
        }}
      >
        U
      </button>
      <button
        onClick={() => console.log("Circle solid clicked")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        ◎
      </button>
      <button
        onClick={() => console.log("Triangle clicked")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        ▲
      </button>
      <button
        onClick={() => console.log("Diamond clicked")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        ◇
      </button>
      <button
        onClick={() => console.log("Circle outline clicked")}
        style={{
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        ○
      </button>
    </div>
  );
}
