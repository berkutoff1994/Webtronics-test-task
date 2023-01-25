import {
  tabTypes,
  tabAction,
} from '../../types/actions'
export type { Reducer } from 'redux'

interface state {
  activeTab: number,
}

// инициализируем и описываем тип дефолтного состояния редьюсера
const defaultState: state = {
  activeTab: 0,
}

export const ChangeActiveTabReducer = (
  state:any = defaultState.activeTab,
  action: tabAction
  ) => {
  switch (action.type) {
    case tabTypes.CHANGE_ACTIVE_TAB:
      return action.payload
    default:
      return state
  }
}