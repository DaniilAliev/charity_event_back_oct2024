import { FC, useState } from 'react'
import './ItemsContainer.scss'
import Item from '../../components/Items/Item'
import clsx from 'clsx'
import Pagination from '../../components/Pagination/Pagination'
import { RequestItemType } from '../../shared/api/types'

enum ShowType {
    COLUMN = 'column',
    ROW = 'row',
    MAP = 'map'
}

interface IItemsContainer {
    data: RequestItemType[]
}

const NUMBER_TO_SHOW = 3
const ItemsContainer: FC<IItemsContainer> = ({ data }) => {
    const [itemsShown, setItemsShown] = useState(NUMBER_TO_SHOW)
    const [showType, setShowType] = useState<ShowType>(ShowType.COLUMN)
    
    const dataShown = data?.slice(itemsShown - 3, itemsShown)
    const itemsFound = data && `Найдено: ${data.length}`

    console.log(dataShown)

    return (
        <div className='items-container'>
            <h2>{itemsFound}</h2>

            <div className={clsx('items-container__container', {'items-container__container--column': showType === ShowType.COLUMN})}>
                {dataShown?.map(item => <Item key={item.id} item={item} />)}
            </div>

            <Pagination totalItems={data?.length} setItemsShown={setItemsShown} />
        </div>
    )
}

export default ItemsContainer
