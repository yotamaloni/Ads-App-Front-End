import { NavLink, Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <section className="app-header flex justify-between">
            <div className='main-nav'>
                <NavLink activeClassName="selected" className="clean-link" exact to='/'>HOME</NavLink>
                |
                <NavLink activeClassName="selected" className="clean-link" exact to='/domain/msn.com'>ADS</NavLink>
            </div>
            <Link to='/' className='title-container clean-link'>
                Ads.txt Crawler
            </Link>
        </section>
    )
}