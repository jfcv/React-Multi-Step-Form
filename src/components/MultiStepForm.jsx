import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'

import Names from './stepForm/Names'
import Address from './stepForm/Address'
import Contact from './stepForm/Contact'
import Review from './stepForm/Review'
import Submit from './stepForm/Submit'

const defaultData = {
    firstName: '',
    lastName: '',
    nickName: ''
};

const steps = [
    { id: 'names'},
    { id: 'address'},
    { id: 'contact'},
    { id: 'review'},
    { id: 'submit'},
];

function MultiStepForm() {
    
    const [formData, setForm] = useForm(defaultData);

    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    })

    switch (step.id) {
        case 'names':
            return <Names />;
        case 'address':
            return <Address />;
        case 'contact':
            return <Contact />;
        case 'review':
            return <Review />;
        case 'submit':
            return <Submit />;
    }

    return(
        <div>
            <h1>Multi Step Form</h1>
        </div>
    )
}

export default MultiStepForm