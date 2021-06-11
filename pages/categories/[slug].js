import { API_URL } from "@/config/index"
import Layout from "@/components/layout"
import SubCategories from "@/components/elements/subcategory"

export default function CategorySlug({ category }) {
  console.log(category)
  return (
    <Layout pageTitle={category.title}>
      <div className="w-full relative">
        <div className="bg-white px-8 py-16">
          {category.sub !== undefined ? (
            <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-6`}>
              <SubCategories subcategories={category} />
            </div>
          ) : (
            <h3>No Sub Category Found</h3>
          )}
        </div>
      </div>
    </Layout>
  )
}

// export default function CategorySlug({ category }) {
//   return (
//     <Layout pageTitle={category.title}>
//       <div className="w-full relative">
//         <div className="container bg-white my-10 py-6">
//           {category.sub !== undefined ? (
//             <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-6`}>
//               <SubCategories category={category} />
//             </div>
//           ) : (
//             <h3>No Sub Category Found</h3>
//           )}
//         </div>
//       </div>
//     </Layout>
//   )
// }

export async function getServerSideProps({ query: { slug } }) {
  const response = await fetch(`${API_URL}/api/categories/${slug}`)

  const categories = await response.json()

  // console.log(categories)
  const category = categories[0]

  if (!category) return { notFound: true }

  return {
    props: { category },
  }
}
