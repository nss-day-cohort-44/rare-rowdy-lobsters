import React, { useContext, useEffect, useState, useRef } from "react"
import { CategoryContext } from "./CategoryProvider"
import {Button, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Category.css"

export const CategoryList = props => {

	const {categories, getCategories, deleteCategory, updateCategory} = useContext(CategoryContext)

	// reference for an edited category
	const newLabel = useRef(null)

	useEffect(() => {
		getCategories();
	}, [])

	function EditModal({category}) {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

        return (
        <>
			<FontAwesomeIcon icon={faEdit} onClick={handleShow} />
            <Modal
                show={show}
				onHide={handleClose}
				keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Edit Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Edit the category
				<input type="text" ref={newLabel} defaultValue={category.label} name="label" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancel
                </Button>
                <Button variant="primary"
                    onClick={()=>updateCategory({id: category.id, label: newLabel.current.value}).then(props.history.push("/categories"))}>
                    Save</Button>
            </Modal.Footer>
            </Modal>
        </>
        );
    }

	return (
		<>
			<div>
				{categories.map(c => <div className="categoryList">{c.label}
					<div>
						<FontAwesomeIcon 
					icon={faTrashAlt} 
					onClick={() => {
						deleteCategory(c.id)
					}} />
					<EditModal category={c}/>
					</div>
					</div>
					)
				}
			</div>
		</>
	)
}