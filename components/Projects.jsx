import Image from "next/image"
export default function Projects() {
    return (
        <section className="project">
            <div className="flex">
                <h1 className="afBg">Projects</h1>
                <h1>.</h1>
            </div>
            <div className="prjtin">

                <div className="prjt">
                    <div className="thumb">
                        <a target="_blank" href="https://e-signature-chi.vercel.app/" className="btn"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path
                                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg> Visit</a>
                        <img className="thumbnail" src="https://i.postimg.cc/Njsz7kGF/esign.png" alt="project"></img>
                            <div className="lng">
                                <span>NextJS</span>
                                <span>TailwindCSS</span>
                            </div>
                    </div>
                    <h1>E-Signature</h1>
                    <p>A e-signature app coded using nextjs and tailwindcss.</p>
                </div>

                <div className="prjt">
                    <div className="thumb">
                        <a target="_blank" href="https://github.com/r2hu1/cart.JS" className="btn"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path
                                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg> Visit</a>
                        <img className="thumbnail" src="https://i.postimg.cc/CxLRsLvG/Screenshot-2023-11-20-214327.png" alt="project"></img>
                            <div className="lng">
                                <span>JavaScript</span>
                            </div>
                    </div>
                    <h1>Cart.JS</h1>
                    <p>CartJS is a JavaScript module for managing e-commerce shopping carts.</p>
                </div>

            </div>

        </section>
    )
}
