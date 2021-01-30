import React from "react"
import "./List.scss"
function List({ items }) {
  return (
    <ul className='todo__list'>
      {items.map((item) => {
        return (
          <li className={item.active ? "active" : ""}>
            <i>
              {item.icon ? (
                item.icon
              ) : (
                <i className={`badge badge-${item.color}`}></i>
              )}
            </i>
            <span>{item.text}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default List
