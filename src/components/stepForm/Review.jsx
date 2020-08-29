import React from 'react'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

import Button from '@material-ui/core/Button'

export const RenderAccordion = ({ summary, details }) => (
    <Accordion>

        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
            {summary}
        </AccordionSummary>
        
        <AccordionDetails>
            <div>

                { 
                details.map((data, index) => {
                    return <ListItemText key={index}>{ `${Object.keys(data)[0]}: ${data[Object.keys(data)[0]]}` }</ListItemText>
                }) 
                }

                <IconButton
                    color= "primary"
                    component="span"
                >
                    <EditIcon />
                </IconButton>

            </div>
        </AccordionDetails>
    </Accordion>
)

function Review({formData, navigation}) {

    let { firstName, lastName, nickName, address, city, state, zip, phone, email } = formData;

    return(
        <Container maxWidth='sm'>

            <h3>Review</h3>

            <RenderAccordion 
                summary="Names"
                details={[
                    {'First Name': firstName},
                    {'Last Name': lastName},
                    {'Nick Name': nickName},
                ]}
            />

            <RenderAccordion 
                summary="Address"
                details={[
                    {'Address': address},
                    {'City': city},
                    {'State': state},
                    {'Zip': zip},
                ]}
            />

            <RenderAccordion 
                summary="Contact"
                details={[
                    {'Phone': phone},
                    {'Email': email}
                ]}
            />

            <Button
                variant='contained'
                fullWidth
                color='primary'
                onClick={() => {navigation.next()}}
                style={{marginTop: '1rem'}}
            >
                Submit
            </Button>

        </Container>
    )
}

export default Review