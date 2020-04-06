import * as React from 'react'
import styled from 'styled-components'

import Article from '../Article'

const ListContainer = styled.div`
    article {
        margin-bottom: 56px;
    }
`

const ArticleList = ({ posts }) => (
    <ListContainer>
    {posts.map((post) => (
        <Article key={post.slug} post={post} />
      ))}
    </ListContainer>
)

export default ArticleList