import React from 'react'
import MenuItem from './menu-item'

export default function Treeview({menus = []}) {
  return (
    <ul>
        {menus && menus.length ? menus.map((item,index)=>(
            <MenuItem key={index} item={item} />
        )) : null}
    </ul>
  )
}
