import { Light } from '../Light'

import style from './styles.module.scss'

const colors = ['red', 'orange', 'green']

export const TrafficLight = () => {
  return (
    <div className={style['traffic-light']}>
      {colors.map((color) => (
        <Light key={color} color={color} />
      ))}
    </div>
  )
}
