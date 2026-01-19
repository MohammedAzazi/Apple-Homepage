export default function WatchBox({ mainHeader, logoHeader, logoClass, subHeader, subHeaderClass, buttonText, additionalButton, image, imageClass, sectionClass}) {
    return (
        <a href="#" className={sectionClass}>
            <img className={imageClass} src={image} alt="iPhone17png" />
            
            {logoHeader?
            <img src={logoHeader} alt="logo of product" className={logoClass}/> 
            : ""}

            <h1 className="font-semibold">{mainHeader}</h1>

            <h2 className={subHeaderClass}>{subHeader}</h2>

            <div className="p-3">
            <button className="text-white bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out no-underline pt-2 pb-2 pr-5 pl-5 m-2 rounded-3xl">{buttonText}</button>
            {additionalButton?
                <button className=" text-blue-600 bg-gray-100 border-1 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out no-underline pt-2 pb-2 pr-5 pl-5 m-2 rounded-3xl">{additionalButton}</button>
            :""}
            </div>

        </a>
    )
}