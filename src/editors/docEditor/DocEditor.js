// src/core/presentation/editor/DocEditor.js
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { useRef } from "react";
import theme from "./theme";
import "./editor.scss";
import ToolbarPlugin from "../../plugins/ToolbarPlugin";
import React from "react";
import FloatingLinkEditorPlugin from "../../plugins/FloatingLinkEditorPlugin/FloatingLinkEditorPlugin";
import ControlledContentPlugin from "../../plugins/ControlledContentPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import AllNodes from "../../nodes/AllNodes";
import { ALL_TRANSFORMERS } from "../../constants/transformers/MarkdownTransformer";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import LocalStoragePlugin from "../../plugins/LocalStoragePlugin/LocalStoragePlugin";
import IndentLimitPlugin from "../../plugins/IndentLimitPlugin/IndentLimitPlugin";

// Default error handler
const onError = error => {
  // TODO: Integrate with error monitoring service (Sentry, etc.)
  console.error(error);
};

export const getBaseEditorConfig = (config = {}) => ({
  namespace: "ProfessionalEditor",
  theme: theme,
  nodes: [...AllNodes, ...(config.nodes || [])],
  onError: config.onError || onError,
  editable: config.editable !== false,
});



export default function DocEditor({
  initialConfig = {},
  children,
  customClass = {
      editorContainerClass : "",
      toolbarClass: "",
      scrollableContainerClass: "",
      contentEditableWrapperClass: "",
      contentEditableClass : ""
  },
  value = "",
  onChange,
}) {
  const editorConfig = getBaseEditorConfig(initialConfig);
  const anchorElemRef = useRef(null);

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div
        className={`tde-editorContainer ${customClass?.editorContainerClass ?? ""}`}
      >
        <ToolbarPlugin  className={customClass?.toolbarClass ?? ""}/>
        <div className={`tde-scrollable-container ${customClass?.scrollableContainerClass ?? ""}`}>
          <div ref={anchorElemRef} className="tde-anchor-element">
            <RichTextPlugin
              contentEditable={
                <div
                  ref={anchorElemRef}
                  className={`tde-contentEditable-wrapper ${customClass?.contentEditableWrapperClass ?? ""}`}
                >
                  <ContentEditable className={`tde-contentEditable ${customClass?.contentEditableClass ?? ""}`} />
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
          </div>
        </div>

        {/* Essential Plugins */}
        <ControlledContentPlugin value={value} onChange={onChange} />
        <AutoFocusPlugin />
        <HistoryPlugin />
        <ListPlugin />
        <LinkPlugin />
        <CheckListPlugin />
        <TabIndentationPlugin />
        <TablePlugin />
        <HorizontalRulePlugin />
        {/*<FloatingToolbarPlugin />*/}
        <FloatingLinkEditorPlugin />
       {/*  <LocalStoragePlugin /> */}
        <IndentLimitPlugin maxIndent={10} />

        <MarkdownShortcutPlugin transformers={ALL_TRANSFORMERS} />
        {/*<MarkdownPastePlugin />*/}
        <CheckListPlugin />

        {/* <DraggableBlockPlugin anchorElem={anchorElemRef.current} /> */}
        {/* Custom Children (additional plugins/toolbars) */}
        {children}
      </div>
    </LexicalComposer>
  );
}
