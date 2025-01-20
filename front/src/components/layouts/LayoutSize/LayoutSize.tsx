import { FC, ReactElement } from "react"
import './LayoutSize.scss'

const LayoutSize: FC<{children: ReactElement}> = ({ children }) => {
  return (
    <div className="size-layout">
      <div className="size-layout__container">
        {children}  
      </div> 
    </div>
  )
}

export default LayoutSize
