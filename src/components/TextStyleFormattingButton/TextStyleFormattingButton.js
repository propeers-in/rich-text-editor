import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import React, { useEffect, useState } from "react";
import {ChevronDown, Trash2 } from 'lucide-react';
import DropDown from "../DropDown";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";

import { clearFormatting } from "../../utils/toolbarUtils";
import {
  StrikethroughOutlined,
  SubscriptOutlined,
  SuperscriptOutlined,
  TextCaseOutlined,
  TextLowercaseOutlined,
  TextUppercaseOutlined,
} from "../../assets/icons";

const TextStyleFormattingButton = () => {
  const [editor] = useLexicalComposerContext();
  const [fontFormatting, setFontFormatting] = useState(null);

  useEffect(() => {
    const unregisterListener = editor.registerUpdateListener(
      ({ editorState }) => {
        editorState.read(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            if (selection.hasFormat("uppercase")) {
              setFontFormatting("uppercase");
            } else if (selection.hasFormat("lowercase")) {
              setFontFormatting("lowercase");
            } else if (selection.hasFormat("capitalize")) {
              setFontFormatting("capitalize");
            } else if (selection.hasFormat("strikethrough")) {
              setFontFormatting("strikethrough");
            } else if (selection.hasFormat("subscript")) {
              setFontFormatting("subscript");
            } else if (selection.hasFormat("superscript")) {
              setFontFormatting("superscript");
            } else {
              setFontFormatting(null);
            }
          }
        });
      }
    );

    return () => {
      unregisterListener();
    };
  }, [editor]);

  const FontColorDropDownChildren = () => {
    return (
      <div className={"tde-dropdownOverlay"}>
        <div className={"tde-toolbar-dropdown-nb"}>
          <button
            type="button"
            //isActivated={fontFormatting === "lowercase"}
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "lowercase");
            }}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"
          >
            <div className={"tde-toolbar-heading-block"}>
              <TextLowercaseOutlined />
              <span className={"text"}>Lowercase</span>
            </div>
          </button>
          <button
            type="button"
            //isActivated={fontFormatting === "uppercase"}
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "uppercase");
            }}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"
          >
            <div className={"tde-toolbar-heading-block"}>
              <TextUppercaseOutlined />
              <span className={"text"}>Uppercase</span>
            </div>
          </button>
          <button
            type="button"
            isActivated={fontFormatting === "capitalize"}
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "capitalize");
            }}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"
          >
            <div className={"tde-toolbar-heading-block"}>
              <TextCaseOutlined />
              <span className={"text"}>Capitalize</span>
            </div>
          </button>

          <button
            type="button"
            //isActivated={fontFormatting === "strikethrough"}
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
            }}
            className={"flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <StrikethroughOutlined />
              <span className={"text"}>Strikethrough</span>
            </div>
          </button>

          <button
          type="button"
            //isActivated={fontFormatting === "subscript"}
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
            }}
            className={"flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <SubscriptOutlined />
              <span className={"text"}>Subscript</span>
            </div>
          </button>

          <button
           type="button"
            //isActivated={fontFormatting === "superscript"}
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
            }}
            className={"flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <SuperscriptOutlined />
              <span className={"text"}>Superscript</span>
            </div>
          </button>
        </div>

        <span className={"tde-hr"}></span>

        <div className={"tde-toolbar-dropdown-nt"}>
          <button
            type="button"
            onClick={() => {
              clearFormatting(editor, undefined);
            }}
            className={"flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded list-item"}
          >
            <div className={"tde-toolbar-heading-block"}>
              <span className={"icon"}>
                <Trash2 />
              </span>
              <span className={"text"}>Clear formatting</span>
            </div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <DropDown
      trigger={() => (
        <button  type="button" >
          <div className={"tde-dropdown-btn"}>
            <TextCaseOutlined />
            <ChevronDown />
          </div>
        </button>
      )}
    >
      <FontColorDropDownChildren />
    </DropDown>
  );
};

export default TextStyleFormattingButton;
