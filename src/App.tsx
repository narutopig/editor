import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [code, setCode] = useState("# Hello World!");

  function openFileMenu() {
    const element = document.getElementById("import");
    if (element) element.click();
  }

  function loadFile(files: FileList | null) {
    if (!files) return;
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      setCode(fileReader.result ? fileReader.result.toString() : "");
    };

    fileReader.readAsText(files[0]);
  }

  function download() {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(code)
    );
    element.setAttribute("download", "main.md");
    element.setAttribute("type", "hidden");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <div>
      <div className="navbar">
        <Button onClick={openFileMenu} variant="contained">
          Import
        </Button>
        <input
          onChange={(event) => loadFile(event.target.files)}
          type="file"
          id="import"
          hidden
        />
        <Button onClick={download} variant="contained">
          Export
        </Button>
      </div>
      <Editor code={code} setCode={setCode} />
    </div>
  );
}

export default App;
