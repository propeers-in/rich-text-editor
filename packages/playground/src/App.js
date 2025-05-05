import React, {useState} from "react";
import { RichTextEditor } from "rich-text-editor";
import "../../rich-text-editor/dist/main.css";

const App = () => {
  const [docContent, setDocContent] = useState("**Hello World**");
  return (
    // <div className="container">
   
  <RichTextEditor
  value={docContent}
  onChange={(updatedContent) => setDocContent(updatedContent)}
  />
    // </div>
  );
};

export default App;
