
import Cookies from 'js-cookie'
const TokenKey = 'saber-access-token'
const OtherTokenKey = 'Blade-Auth'
const AccessToken = 'access_token'
const RefreshToken = 'Blade-refresh_token'
const TenantId = 'tenant_id'
const RefreshTokenKey = 'saber-refresh-token'

export function getOtherToken() {
    return Cookies.get(OtherTokenKey)
}

export function getNewAccessToken() {
    return Cookies.get(AccessToken)
}

export function getNewRefreshToken() {
    return Cookies.get(RefreshToken)
}

export function getNewTenantId() {
    return Cookies.get(TenantId)
}

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    document.cookie = `${TokenKey}=${token};domain=.xhj.com`;
    return `${TokenKey}=${token}`;
    // , {
    //   domain: '.xhj.com'
    // })
}

export function getRefreshToken() {
    return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(token) {
    document.cookie = `${RefreshTokenKey}=${token};domain=.xhj.com`;
    return `${RefreshTokenKey}=${token}`;
    // return Cookies.set(RefreshTokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function removeRefreshToken() {
    return Cookies.remove(RefreshTokenKey)
}
