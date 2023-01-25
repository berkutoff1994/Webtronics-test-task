
export interface IMentorImageParams {
  alt: string,
  src: string,
  width: number,
  height: number,
  top?: string,
}

export interface ITabs {
  title: string,
  descr: string,
  svg: boolean,
}

export interface ISlide {
  title: string,
  descr: string,
  alt: string,
  active: boolean,
  activeImage: string,
  passiveImage: string,
}