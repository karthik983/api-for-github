import React, { useContext } from 'react';
import AlertContext from '../context/Actions/alertContext';
import '../index.css';
function Alert() {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;
	return (
		alertContext.alert !== null && (
			<div className={`alert alert-${alert.type} text-center`}>
				<i className="fas fa-info-circle">{alert.msg}</i>
			</div>
		)
	);
}

export default Alert;
