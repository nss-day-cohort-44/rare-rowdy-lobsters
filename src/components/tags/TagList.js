import React, { useContext, useEffect, useState } from "react"
import { TagContext } from "./TagProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const TagList = props => {

	const {tags, getTags, getTagById, deleteTag} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	const [tag, setTag] = useState({})
	
	// modal
	function DeleteModal(id) {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

	return (
		<>
			
			<FontAwesomeIcon icon={faTrashAlt} onClick={handleShow} /> 

		<Modal
		show={show}
		onHide={handleClose}
		>
		<Modal.Header closeButton>
		<Modal.Title>Delete</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		Are you sure you want to delete?
		</Modal.Body>
		<Modal.Footer>
		<Button variant="secondary" onClick={handleClose}>
		Close
		</Button>
		<Button variant="primary" 
		onClick={()=>deleteTag(id).then(props.history.push("/tags"))}>
		Yes</Button>
		</Modal.Footer>
		</Modal>
		
		</>
	)
}
return (
		<>
			<div>
				{tags.map(t => <p>{t.label}
				<DeleteModal id={t.id} />
				</p>)}
				
			</div>
		</>
	)

} //ends export


// This deletes with button, no modal
// return (
// 	<>
// 		<div>
// 			{tags.map(t => <p>{t.label}<Button><FontAwesomeIcon icon={faTrashAlt} onClick={() => {
// 			deleteTag(t.id)
// 			.then(getTags)
// 			}}/></Button></p>)}
			
// 		</div>
// 	</>
// )
// }