import { API_URL } from "@/config/index"
import Layout from "@/components/layout"
import SubCategories from "@/components/elements/subcategory"

export default function CategorySlug({ category }) {
  return (
    <Layout pageTitle={category.title}>
      <div className="w-full relative">
        <div className="container bg-white my-10 py-6">
          <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-6`}>
            {category.sub !== undefined ? (
              <SubCategories subcategories={category.sub} />
            ) : (
              <h3>No Sub Category Found</h3>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const response = await fetch(`${API_URL}/api/categories/${slug}`)

  const categories = await response.json()

  return {
    props: { category: categories[0] },
  }
}

// import Slider from "react-slick"
// import SubCategories from "@/components/elements/subcategory"

// export default function CategorySlider({ categories, categoryId }) {
//   // console.log(categories)
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 8,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           initialSlide: 2,
//         },
//       },
//     ],
//   }
//   return (
//     <div className="mt-4">
//       <Slider {...settings}>
//         <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-6`}>
//           {categories
//             .filter((category) => category.id === categoryId)
//             .map((category) => (
//               <SubCategories subcategories={category.sub} />
//             ))}
//         </div>
//       </Slider>
//     </div>
//   )
// }
