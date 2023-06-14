'use client'

import classNames from 'classnames'
import { useTrafficLight } from '@/contexts'
import style from './styles.module.scss'

interface LightProps {
  color: string
}

export const Light = ({ color }: LightProps) => {
  const { light, setLight } = useTrafficLight()

  return (
    <div
      onClick={() => setLight(color)}
      className={classNames(style.light, {
        [style[color]]: color === light,
      })}
    ></div>
  )
}
