import { FC } from 'react';
import { RequestItemType } from '../../shared/api/types';
import './Item.scss'
import { Button } from 'react-bootstrap';

interface IItem {
  item: RequestItemType
}
const Item: FC<IItem> = ({ item }) => {
  const info =[
    { 
      title: 'Организатор',
      description: item.organization.title 
    },
    {
      title: 'Локация',
      description: `${item.location.city}, ${item.location.district}`
    },
    {
      title: 'Цель сбора',
      description: item.goalDescription
    },
    {
      title: 'Завершение',
      description: item.endingDate
    },
    {
      title: 'Мы Собрали',
      description: '0'
    },
  ]

  return (
    <div className='item'>
      <div className='item__title'>
        <h2>
          {item.title}
        </h2>
      </div>

      <div className='item__info'>
        <div className='item__info_container'>
        {info.map(infoItem => (
          <div className='item__info_item'>
            <div className='item__info_item_title'>{infoItem.title}</div>
            <div>{infoItem.description}</div>
          </div>
        ))}

        <div className='item__info_contributors'>{item.contributorsCount ? `Нас уже: ${item.contributorsCount}` : 'Вы будете первым'}</div>
        </div>
      </div>
        
      <Button className='item__help-button' variant="primary">Помочь</Button>
    </div>
  )
}

export default Item
