import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 609204101,
    pcachetime: +new Date(),
    format: 'json',
    callback: 'MusicJsonCallback_lrc'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}