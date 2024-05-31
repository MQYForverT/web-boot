const ApiPostLogin = (data) => ToAsyncAwait($axios.post('/uaa/sso/appManageLogin', data))
const ApiGetUserInfo = () => ToAsyncAwait($axios.get('/uc/user/v1/info/token'))
