import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Profile = () => {
    const { 
        site: {
            siteMetadata: {title, description}
        }
    } = useStaticQuery(graphql`
        query BlogMetadata {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <div className="Profile-wrapper">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Profile