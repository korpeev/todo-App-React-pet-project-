import React, { useEffect } from "react"
import Badge from "../Badge"
import List from "../List"
import close from "../../assets/img/close.svg"

import "./AddListPoppup.scss"
function AddListButton({ colors, lists, setLists }) {
  const [visiblePoppup, setVisiblePoppup] = React.useState(false)
  const [badgeColor, setBadgeColor] = React.useState(0)
  const [input, setInput] = React.useState("")
  useEffect(() => {
    if (Array.isArray(colors)) {
      setBadgeColor(colors[0].id)
    }
  }, [colors])
  const handleAddList = () => {
    if (!input) return false

    const color = colors.filter((color) => color.id === badgeColor)[0].name
    const newList = {
      name: input,
      colorId: badgeColor,
      color: { name: color },
    }
    fetch("http://localhost:3001/lists", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then(() => setLists([...lists, newList]))

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
            {colors &&
              colors.map((item) => (
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
