import React from "react"
import Form from "./Form"

const Table = ({ users, postUser, updateUser, deleteUser }) => {
	const showUpdateUser = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ user }) => {
		return (
			<>
				<div className='row'>
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.companies.name}</div>
					<div className='buttons'>
						<button id="button1" onClick={() => showUpdateUser(user.id)}>Update</button>
						<button id="button1" onClick={() => deleteUser(user.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} />
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>Họ và Tên</div>
				<div>Email</div>
				<div>Số Điện Thoại</div>
				<div>Công Ty</div>
				<div>Chức Năng</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
			<img id="img_logo" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_json_icon_130455.png" alt=""/>
		</div>
		
	)
}

export default Table
