/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { HTMLProps } from 'react'

interface ILinkButton extends HTMLProps<HTMLAnchorElement> {text:string}

export default function LinkButton({href,text}: ILinkButton) {
  return (
    <a href={href} className="btn btn-primary">
              <span className="text text-1"> {text}</span>
              <span className="text text-2" aria-hidden> {text}</span>
            </a>
  )
}