import React, { useContext, useEffect } from "react"
import { TagContext } from "./TagProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Form, Button, Modal } from 'react-bootstrap'

export const TagList = props => {
	
	const {tags, getTags, getTagById, deleteTag} = useContext(TagContext)

	useEffect(() => {
		getTags();
	}, [])

	//modal
	function Example() {
		const [show, setShow] = useState(false);
	
		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
	
		return (
			<>
				<Button variant="primary" onClick={handleShow}>
					Launch static backdrop modal
				</Button>
	
				<Modal
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						I will not close if you click outside me. Don't even try to press
						escape key.
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary">Understood</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}

	return (
		<>
			<div>
				{tags.map(t => <p>{t.label}
					<button onClick={() => {
					deleteTag(t.id)
					}}><FontAwesomeIcon icon={faTrashAlt} />
					</button>
				</p>)}
			</div>
		</>
	)
}


//this works to delete
// return (
// 	<>
// 		<div>
// 			{tags.map(t => <p>{t.label}
// 				<button onClick={() => {
// 				deleteTag(t.id)
// 				}}><FontAwesomeIcon icon={faTrashAlt} />
// 				</button>
// 			</p>)}
// 		</div>
// 	</>
// )