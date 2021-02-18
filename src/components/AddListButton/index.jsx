import React from "react"
import Badge from "../Badge"
import List from "../List"
import close from "../../assets/img/close.svg"
import { v4 } from "uuid"

import "./AddListPoppup.scss"
function AddListButton({ colors, lists, setLists }) {
  const [visiblePoppup, setVisiblePoppup] = React.useState(false)
  const [badgeColor, setBadgeColor] = React.useState(colors[0].id)
  const [input, setInput] = React.useState("")
  const handleAddList = () => {
    const color = colors.filter((color) => color.id === badgeColor)[0].name
    if (!input) return false
    setLists([
      ...lists,
      {
        id: v4(),
        name: input,
        color,
      },
    ])
    setInput("")
    setVisiblePoppup(false)
  }

  const handleVisiblePoppup = () => {
    setVisiblePoppup(!visiblePoppup)
  }
  const handleClosePoppup = () => {
    setVisiblePoppup(false)
  }
  return (
    <div className='add__list'>
      <List
        onVisiblePoppup={handleVisiblePoppup}
        items={[
          {
            className: "add__list-button",
            icon: (
              <svg
                width='12'
                height='12'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 1V15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 8H15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            name: "Добавить список",
          },
        ]}
      />
      {visiblePoppup && (
        <div className='add__list-popup'>
          <img
            onClick={handleClosePoppup}
            className='add__list-close'
            src={close}
            alt='close'
          />
          <input
            value={input}
            className='field add__list-input'
            placeholder='Название папки'
            onChange={(e) => setInput(e.target.value)}
          />
          <div className='add__list-colors'>
            {colors.map((item) => (
              <Badge
                badgeColor={badgeColor}
                setBadgeColor={setBadgeColor}
                color={item.name}
                colorId={item.id}
                key={item.id}
              />
            ))}
          </div>
          <button onClick={handleAddList} className='button'>
            Добавить Папку
          </button>
        </div>
      )}
    </div>
  )
}

export default AddListButton
