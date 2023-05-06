import css from './ContactsList.module.css'
import ContactsItem from '../ContactsItem/ContactsItem'
const ContactsList = ({contacts, onDelete, children, filter}) => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>My Contacts</h2>
            {children}
            <p>Filter: {filter}</p>
            <ul className={css.list}>
                {contacts.map(({id, name, number}) => {
                    return (
                        <ContactsItem key={id} id={id} name={name} number={number} onDelete={onDelete}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContactsList