import FooterDesc from "./FooterDesc"

export default function Footer() {
    return(
        <div className="flex flex-col text-gray-500 mt-3 bg-gray-100 p-5 text-xs gap-2 justify-center items-center">
            
            <div className="text-left w-full max-w-6xl flex flex-col gap-5 text-sm px-4">
                
                <p className="font-bold text-red-500 text-lg md:text-2xl">
                    *This is a non-commercial recreation of Apple's homepage built for educational purposes. Not affiliated with Apple Inc.*
                </p>
                
                <p>A subscription is required for Apple TV+.</p>
                <p>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
                
                <hr className="border-gray-300" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
                    
                    <div className="flex flex-col gap-2">
                        <FooterDesc title={"Shop and Learn"}/> 
                        <FooterDesc desc={"Store"}/> 
                        <FooterDesc desc={"Mac"}/> 
                        <FooterDesc desc={"iPad"}/> 
                        <FooterDesc desc={"iPhone"}/> 
                        <FooterDesc desc={"Watch"}/> 
                        <FooterDesc desc={"Vision"}/> 
                        <FooterDesc desc={"Airpods"}/> 
                        <FooterDesc desc={"TV & Home"}/> 
                        <FooterDesc desc={"AirTag"}/> 
                        <FooterDesc desc={"Accessories"}/> 
                        <FooterDesc desc={"Gift Cards"}/> 
                    </div>

                    <div className="flex flex-col gap-2">
                        <FooterDesc title={"Apple Wallet"}/> 
                        <FooterDesc desc={"Wallet"}/> 
                        <FooterDesc desc={"Apple Pay"}/> 
                        
                        <FooterDesc title={"Account"}/> 
                        <FooterDesc desc={"Manage Your Apple Account"}/> 
                        <FooterDesc desc={"Apple Store Account"}/> 
                        <FooterDesc desc={"iCloud.com"}/> 
                    </div>

                    <div className="flex flex-col gap-2">
                        <FooterDesc title={"Apple Store"}/> 
                        <FooterDesc desc={"Find a Store"}/> 
                        <FooterDesc desc={"Genius Bar"}/> 
                        <FooterDesc desc={"Today at Apple"}/> 
                        <FooterDesc desc={"Group Reservations"}/> 
                        <FooterDesc desc={"Apple Camp"}/> 
                        <FooterDesc desc={"Apple Store App"}/> 
                        <FooterDesc desc={"Apple Trade In"}/> 
                        <FooterDesc desc={"Financing"}/> 
                        <FooterDesc desc={"Order Status"}/> 
                        <FooterDesc desc={"Shopping Help"}/> 
                        
                        <FooterDesc title={"Entertainment"}/> 
                        <FooterDesc desc={"Apple One"}/> 
                        <FooterDesc desc={"Apple TV"}/> 
                        <FooterDesc desc={"Apple Music"}/> 
                        <FooterDesc desc={"Apple Arcade"}/> 
                        <FooterDesc desc={"Apple Fitness+"}/> 
                        <FooterDesc desc={"Apple Podcasts"}/> 
                        <FooterDesc desc={"Apple Books"}/> 
                        <FooterDesc desc={"App Store"}/> 
                    </div>

                    <div className="flex flex-col gap-2">
                        <FooterDesc title={"For Business"}/> 
                        <FooterDesc desc={"Apple and Business"}/> 
                        <FooterDesc desc={"Shop for Business"}/> 
                        
                        <FooterDesc title={"For Education"}/> 
                        <FooterDesc desc={"Apple and Education"}/> 
                        <FooterDesc desc={"Shop for K-12"}/> 
                        <FooterDesc desc={"Shop for University"}/> 
                        
                        <FooterDesc title={"For Healthcare"}/> 
                        <FooterDesc desc={"Apple and Healthcare"}/> 
                    </div>

                    <div className="flex flex-col gap-2">
                        <FooterDesc title={"Apple Values"}/> 
                        <FooterDesc desc={"Accessibility"}/> 
                        <FooterDesc desc={"Environment"}/> 
                        <FooterDesc desc={"Privacy"}/> 
                        <FooterDesc desc={"Supply Chain Innovation"}/> 
                        
                        <FooterDesc title={"About Apple"}/> 
                        <FooterDesc desc={"Newsroom"}/> 
                        <FooterDesc desc={"Apple Leadership"}/> 
                        <FooterDesc desc={"Career Opportunities"}/> 
                        <FooterDesc desc={"Warranty"}/> 
                        <FooterDesc desc={"Investors"}/> 
                        <FooterDesc desc={"Ethics & Compliance"}/> 
                        <FooterDesc desc={"Events"}/> 
                        <FooterDesc desc={"Contact Apple"}/> 
                    </div>

                </div>

                <p className="text-center md:text-left">
                    More way to shop: <a href="#" className="text-sky-600 underline">Find an Apple Store</a> or <a href="#" className="text-sky-600 underline">other retailer</a> near you. Or call <a href="tel:8004440396" className="text-sky-600 underline">8000 444 0396</a>.
                </p>

                <hr className="border-gray-300" />

                <div className="flex flex-col md:flex-row gap-3 md:gap-7 text-center md:text-left">
                    <p>Copyright &copy; 2025 Apple Inc. All rights reserved</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:underline">Sales and Refunds</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:underline">Legal</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:underline">Site Map</a>
                    </div>

                    <a href="#" className="md:ml-auto hover:underline">United States</a>
                </div>

            </div>
        
        </div>
    )
}