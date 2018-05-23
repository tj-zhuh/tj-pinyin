
import dict from '../dict/pinyin.js';

var fn = function (str) {

  // 如果str不是字符串
  if (typeof str !== 'string') {
    throw new Error('tj-pinyin只能处理字符串格式');
  }

  // 校验是否为汉字
  var reg = /[\u4E00-\u9FA5]/;

  var match = str.match(reg);
  if (!match) return [str];

  var char = match[0];

  var retList = [];

  for (var key in dict) {
    if (dict[key].indexOf(char) >= 0) {
      retList.push(key);
    }
  }

  if (retList.length) return retList;

  return [str]; 

}

module.exports = fn;