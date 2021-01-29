import React, { useContext, useEffect, useState } from "react"
import { TagContext } from "./TagProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {Button, Modal} from 'react-bootstrap'

export const TagList = props => {

	const {tags, getTags, getTagById} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	


	return (
		<>
			<div>
				{tags.map(t => <p>{t.label}<Button><FontAwesomeIcon icon={faTrashAlt} /></Button></p>)}
				
			</div>
		</>
	)
}