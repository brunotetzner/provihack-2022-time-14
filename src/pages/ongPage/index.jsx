import CardOngOrSchool from "../../components/cardOngOrSchool"
import { useSearchParams } from "react-router-dom"
import { CardsContainer, OngPageContainer } from "./style";
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
        <OngPageContainer>
            <Header type="ong" />

            <div>
            <h4>ONG's</h4>
            </div>
            <CardsContainer type="ong">

                {
                    user.map((item) => {
                        return <CardOngOrSchool user={item} key={item} type="ong" />
                    })
                }
            </CardsContainer>
        </OngPageContainer>
    )
}

    export default OngPage
