"use client";
import React from 'react'

export default function AddItemForm() {

    const handleAddItem = (e) => {
        e.preventDefault();
    }

    return (
        <div className='py-20'>
            <div className="card bg-base-300 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleAddItem} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Item Title</label>
                        <input type="text" className="input" placeholder="Item Title" name='itemTitle' />
                        <label className="label">Item Description</label>
                        <input type="password" className="input" placeholder="Description" name='description' />
                        <button type='submit' className="btn btn-neutral mt-4">Add Item</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
