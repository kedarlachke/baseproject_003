import React, { useState, useCallback } from 'react'
import { M_MenuItem } from './MenuItem'
export function SideBar(props: any) {
  const { selectcomponent } = props
  const menuList = [
    {
      name: 'Dashboard',
      component: '',
      slug: '',
      iconName: 'las la-igloo',
      active: 'active',
    },
    {
      name: 'Customers',
      component: '',
      slug: '',
      iconName: 'las la-users',
      active: '',
    },
    {
      name: 'Projects',
      component: '',
      slug: '',
      iconName: 'las la-clipboard-list',
      active: '',
    },
    {
      name: 'Orders',
      component: '',
      slug: '',
      iconName: 'las la-shopping-bag',
      active: '',
    },
    {
      name: 'Inventory',
      component: '',
      slug: '',
      iconName: 'las la-receipt',
      active: '',
    },
    {
      name: 'Accounts',
      component: '',
      slug: '',
      iconName: 'las la-user-circle',
      active: '',
    },
    {
      name: 'Tasks',
      component: '',
      slug: '',
      iconName: 'las la-clipboard-list',
      active: '',
    },
  ]
  const [activeMenu, setActiveMenu] = useState(menuList[0].name)
  console.log('side bar')
  function selectItem(menuItem: string) {
    setActiveMenu(menuItem)
    selectcomponent(menuItem)
  }
  const M_selectItem = useCallback(selectItem, [])

  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>
          <span className="lab la-accusoft"></span>
          <span>ITFs</span>
        </h2>
      </div>
      <div className="sidebar-menu">
        {/* <ui> */}
        {menuList.map((menuitem, i) => {
          return (
            <M_MenuItem
              menuname={menuitem.name}
              iconname={menuitem.iconName}
              active={activeMenu === menuitem.name ? 'active' : ''}
              selectItem={M_selectItem}
            />
          )
        })}
        {/* </ui> */}
      </div>
    </div>
  )
}

export default SideBar
