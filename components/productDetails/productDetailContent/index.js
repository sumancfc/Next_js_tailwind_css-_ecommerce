import { StarIcon } from "@heroicons/react/outline"
import { capitalizeFirstLetter } from "@/common/utils"

export default function ProductDetailContent({ product }) {
  const { name, price, description, discount, size } = product
  return (
    <div className="col-span-1 ml-5">
      <div className="space-y-2">
        <h1 className="text-xl">{capitalizeFirstLetter(name)}</h1>
        <div className="flex justify-start">
          <StarIcon className="h-5 text-yellow-500" />
          <StarIcon className="h-5 text-yellow-500" /> <StarIcon className="h-5 text-yellow-500" />{" "}
          <StarIcon className="h-5 text-yellow-500" /> <StarIcon className="h-5 text-yellow-500" />
        </div>
        <p className="text-black text-xl relative font-semibold">
          Rs. {discount ? +price - +discount : +price}
          <span className="ml-2 text-gray-600 line-through">Rs. {discount && +price}</span>
        </p>

        <p className="text-sm">{description}</p>

        <div className="product-variation">
          {size && (
            <div className="flex">
              <p className="mr-3">Size:</p>
              <div class="flex items-center space-x-2">
                {size.map((item, i) => (
                  <div key={i}>
                    <input id="radio2" type="radio" name="radio" class="hidden" />
                    <label htmlFor="radio2" class="flex items-center cursor-pointer">
                      <span className="w-4 h-4 inline-block mr-1 border border-grey-200"></span>
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
