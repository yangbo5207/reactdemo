export const host = 'https://xinyuzone.cn'
export const appID = 'e89ookqtbk74'

export async function get<P extends Option, T>(path: string, params: P): Promise<T> {
  let _param = params
  if (!_param.grant_type) {
    let access_token = localStorage.getItem('access_token')
    let open_id = localStorage.getItem('open_id')
    _param = {..._param, access_token, open_id}
  }
  
  const query = new URLSearchParams(_param).toString();
  const url = `${host}${path}?${query}`

  const response = await fetch(url)
  return response.json()
}

export interface Option {
  grant_type?: string,
  [key: string]: any
}

export interface Result {
  status_code: number,
  status_msg: string,
  extra: {
    now: number
  }
}

export function getAuthURL() {
  const return_RUL = 'https://usehook.cn/'
  const search = `appid=${appID}&redirect_uri=${encodeURIComponent(return_RUL)}&response_type=code&scope=openapi_userinfo#xinyu_redirect`
  return `${host}/connect/oauth2/authorize?${search}`
}
