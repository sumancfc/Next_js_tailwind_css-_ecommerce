import Category from "../elements/category"
import SectionLayout from "../layout/SectionLayout"
import CategorySlider from "./common/CategorySlider"

export default function HomePage({ categories }) {
  return (
    <>
      <SectionLayout title="Shop By Category" url="/categories">
        <Category categories={categories} className="mt-5" />
      </SectionLayout>

      <SectionLayout title="Kirana Pasal" url="/categories/kirana-pasal">
        <CategorySlider categories={categories} categoryId="1" />
      </SectionLayout>

      <SectionLayout title="Best of Electronic" url="/subcategories">
        <CategorySlider categories={categories} categoryId="1" />
      </SectionLayout>
    </>
  )
}
