import CardOngOrSchool from "../../components/cardOngOrSchool"
import { useSearchParams } from "react-router-dom"
import { CardsContainer } from "./style";
import Header from "../../components/header";

const OngPage = () => {
    const [searchParams] = useSearchParams();
    const user = [
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Rua Miguel Calmon, 3239',
            state: 'Porto Velho/RO',
            causes: ['ambiental', 'social', 'energia'],
            imgUrl: '',
            cellphone: '+55 (00) 0 0000-0000',
            email: 'luzdosaber@email.com',
            socialMedia: ['https://www.facebook.com/'],
            type: 'ong',
            profession: 'Coordenadora de sestentabilidade',
            professional: 'Txai Suruí'

        },
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Rua Miguel Calmon, 3239',
            state: 'Porto Velho/RO',
            causes: ['ambiental', 'social', 'energia'],
            imgUrl: '',
            cellphone: '+55 (00) 0 0000-0000',
            email: 'luzdosaber@email.com',
            socialMedia: ['https://www.facebook.com/'],
            type: 'ong',
            profession: 'Coordenadora de sestentabilidade',
            professional: 'Txai Suruí'

        },
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Rua Miguel Calmon, 3239',
            state: 'Porto Velho/RO',
            causes: ['ambiental', 'social', 'energia'],
            imgUrl: '',
            cellphone: '+55 (00) 0 0000-0000',
            email: 'luzdosaber@email.com',
            socialMedia: ['https://www.facebook.com/'],
            type: 'ong',
            profession: 'Coordenadora de sestentabilidade',
            professional: 'Txai Suruí'

        },
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Rua Miguel Calmon, 3239',
            state: 'Porto Velho/RO',
            causes: ['ambiental', 'social', 'energia'],
            imgUrl: '',
            cellphone: '+55 (00) 0 0000-0000',
            email: 'luzdosaber@email.com',
            socialMedia: ['https://www.facebook.com/'],
            type: 'escola',
            profession: 'Coordenadora de sestentabilidade',
            professional: 'Txai Suruí'

        },
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Rua Miguel Calmon, 3239',
            state: 'Porto Velho/RO',
            causes: ['ambiental', 'social', 'energia'],
            imgUrl: '',
            cellphone: '+55 (00) 0 0000-0000',
            email: 'luzdosaber@email.com',
            socialMedia: ['https://www.facebook.com/'],
            type: 'escola',
            profession: 'Coordenadora de sestentabilidade',
            professional: 'Txai Suruí'

        },
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Rua Miguel Calmon, 3239',
            state: 'Porto Velho/RO',
            causes: ['ambiental', 'social', 'energia'],
            imgUrl: '',
            cellphone: '+55 (00) 0 0000-0000',
            email: 'luzdosaber@email.com',
            socialMedia: ['https://www.facebook.com/'],
            type: 'escola',
            profession: 'Coordenadora de sestentabilidade',
            professional: 'Txai Suruí'

        }
    ]

    return (
        <>
            <Header type="ong" />

            Escolas
            <CardsContainer>

                {
                    user.map((item) => {
                        return <CardOngOrSchool user={item} key={item} type="ong" />
                    })
                }
            </CardsContainer>
        </>
    )
}

    export default OngPage
