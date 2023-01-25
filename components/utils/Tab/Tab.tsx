import React, { FC, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Minus from '../../../public/svg/Minus'
import Plus from '../../../public/svg/Plus'
import { ITabs } from '../../../types'
import styles from './tab.module.scss'

interface ITab {
  tab: ITabs,
  index: number
}

const Tab:FC<ITab> = ({tab, index}) => {
  const dispatch = useDispatch()
  const eventTab = useRef(null);
  const openTab = (e: any) => {
    if(eventTab.current !== null) {
      //@ts-ignore next-line
      const eventTabId = eventTab.current.id
      dispatch({type: 'CHANGE_ACTIVE_TAB', payload: eventTabId})
    }
  }

  return (
    <div key={index} id={String(index)} ref={eventTab} className={styles.tabWrapper}>
      <div className={styles.tab} style={{padding: tab.svg ? '28px 24px' : '16px 24px'}}>
        <div className={styles.tabTitle}>
          <h3>
            {tab.title}
          </h3>
          {tab.svg ? <Plus /> : <Minus openTab={openTab} />}
        </div>
        <div className={styles.tabDescr} style={{display: tab.svg ? 'block' : 'none'}}>
          {tab.descr}
        </div>
      </div>
    </div>
  )
}

export default Tab