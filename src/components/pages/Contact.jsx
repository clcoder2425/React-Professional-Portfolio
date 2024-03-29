//Importing React
import React from 'react';
//Importing MDBReactUI
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea} from 'mdb-react-ui-kit';
import './style/Contact.css'

//Implementing the Contact component
export default function Contact() {
  return (
    <div>
      
      <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact me</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn id = 'contactButton' color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
  );
}
