import React from "react";
import { useCallback, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  SELECTION_CHANGE_COMMAND,
} from "lexical";

import { keyDownCallback } from "../../utils/toolbarUtils";
import "./styles.scss";
import { AddOutlined, MinusOutlined } from "../../assets/icons";
import {
  DEFAULT_FONT_SIZE,
  MAX_ALLOWED_FONT_SIZE,
  MIN_ALLOWED_FONT_SIZE,
  updateFontSize,
  updateFontSizeInSelection,
  UpdateFontSizeType,
} from "./utils";
import { $getSelectionStyleValueForProperty } from "@lexical/selection";
import DropDown from "../DropDown";
import { mergeRegister } from "@lexical/utils";

const SIZE_OPTIONS = [
  "6",
  "8",
  "10",
  "12",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "48",
  "62",
  "72",
];

const FontSizeControls = () => {
  const [editor] = useLexicalComposerContext();
  const [inputValue, setInputValue] = React.useState(DEFAULT_FONT_SIZE);
  const [inputChangeFlag, setInputChangeFlag] = React.useState(false);

  const handleFontIncrease = useCallback(() => {
    updateFontSize(editor, UpdateFontSizeType.increment, inputValue);
  }, [editor, inputValue]);

  const handleFontDecrease = useCallback(() => {
    updateFontSize(editor, UpdateFontSizeType.decrement, inputValue);
  }, [editor, inputValue]);

  const handleKeyPress = e => {
    const inputValueNumber = Number(inputValue);

    if (e.key === "Tab") {
      return;
    }
    if (["e", "E", "+", "-"].includes(e.key) || isNaN(inputValueNumber)) {
      e.preventDefault();
      setInputValue("");
      return;
    }
    setInputChangeFlag(true);
    if (e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();

      updateFontSizeByInputValue(inputValueNumber);
    }
  };

  const handleInputBlur = () => {
    if (inputValue !== "" && inputChangeFlag) {
      const inputValueNumber = Number(inputValue);
      updateFontSizeByInputValue(inputValueNumber);
    }
  };

  const updateFontSizeByInputValue = inputValueNumber => {
    let updatedFontSize = inputValueNumber;
    if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
      updatedFontSize = MAX_ALLOWED_FONT_SIZE;
    } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
      updatedFontSize = MIN_ALLOWED_FONT_SIZE;
    }

    setInputValue(String(updatedFontSize));
    updateFontSizeInSelection(editor, String(updatedFontSize) + "px", null);
    setInputChangeFlag(false);
  };

  useEffect(() => {
    const handleButtonPress = e => {
      if (e.metaKey && e.shiftKey && e.key === ",") {
        handleFontDecrease();
      } else if (e.metaKey && e.shiftKey && e.key === ".") {
        handleFontIncrease();
      }
    };
    return keyDownCallback(handleButtonPress);
  }, [editor, handleFontDecrease, handleFontIncrease]);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      let selectedSize = $getSelectionStyleValueForProperty(
        selection,
        "font-size",
        DEFAULT_FONT_SIZE + "px"
      );
      if (selectedSize !== "") {
        selectedSize = Number(selectedSize.replaceAll("px", ""));
        setInputValue(selectedSize);
      } else {
        setInputValue(selectedSize);
      }
    }
  }, []);

  const OptionsDropdown = props => {
    return (
      <div className={"font-size-options-wrapper no-scrollbar"}>
        {SIZE_OPTIONS.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              updateFontSizeByInputValue(option);
              props.handleClick();
            }}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded font-size-options"
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      })
    );
  }, [editor, $updateToolbar]);

  return (
    <div className="tde-font-size-control-wrapper">
      <button
        type="button"
        onClick={() => {
          updateFontSize(editor, UpdateFontSizeType.decrement, inputValue);
        }}

        disabled={
          inputValue !== "" && Number(inputValue) <= MIN_ALLOWED_FONT_SIZE
        }
        className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded control-btn-wrapper"
      >
        <span className={"controls"}>
          <MinusOutlined />
        </span>
      </button>

      <DropDown
        className={"font-size-dropdown"}
        trigger={() => (
          <input
            className={`font-counter`}
            title="Font size"
            value={inputValue}
            min={MIN_ALLOWED_FONT_SIZE}
            max={MAX_ALLOWED_FONT_SIZE}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleInputBlur}
          />
        )}
      >
        <OptionsDropdown />
      </DropDown>
      <button
        type="button"
        onClick={handleFontIncrease}
        disabled={
          inputValue !== "" && Number(inputValue) >= MAX_ALLOWED_FONT_SIZE
        }
        className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded control-btn-wrapper"
      >
        <span className={"controls"}>
          <AddOutlined width={12} height={12} />
        </span>
      </button>
    </div>
  );
};

export default FontSizeControls;
