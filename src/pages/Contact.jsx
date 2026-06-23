import { useState } from 'react'

const styles = {
  page: { padding: '20px', backgroundColor: '#111', color: 'white', minHeight: '100vh' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', marginTop: '20px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: '#222', color: 'white' },
  button: { padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }
}

function Contact() {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setMsg('')
  }

  return (
    <div style={styles.page}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea
          placeholder="Your Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          style={styles.input}
          rows="4"
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  )
}

export default Contact