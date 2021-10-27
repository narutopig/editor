import React from "react";
import ReactMarkdown from "react-markdown";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "./App.css";

function App() {
  const [code, setCode] = React.useState("*Hello World!*");

  return (
    <div className="App">
      <div>
        <CodeEditor
          value={code}
          language="markdown"
          placeholder="Enter markdown code here"
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            height: "100vh",
            width: "50vw",
          }}
        />
      </div>
      <div>
        <ReactMarkdown>{code}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
