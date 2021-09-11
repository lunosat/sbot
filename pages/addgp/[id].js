import data from '../../database.json'

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function getServerSideProps(context, conn) {
    const id = context.query.id
    //const response = await conn.acceptInvite (id)
    Join()

    return {
        props: {
            grupo: id
        }
    }
}
function Join(conn, props){

    conn.acceptInvite (props.grupo)
}
function Perfil(props, conn){

    conn.acceptInvite (props.grupo)

    return <div>
        <h1>Nome: {props.grupo}</h1>
        </div>

} 

//module.exports = { Join }
export default Perfil