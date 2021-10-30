import React from "react";
import Monaco from "@monaco-editor/react";
import Markdown from "react-markdown";
import "./Editor.css";

interface EditorProps {
  code: string;
  setCode: (code: string) => any;
}

const Editor: React.FC<EditorProps> = ({ code, setCode }) => {
  return (
    <div className="editor">
      <Monaco
        width="50vw"
        height="100vh"
        defaultLanguage="markdown"
        defaultValue={code}
        value={code}
        theme="vs-dark"
        options={{
          formatOnType: true,
          autoClosingDelete: "always",
          autoClosingQuotes: "always",
          autoClosingBrackets: "always",
          autoIndent: "advanced",
          minimap: { enabled: false },
          lineNumbers: "on",
        }}
        onChange={(code, ev) => setCode(code ?? "")}
      />
      <div className="markdown-display">
        <Markdown>{code}</Markdown>
      </div>
    </div>
  );
};

export default Editor;
