import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { siteTitle } from './layout.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            siteBuildMetadata {
                buildTime
            }
        }
    `)

    return (
        <header>
            <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
            <p>Build time: {data.siteBuildMetadata.buildTime}</p>
        </header>
    )
}

export default Header