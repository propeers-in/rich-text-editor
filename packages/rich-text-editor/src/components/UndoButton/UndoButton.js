import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CAN_UNDO_COMMAND, UNDO_COMMAND } from "lexical";
import { useEffect, useState } from "react";
import IconButton from "../IconButton";
import { BackArrowOutlined } from "../../assets/icons";

const UndoButton = () => {
  const [canUndo, setCanUndo] = useState(false);

  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      CAN_UNDO_COMMAND,
      payload => {
        setCanUndo(payload);
        return false;
      },
      1
    );
  }, [editor]);

  return (
    <IconButton
      variant="neutral"
      type="plain"
      dsVersion="2.0"
      icon={<BackArrowOutlined color={canUndo ? "#333333" : "#979797"} />}
      size="small"
      tooltip="Undo"
      disabled={!canUndo}
      onClick={() => {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
      }}
      aria-label="undo"
    />
  );
};

export default UndoButton;
