import { promises as fs } from "fs"
import path from "path"

import Layout from "@/components/layout"
import Accordion from "@/components/elements/accordion"

export default function FAQ({ faqs }) {
  return (
    <Layout pageTitle="FAQ">
      <div className="py-16 px-4 md:p-16">
        <Accordion faqs={faqs} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "faqs.json")
  const jsonData = await fs.readFile(filePath)
  const { faqs } = JSON.parse(jsonData)

  return {
    props: { faqs },
    revalidate: 10,
  }
}
