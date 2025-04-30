const routes = {
  HOME: 'Home',
  LANGUAGE: 'Language',
  PROFILE: 'Profile',
  REGISTER: 'Register',
  SETTINGS: 'Settings',
  WELCOME: 'Welcome',
} as const

export default routes

export type RouteNames = (typeof routes)[keyof typeof routes]
