import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection } from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $isAtNodeEnd } from "@lexical/selection";
import { keyDownCallback } from "../../utils/toolbarUtils";
import IconButton from "../IconButton";
import { Link } from 'lucide-react';
import useIsMobile from "../../hooks/useIsMobile"
import "./styles.scss";

function getSelectedNode(selection) {
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
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

const TextToLinkButton = () => {
  const [isLink, setIsLink] = useState(false);
  const [editor] = useLexicalComposerContext();
  const isMobile = useIsMobile()
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if (!selection) return setIsLink(false);
        const node = getSelectedNode(selection);
        const parent = node.getParent();
        if ($isLinkNode(parent) || $isLinkNode(node)) {
          setIsLink(true);
        } else {
          setIsLink(false);
        }
      });
    });
  }, [editor]);

  const handleLink = useCallback(() => {
    editor.read(() => {
      if (!isLink) {
        const selection = $getSelection();
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, selection.getTextContent());
      } else {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
      }
    });
  }, [editor, isLink]);

  useEffect(() => {
    const handleButtonPress = e => {
      if (e.metaKey && e.shiftKey && e.key === "l") {
        handleLink();
      }
    };
    return keyDownCallback(handleButtonPress);
  }, [editor, handleLink]);

  return (
    <>
      <IconButton
        variant="neutral"
        type="plain"
        dsVersion="2.0"
        icon={<Link size = {isMobile ? 12 : 16}/>}
        onClick={handleLink}
        isActivated={isLink}
        size="small"
        tooltip="Strikethrough text"
      />
    </>
  );
};

export default TextToLinkButton;
