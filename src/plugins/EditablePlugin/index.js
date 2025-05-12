import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";


export function EditablePlugin({ isEditable }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const isAlreadyEditable = editor.isEditable();
    if(isAlreadyEditable === isEditable) return;
    editor.setEditable(isEditable);
  }, [editor, isEditable]);

  return null;
}