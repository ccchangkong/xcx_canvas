const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function wxGetImageInfo({ src }){
  return new Promise((resolve, reject) => wx.getImageInfo({
    src: src,
    success: resolve,
    fail: reject
  }))
}
function wxGetSystemInfo() {
  return new Promise((resolve, reject) => wx.getSystemInfo({
    success: resolve,
    fail: reject
  }))
}
module.exports = {
  formatTime: formatTime,
  wxGetImageInfo,
  wxGetSystemInfo
}
