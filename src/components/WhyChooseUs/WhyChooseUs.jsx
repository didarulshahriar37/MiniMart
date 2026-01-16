import { DollarSign, Shield, Smile, Truck } from 'lucide-react';
import React from 'react'

export default function WhyChooseUs() {

    const features = [
        {
            icon: <Truck className="h-8 w-8 text-secondary" />,
            title: "Fast Delivery",
            description: "Get your products delivered quickly and reliably to your doorstep.",
        },
        {
            icon: <DollarSign className="h-8 w-8 text-secondary" />,
            title: "Best Prices",
            description: "We offer the most competitive prices without compromising on quality.",
        },
        {
            icon: <Shield className="h-8 w-8 text-secondary" />,
            title: "Trusted Products",
            description: "Every product is verified to ensure you get only the best.",
        },
        {
            icon: <Smile className="h-8 w-8 text-secondary" />,
            title: "Customer Satisfaction",
            description: "We prioritize your happiness with easy returns and support.",
        },
    ];

    return (
        <div>
            <h2 className='mt-15 md:mt-40 text-center md:text-4xl text-2xl font-bold mb-10'>Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-primary/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
                    >
                        <div className="mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-black">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}
