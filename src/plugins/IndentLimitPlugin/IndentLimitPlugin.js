import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_HIGH,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
} from "lexical";
import {
  $getNearestBlockElementAncestorOrThrow,
  mergeRegister,
} from "@lexical/utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

const MAX_INDENT = 6;

const IndentLimitPlugin = ({ maxIndent = MAX_INDENT }) => {
  const [editor] = useLexicalComposerContext();
  function $handleIndentAndOutdent(indentOrOutdent) {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) {
      return false;
    }
    const alreadyHandled = new Set();
    const nodes = selection.getNodes();
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const key = node.getKey();
      if (alreadyHandled.has(key)) {
        continue;
      }
      try {
        const parentBlock = $getNearestBlockElementAncestorOrThrow(node);
        const parentKey = parentBlock.getKey();
        if (parentBlock.canIndent() && !alreadyHandled.has(parentKey)) {
          alreadyHandled.add(parentKey);
          indentOrOutdent(parentBlock);
        }
      } catch (e) {
        // console.log("Error in handleIndentAndOutdent", e);
      }
    }
    return alreadyHandled.size > 0;
  }

  useEffect(() => {
    const handleIndent = block => {
      const indent = block.getIndent();
      if (indent < maxIndent) {
        block.setIndent(indent + 1);
      }
    };

    const handleOutdent = block => {
      const indent = block.getIndent();
      if (indent > 0) {
        block.setIndent(indent - 1);
      }
    };

    return mergeRegister(
      editor.registerCommand(
        INDENT_CONTENT_COMMAND,
        () => $handleIndentAndOutdent(handleIndent),
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand(
        OUTDENT_CONTENT_COMMAND,
        () => $handleIndentAndOutdent(handleOutdent),
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor, maxIndent]);

  return null;
};

export default IndentLimitPlugin;
