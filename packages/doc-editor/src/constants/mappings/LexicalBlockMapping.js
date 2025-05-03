import React from "react";
import {
  ChecklistOutlined,
  HeadingOneOutlined,
  HeadingThreeOutlined,
  HeadingTwoOutlined,
  ListBulletedOutlined,
  ListNumberedOutlined,
  TextTOutlined,
} from "@toddle-edu/ds-icons";

import "./styles.scss";

export const LexicalBlockMapping = {
  paragraph: {
    label: "Paragraph",
    key: "paragraph",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <TextTOutlined />
        </span>
        <span className={"text"}>Paragraph</span>
      </div>
    ),
  },
  h3: {
    label: "Heading 1",
    key: "h3",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <HeadingOneOutlined />
        </span>
        <span className={"text"}>Heading 1</span>
      </div>
    ),
  },
  h4: {
    label: "Heading 2",
    key: "h4",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <HeadingTwoOutlined />
        </span>
        <span className={"text"}>Heading 2</span>
      </div>
    ),
  },
  h5: {
    label: "Heading 3",
    key: "h5",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <HeadingThreeOutlined />
        </span>
        <span className={"text"}>Heading 3</span>
      </div>
    ),
  },
  bullet: {
    label: "Bullet list",
    key: "bullet",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <ListBulletedOutlined />
        </span>
        <span className={"text"}>Bullet List</span>
      </div>
    ),
  },
  number: {
    label: "Numbered list",
    key: "number",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <ListNumberedOutlined />
        </span>
        <span className={"text"}>Numbered List</span>
      </div>
    ),
  },
  check: {
    label: "Check list",
    key: "check",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <ChecklistOutlined />
        </span>
        <span className={"text"}>Check List</span>
      </div>
    ),
  },
};
