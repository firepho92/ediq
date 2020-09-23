const heritageService = 'http://localhost:8500/'
const authService = 'http://localhost:8501/'

//products
const getProducts = heritageService + 'products'

//auth
const authenticateURL = authService + 'auth'

//user
const getUserURL = authService + 'user/'

export { getProducts, authenticateURL, getUserURL }