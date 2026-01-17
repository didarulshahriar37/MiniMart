import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function Page({ params }) {
  const { id } = await params;

  const collection = await connect("items");
  const item = await collection.findOne({ _id: new ObjectId(id) });

  return (
    <div className="max-w-11/12 mx-auto px-4 pt-20 mt-15 mb-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="w-full h-100 bg-gray-100 rounded-lg flex items-center justify-center">
          {/* <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-lg"
          /> */}
          <span className="text-gray-400">Image Preview</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{item.name}</h1>

          <p className="text-gray-500 text-sm">
            Category: <span className="font-medium">{item.category}</span>
          </p>

          <p className="text-2xl font-bold text-black">
            BDT {item.price}
          </p>

          <p className="text-yellow-600 font-medium">
            Rating: {item.rating} ⭐
          </p>

          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                item.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <button
            className="mt-6 px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-secondary hover:cursor-pointer transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}