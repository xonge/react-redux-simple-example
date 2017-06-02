export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
export const INVALIDATE_NEWS = 'INVALIDATE_NEWS'
export const REQUEST_NEWS = 'REQUEST_NEWS'
export const RECEIVE_NEWS = 'RECEIVE_NEWS'

export const selectReddit = reddit => ({
    type: SELECT_REDDIT,
    reddit
})

export const invalidateReddit = reddit => ({
    type: INVALIDATE_REDDIT,
    reddit
})

export const requestPosts = reddit => ({
    type: REQUEST_POSTS,
    reddit,
})

export const receivePosts = (reddit, json) => ({
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    // news: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

export const requestNews = reddit => ({
    type: REQUEST_NEWS,
    reddit,
})

export const receiveNews = (reddit, json) => (
    {
    type: RECEIVE_NEWS,
    reddit,
    news: json.map(child => child),
    receivedAt: Date.now()
}
)

const fetchPosts = reddit => dispatch => {
    dispatch(requestPosts(reddit))
    console.log('zzzz');
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit, json)))
}

const fetchNews = reddit => dispatch => {
    dispatch(requestNews(reddit))
    console.log('fetch news');
    return fetch(`http://busbus.app/kneesocks`)
        .then(response => response.json())
        .then(json => dispatch(receiveNews(reddit, json)))
}

const shouldFetchPosts = (state, reddit) => {
    const posts = state.postsByReddit[reddit]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
    dispatch(fetchNews(reddit))
    if (shouldFetchPosts(getState(), reddit)) {
        
        return dispatch(fetchPosts(reddit))
    }
}