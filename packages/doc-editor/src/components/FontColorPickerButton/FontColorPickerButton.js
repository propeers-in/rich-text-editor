import { useCallback, useEffect, useRef, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";
import ColorPickerGridValues from "./ColorPickerGridVals";
import React from "react";
import { clearFormatting } from "../../utils/toolbarUtils";
import DropDown from "../DropDown";

import "./styles.scss";
import { CaretDownFilled } from "@toddle-edu/ds-icons";
import { MinusSquareOutlined, TextColorOutlined } from "../../assets/icons";

const DEFAULT_FONT_COLOR = "#000000";

const FontColorPickerButton = () => {
  const [editor] = useLexicalComposerContext();
  const [fontColor, setFontColor] = useState(DEFAULT_FONT_COLOR);
  const fontColorRef = useRef(null);

  const handleUpdate = useCallback(
    newFontColor => {
      setFontColor(newFontColor);
      fontColorRef.current = newFontColor;

      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, {
            color: `${newFontColor}`,
          });
        }
        editor.focus();
      });
    },
    [editor]
  );

  const parseFontColor = styleString => {
    if (!styleString) return DEFAULT_FONT_COLOR;
    const match = styleString.match(/color:\s*(#[0-9a-fA-F]{3,6})\s*;/);
    return match ? match[1] : DEFAULT_FONT_COLOR;
  };

  const getFontColorFromSelection = useCallback(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const nodes = selection.getNodes();
        const colors = nodes
          .map(node => {
            const style = node.getStyle?.();
            return parseFontColor(style);
          })
          .filter(size => size !== undefined);

        if (colors.length) {
          const color = colors.length === 1 ? colors[0] : DEFAULT_FONT_COLOR;
          setFontColor(color);
          fontColorRef.current = color;
        }
      }
    });
  }, [editor]);

  useEffect(() => {
    const unregister = editor.registerUpdateListener(() => {
      getFontColorFromSelection();
    });

    return () => unregister();
  }, [editor, getFontColorFromSelection]);

  const FontColorDropDownChildren = props => {
    return (
      <div className={"tde-dropdownOverlay"}>
        <div className={"tde-padding-x tde-padding-t tde-default-list-col"}>
          <div className={"color-grid-wrapper"}>
            {ColorPickerGridValues.map((colors, i1) => (
              <div className={"color-grid"} key={i1}>
                {colors.map((color, i2) => (
                  <button
                    className={"color-grid-cell"}
                    key={`${i1}-${i2}`}
                    style={{
                      backgroundColor: color.color,
                      border: color.border ? "1px solid #e5e7eb" : "none",
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      handleUpdate(color.color);
                      props.handleClick();
                    }}
                  ></button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <span className={"tde-hr"}></span>

        <div className={"tde-padding-x tde-padding-b tde-default-list-col"}>
          <button
            type="button"
            onClick={() => {
              clearFormatting(editor, ["color"]);
              props.handleClick();
            }}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
          >
            <div className={"tde-toolbar-heading-block"}>
              <MinusSquareOutlined width={20} height={20} />
              <span
                className={"text"}
                style={{
                  marginTop: 2,
                }}
              >
                Clear
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <DropDown
      trigger={() => (
        <button className={" tde-font-color-trigger-parent "}>
          <div className={"tde-font-color-trigger"}>
            <div className={"icon"}>
              <TextColorOutlined />
              <span
                className="underline"
                style={{ "--font-color": fontColor }}
              />
            </div>
            <CaretDownFilled />
          </div>
        </button>
      )}
    >
      <FontColorDropDownChildren />
    </DropDown>
  );
};

export default FontColorPickerButton;
