import React from "react";
import Monaco from "@monaco-editor/react";
import Markdown from "react-markdown";

function Editor() {
  const [code, setCode] = React.useState("# Hello World!");

  return (
    <div className="editor">
      <Monaco
        width="50vw"
        height="100vh"
        defaultLanguage="markdown"
        defaultValue={code}
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
      <div style={{ padding: "4vh" }}>
        <Markdown>{code}</Markdown>
      </div>
    </div>
  );
}

export default Editor;
