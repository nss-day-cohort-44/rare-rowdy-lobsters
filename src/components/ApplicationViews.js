import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { CategoryForm } from "./categories/CategoryForm"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CommentProvider } from "./comments/CommentProvider"
import { CommentForm } from "./comments/CommentForm"
import { PostForm } from "./posts/PostForm"
import { PostDetail } from "./posts/PostDetail"
import { TagForm } from "./tags/TagForm"
import { TagList } from "./tags/TagList"
import { TagProvider } from "./tags/TagProvider"
import { CommentList } from "./comments/CommentList"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { UserDetail } from "./users/UserDetail"

export const ApplicationViews = (props) => {
    return (
        <>
            <CategoryProvider>
                <CommentProvider>
                    <PostProvider>
                        <TagProvider>
                            <Route exact path="/" render={
                                props => <PostList {...props} />
                            } />
                            <Route exact path="/createPost" render={
                                props => <PostForm {...props} />} />
                            <Route exact path="/posts" render={
                                props => <PostList {...props} />
                            } />
                            <Route path="/posts/:postId(\d+)" render={
                                props => <PostDetail {...props} />
                            } />

                            <Route path="/createPost/:postId(\d+)" render={
                                props => <PostForm {...props} />
                            } />

                        </TagProvider>
                    </PostProvider>
                </CommentProvider>
            </CategoryProvider>
            <CategoryProvider>
                <Route exact path="/categories" render={
                    props => (<><CategoryForm {...props} />
                    <CategoryList {...props} />
                    </>)
                } />
            </CategoryProvider>
            <CommentProvider>
                <Route exact path="/addComment" render={
                    props => <CommentForm {...props} />
                } />
                <Route path="/addComment/:commentId(\d+)" render={
                    props => <CommentForm {...props} />
                } />
                <Route exact path="/post/comments" render={
                    props => <CommentList {...props} />
                } />
            </CommentProvider>
            <TagProvider>
                <Route exact path="/tags" render={ props =>
                (<>
                    <TagForm {...props} />
                    <TagList {...props} />
                </>)}>

                </Route>
                <Route exact path ="/tags/:tagId(\d+)" render={ props => <TagForm {...props} />} />
            </TagProvider>
            <UserProvider>
                <Route exact path = "/users" render={
                    props => <UserList {...props} />
                } />
                <Route exact path = "/users/:userId(\d+)" render={
                    props => <UserDetail {...props} />
                } />
            </UserProvider>
        </>
    )
}



