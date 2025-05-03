// src/plugins/ToolbarPlugin/Toolbar.js
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useState } from "react";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
  $isRootOrShadowRoot,
  $isElementNode,
} from "lexical";
import { $isListNode } from "@lexical/list";
import IconButton from "../../components/IconButton";
import {Button} from "../../components/Button"
import { $findMatchingParent } from "@lexical/utils";
import {
  TextAlignCenterOutlined,
  TextAlignLeftOutlined,
  TextAlignRightOutlined,
  TextBoldOutlined,
  ItalicsOutlined,
  TextUnderlinedOutlined,
  TextIndentOutlined,
  TextOutdentOutlined,
  TextAlignJustifiedOutlined,
  CaretDownFilled,
} from "@toddle-edu/ds-icons";
import { $isHeadingNode } from "@lexical/rich-text";
import { $isCodeNode } from "@lexical/code";
import { LexicalBlockMapping } from "../../constants/mappings/LexicalBlockMapping";
import { handleBlockTypeChange } from "../../utils/toolbarUtils";

import React from "react";
import FontColorOption from "../../components/FontColorPickerButton/FontColorPickerButton";
import FontSizeControls from "../../components/FontSizeControls/FontSizeControls";
import TextToLinkButton from "../../components/TextToLinkButton/TextToLinkButton";
import UndoButton from "../../components/UndoButton/UndoButton";
import RedoButton from "../../components/RedoButton/RedoButton";
import DropDown from "../../components/DropDown";

import "./toolbar.scss";
import TextStyleFormattingButton from "../../components/TextStyleFormattingButton/TextStyleFormattingButton";
import FontHighlighterButton from "../../components/FontHighlighterButton/FontHighlighterButton";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
import { AddOutlined, TwoLinesOutlined } from "../../assets/icons";

