import React from 'react'
import BackEllipse from '../../utils/BackEllipse/BackEllipse'
import Form from '../../utils/Form/Form'
import styles from './contacts.module.scss'

const Contacts = () => {
  return (
    <div className={styles.contactsWrapper + ' ' + styles.section}>
      <BackEllipse
        top={'-35%'}
        bottom={''}
        right={'-18%'}
        left={''}
        />
      <h2 className={styles.mainTitles + ' ' + styles.contactsTitle}>
        Contacts
      </h2>
      <h3 className={styles.contactsSubtitle}>Do you have any kind of help please contact with us.</h3>
      <Form />
    </div>
  )
}

export default Contacts