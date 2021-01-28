import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { CategoryForm } from "./categories/CategoryForm"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"

export const ApplicationViews = (props) => {
    return (
    <>
        <PostProvider>
            <Route exact path = "/" render={
                props => <PostList {...props} />
            } />
            <Route exact path = "/posts" render={
                props => <PostList {...props} />
            } />
        </PostProvider>
        <CategoryProvider>
            <Route exact path="/categories">
                <CategoryList {...props} />
                <CategoryForm />
            </Route>
        </CategoryProvider>
 </>
    )
}
