"use client";

import React from 'react'
import AddItemForm from '../Add Item Form/AddItemForm';

export default function AddItem() {
    return (
        <div>
            <h2 className='md:text-4xl text-2xl font-bold text-center mt-10'>Add Item</h2>
            <AddItemForm></AddItemForm>
        </div>
    )
}
