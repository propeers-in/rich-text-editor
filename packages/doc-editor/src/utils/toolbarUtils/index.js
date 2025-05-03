import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  FORMAT_TEXT_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
} from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_CHECK_LIST_COMMAND,
} from "@lexical/list";
import {
  $isAtNodeEnd,
  $patchStyleText,
  $setBlocksType,
} from "@lexical/selection";
import { $isTableSelection } from "@lexical/table";
import { $getNearestBlockElementAncestorOrThrow } from "@lexical/utils";
import {
  $isHeadingNode,
  $isQuoteNode,
  $createHeadingNode,
} from "@lexical/rich-text";
import { $isDecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";

export const formatText = (formatType, editor) => {
  editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
};

export const applyStyle = ({ editor, styles }) => {
  editor.update(() => {
    const selection = $getSelection();
    if (selection !== null) {
      $patchStyleText(selection, styles);
    }
  });
};

export const handleInsertParagraph = editor => {
  editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND);
};

export const handleInsertList = editor => {
  editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
};

export const clearFormatting = (editor, fontStyle) => {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      const anchor = selection.anchor;
      const focus = selection.focus;
      const nodes = selection.getNodes();
      const extractedNodes = selection.extract();

      if (anchor.key === focus.key && anchor.offset === focus.offset) {
        return;
      }

      const isClearAll = !Array.isArray(fontStyle);

      nodes.forEach((node, idx) => {
        if ($isTextNode(node)) {
          let textNode = node;

          if (idx === 0 && anchor.offset !== 0) {
            textNode = textNode.splitText(anchor.offset)[1] || textNode;
          }
          if (idx === nodes.length - 1) {
            textNode = textNode.splitText(focus.offset)[0] || textNode;
          }

          const extractedTextNode = extractedNodes[0];
          if (nodes.length === 1 && $isTextNode(extractedTextNode)) {
            textNode = extractedTextNode;
          }

          // Remove specific styles or all styles
          if (isClearAll) {
            if (textNode.__style !== "") {
              textNode.setStyle("");
            }
            if (textNode.__format !== 0) {
              textNode.setFormat(0);
            }
          } else if (textNode.__style) {
            const styleObj = Object.fromEntries(
              textNode.__style
                .split(";")
                .map(s => {
                  const [k, v] = s.split(":").map(str => str?.trim());
                  return [k, v];
                })
                .filter(([k]) => k)
            );

            fontStyle.forEach(prop => {
              delete styleObj[prop];
            });

            const updatedStyle = Object.entries(styleObj)
              .map(([k, v]) => `${k}: ${v}`)
              .join("; ");

            textNode.setStyle(updatedStyle);
          }

          const nearestBlockElement =
            $getNearestBlockElementAncestorOrThrow(textNode);
          if (isClearAll) {
            if (nearestBlockElement.__format !== 0) {
              nearestBlockElement.setFormat("");
            }
            if (nearestBlockElement.__indent !== 0) {
              nearestBlockElement.setIndent(0);
            }
          }
        } else if ($isHeadingNode(node) || $isQuoteNode(node)) {
          if (isClearAll) {
            node.replace($createParagraphNode(), true);
          }
        } else if ($isDecoratorBlockNode(node)) {
          if (isClearAll) {
            node.setFormat("");
          }
        }
      });
    }
  });
};

export function getSelectedNode(selection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? anchorNode : focusNode;
  }
}

export const keyDownCallback = cb => {
  window.addEventListener("keydown", cb);
  return () => {
    window.removeEventListener("keydown", cb);
  };
};

export async function getMetadataMicrolink(url) {
  if (typeof url !== "string" || !url) return;
  const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}

export const formatParagraph = editor => {
  editor.update(() => {
    const selection = $getSelection();
    $setBlocksType(selection, () => $createParagraphNode());
  });
};

export const formatHeading = (editor, blockType) => {
  editor.update(() => {
    const selection = $getSelection();
    $setBlocksType(selection, () => $createHeadingNode(blockType));
  });
};

export const handleBlockTypeChange = (editor, blockType) => {
  switch (blockType) {
    case "paragraph":
      formatParagraph(editor);
      break;
    case "h3":
    case "h4":
    case "h5":
      formatHeading(editor, blockType);
      break;
    case "bullet":
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
      break;
    case "number":
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      break;
    case "check":
      editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
      break;
    default:
      break;
  }
};
