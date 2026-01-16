"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Thanks For Subscribing! You'll here from us soon!",
            icon: "success",
        });
    };

    return (
        <section className="w-full bg-primary/20 mt-15 p-20 mb-40 md:mt-40 rounded-2xl px-6 flex flex-col items-center justify-center text-center gap-6">

            <h2 className="text-2xl md:text-4xl font-bold text-black">
                Stay Updated!
            </h2>

            <p className="text-gray-700 text-lg md:text-xl max-w-2xl">
                Subscribe to our newsletter to get the latest products, offers, and updates from MiniMart.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full max-w-md"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:secondary transition"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-secondary hover:cursor-pointer transition"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
}