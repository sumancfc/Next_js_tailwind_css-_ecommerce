import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"

export default function Accordion({ faqs }) {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <>
      {faqs.map((faq) => (
        <div className="max-w-4xl mx-auto mb-5  border rounded shadow-md" key={faq.id}>
          <div
            className="px-6 py-3 bg-white-500 flex items-center justify-between cursor-pointer"
            onClick={() => toggle(faq.id)}
          >
            <h3 className=" text-gray-700  font-medium text-base sm:text-xl tracking-wider">
              {faq.question}
            </h3>
            <span>
              {clicked === faq.id ? (
                <ChevronUpIcon className="h-5" />
              ) : (
                <ChevronDownIcon className="h-5" />
              )}
            </span>
          </div>
          {clicked === faq.id ? (
            <div className="mt-2">
              <p className="px-6 py-3 font-normal text-gray-600 bg-white">{faq.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </>
  )
}
