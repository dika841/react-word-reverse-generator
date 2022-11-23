import { useState } from "react";
import { Input, Button } from "./component/Form";

function App() {
  const [word, setWord] = useState("");

  const reset = () => {
    setWord("");
  };
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center gap-2">
      <Input
        onChange={(e) => setWord(e.target.value)}
        className="border-2 border-gray-800 rounded-md p-2"
        type="text"
        placeholder="Type some word here !"
        value={word}
      />
      <h3 className=" text-xl font-semibold ">Word: {word} </h3>
      <h3 className=" text-xl font-semibold text-blue-500">
        Reverse: {word.split("").reverse().join("")}
      </h3>

      <Button
        className="bg-green-500 py-2 px-3 rounded-md text-white hover:bg-green-300 "
        teks="Reset"
        onClick={reset}
      />
    </div>
  );
}

export default App;
