import React from 'react';
import './styles/BadgeForm.css'
import { Button } from 'react-bootstrap'

class BadgeForm extends React.Component {
    state = {
        isFormValid: true
    };


    //El estate debe inicializarse como un objeto vacío, o buscará los valores de los input
    //los cuales serán null porque aún no existen
    /* state = {} */
    /*  state = {
         firstName: '',
         lastName: '',
         email: '',
         jobTitle: '',
         gitHub: ''
     }; */
    /* también se puede inicializar el valor directamente un state
    en este caso el input firstName inicia con el valor Andrea */
    /*  firstName: 'Andrea' */

    /* handleChange = (e) => {
        De esta manera podemos ver en consola el valor de e
        name imprime literalmente el name que se asigna en el input
        en este caso: firstName
        console.log({ value: e.target.value, name: e.target.name }) 
        this.setState({
            El e.target.name es para recibir cada name de cada input
            y el value para recibir su valor
            [e.target.name]: e.target.value
        })
    } */

    handleClick = (e) => {
        //De esta manera podemos ver en consola el valor de e
        //name imprime literalmente el name que se asigna en el input
        //en este caso: firstName
        console.log('button was clicked')
    }

    isNotEmpty = () => {


        if ((this.props.formValues.firstName === '' || this.props.formValues.lastName === '' || this.props.formValues.jobTitle === ''
            || this.props.formValues.gitHub === '' || this.props.formValues.email === '')) {
            this.setState({
                isFormValid: true
            })
        } else {
            this.setState({
                isFormValid: false

            })
        }
    }


    render() {
        console.log(this.props.verifyInputs.isFormValid)
        return <div className="card">
            <h1 className="form_title">New Attendant</h1>
            {/* esto evitará que se envié el formulario, el on submit con el e.preventDefault */}
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="Ingrese su nombre"
                        value={this.props.formValues.firstName}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Ingrese su apellido"
                        value={this.props.formValues.lastName}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Ingrese su email"
                        value={this.props.formValues.email}>
                    </input>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        placeholder="Ingrese su profesión"
                        value={this.props.formValues.jobTitle}>
                    </input>
                </div>
                <div className="form-group">
                    <label>GitHub</label>
                    <input onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="gitHub"
                        placeholder="Ingrese su usuario de gitHub"
                        required
                        value={this.props.formValues.gitHub}>
                    </input>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button className="form_button" disabled={this.props.verifyInputs.isFormValid} onClick={this.handleClick} variant="outline-info">Submit</Button>
                </div>
            </form>
        </div>
    }
}

export default BadgeForm;