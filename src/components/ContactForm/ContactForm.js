import { Component } from "react";
import PropTypes from "prop-types";
import styles from './contactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState ({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });

    };
    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.label}>Name
                    <input
                        className={styles.label}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Krylova Kateryna" />
                </label>
                <label className={styles.label}>Number
                    <input
                        className={styles.label}
                        type="text"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        placeholder="099-99-99" />
                </label>
                <button className={styles.btn} type="submit">
                        Add contact
                    </button>
            </form>
        )
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;