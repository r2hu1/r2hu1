import Card from '@/components/Card'

export default function Projects() {
    return (
        <section className="project">
            <div className="flex"><h1 className="afBg">Projects</h1><h1>.</h1></div><div className="prjtin">

                <Card
                    title={"E-Signature"}
                    description={"A e-signature app coded using nextjs and tailwindcss."}
                    previewUrl={"https://e-signature-chi.vercel.app/"}
                    thumbnail={"https://i.postimg.cc/Njsz7kGF/esign.png"}
                    lang1={"NextJS"}
                    lang2={"TailwindCSS"}
                />

                <Card
                    title={"Cart.JS"}
                    description={"CartJS is a JavaScript module for managing e-commerce shopping carts."}
                    previewUrl={"https://github.com/r2hu1/cart.JS"}
                    thumbnail={"https://i.postimg.cc/CxLRsLvG/Screenshot-2023-11-20-214327.png"}
                    lang1={"JavaScript"}
                    lang2={"Git"}
                />
                
                <Card
                    title={"DrawIT"}
                    description={"A online web based drawing/presentation app made with nextjs."}
                    previewUrl={"https://drawit-r.vercel.app/"}
                    thumbnail={"https://i.postimg.cc/zv2FtWGQ/Screenshot-2023-11-27-182731.png"}
                    lang1={"NextJS"}
                    lang2={"TailwindCSS"}
                />

            </div>
        </section>
    )
}
