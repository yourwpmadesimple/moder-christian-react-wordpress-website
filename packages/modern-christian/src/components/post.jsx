// File: /packages/my-first-theme/src/components/post.js

import React from "react"
import { connect, styled, Head } from "frontity"
import dayjs from "dayjs"

import { PostInfo } from "../styles/PostCss.css"

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  const formattedDate = dayjs(post.date).format("MMM d, YYYY")
  const Html2React = libraries.html2react.Component
  

  return (
    <div>
    <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <h2>{post.title.rendered}</h2>
      <PostInfo>
      <p>
      <strong>Posted: </strong>
      {formattedDate}
      </p>
      <p>
      <strong>Author: </strong>
      {author.name}
      </p>
      </PostInfo>
      <Html2React html={post.content.rendered} />
    </div>
  )
}


export default connect(Post)
