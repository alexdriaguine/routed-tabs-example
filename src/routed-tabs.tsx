import * as React from 'react'
import {withRouter} from 'react-router'
import Tabs from 'react-toolbox/lib/tabs/Tabs'
import Tab from 'react-toolbox/lib/tabs/Tab'

export const getTabIndexFromPath = (routes: Array<any>, pathname: string) =>
  routes.findIndex(({path}) => path === pathname)

class TabsWithRoutes extends React.Component<any, any> {

  state = {
    index: 0,
  }

  handleTabChange = index => {
    this.setState({index})
  }

  componentDidMount() {
    const {routes, location: {pathname}} = this.props

    this.setState({
      index: getTabIndexFromPath(routes, pathname)
    })
  }

  componentWillReceiveProps(nextProps: any) {
    const {location: {pathname: nextPathname}, routes} = nextProps
    const {location: {pathname: prevPathname}} = this.props

    if (nextPathname !== prevPathname) {
      this.setState({
        index: getTabIndexFromPath(routes, nextPathname)
      })
    }
  }

  render() {
    const {index} = this.state
    const {history, routes} = this.props
    
    return (
        <Tabs index={index} onChange={this.handleTabChange}>
          {routes.map(({path, label}, i) =>
            <Tab 
              key={i}
              label={label} 
              onClick={(e) => history.push(path)} 
            />
          )}
        </Tabs>
    )
  }
}

export const RoutedTabs = withRouter(TabsWithRoutes)