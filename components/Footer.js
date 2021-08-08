const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
        border-top
        py-14  bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">About</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Community</h5>
                <p>Diversity and belonging</p>
                <p>Against Discrimination</p>
                <p>Accessibility</p>
                <p>Gift Cards</p>
                <p>Airbnb.org</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Host</h5>
                <p>Host your home</p>
                <p>Host an online experience</p>
                <p>Host an experience</p>
                <p>Responsible hosting</p>
                <p>Resource center</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Support</h5>
                <p>Our COVID-19 response</p>
                <p>Help center</p>
                <p>Cancellation options</p>
                <p>Trust</p>
                <p>Safety</p>
            </div>
        </div>
    )
}

export default Footer
