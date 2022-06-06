import * as React from "react"
import "./FilterInput.css"

export default function FilterInput({
  handleOnChange = () => console.log("FAKE HANDLE ON INPUT CHANGE"),
  inputValue = "",
}) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input type="text" placeholder="Search transactions" value={inputValue} onChange={handleOnChange} />
    </div>
  )
}
