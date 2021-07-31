import React from 'react'

function MenuItem(props: any) {
  const { menuname, iconname, active, selectItem } = props
  console.log('Menu Item ==>' + menuname)
  return (
    <li onClick={() => selectItem(menuname)}>
      <a className={active}>
        <span className={iconname}></span>
        <span>{menuname}</span>
      </a>
    </li>
  )
}

export const M_MenuItem = React.memo(MenuItem)
