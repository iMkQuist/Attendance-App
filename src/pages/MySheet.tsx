import React from "react";

interface SheetMenuProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
}

const SheetMenu: React.FC<SheetMenuProps> = ({ isOpen, onClose, courseTitle }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <h2 style={styles.courseTitle}>{courseTitle}</h2>
                <p style={styles.sheetMessage}>Course attendance details here...</p>
                <div style={styles.buttonContainer}>
                    <button style={styles.downloadButton}>Download Sheet</button>
                    <button style={styles.editButton}>Edit Attendance</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    dialog: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '500px',
        boxSizing: 'border-box' as const,
    },
    courseTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center' as const,
        borderRadius: '5px',
    },
    sheetMessage: {
        fontSize: '14px',
        textAlign: 'center' as const,
        margin: '20px 0',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center', /* Center the buttons horizontally */
        gap: '10px', /* Add space between buttons */
    },
    downloadButton: {
        backgroundColor: '#D9D9D9',
        color: '#000000',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: 'bold',
        margin: '0',
        textAlign: 'center' as const,
    },
    editButton: {
        backgroundColor: '#2ED020',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: 'bold',
        margin: '0',
        textAlign: 'center' as const,
    }
};

export default SheetMenu;
