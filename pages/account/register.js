import Logo from "@/components/elements/logo"
import Layout from "@/components/layout"

export default function Register() {
  return (
    <Layout pageTitle="Register">
      <div className="container my-10 w-full max-w-max md:max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center p-8 bg-white shadow-sm md:space-x-10">
          <div className="order-2 md:order-1 flex-1 mt-5 md:mt-0">
            <h1 className="text-lg md:text-2xl ">Register an Account</h1>
            <div className="mt-4">
              <form>
                <div>
                  <input
                    class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                    id="email"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="md:order-2">
            <Logo />
            <span className="block bg-main-red p-2 text-white uppercase rounded-sm">
              online wholesale bazar
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
