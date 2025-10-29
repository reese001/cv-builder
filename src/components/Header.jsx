export default function Header({ name, email, phone, github, linkedin }) {
    return (
        <header>
            <div className="name-container">
                <h1 className="name">{name || "Your Name"}</h1>
            </div>
            <div className="contact">
                {email && <p>✉️ {email}</p>}
                {phone && <p>📞 {phone}</p>}
                {github && <p>💻 {github}</p>}
                {linkedin && <p>🔗 {linkedin}</p>}
                {!email && !phone && !github && !linkedin && (
                    <p className="empty-state" style={{border: 'none', padding: '0.5rem'}}>
                        Add contact information
                    </p>
                )}
            </div>
        </header>
    )
}