import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { DEFAULT_EDITOR_TEXT } from "./defaultEditorText";
import { mergeRegister } from "@lexical/utils";
import { CLEAR_HISTORY_COMMAND } from "lexical";

const STORAGE_KEY = "lexical_editor_content";

export default function LocalStoragePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
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

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        const json = JSON.stringify(editorState);
        localStorage.setItem(STORAGE_KEY, json);
      })
    );
  }, [editor]);

  return null;
}
