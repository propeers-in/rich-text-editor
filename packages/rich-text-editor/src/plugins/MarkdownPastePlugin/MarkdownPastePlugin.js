import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_HIGH, PASTE_COMMAND } from "lexical";
import { useEffect } from "react";
import { $convertFromMarkdownString } from "@lexical/markdown";
import { ALL_TRANSFORMERS } from "../../constants/transformers/MarkdownTransformer";

export default function MarkdownPastePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      PASTE_COMMAND,
      event => {
        const clipboardText = event.clipboardData?.getData("text/plain");
        if (!clipboardText) return false;

        editor.update(
          () => {
            $convertFromMarkdownString(
              clipboardText,
              ALL_TRANSFORMERS,
              false,
              true
            );
          },
          { discrete: true }
        );

        return true;
      },
      COMMAND_PRIORITY_HIGH
    );
  }, [editor]);

  return null;
}
