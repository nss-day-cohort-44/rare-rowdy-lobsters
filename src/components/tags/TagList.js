import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"
import {Button, Modal} from 'react-bootstrap'

export const TagList = props => {

	const {tags, getTags, getTagById} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	// modal
	function DeleteTagModal() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return (
			<>

					{parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))
									?<FontAwesomeIcon icon={faTrashAlt} onClick={handleShow} /> 
									: ""}

					<Modal
							show={show}
							onHide={handleClose}
					>
					<Modal.Header closeButton>
							<Modal.Title>Delete</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							Are you sure?
					</Modal.Body>
					<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
							Close
							</Button>
							<Button variant="primary" 
									onClick={()=>deleteTag(post.id).then(props.history.push("/"))}>
									Yes</Button>
					</Modal.Footer>
					</Modal>
			</>
			);
	}




	return (
		<>
			<div>
				{tags.map(t => <p>{t.label}</p>)}
			</div>
		</>
	)
}