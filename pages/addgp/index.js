import React from 'react'
import ReactDOM from 'react-dom'
import data from '../../database.json'
//let { MessageType}  = require('@adiwajshing/baileys')

class SearchUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event, conn){
        document.location.href= '/addgp/' + this.state.value
        //alert('Nome: ' + data.users[this.state.value + '@s.whatsapp.net'].name)
        event.preventDefault()=== 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //conn.sendMessage(m.chat, 'teste', MessageType.text)
        
    }

    render() {
        return (<div>
            <h1>Buscar usuário</h1>
        <form onSubmit={this.handleSubmit}>
            <label>
                Link:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Buscar" />
        </form>
        </div>)
    }
}

export default SearchUser