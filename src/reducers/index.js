import { combineReducers } from 'redux'
import companyReducer from './reducer_company'

const rootReducer = combineReducers({
  companies: companyReducer
})

export default rootReducer
