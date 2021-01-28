import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./posts/PostProvider"

export const ApplicationViews = () => {
    return (
    <>
        <PostProvider>
            <Route exact path = "/posts/:myPosts(\d+)" render={
                props => <PostList {...props} />
            } />
        </PostProvider>
    </>
        )
}
