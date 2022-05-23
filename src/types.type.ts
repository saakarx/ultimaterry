type ImageType = {
  urls: {
    regular: string
  }
}
export type StateType = {
  images: ImageType[]
  isModalOpen: boolean
  modal: {
    src: string
    index: number
  }
}

export type ActionType =
  | { type: 'OPEN_MODAL_IMAGE'; payload: { src: string; index: number } }
  | { type: 'CLOSE_MODAL' }
  | { type: 'MODAL_NEXT_IMG' }
  | { type: 'MODAL_PREV_IMG' }
  | { type: 'ADD_PHOTOS'; payload: ImageType[] }
  | { type: 'ADD_NEW_PHOTOS'; payload: ImageType[] }
  | { type: 'REMOVE_PHOTOS' }
