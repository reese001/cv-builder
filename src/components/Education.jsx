export default function Education({ major, school, schoolYear }) {
    const hasData = major || school || schoolYear;

    return (
        <div className="resume-section">
            <h2>Education</h2>
            {hasData ? (
                <div className="resume-section-content">
                    <div className="resume-item">
                        <div className="resume-item-header">
                            <div>
                                <div className="resume-item-title">{school || "School Name"}</div>
                                <div className="resume-item-subtitle">{major || "Major"}</div>
                            </div>
                            <div className="resume-item-year">{schoolYear || "Year"}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-state">
                    Fill in the education section to see it here
                </div>
            )}
        </div>
    )
}