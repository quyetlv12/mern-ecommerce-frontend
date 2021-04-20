import React from 'react'
import Layout from './../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom'
const AdminDashboard = () => {
    const { user: { _id, name, email, role } } = isAuthenticated()

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link class="nav-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link class="nav-link" to="/create/product">Create Product</Link>
                    </li>
                </ul>
            </div>
        )
    }
    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Admin Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {name}
                    </li>
                    <li className="list-group-item">
                        {email}
                    </li>
                    <li className="list-group-item">
                        {role === 1 ? 'Admin' : 'Register user'}
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <Layout title="Dashboard" description={`Good day ${name}`}>
                <div className="row">
                    <div className="col-3">
                        {adminLinks()}
                    </div>
                    <div className="col-9">
                        {adminInfo()}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AdminDashboard