export const Divider = () => <div className={`tde-divider`} />;

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = useState("paragraph");
  const [alignment, setAlignment] = useState("left");
  const [textFormat, setTextFormat] = useState({
    isBold: false,
    isItalic: false,
    isUnderline: false,
  });

  const updateToolbar = useCallback(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        setTextFormat({
          isBold: selection.hasFormat("bold"),
          isItalic: selection.hasFormat("italic"),
          isUnderline: selection.hasFormat("underline"),
          isHighlight: selection.hasFormat("highlight"),
        });

        const anchorNode = selection.anchor.getNode();
        let element =
          anchorNode.getKey() === "root"
            ? anchorNode
            : $findMatchingParent(anchorNode, e => {
                const parent = e.getParent();
                return parent !== null && $isRootOrShadowRoot(parent);
              });

        if (element === null) {
          element = anchorNode.getTopLevelElementOrThrow();
        }

        // Set alignment
        setAlignment(
          $isElementNode(element)
            ? element.getFormatType() !== ""
              ? element.getFormatType()
              : "left"
            : "left"
        );

        // Set block type
        let currentBlockType = "paragraph";
        if ($isListNode(element)) {
          currentBlockType = element.getListType();
        } else if ($isHeadingNode(element)) {
          currentBlockType = element.getTag();
        } else if ($isCodeNode(element)) {
          currentBlockType = "code";
        }
        setBlockType(currentBlockType);

        // Additional optimizations from production code
        // const node = getSelectedNode(selection);
        // const parent = node.getParent();
        // const isLink = $isLinkNode(parent) || $isLinkNode(node);
        // You could add link state management here if needed
      }
    });
  }, [editor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        setTimeout(() => {
          updateToolbar();
        }, 0);

        return false;
      },
      4
    );
  }, [editor, updateToolbar]);

  const formatText = format => {
    if (format === "bold") {
      setTextFormat(prev => ({ ...prev, isBold: !prev.isBold }));
    } else if (format === "italic") {
      setTextFormat(prev => ({ ...prev, isItalic: !prev.isItalic }));
    } else if (format === "underline") {
      setTextFormat(prev => ({ ...prev, isUnderline: !prev.isUnderline }));
    }
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const HeadingDropdown = () => {
    return (
      <div className={"tde-dropdownOverlay"}>
        <div className={"tde-toolbar-dropdown-default"}>
          {Object.entries(LexicalBlockMapping).map(entry => {
            return (
              <Button
                key={entry[0]}
                variant="neutral"
                type="plain"
                dsVersion="2.0"
                size="small"
                onClick={() => {
                  handleBlockTypeChange(editor, entry[0]);
                }}
                className={"list-item"}
              >
                {entry[1].jsx}
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  const InsertDropdown = () => {
    return (
      <div className={"tde-dropdownOverlay"}>
        <div className={"tde-toolbar-dropdown-default"}>
          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
            }}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TwoLinesOutlined />
              </span>
              <span className={"text"}>Divider</span>
            </div>
          </Button>
        </div>
      </div>
    );
  };

  const TextPositioningDropDown = () => {
    return (
      <div className={"tde-dropdownOverlay"}>
        <div className={"tde-toolbar-dropdown-nb"}>
          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
              setAlignment("left");
            }}
            isActivated={alignment === "left"}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TextAlignLeftOutlined />
              </span>
              <span className={"text"}>Left align</span>
            </div>
          </Button>

          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
              setAlignment("center");
            }}
            isActivated={alignment === "center"}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TextAlignCenterOutlined />
              </span>
              <span className={"text"}>Center align</span>
            </div>
          </Button>

          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
              setAlignment("right");
            }}
            isActivated={alignment === "right"}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TextAlignRightOutlined />
              </span>
              <span className={"text"}>Right align</span>
            </div>
          </Button>

          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
              setAlignment("justify");
            }}
            isActivated={alignment === "justify"}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TextAlignJustifiedOutlined />
              </span>
              <span className={"text"}>Justify align</span>
            </div>
          </Button>
        </div>

        <span className={"tde-hr"}></span>

        <div className={"tde-toolbar-dropdown-nt"}>
          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
            }}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TextOutdentOutlined />
              </span>
              <span className={"text"}>Outdent</span>
            </div>
          </Button>

          <Button
            variant="neutral"
            type="plain"
            dsVersion="2.0"
            size="small"
            onClick={() => {
              editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
            }}
            className={"list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <TextIndentOutlined />
              </span>
              <span className={"text"}>Indent</span>
            </div>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={"tde-toolbar"}>
      <UndoButton />

      <RedoButton />

      <Divider />

      <DropDown
        trigger={() => {
          return (
            <Button variant="neutral" type="plain" dsVersion="2.0" size="small">
              <div className={"tde-dropdown-btn"}>
                <div className={"tde-toolbar-heading-block"}>
                  <span className={"icon"}>
                    <AddOutlined />
                  </span>
                  <span className={"text"}>Insert</span>
                </div>
                <CaretDownFilled />
              </div>
            </Button>
          );
        }}
      >
        <InsertDropdown />
      </DropDown>

      <DropDown
        trigger={() => {
          return (
            <Button variant="neutral" type="plain" dsVersion="2.0" size="small">
              <div className={"tde-dropdown-btn"}>
                {LexicalBlockMapping[blockType]?.jsx ?? blockType}
                <CaretDownFilled />
              </div>
            </Button>
          );
        }}
      >
        <HeadingDropdown />
      </DropDown>

      <Divider />

      <DropDown
        trigger={() => {
          return (
            <Button variant="neutral" type="plain" dsVersion="2.0" size="small">
              <div className={"tde-dropdown-btn"}>
                {{
                  left: <TextAlignLeftOutlined />,
                  center: <TextAlignCenterOutlined />,
                  right: <TextAlignRightOutlined />,
                  justify: <TextAlignJustifiedOutlined />,
                }[alignment] ?? <TextAlignLeftOutlined />}
                <CaretDownFilled />
              </div>
            </Button>
          );
        }}
      >
        <TextPositioningDropDown />
      </DropDown>

      <TextStyleFormattingButton />

      <Divider />

      <FontSizeControls />

      <Divider />

      {/* Text Formatting */}
      <IconButton
        variant="neutral"
        type="plain"
        dsVersion="2.0"
        icon={<TextBoldOutlined />}
        onClick={() => formatText("bold")}
        isActivated={textFormat.isBold}
        size="small"
        tooltip="Bold"
      />
      <IconButton
        variant="neutral"
        type="plain"
        dsVersion="2.0"
        icon={<ItalicsOutlined />}
        onClick={() => formatText("italic")}
        isActivated={textFormat.isItalic}
        size="small"
        tooltip="Italic"
      />
      <IconButton
        variant="neutral"
        type="plain"
        dsVersion="2.0"
        icon={<TextUnderlinedOutlined />}
        onClick={() => formatText("underline")}
        isActivated={textFormat.isUnderline}
        size="small"
        tooltip="Underline"
      />

      <TextToLinkButton />

      <Divider />

      <FontColorOption />

      <FontHighlighterButton />
    </div>
  );
}
