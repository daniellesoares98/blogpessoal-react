import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer () {
    let data = new Date().getFullYear()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    let component: ReactNode

    if (token !== ''){

        component = (

            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Blog Pessoal Danielle Soares | Copyright: {data}
                        </p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2">
                        <LinkedinLogoIcon size={48} weight="bold" />
                        <InstagramLogoIcon size={48} weight="bold" />
                        <FacebookLogoIcon size={48} weight="bold" /> 
                    </div>
                </div>
            </div>

        )
    }

    return (

        <>
            { component }
        </>
    )
}

export default Footer