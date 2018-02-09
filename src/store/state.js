import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  playMode: playMode.sequence,
  currentIndex: -1,
  disc: {}
}

export default state
