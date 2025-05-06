import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./style.scss";

/**
 * A dropdown component that toggles visibility based on a trigger button.
 *
 * @param {Object} props
 * @param {(options: { isVisible: boolean }) => React.ReactNode} props.trigger - A render prop function for the trigger button.
 * @param {React.ReactNode} props.children - The content to render inside the dropdown.
 * @param {String} props.className - ClassName
 * @returns {JSX.Element}
 */
const DropDown = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const fixedRef = useRef(false);

  /** @type {React.MutableRefObject<HTMLButtonElement | null>} */
  const triggerRef = useRef(null);

  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const dropdownRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    minWidth: 0,
  });

  /**
   * Hides the dropdown if the user clicks outside of it.
   * This function ensures that clicks inside the dropdown or trigger do not close it.
   *
   * @param {MouseEvent} e
   */
  const handleHide = useCallback(
    e => {
      const target = e.target;

      // If click is inside dropdown or trigger, do nothing
      if (
        (dropdownRef.current && dropdownRef.current.contains(target)) ||
        (triggerRef.current && triggerRef.current.contains(target))
      ) {
        return; // Don't close the dropdown if clicked inside
      }

      // Fade out before hiding the dropdown
      if (isVisible && !isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsAnimating(false);
        }, 300); // Wait for 300ms (same as fade-out duration)
      }
    },
    [isAnimating, isVisible]
  );

  useEffect(() => {
    document.addEventListener("click", handleHide);
    return () => {
      document.removeEventListener("click", handleHide);
    };
  }, [isVisible, isAnimating, handleHide]);

  /**
   * Handles toggling visibility and calculating dropdown position.
   */
  const handleClick = useCallback(() => {
    if (isVisible) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300);
      return;
    } else {
      setIsVisible(true); // Show immediately
    }

    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    setPosition({
      x: rect.left,
      y: rect.bottom + 8,
      minWidth: rect.width,
    });
  }, [isVisible]);

  /**
   * Adjusts the horizontal position of the dropdown so it's centered.
   */
  const handlePosition = () => {
    const trigger = triggerRef.current;
    const dropdown = dropdownRef.current;
    if (!trigger || !dropdown) return;

    const triggerRect = trigger.getBoundingClientRect();

    setPosition(prev => ({
      ...prev,
      x: triggerRect.left,
    }));
  };

  const handleFixed = state => {
    fixedRef.current = state;
  };

  useEffect(() => {
    handlePosition();

    window.addEventListener("resize", handlePosition);
    return () => {
      window.removeEventListener("resize", handlePosition);
    };
  }, [isVisible]);

  const handleKeyDown = useCallback(() => {
    if (isVisible && fixedRef.current === false) {
      handleClick();
    }
  }, [isVisible, handleClick]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleKeyDown]);

  return (
    <>
      <div onClick={handleClick} ref={triggerRef}>
        {props.trigger({ isVisible })}
      </div>

      {isVisible &&
        createPortal(
          <div
            className={`tde-dropdown ${isAnimating ? "fade-out" : "fade-in"} ${props.className}`}
            ref={dropdownRef}
            data-id="dropdown-parent"
            style={{
              position: "absolute",
              left: `${position.x}px`,
              top: `${position.y}px`,
              minWidth: `${position.minWidth}px`,
              zIndex: 9999
            }}
          >
            {React.Children.map(props.children, child => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  isVisible,
                  handleClick,
                  handleFixed,
                });
              }
              return child;
            })}
          </div>,
          document.body
        )}
    </>
  );
};

const MemoDropdown = memo(DropDown);

export default MemoDropdown;
