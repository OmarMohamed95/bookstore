import { AUTH_TOKEN, AUTH_USER } from '../constant/auth'

export function getToken () {
  return localStorage.getItem(AUTH_TOKEN)
}

export function setToken (token) {
  return localStorage.setItem(AUTH_TOKEN, token)
}

export function removeToken () {
  return localStorage.removeItem(AUTH_TOKEN)
}

export function getUser () {
  return JSON.parse(localStorage.getItem(AUTH_USER))
}

export function setUser (user) {
  return localStorage.setItem(AUTH_USER, JSON.stringify(user))
}

export function removeUser () {
  return localStorage.removeItem(AUTH_USER)
}
