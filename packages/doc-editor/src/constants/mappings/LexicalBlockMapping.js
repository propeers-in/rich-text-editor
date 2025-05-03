import React from "react";
import { ListCheck,Heading1,Heading2,Heading3, List, ListOrdered, Text   } from 'lucide-react';

import "./styles.scss";

export const LexicalBlockMapping = {
  paragraph: {
    label: "Paragraph",
    key: "paragraph",
    jsx: (
      <div className={"tde-toolbar-heading-block"}>
        <span className={"icon"}>
          <Text />
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
          <Heading1 />
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
          <Heading2 />
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
          <Heading3 />
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
          <List />
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
          <ListOrdered />
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
          <ListCheck />
        </span>
        <span className={"text"}>Check List</span>
      </div>
    ),
  },
};
