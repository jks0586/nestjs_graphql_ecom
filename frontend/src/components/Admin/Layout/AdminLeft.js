import * as React from 'react';

export default function AdminLeft({isAdmin}) {
        return (
            <div className='left-side-menu'>
                <Nav defaultActiveKey="/admin/category" className="flex-column">
                    <Nav.Link href="/admin/category">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav>
            </div>
        )
}