// 所有接口的前缀
export const BASE_URL = 'http://192.168.11.118/zhyc'

// 党校相关接口 (微党课、专题教育)
export const ARTICLELIST = BASE_URL + '/smallProgram/articleList?pageSize=4'

// 新闻相关接口（党建要闻、通知公告、党内公示、党史人物）
export const ABOUTPARTY = BASE_URL + '/smallProgram/articleList?type=1'

// 所有文章的详情接口
export const ARTICLEINFO = BASE_URL + '/smallProgram/articleData'

// 登录接口
export const LOGIN = BASE_URL + '/login/wxLogin'

// “三会一课” 列表接口
export const THREE_LESSON = BASE_URL + '/smallProgram/meetingNoticeList'

//投票调研列表接口
export const POLING = BASE_URL +'/vote/query_tpdy_cytplb'
//“投票调研详情”接口
export const POING_INFO = BASE_URL +'/vote/query_tpdy_tpxq'
//参与投票接口
export const GOTOPOING = BASE_URL +'/vote/update_tpdy_cytp'
