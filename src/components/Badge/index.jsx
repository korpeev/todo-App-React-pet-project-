import React from "react"
import classnames from "classnames"
import "./Badge.scss"
function Badge({ badgeColor, colorId, setBadgeColor, color }) {
  return (
    <i
      onClick={() => setBadgeColor(colorId)}
      className={classnames("badge", {
        [`badge-${color}`]: color,
        active: badgeColor === colorId,
      })}
    ></i>
  )
}

export default Badge
