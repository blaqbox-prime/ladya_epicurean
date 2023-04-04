import React, { HTMLProps } from 'react'

interface IGridList extends HTMLProps<HTMLUListElement> {
}

function GridList( props : IGridList) {
  const {children,className} = props;
  return (
    <ul className={`'grid-list' ${className}`}>
        {children}
    </ul>
  )
}

export default GridList