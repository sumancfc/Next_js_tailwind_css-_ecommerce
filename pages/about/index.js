import Layout from "@/components/layout"

const datas = [
  {
    icon: "fas fa-award",
    title: "We Have Brands",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "fas fa-money-bill-wave",
    title: "Lowest price",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "fas fa-truck",
    title: "Fastest Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export default function About() {
  return (
    <Layout pageTitle="About Us">
      <div className="my-20 px-12 ">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
          <div className="max-w-md mx-auto sm:max-w-xl lg:pr-12  lg:max-w-full  2xl:col-span-3">
            <div className="xl:max-w-xl">
              <img
                className="rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                src="/images/1.jpg"
                alt="About Us"
              />
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-main-blue  font-semibold">
                The Story About Us
              </h2>
              <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                Bhotahiti.com is an eCommerce platform that connects buyers and sellers with ease.
                We exist to enable economic opportunity for individuals, entrepreneurs, businesses,
                and directories of all sizes. Bhotahiti.com is an online wholesale marketplace for
                all products that are focused on selling products to the small retail sellers
                directly from the producers.
              </p>
              <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                It will cater to the need of small, medium, or any sized businesses. We offer
                sellers, the ability to grow a business with little barrier to entry regardless of
                size, background, or geographic location. We never compete with our sellers. We win
                when our sellers succeed. Buyers, who shop on our Marketplace and Classifieds
                platforms, enjoy a highly personalized experience with an unparalleled selection at
                a great value.
              </p>
            </div>
          </div>
          <div className="hidden relative lg:block 2xl:col-span-2">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/images/1.jpg"
              alt="About Us Image"
            />
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="bg-about-bg bg-cover bg-no-repeat bg-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h2 className="text-3xl md:text-4xl text-main-blue  font-semibold">
                  Why choose Us
                </h2>
              </div>

              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
                {datas.map((data) => (
                  <div
                    className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
                    key={data.title}
                  >
                    <i className={`${data.icon} text-4xl text-main-blue mb-1`}></i>
                    <h4 className="text-xl  font-semibold leading-snug tracking-tight mb-1">
                      {data.title}
                    </h4>
                    <p className="text-gray-600 text-center">{data.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
