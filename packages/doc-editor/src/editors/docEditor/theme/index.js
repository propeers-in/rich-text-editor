// src/core/presentation/editor/EditorTheme.js

const theme = {
  // Text modifiers
  text: {
    bold: "tde-textBold",
    italic: "tde-textItalic",
    underline: "tde-textUnderline",
    strikethrough: "tde-textStrikethrough",
    code: "tde-textCode",
    subscript: "tde-textSubscript",
    superscript: "tde-textSuperscript",
    highlight: "tde-textHighlight",
    uppercase: "tde-textUppercase",
    lowercase: "tde-textLowercase",
    capitalize: "tde-textCapitalize",
  },

  // Paragraphs
  paragraph: "tde-paragraph",

  // Headings
  heading: {
    h1: "tde-heading tde-headingH1",
    h2: "tde-heading tde-headingH2",
    h3: "tde-heading tde-headingH3",
    h4: "tde-heading tde-headingH4",
    h5: "tde-heading tde-headingH5",
    h6: "tde-heading tde-headingH6",
  },

  // Lists
  list: {
    listitem: "tde-listItem",
    nested: {
      listitem: "tde-listItem tde-listItemNested",
    },
    ol: "tde-list tde-listOrdered",
    ul: "tde-list tde-listUnordered",
    checklist: "tde-list tde-listChecklist",
    listitemChecked: "tde-listItem-Checked",
    listitemUnchecked: "tde-listItem-Unchecked",
    olDepth: [
      "tde-listOrdered__ol1",
      "tde-listOrdered__ol2",
      "tde-listOrdered__ol3",
      "tde-listOrdered__ol4",
      "tde-listOrdered__ol5",
    ],
  },

  // Quotes
  quote: "tde-quote",

  // Links
  link: "tde-link",
  linkHighlight: "tde-linkHighlight",
  linkInsert: "tde-linkInsert",

  // Tables
  table: "tde-table",
  tableCell: "tde-tableCell",
  tableCellHeader: "tde-tableCell tde-tableCellHeader",
  tableRow: "tde-tableRow",

  // Code
  code: "tde-codeBlock",
  codeHighlight: {
    atrule: "tde-codeAtrule",
    attr: "tde-codeAttr",
    boolean: "tde-codeBoolean",
    builtin: "tde-codeBuiltin",
    cdata: "tde-codeCdata",
    char: "tde-codeChar",
    class: "tde-codeClass",
    comment: "tde-codeComment",
    constant: "tde-codeConstant",
    deleted: "tde-codeDeleted",
    doctype: "tde-codeDoctype",
    entity: "tde-codeEntity",
    function: "tde-codeFunction",
    important: "tde-codeImportant",
    inserted: "tde-codeInserted",
    keyword: "tde-codeKeyword",
    namespace: "tde-codeNamespace",
    number: "tde-codeNumber",
    operator: "tde-codeOperator",
    prolog: "tde-codeProlog",
    property: "tde-codeProperty",
    punctuation: "tde-codePunctuation",
    regex: "tde-codeRegex",
    selector: "tde-codeSelector",
    string: "tde-codeString",
    symbol: "tde-codeSymbol",
    tag: "tde-codeTag",
    url: "tde-codeUrl",
    variable: "tde-codeVariable",
  },

  // Horizontal rule
  horizontalRule: "tde-hr",

  // Selection styles
  ltr: "tde-ltr",
  rtl: "tde-rtl",
  blockCursor: "tde-cursorBlock",
  textFormatting: "tde-textFormatting",
  tableCellSelected: "tde-tableCellSelected",
  tableCellEditing: "tde-tableCellEditing",
  tableAddColumns: "tde-tableAddColumns",
  tableAddRows: "tde-tableAddRows",

  // Overrides
  embedBlock: "tde-embed",
  image: "tde-image",
  tweet: "tde-tweet",
  video: "tde-video",
  hashtag: "tde-hashtag",
  mention: "tde-mention",
};

export default theme;
