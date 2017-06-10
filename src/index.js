import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Main from './components/Main'
import ListTable from './containers/ListTable'
import Form from './containers/Form'
import reducer from './reducers'
import { Route,browserHistory,Router,IndexRoute } from 'react-router'
const store = createStore(reducer,applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" name="Trang chủ" component={Main}>
        <Route path="/add" name="Thêm" component={Form} title="Thêm công ty">
        </Route>
        <IndexRoute component={ListTable}/>
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('page-content')
)
