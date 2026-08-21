import { useNavigate } from "react-router-dom";
import CardTema from "../cardtema/CardTema"
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Services"

function ListaTemas() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    async function buscarTemas() {
        try {

            setIsLoading(true)

            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })

        } catch (error: any) {

            if (error.toString().includes('401')) {
                handleLogout()
            }

        } finally {

            setIsLoading(false)

        }
    }

    return (
        <>
            <div className="flex justify-center w-full my-4">

                <div className="container flex flex-col">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {temas.map((tema) => (
                            <CardTema
                                key={tema.id}
                                tema={tema}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default ListaTemas;