// import Image from "next/image";
import Link from "next/link";
import { connect } from "../lib/dbConnect";

export default async function page() {
  const collection = await connect("items");
  const items = await collection.find().toArray();

  const safeItems = items.map(item => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <div className="max-w-11/12 mx-auto px-4 py-20">
      <h2 className="text-center md:text-4xl text-2xl font-bold mt-15 mb-10">
        All Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {safeItems.map(item => (
          <div
            key={item._id}
            className="border rounded-lg p-4 bg-white hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48 mb-4">
              {/* <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-md"
              /> */}
            </div>

            <h3 className="text-lg font-semibold mb-1">
              {item.name}
            </h3>

            <p className="text-sm text-gray-500 mb-1">
              {item.category}
            </p>

            <p className="font-bold text-black mb-2">
              BDT {item.price}
            </p>

            <p className="text-sm text-gray-600 line-clamp-3 mb-2">
              {item.description}
            </p>

            <p className="text-sm text-yellow-600 font-medium">
              Rating: {item.rating} ⭐
            </p>

            <p className="text-sm text-gray-500">
              Stock: {item.stock}
            </p>

            <div className='text-center mt-3'>
              <Link href={`/items/${item._id}`} className='btn bg-primary hover:bg-secondary text-black font-bold'>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}