import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./categories/CategoryForm"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { TagForm } from "./tags/TagForm"
import { TagProvider } from "./tags/TagProvider"
import { TagList } from "./tags/TagList"


export const ApplicationViews = props => {
    return <>
        <CategoryProvider>
            <Route exact path="/categories">
                <CategoryList {...props} />
                <CategoryForm />
            </Route>
        </CategoryProvider>

        <TagProvider>
            <Route exact path="/tags">
                <TagList {...props} />
                <TagForm />
            </Route>
        </TagProvider>
    </>
}
