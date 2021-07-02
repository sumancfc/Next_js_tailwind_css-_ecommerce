export default function Address(props) {
    const {
        address,
        setAddress,
        city,
        setCity,
        postalCode,
        setPostalCode,
        country,
        setCountry,
        submitHandler,
    } = props

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="space-y-4">
                    <input
                        className="form-input mt-5"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Your Address"
                        required
                    />
                    <input
                        className="form-input mt-5"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter Your City"
                        required
                    />
                    <input
                        className="form-input mt-5"
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="Enter Postal Code"
                        required
                    />
                    <input
                        className="form-input mt-5"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter Your Country"
                        required
                    />

                    <button className="btn-bhotahiti">Submit</button>
                </div>
            </form>
        </>
    )
}
