import React from 'react'
import PropTypes from 'prop-types'

const News = ({news}) => (
    <ul>
        {news.map((n, i) =>
            <li key={i}><img src={n.img} alt={n.img} /></li>
        )}
    </ul>
)

News.propTypes = {
    news: PropTypes.array.isRequired
}

export default News