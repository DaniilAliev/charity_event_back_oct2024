import { FC, ReactElement } from "react"
import './LayoutSize.scss'
import clsx from "clsx"

interface ILayoutSizeProps {
  type?: 'grey',
  children: ReactElement
}

const LayoutSize: FC<ILayoutSizeProps> = ({ children, type }) => {
  return (
    <div className={clsx("size-layout")}>
      <div className={clsx("size-layout__container", type === 'grey' && 'size-layout__container--grey')}>
        {children}  
      </div> 
    </div>
  )
}

export default LayoutSize
