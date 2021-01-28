import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./categories/CategoryForm"
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"

export const ApplicationViews = props => {
    return <>
        <CategoryProvider>
            <Route exact path="/categories">
                <CategoryList {...props} />
                <CategoryForm />
            </Route>
        </CategoryProvider>
    </>
}
