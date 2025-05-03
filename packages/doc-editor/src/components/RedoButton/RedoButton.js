import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CAN_REDO_COMMAND, REDO_COMMAND } from "lexical";
import { useEffect, useState } from "react";
import IconButton from "../IconButton";
import { ForwardArrowOutlined } from "../../assets/icons";

const RedoButton = () => {
  const [canRedo, setCanRedo] = useState(false);

  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      CAN_REDO_COMMAND,
      payload => {
        setCanRedo(payload);
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
      icon={<ForwardArrowOutlined color={canRedo ? "#333333" : "#979797"} />}
      size="small"
      tooltip="Undo"
      disabled={!canRedo}
      onClick={() => {
        editor.dispatchCommand(REDO_COMMAND, undefined);
      }}
      aria-label="undo"
    />
  );
};

export default RedoButton;
