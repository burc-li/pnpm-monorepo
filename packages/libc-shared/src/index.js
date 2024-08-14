/**
 * 公共方法
 */

// 判断是否是字符串
export const isString = value => {
  return typeof value === 'string'
}

// 判断是否是数字
export const isNumber = value => {
  return typeof value === 'number'
}

// 判断是否是函数
export const isFunction = value => {
  return typeof value === 'function'
}

// 判断是否是数组
export const isArray = Array.isArray

// 判断是否是对象
export const isObject = function (value) {
  return typeof value === 'object' && value !== null
}
