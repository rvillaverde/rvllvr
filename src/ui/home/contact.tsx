import classNames from 'classnames';
import React from 'react';
import contactApi from '../../api/contact';
import { Contact as ContactType } from '../../types/contact';
import Button from '../button';
import createInput from '../from/input';
import Textarea from '../from/textarea';

import styles from './home.module.sass';

interface PropTypes {}

interface StateTypes {
  contact?: Partial<ContactType>;
  error: boolean;
  loading: boolean;
  success: boolean;
}

const EMAIL = 'romina.villaverde@gmail.com';
const TextInput = createInput<'text'>();

class Contact extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = { success: false, error: false, loading: false };
  }

  handleChange = (key: keyof ContactType) => (value: string) => {
    this.setState((state: StateTypes) => ({
      ...state,
      contact: {
        ...state.contact,
        [key]: value,
      },
      error: false,
      success: false,
    }));
  };

  handleSubmit = async () => {
    const contact = this.validateContact();

    if (!contact) {
      this.setState({ error: true });
      return;
    }

    this.setState({ loading: true });
    const { status } = await contactApi.send(contact);

    if (status === 200) {
      this.setState({
        contact: undefined,
        error: false,
        loading: false,
        success: true,
      });
    } else {
      this.setState({ success: false, error: true, loading: false });
    }
  };

  validateContact = (): ContactType | undefined => {
    const { contact } = this.state;

    if (!contact) {
      return;
    }

    if (!contact.email || contact.email.length < 1) {
      return;
    }
    if (!contact.name || contact.name.length < 1) {
      return;
    }
    if (!contact.message || contact.message.length < 1) {
      return;
    }

    return contact as ContactType;
  };

  render() {
    const { contact, error, loading, success } = this.state;

    return (
      <section
        className={classNames(styles.section, styles.contact)}
        id="contact"
      >
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.inner}>
          <div className={styles.subsection}>
            <h1 className="typography-headline1">
              Let&apos;s
              <br /> work
              <br />
              together!
            </h1>
          </div>
          <div className={styles.subsection}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <TextInput
                  label="Your name"
                  name="name"
                  id="name-input"
                  onChange={this.handleChange('name')}
                  type="text"
                  value={contact?.name || ''}
                  required
                />
              </div>
              <div className="form-row">
                <TextInput
                  label="Your email"
                  name="email"
                  id="email-input"
                  onChange={this.handleChange('email')}
                  type="text"
                  value={contact?.email || ''}
                  required
                />
              </div>
              <div className="form-row">
                <Textarea
                  label="Message"
                  name="message"
                  onChange={this.handleChange('message')}
                  id="message-input"
                  required
                  value={contact?.message || ''}
                />
              </div>
              {success && (
                <p className={classNames([styles.alert, 'typography-body'])}>
                  Thank you for contacting me, your message was sent
                  successfully. I&apos;ll get in touch soon with you soon.
                </p>
              )}
              {error && (
                <p className={classNames([styles.alert, 'typography-body'])}>
                  An error ocurred sending your message. Please try again or
                  contact me directly at my email:
                  <a href={`mailto:${EMAIL}`}> {EMAIL}</a>.
                </p>
              )}
              <Button
                disabled={loading || !contact}
                onClick={this.handleSubmit}
                type="primary"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
