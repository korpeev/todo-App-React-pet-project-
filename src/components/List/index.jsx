import React from "react"
import classNames from "classnames"
import "./List.scss"
import Badge from "../Badge"
import remove from "../../assets/img/remove.svg"
function List({
  setLists,
  activeItem,
  onClickItem,
  items,
  isRemovable,
  onVisiblePoppup,
}) {
  const removeTask = async (id) => {
    const newTodo = items.filter((item) => item.id !== id)

    await fetch("http://localhost:3001/lists/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    await setLists(newTodo)
  }

  return (
    <ul className='todo__list'>
      {items &&
        items.map((item, index) => {
          return (
            <li
              onClick={onClickItem ? () => onClickItem(item) : null}
              key={item.id}
              className={classNames({
                active: activeItem && activeItem.id === item.id,
              })}
            >
              <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
              <span onClick={onVisiblePoppup}>
                {item.name}{" "}
                {item.tasks &&
                  `${item.tasks.length ? `(${item.tasks.length})` : "(0)"}`}
              </span>
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
