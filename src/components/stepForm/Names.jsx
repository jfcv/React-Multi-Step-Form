import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Names({ formData, setForm, navigation }) { //destructuring

    let { firstName, lastName, nickName } = formData; //destructuring

    return(
        <Container maxWidth='xs'>

            <h3>Names</h3>

            <TextField 
                label='First Name'
                name='firstName'
                value={firstName}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />

            <TextField 
                label='Last Name'
                name='lastName'
                value={lastName}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />

            <TextField 
                label='Nick Name'
                name='nickName'
                value={nickName}
                onChange={setForm}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                fullWidth
            />

            <Button
                variant='contained'
                fullWidth
                style={{marginTop: '1rem'}}
                color='primary'
                onClick={() => {navigation.next()}}
            >
                Next
            </Button>

        </Container>
    )
}

export default Names