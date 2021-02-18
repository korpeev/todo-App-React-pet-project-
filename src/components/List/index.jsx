import React from "react"
import classNames from "classnames"
import "./List.scss"
import Badge from "../Badge"
import remove from "../../assets/img/remove.svg"
function List({ setLists, items, active, isRemovable, onVisiblePoppup }) {
  const removeTask = (id) => {
    const newTodo = items.filter((item) => item.id !== id)
    setLists(newTodo)
  }
  return (
    <ul className='todo__list'>
      {items.map((item, index) => {
        return (
          <li key={index} className={classNames({ active: item.active })}>
            <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
            <span onClick={onVisiblePoppup}>{item.name}</span>
            {isRemovable && (
              <img
                className='todo__list-close'
                onClick={() => removeTask(item.id)}
                src={remove}
                alt='close'
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default List
