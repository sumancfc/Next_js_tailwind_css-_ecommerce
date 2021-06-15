import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import { ToastContainer } from "react-toastify"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-toastify/dist/ReactToastify.css"
import "@/styles/globals.css"

import { persistor } from "../redux/store"
import withReduxStore from "../common/withReduxStore"

const MyApp = ({ Component, pageProps, reduxStore }) => {
    return (
        <Provider store={reduxStore}>
            <PersistGate persistor={persistor}>
                <ToastContainer />
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default withReduxStore(MyApp)
