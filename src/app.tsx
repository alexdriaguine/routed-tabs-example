import * as React from 'react'
import {Route} from 'react-router'
import {BrowserRouter, Link} from 'react-router-dom'
import * as theme from './styles/theme'
import './styles/theme.css'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import styled from 'styled-components'
import {RoutedTabs} from './routed-tabs'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>

const routeConfig = [
  {
    path: '/',
    exact: true,
    main: Home,
    label: 'Home',
  },
  {
    path: '/about',
    exact: true,
    main: About,
    label: 'About',
  },
  {
    path: '/contact',
    exact: true,
    main: Contact,
    label: 'Contact',
  },
]

const MainRoutes = () =>
  <div>
    {routeConfig.map(({path, exact, main}, i) =>
      <Route path={path} exact={exact} component={main} key={i} />
    )}
  </div>

export const App = () =>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Row>
        <Col>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <RoutedTabs routes={routeConfig} />
          <Row>
            <MainRoutes />
          </Row>
        </Col>
      </Row>
    </ThemeProvider>
  </BrowserRouter>
