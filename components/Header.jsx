import Link from "next/link";

export default function Header({btnText, pageUrl}) {
    return (
        <header className="hdr">
            <div className="logo">
                <h1>R<span>.</span></h1>
            </div>
            <div className="act">
            <Link href={pageUrl}><button className="btn">{btnText}</button></Link>
            </div>
        </header>
    )
}  