import { sendSock } from '@/websocket/websocket'

/**
 * 向服务端发心跳
 * @param {String} token token
 */
function heartBeatReq(token) {
  const msg = {
    Id: 1001, // 非必须
    AccessToken: token, // 必须
    MsgType: 'HeartBeatReq'
  }
  sendSock(msg)
}

export { heartBeatReq }
