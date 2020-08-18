import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Address({ formData, setForm, navigation }) {

    let { address, city, state, zip } = formData;

    return(
        <Container maxWidth='xs'>

            <h3>Address</h3>

            <TextField 
                label='Address'
                name='address'
                value={address}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />

            <TextField 
                label='City'
                name='city'
                value={city}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />

            <TextField 
                label='State'
                name='state'
                value={state}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />    

            <TextField 
                label='Zip'
                name='zip'
                value={zip}
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

export default Address