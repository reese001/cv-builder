export default function Professional({ company, position, jobYear }) {
    const hasData = company || position || jobYear;

    return (
        <div className="resume-section">
            <h2>Professional Experience</h2>
            {hasData ? (
                <div className="resume-section-content">
                    <div className="resume-item">
                        <div className="resume-item-header">
                            <div>
                                <div className="resume-item-title">{position || "Position"}</div>
                                <div className="resume-item-subtitle">{company || "Company"}</div>
                            </div>
                            <div className="resume-item-year">{jobYear || "Year"}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-state">
                    Fill in the professional experience section to see it here
                </div>
            )}
        </div>
    )
}