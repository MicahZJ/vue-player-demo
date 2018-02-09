import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let value = data[key] !== undefined ? data[key] : ''
      url += `&${key}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
  }
}
