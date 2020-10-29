import React, { useState } from 'react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const Contact = props => {
  const handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'cinque' }),
    })
      .then(() =>
        alert(
          'Successfully sent a message!!  The team will get back to you in a timely manner! Thank you'
        )
      )
      .catch(error => alert(error))
    document.getElementById('contact-message-form').reset()
    event.preventDefault()
  }

  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form
            id="contact-message-form"
            name="cinque"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="mailto:cinquewebdev@gmail.com">cinquewebdev@gmail.com</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                Dallas, Texas
                <br />
                United States of America
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Contact
