import './form.css'
import CampoTexto from '../CampoTexto'
import Dropdown from '../Dropdown'

const Form = ()  => {

    const classes = [
        'top',
        'jungle',
        'mid',
        'support',
        'ad carry'
    ]


    return(
        <section className="form-box">
            <form>

            <h2>Preencha os dados para criar o card de colaborador</h2>

            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>

            <Dropdown itens={classes}/>

            </form>
        </section>
    )
}

export default Form