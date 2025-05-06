import { $createLinkNode, $isLinkNode, LinkNode } from "@lexical/link";
import { $createTextNode } from "lexical";

export const URL_LINK_TRANSFORMER = {
  dependencies: [LinkNode],
  export: (node, exportChildren) => {
    if (!$isLinkNode(node)) {
      return null;
    }
    const url = node.getURL();
    const text = exportChildren(node);
    return url === text ? url : `[${text}](${url})`;
  },
  importRegExp: /((?:https?:\/\/|www\.)[^\s"'>]+)\s/,
  regExp: /((?:https?:\/\/|www\.)[^\s"'>]+)\s/,
  replace: (textNode, match) => {
    const [, url] = match;

    const linkNode = $createLinkNode(url);
    const linkTextNode = $createTextNode(url);
    linkTextNode.setFormat(textNode.getFormat());
    linkNode.append(linkTextNode);

    textNode.replace(linkNode);

    const spaceNode = $createTextNode(" ");
    linkNode.insertAfter(spaceNode);

    return spaceNode;
  },
  trigger: " ",
  type: "text-match",
};
