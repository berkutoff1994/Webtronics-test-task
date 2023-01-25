import { tabAction, tabTypes } from '../../types/actions'

export const RowsAction = (data: any): tabAction => ({
  type: tabTypes.CHANGE_ACTIVE_TAB,
  payload: data,
})