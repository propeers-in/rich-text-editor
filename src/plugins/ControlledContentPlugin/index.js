import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { mergeRegister } from "@lexical/utils";
import { CLEAR_HISTORY_COMMAND } from "lexical";

export default function ControlledContentPlugin({ value, onChange }) {
  const [editor] = useLexicalComposerContext();

   
  useEffect(() => {
       const savedState = value
       if (savedState != null) {
         editor.update(() => {
           const parsed = editor.parseEditorState(savedState);
           editor.setEditorState(parsed);
         });
       } else {
         editor.update(() => {
           const parsed = editor.parseEditorState(DEFAULT_EDITOR_TEXT);
           editor.setEditorState(parsed);
         });
       }
       editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
   }, [editor]);

  // Export changes
  useEffect(() => {
    return mergeRegister(
     editor.registerUpdateListener(({ editorState }) => {
      const json = JSON.stringify(editorState);
      onChange?.(json);
    }));
  }, [editor, onChange]);

  return null;
}