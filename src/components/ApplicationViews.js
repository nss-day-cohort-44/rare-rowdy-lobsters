import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { CategoryForm } from "./categories/CategoryForm"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { PostForm } from "./posts/PostForm"
import { PostDetail } from "./posts/PostDetail"
import { TagForm } from "./tags/TagForm"
import { TagList } from "./tags/TagList"
import { TagProvider } from "./tags/TagProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <PostProvider>
                <CategoryProvider>
                    <Route exact path="/" render={
                        props => <PostList {...props} />
                    } />
                    <Route exact path="/createPost" render={
                        props => <PostForm {...props} />} />

                    <Route exact path="/posts" render={
                        props => <PostList {...props} />
                    } />
                    <Route path="/createPost/:postId(\d+)" render={
                            props => <PostForm {...props} />
                        } />

                </CategoryProvider>
            </PostProvider>
            <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList {...props} />
                    <CategoryForm />
                </Route>
            </CategoryProvider>
            <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList {...props} />
                    <CategoryForm />
                </Route>
            </CategoryProvider>
            <PostProvider>
                <TagProvider>
                    <Route path="/posts/:postId(\d+)" render={
                        props => <PostDetail {...props} />
                    } />
                </TagProvider>
            </PostProvider>
            <TagProvider>
                <Route exact path="/tags">
                    <TagList {...props} />
                    <TagForm />
                </Route>
            </TagProvider>
        </>
    )
}
