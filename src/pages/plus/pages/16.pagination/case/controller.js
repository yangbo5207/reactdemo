/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    list.total = 100
    return list.map((item, index) => {
      item.desc = `${index}、react 19 arch, a design language for background applications`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      return item
    })
  })

  return p
}
