import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import {
  $getSelection,
  $isRangeSelection,
  $setSelection,
  TextNode,
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import IconButton from "../../components/IconButton";
import {
  CloseCircleOutlined,
  CopyOutlined,
  PencilOutlined,
  SortOutlined,
} from "@toddle-edu/ds-icons";
import {
  getMetadataMicrolink,
  getSelectedNode,
} from "../../utils/toolbarUtils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import "./styles.scss";

const HTTP_PATTERN = /^https?:\/\//;

function positionEditorElement(editor, rect) {
  if (rect === null || rect.left <= 0 || rect.top <= 0) {
    editor.style.opacity = "0";
    editor.style.top = "-1000px";
    editor.style.left = "-1000px";
  } else {
    editor.style.opacity = "1";
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
    editor.style.left = `${rect.left + window.pageXOffset}px`;
  }
}

const FloatingLinkEditorPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isLink, setIsLink] = useState(false);
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState(null);
  const [urlData, setUrlData] = useState({});
  const [updatedUrlLink, setUpdatedUrlLink] = useState("");
  const isLinkRef = useRef(null);

  const $updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();

      let linkNode = null;

      if ($isLinkNode(parent)) {
        linkNode = parent;
        setLinkUrl(parent.getURL());
        setUpdatedUrlLink(parent.getURL());
        setLinkText(parent.getTextContent());
      } else if ($isLinkNode(node)) {
        linkNode = node;
        setLinkUrl(node.getURL());
        setUpdatedUrlLink(node.getURL());
        setLinkText(node.getTextContent());
      } else {
        setLinkUrl("");
        setUpdatedUrlLink("");
        setLinkText("");
      }

      const editorElem = editorRef.current;
      if (!editorElem) return;

      if (linkNode) {
        const dom = editor.getElementByKey(linkNode.getKey());
        if (dom != null) {
          const rect = dom.getBoundingClientRect();
          positionEditorElement(editorElem, rect); // <- Now using link element's rect!
          setLastSelection(selection);
        }
      }
    }
  }, [editor]);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => $updateLinkEditor());
    });
  }, [editor, $updateLinkEditor, isLink]);

  useEffect(() => {
    editor.getEditorState().read(() => $updateLinkEditor());
  }, [editor, $updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) inputRef.current.focus();
  }, [isEditMode]);

  useEffect(() => {
    if (!updatedUrlLink) return;
    getMetadataMicrolink(updatedUrlLink).then(data => {
      if (data) setUrlData(data);
    });
  }, [updatedUrlLink]);

  const handleSave = (url, text) => {
    if (lastSelection !== null && url !== "") {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
      editor.update(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return;

        const nodes = selection.getNodes();
        for (const node of nodes) {
          const parent = node.getParent();
          if ($isLinkNode(parent) && node instanceof TextNode) {
            node.setTextContent(text);
          }
        }
        $setSelection(null);
      });
    }
    setEditMode(false);
  };

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if (!selection) {
          isLinkRef.current = false;
          return setIsLink(false);
        }
        const node = getSelectedNode(selection);
        const parent = node.getParent();
        if ($isLinkNode(parent) || $isLinkNode(node)) {
          isLinkRef.current = true;
          setIsLink(true);
        } else {
          isLinkRef.current = false;
          setIsLink(false);
        }
      });
    });
  }, [editor]);

  return (
    <>
      {isLink ? (
        <div ref={editorRef} className="link-editor">
          {isEditMode ? (
            <div className="link-edit">
              <div className="inputs">
                <span>Text</span>
                <input
                  ref={inputRef}
                  value={linkText}
                  onChange={e => setLinkText(e.target.value)}
                />
              </div>
              <div className="inputs">
                <span>Url</span>
                <input
                  ref={inputRef}
                  value={linkUrl}
                  onChange={e => setLinkUrl(e.target.value)}
                />
              </div>
              <div className={"flex-end"}>
                <button
                  className="link-btn-primary"
                  onClick={() => handleSave(linkUrl, linkText)}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className={"flex-column"}>
              <div className="link-input">
                <div className={"flex-row"}>
                  <img
                    src={urlData?.logo?.url ?? "#"}
                    alt="logo"
                    className="logo"
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"external-link"}
                  >
                    {linkUrl}
                  </a>
                </div>
                <div className="control-panel">
                  <IconButton
                    dsVersion="2.0"
                    icon={<CopyOutlined />}
                    onClick={() => {
                      window.navigator.clipboard.writeText(linkUrl);
                    }}
                    onMouseDown={e => e.preventDefault()}
                    tooltip="Copy link"
                    size="small"
                    variant="neutral"
                    type="plain"
                  />
                  <IconButton
                    dsVersion="2.0"
                    icon={<PencilOutlined />}
                    onClick={() => setEditMode(true)}
                    onMouseDown={e => e.preventDefault()}
                    tooltip="Edit link"
                    size="small"
                    variant="neutral"
                    type="plain"
                  />
                  <IconButton
                    dsVersion="2.0"
                    icon={<CloseCircleOutlined />}
                    onClick={() =>
                      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
                    }
                    onMouseDown={e => e.preventDefault()}
                    tooltip="Remove link"
                    size="small"
                    variant="neutral"
                    type="plain"
                  />
                </div>
              </div>
              {urlData?.title && HTTP_PATTERN.test(linkText) && (
                <div className={"flex-column"}>
                  <div className={"flex-row"}>
                    <span className={"icon-square-20"}>
                      <SortOutlined />
                    </span>
                    <span className={"suggestion-title"}>{urlData.title}</span>
                  </div>
                  <div className={"suggestion-block"}>
                    <span>Replace url with above text?</span>
                    <button
                      className={"link-btn-primary"}
                      onClick={() => handleSave(linkUrl, urlData.title)}
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default FloatingLinkEditorPlugin;
