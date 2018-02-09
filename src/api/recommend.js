import {
  commonParams
} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = '/api/getPicList'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    format: 'json',
    g_tk: 5381,
    notice: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    rnd: Math.random(),
    platform: 'yqq',
    needNewCode: 0,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParams, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid,
    g_tk: 609204101,
    jsonpCallback: 'playlistinfoCallback',
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}