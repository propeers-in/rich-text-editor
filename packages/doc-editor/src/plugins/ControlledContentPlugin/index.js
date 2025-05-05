import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { $getRoot, $getSelection } from "lexical";
import { $convertFromMarkdownString, $convertToMarkdownString } from "@lexical/markdown";
import { ALL_TRANSFORMERS } from "../../constants/transformers/MarkdownTransformer";

export default function ControlledContentPlugin({ value, onChange }) {
  const [editor] = useLexicalComposerContext();

 
  // Insert initial value
  useEffect(() => {
    if (!value) return;

    editor.update(() => {
      const root = $getRoot();
      root.clear();
      const nodes = $convertFromMarkdownString(value, ALL_TRANSFORMERS);
      root.append(...nodes);
    });
  }, [value, editor]);

  // Export changes
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const markdown = $convertToMarkdownString(ALL_TRANSFORMERS);
        onChange?.(markdown);
      });
    });
  }, [editor, onChange]);

  return null;
}