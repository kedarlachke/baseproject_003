import React, { useState } from 'react'
import AppbarBottom from '../common/AppBarBottom/AppbarBottom'
import AddFabButton from '../common/Fab/AddFabButton'
import Customers from '../Customers/Customers'
import Customer from '../Customers/customer'
import Projects from '../Projects/Projects'
import Header from './Header/Header'
import IndicatorCards from './Indicators/IndicatorCards'
import SideBar from './Menu/SideBar'
import { Input } from '../common/InputFields/Input/Input'
import { Select } from '../common/InputFields/Select/Select'
import Inventery from '../Inventory/Inventery'
import { Button } from '../common/Button/Button'

function displaySelectedComponent(displayItem: string) {
  let selectedComp = null
  switch (displayItem) {
    case 'Dashboard':
      selectedComp = (
        <>
          <IndicatorCards />
          <div className="recent-grid">
            <Projects />
            <Customers />
          </div>
        </>
      )
      break

    case 'Projects':
      selectedComp = (
        <>
          <Projects />
          <AddFabButton />
        </>
      )
      break
    case 'Customers':
      selectedComp = (
        <>
          {/* <TextField label="abc"></TextField>
            <Checkbox></Checkbox>
            <Switch></Switch> */}
          {/* <AppbarBottom/>   */}
          <Input wd="2" label="First Name" />
          <Input wd="3" label="Last Name" errormsg="last name is required" />
          <Button wd="4" label="Resgister" className={'btn'} />
        </>
      )
      break
    case 'Orders':
      selectedComp = (
        <>
          <Customer />
        </>
      )
      break
    case 'Inventory':
      selectedComp = (
        <>
          <Inventery />
        </>
      )
      break
    default:
      break
  }
  return selectedComp
}

function Dashboard(props: any) {
  console.log('in dashboard')
  const [displayComponent, setDisplayComponent] = useState('Dashboard')
  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <SideBar selectcomponent={setDisplayComponent} />
      <div className="main-content">
        <Header title={displayComponent} />
        <main>{displaySelectedComponent(displayComponent)}</main>
      </div>
    </>
  )
}

export default Dashboard
