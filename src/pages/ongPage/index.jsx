import CardOngOrSchool from "../../components/cardOngOrSchool"
import { useSearchParams } from "react-router-dom"

const OngPage = ()=>{
    const [searchParams] = useSearchParams();
    const user = [
        {
            name: 'Luz do Saber',
            description: 'A Escola Luz E Saber oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Banda Larga, Parque Infantil, Quadra Esportiva Coberta, Sala de Leitura, Pátio Coberto, Sala do Professor e Internet.',
            address: 'Recife - Pernambuco',
            state: 'Recife - Pernambuco',
            causes: ['ambiental', 'social','energia'],
            imgUrl: '',
            cellphone:'(00) 0 0000-0000',
            email:'luzdosaber@email.com',
            socialMedia:['https://www.facebook.com/'],
            type:'escola'
        }
    ]

    return(
    <div>
    OngPage
        {
            user.map((item)=>{
               return <CardOngOrSchool user={item} key={item}/>
            })
        }

    </div>
)
    }

export default OngPage