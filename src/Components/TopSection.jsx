export default function TopSection({ mainHeader, logoHeader, logoClass, subHeader, subHeaderClass, buttonText, additionalButton, image, imageClass, sectionClass, warningText}) {
    return (
        <a href="#" className={sectionClass}>

            {warningText && <p className="font-bold text-red-500 text-2xl p-5 mb-2">{warningText}</p>}

            {logoHeader?
            <img src={logoHeader} alt="logo of product" className={logoClass}/> 
            : ""}

            <p className="font-semibold text-xl md:text-2xl lg:text-4xl xl:text-5xl">{mainHeader}</p>
            <p className={subHeaderClass}>{subHeader}</p>

            <div className="p-3">
            <button className="text-white bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out no-underline pt-2 pb-2 pr-5 pl-5 m-2 rounded-3xl">{buttonText}</button>
            {additionalButton?
                <button className=" text-blue-600 bg-gray-100 border-1 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out no-underline pt-2 pb-2 pr-5 pl-5 m-2 rounded-3xl">{additionalButton}</button>
            :""}
            </div>

            <img className={imageClass} src={image} alt="iPhone17png" />
        </a>
    )
}