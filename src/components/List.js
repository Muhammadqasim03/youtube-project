import React from 'react'
import "./List.css"
export default function List() {

  const suggestionCatList = [
    "ALL",
    "SOFTWARE ENGINEERING ",
    "DATA STRUCTURE",
    "LIVE SHOW",
    "MUSIC",
    "WEB DEVELOPMENT ",
    "DATA BASES",
    "T-SERIES",
    "MOVIE",
    "HISTORY ",
    "PUBLIC NEWS",
    "ALGORITHMS ",
    "INFORMATION",
    "WATCHED ",
    "EVENTS",
    "SOFTWARE ENGINEERING ",
    "LIVE SHOW",
    "SOFTWARE ENGINEERING ",
    "LIVE SHOW",
    "History ",
    "PUBLIC NEWS",
    "PUBLIC SPEAKING"
  ]

  return (
    <>
        <nav class="list-item">
        <ul>
          {
            suggestionCatList.map((listItm) => (
              <li>{listItm}</li>
            ))
          }
        </ul>
      </nav>
      
    </>
  )
}
