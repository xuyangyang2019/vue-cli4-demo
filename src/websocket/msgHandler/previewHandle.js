// import store from '@/store'
// import { Message } from 'element-ui'

// 登陆成功 ok
function deviceAuthRspHandle(msg) {
  const message = JSON.parse(msg.message)
  console.log(message)
  // // 设置token信息
  // store.commit('userChat/SET_WEB_SOCKET_TOKEN', message.AccessToken)
  // // 如果是electron
  // if (process.env.VUE_APP_CURRENTMODE === 'electron') {
  //   const { ipcRenderer } = window.require('electron')
  //   ipcRenderer.send('operations', 'login')
  // }
}

export default {
  deviceAuthRspHandle
}
