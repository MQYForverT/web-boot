import $axios from '@/config/request'
export const ApiPostLogin = (data: unknown) => $axios.post('/uaa/sso/appManageLogin', data)
export const ApiGetUserInfo = () => $axios.get('/uc/user/v1/info/token')

export const ApiGetSendSms = (params: unknown) => $axios.get('/uaa/sms/sendSms', { params })
