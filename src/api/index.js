import fetch from '@/utils/fetch'

/**
 * 获取公共话术
 * @param {number} uionId 用户id
 */
function getCommonTerms(uionId) {
  return fetch.post('/pc/GetCommonTerms', { id: uionId, name: 'pc' })
}
export { getCommonTerms }
