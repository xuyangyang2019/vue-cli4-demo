import previewHandle from './previewHandle'

export default function handler(e) {
  const msg = JSON.parse(e.data)
  const msgType = msg.msgType
  const message = msg.message ? JSON.parse(msg.message) : '没有message'
  switch (msgType) {
    // 设备(手机客户端、客服客户端)获取通信token响应
    case 'DeviceAuthRsp':
      previewHandle.deviceAuthRspHandle(message)
      break
    // 设备授权后退出(仅用于服务端内部)
    case 'DeviceExitNotice':
      console.log(msgType, message)
      break
    default:
      console.log(`未处理的通知${msgType}`, msg)
      break
  }
}
