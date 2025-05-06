import { $getSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";

export const MIN_ALLOWED_FONT_SIZE = 6;
export const MAX_ALLOWED_FONT_SIZE = 72;
export const DEFAULT_FONT_SIZE = 16;

export const UpdateFontSizeType = {
  increment: 1,
  decrement: 2,
};

export const calculateNextFontSize = (currentFontSize, updateType) => {
  if (!updateType) {
    return currentFontSize;
  }

  let updatedFontSize = currentFontSize;
  switch (updateType) {
    case UpdateFontSizeType.decrement:
      switch (true) {
        case currentFontSize > MAX_ALLOWED_FONT_SIZE:
          updatedFontSize = MAX_ALLOWED_FONT_SIZE;
          break;
        case currentFontSize >= 48:
          updatedFontSize -= 12;
          break;
        case currentFontSize >= 24:
          updatedFontSize -= 4;
          break;
        case currentFontSize >= 14:
          updatedFontSize -= 2;
          break;
        case currentFontSize >= 9:
          updatedFontSize -= 1;
          break;
        default:
          updatedFontSize = MIN_ALLOWED_FONT_SIZE;
          break;
      }
      break;

    case UpdateFontSizeType.increment:
      switch (true) {
        case currentFontSize < MIN_ALLOWED_FONT_SIZE:
          updatedFontSize = MIN_ALLOWED_FONT_SIZE;
          break;
        case currentFontSize < 12:
          updatedFontSize += 1;
          break;
        case currentFontSize < 20:
          updatedFontSize += 2;
          break;
        case currentFontSize < 36:
          updatedFontSize += 4;
          break;
        case currentFontSize <= 60:
          updatedFontSize += 12;
          break;
        default:
          updatedFontSize = MAX_ALLOWED_FONT_SIZE;
          break;
      }
      break;

    default:
      break;
  }
  return updatedFontSize;
};

export const updateFontSizeInSelection = (editor, newFontSize, updateType) => {
  const getNextFontSize = prevFontSize => {
    if (!prevFontSize) {
      prevFontSize = `${DEFAULT_FONT_SIZE}px`;
    }
    prevFontSize = prevFontSize.slice(0, -2);
    const nextFontSize = calculateNextFontSize(
      Number(prevFontSize),
      updateType
    );
    return `${nextFontSize}px`;
  };

  editor.update(() => {
    if (editor.isEditable()) {
      const selection = $getSelection();
      if (selection !== null) {
        $patchStyleText(selection, {
          "font-size": newFontSize || getNextFontSize,
        });
      }
    }
  });
};

export const updateFontSize = (editor, updateType, inputValue) => {
  if (inputValue !== "") {
    const nextFontSize = calculateNextFontSize(Number(inputValue), updateType);
    updateFontSizeInSelection(editor, String(nextFontSize) + "px", null);
  } else {
    updateFontSizeInSelection(editor, null, updateType);
  }
};
