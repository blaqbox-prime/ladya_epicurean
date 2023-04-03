import React, { HTMLProps } from 'react'

interface IGridList extends HTMLProps<HTMLUListElement> {
}

function GridList({children}: IGridList) {
  return (
    <ul className='grid-list'>
        {children}
    </ul>
  )
}

export default GridList