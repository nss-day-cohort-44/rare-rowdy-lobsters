import React, { useContext } from "react"
import { PostContext } from "./PostProvider"

export const PostSearch = () => {
    const { setTerms } = useContext(PostContext)

    return (
        <>
            <div>Search for a title</div>
            <input type="text" className="post__search"
                onChange={
                    (changeEvent) => {
                        setTerms(changeEvent.target.value)
                    }
                }
                placeholder="Enter search string here..." />
        </>
    )
}