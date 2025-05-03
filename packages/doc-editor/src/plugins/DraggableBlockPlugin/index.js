// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { DraggableBlockPlugin_EXPERIMENTAL } from "@lexical/react/LexicalDraggableBlockPlugin";
// import { $createParagraphNode, $getNearestNodeFromDOMNode } from "lexical";
import React, { useRef, useState } from "react";
import dragHandleIcon from "./draggable-block-menu.svg"; // Adjust path as needed

const DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";

function isOnMenu(element) {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}

export default function DraggableBlockPlugin({
  anchorElem = document.body,
  isEditorInFullScreen,
}) {
  // const [editor] = useLexicalComposerContext();
  const menuRef = useRef(null);
  const targetLineRef = useRef(null);
  const [, setDraggableElement] = useState(null);

  // function insertBlock(e) {
  //   if (!draggableElement || !editor) {
  //     return;
  //   }
  //   editor.update(() => {
  //     const node = $getNearestNodeFromDOMNode(draggableElement);
  //     if (!node) return;
  //     const pNode = $createParagraphNode();
  //     e.altKey || e.ctrlKey
  //       ? node.insertBefore(pNode)
  //       : node.insertAfter(pNode);
  //     pNode.select();
  //   });
  // }

  return (
    <DraggableBlockPlugin_EXPERIMENTAL
      anchorElem={anchorElem}
      menuRef={menuRef}
      targetLineRef={targetLineRef}
      menuComponent={
        <div
          ref={menuRef}
          style={{
            borderRadius: "4px",
            padding: "2px 1px",
            cursor: "grab",
            opacity: 0,
            position: "absolute",
            left: isEditorInFullScreen ? "20%" : 0,
            top: 0,
            willChange: "transform",
            display: "flex",
            gap: "2px",
          }}
          onMouseDown={e => e.stopPropagation()} // Prevent drag interference
        >
          {/* <button
            title="Click to add a new block"
            style={{
              width: "16px",
              height: "16px",
              opacity: 0.3,
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
              backgroundImage: `url(${plusIcon})`,
              backgroundSize: "contain",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 1)}
            onMouseLeave={(e) => (e.target.style.opacity = 0.3)}
            onClick={insertBlock}
          /> */}
          <div
            style={{
              width: "16px",
              height: "16px",
              opacity: 0.3,
              backgroundImage: `url(${dragHandleIcon})`,
              backgroundSize: "contain",
              cursor: "grab",
            }}
          />
        </div>
      }
      targetLineComponent={
        <div
          ref={targetLineRef}
          style={{
            pointerEvents: "none",
            background: "deepskyblue",
            height: "4px",
            position: "absolute",
            left: isEditorInFullScreen ? "20%" : 0,
            top: 0,
            opacity: 0,
            willChange: "transform",
          }}
        />
      }
      isOnMenu={isOnMenu}
      onElementChanged={setDraggableElement}
    />
  );
}
