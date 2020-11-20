import React, { useState } from 'react'

import { Card } from 'antd'
import RemoveContact from '../buttons/RemoveContact'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Contact = props => {
  const [id] = useState(props.id)
  const [firstName] = useState(props.firstName)
  const [lastName] = useState(props.lastName)
  const styles = getStyles()

  const fullName = () => {
    return `${props.firstName} ${props.lastName}`
  }

  return (
    <div>
      <Card
        id={props.id}
        style={styles.card}
        actions={[
          <RemoveContact id={id} firstName={firstName} lastName={lastName} />
        ]}
      >
        {fullName()}
      </Card>
    </div>
  )
}

export default Contact
