import React from 'react'
import { scopedClassMaker } from '../helpers/classes'

interface Props extends React.MapHTMLAttributes<HTMLElement>{
}

const sc = scopedClassMaker('gu-layout')

const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  return (
    <div className={sc('aside', {extra: className})} {...rest}>Aside</div>
  )
}

export default Aside