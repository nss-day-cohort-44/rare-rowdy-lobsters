import React, {useState} from "react";

export const TagContext = React.createContext();

export const TagProvider = props => {
  const [tags, setTags] = useState([])

  const getTags = () => {
    return fetch("http://localhost:8088/tags")
    .then(res => res.json())
    .then(setTags)
  }

  const getTagById = id => tags.find(t=> t.id === parseInt(id))

  const addTag = tag => {
    return fetch("http://localhost:8088/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(tag)
    })
    .then(getTags)
  }

  const addPostTag = (tagId, postId) => {
    const tagObj = {
      tag_id: tagId,
      post_id: postId
    }
    return fetch("http://localhost:8088/postTags"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tagObj)
    }
  }

  return <TagContext.Provider value = {{
		tags, getTags, getTagById, addTag
	}}>
		{props.children}
	</TagContext.Provider>
}