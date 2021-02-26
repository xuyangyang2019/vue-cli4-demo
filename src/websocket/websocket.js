import store from '../store'
import msgHandler from './msgHandler/index.js'

let WebSocketObj = null
// let lockReconnect = false // 避免重复连接
// let tt
// let linkTimes = 0 // 连接的次数 4次就提示连接失败

// 实例websocket

/**
 * 创建websocket
 * @param {String} url websocket地址
 */
function createWebSocket(url = 'ws://www.jjldkj.com:10088') {
  if (!WebSocketObj) {
    WebSocketObj = new WebSocket(url)
  } else {
    console.log('WebSocketObj已经存在')
    console.log(WebSocketObj.readyState)
  }
  // linkTimes++

  // websocket 关闭
  WebSocketObj.onclose = () => {
    console.log('websocket关闭')
    store.commit('userChat/SET_WEB_SOCKET_STATE', 0)
    // reconnect()
  }

  // websocket 出错
  WebSocketObj.onerror = (e) => {
    console.log('websocket异常', e)
    // console.log(`websocket重连失败${linkTimes - 1}次`)
    // if (linkTimes >= 4 || !store.getters.relogin) {
    // console.log('重连连续失败3次，退出登陆')
    // 不再重连
    // const errMsg = {
    //   ErrorCode: 'websocket连接失败',
    //   ErrorMsg: `connection to ${url} failed`
    // }
    // store.dispatch('SetRelogin', false)
    // store.dispatch('SetError', errMsg)
    // store.dispatch('SetDialog', 'ErrorPage')
    // }
  }

  // websocket 打开
  WebSocketObj.onopen = () => {
    // websocket打开
    console.log('websocket打开')
    console.log(WebSocketObj.readyState)
    // store.commit('userChat/SET_WEB_SOCKET_STATE', 1)
    // 登陆
    // 重新登陆
    // if (linkTimes > 1) {
    //   const msg = store.getters.loginInfo
    //   sendSock(msg)
    // } else {
    //   // 心跳检测重置
    //   heartCheck.start()
    // }
  }

  WebSocketObj.onmessage = (event) => {
    // 拿到任何消息都说明当前连接是正常的
    // linkTimes = 1
    // heartCheck.start()
    try {
      msgHandler(event)
    } catch (error) {
      console.log('收到无法解析的数据', event.data)
    }
  }
}

// 尝试重连
// function reconnect() {
//   // 如果账号在别的地方登陆 || 或者token过期就不再重连了 || 主动退出 都不再重连
//   if (store.getters.relogin) {
//     console.log('尝试重连websocket', lockReconnect)
//     if (lockReconnect) return
//     lockReconnect = true
//     // 没连接上会一直重连，设置延迟避免请求过多
//     tt && clearTimeout(tt)
//     tt = setTimeout(function() {
//       createWebSocket(websocketUrl)
//       lockReconnect = false
//     }, 5000)
//   } else {
//     console.log('不再重连')
//     // linkTimes = 0
//     if (store.getters.dialogLock === 0) {
//       store.dispatch('SetDialog', '')
//     }
//   }
// }

// 心跳检测
// const heartCheck = {
//   timeout: 5000, // 心跳检测时长
//   timeoutObj: null, //  定时变量
//   serverTimeoutObj: null, // 服务器超时
//   start: function() {
//     // console.log('start')
//     if (WebSocketObj.readyState === 1 && store.getters.login) {
//       const that = this
//       // 重置心跳
//       this.timeoutObj && clearTimeout(this.timeoutObj)
//       this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj)
//       this.timeoutObj = setTimeout(function() {
//         // 这里发送一个心跳，后端收到后，返回一个心跳消息，
//         // console.log('当前的token:' + store.getters.token)
//         // console.log(WebSocketObj.readyState)
//         const msg = {
//           Id: 1001,
//           MsgType: 'HeartBeatReq',
//           AccessToken: store.getters.token
//         }
//         // console.log('下面是心跳：')
//         // console.log(msg)
//         sendSock(msg)
//         that.serverTimeoutObj = setTimeout(function() {
//           // console.log('服务器返回超时，关闭websocket')
//           WebSocketObj.close()
//         }, that.timeout)
//       }, this.timeout)
//     }
//   }
// }

/**
 * 发送指令
 * @param {*} agentData
 */
function sendSock(agentData) {
  // 若是ws开启状态
  if (WebSocketObj && WebSocketObj.readyState === WebSocketObj.OPEN) {
    // 发送指令
    WebSocketObj.send(JSON.stringify(agentData))
  } else if (WebSocketObj && WebSocketObj.readyState === WebSocketObj.CONNECTING) {
    console.log('websocket未连接，请稍后再试！')
    // 若是 正在开启状态，则等待1s后重新调用
    // setTimeout(() => {
    //   sendSock(agentData)
    // }, 1000)
  }
}

// 关闭websocket
function closeWebsocket() {
  WebSocketObj.close()
}

export { sendSock, createWebSocket, closeWebsocket }
