import categoryData from "@/data/category.json"

export default function LeftSidebar() {
  return (
    <div className="hidden md:block col-span-1">
      <div>
        <h2>Categories</h2>
        <div className="mt-2">
          <ul>
            {categoryData.categories.map((category) => (
              <li key={category.id}>Categories Here</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
