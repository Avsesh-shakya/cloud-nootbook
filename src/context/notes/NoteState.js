import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    "name": "harry",
    "class": "3b"
  }
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        "name": "lally",
        "class": "10b"
      })

    }, 1000);
  }


  return (
    <noteContext.Provider value={{state, update}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState 