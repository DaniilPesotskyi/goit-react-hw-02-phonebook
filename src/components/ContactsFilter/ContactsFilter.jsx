import React, { Component } from "react";
import css from './ContactsFilter.module.css'

class ContactsFilter extends Component {
    state = {
        query: '',
    }

    onChangeQuery = e => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
        this.props.onFilter(this.state.filter)
    }

    render() {
        return (
            <div className={css.inputField}>
                <input 
                    autoComplete="off"
                    className={css.input}
                    type="text" 
                    placeholder="."
                    name="query" 
                    id="query" 
                    value={this.state.query} 
                    onChange={e => this.onChangeQuery(e)}
                />
                <label className={css.label} htmlFor="query">Search</label>
            </div>
        )
    }
}

export default ContactsFilter