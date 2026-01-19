export default function FooterDesc({ title, desc }) {
    return (
        <>
        {title? 
        <p className="font-semibold text-black text-sm">{title}</p>:null}

        {desc? 
        <a href="#" className="text-sm hover:underline">{desc}</a>:null}
        </>
    )
}