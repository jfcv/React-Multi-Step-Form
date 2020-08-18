import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Contact({ formData, setForm, navigation }) {

    let { phone, email } = formData; //destructuring

    return(
        <Container maxWidth='xs'>

            <h3>Contact</h3>

            <TextField 
                label='Phone'
                name='phone'
                value={phone}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />

            <TextField 
                label='Email'
                name='email'
                value={email}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />            

            <div>
                <Button
                    variant='contained'
                    fullWidth
                    color='primary'
                    onClick={() => {navigation.next()}}
                    style={{marginTop: '1rem'}}
                >
                    Next
                </Button>

                <Button
                    variant='contained'
                    fullWidth
                    onClick={() => {navigation.previous()}}
                    style={{marginTop: '1rem'}}
                >
                    Back
                </Button>
            </div>

        </Container>
    )
}

export default Contact