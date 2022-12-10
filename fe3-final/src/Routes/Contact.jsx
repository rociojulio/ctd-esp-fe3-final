
import React, {useContext} from 'react'


import Form from '../Components/Form'
import Theme from '../Components/utils/Theme';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme} = useContext(Theme);
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}
    >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact