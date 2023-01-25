export enum tabTypes {
  CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB',
}

export interface IChangeActiveTab {
  type: tabTypes.CHANGE_ACTIVE_TAB,
}

//экшен для получения активной цитаты
export interface tabAction {
  type: string;
  payload?: any;
}