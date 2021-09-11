import data from '../database.json'
import Link from 'next/link'

export async function getServerSideProps(context){
    let totalUsers = Object.keys(data.users).length

    return {
        props: {
            total: totalUsers
        }
    }

}
function Home(props){
    
    return <div>
        <h1>Usuários {props.total}</h1>
        <Link href='./loja'>
            Loja
        </Link><br/>
        <Link href='./info'>
            Informações
        </Link><br/>
        <Link href = './addgp'>
            Adicionar grupo
        </Link>
    </div>
}
export default Home