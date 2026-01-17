import { connect } from "@/app/lib/dbConnect";

export default async function AvailableCategories() {
  const collection = await connect("items");

  const items = await collection
    .find({}, { projection: { category: 1, _id: 0 } })
    .toArray();

  const categorySet = new Set();

  items.forEach(item => {
    if (item.category) {
      categorySet.add(item.category);
    }
  });

  const categories = Array.from(categorySet).sort();

  return (
    <div className="max-w-11/12 mx-auto px-4">
      <h2 className="mt-15 md:mt-40 text-center md:text-4xl text-2xl font-bold mb-8">
        Available Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <span
            key={category}
            className="px-6 py-2 rounded-full bg-primary/30 font-medium hover:bg-accent/20 hover:text-black transition"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
