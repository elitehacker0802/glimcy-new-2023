// ----------------------------------------------------------------------


// This code defines some paths or URLs for a web application.



// This line defines a function called path that concatenates two strings together, root and sublink, to create a new string.
function path(root, sublink) {
  return `${root}${sublink}`
}

// These lines define two constants ROOTS_AUTH and ROOTS_DASHBOARD that are assigned strings with the paths of the auth and dashboard sections of the web application.

// константа которая ведет к самому dashboard'у приложения
const ROOTS_LANDING = ''

// константа которая ведет к auth аутентификации приложения
const ROOTS_AUTH = '/auth'

// константа которая ведет к самому dashboard'у приложения
const ROOTS_DASHBOARD = '/dashboard'



// ----------------------------------------------------------------------

// This block of code defines an object called PATH_AUTH that contains various sub-paths related to the authentication section of the web application.
// For example, login is a sub-path for the login page that is obtained by using the path function to concatenate the ROOTS_AUTH constant with the /login string.

// тут мы из этого файла экспортируем непосредственно конанту объект PATH AUTH который в свою очередь содержит саб пути к различным путям в системе аутентификации в приложении


export const PATH_LANDING = {
  root: ROOTS_LANDING,
  about: path(ROOTS_LANDING, '/about'),
  pricing: path(ROOTS_LANDING, '/pricing'),
  contact: path(ROOTS_LANDING, '/contact'),
}

// этот объект в себе использует такую функцию как path() которая соединяет эти пути вместе
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password')
}


// This block of code defines an object called PATH_PAGE that contains sub-paths for error pages that the user might encounter while using the web application.
// та же структура что и у PATH_AUTH но тут как бы мы обозначаем сами пути к страницам ошибок как 403 или 404 или 500 чтобы потом к ним можно было быстро вытащить пути
export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500'
}


// This block of code defines an object called PATH_DASHBOARD that contains sub-paths for the dashboard section of the web application.
// For example, general.app is a sub-path for the main app page that is obtained by using the path function to concatenate the ROOTS_DASHBOARD constant with the /app string.
// та же структура путей и саб путей НО уже это структура она для приложения DASHBOARD а не аутентификационной системы
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    dex_arbitrage: path(ROOTS_DASHBOARD, '/dex-arbitrage'),
    nft_table: path(ROOTS_DASHBOARD, '/nft-table')
  },

  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),

    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account')
  }
}


// These lines define two constants PATH_DOCS and API_DOCS that are empty strings. They might be used for documentation or other purposes.

export const PATH_DOCS = ''
export const API_DOCS = ''
