import React, { useState } from 'react';
import styles from '../styles/LecturerPage.module.css';

interface MarkEntryDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onDone: (mark: string) => void;
}

const MarkEntryDialog: React.FC<MarkEntryDialogProps> = ({ isOpen, onClose, onDone }) => {
    const [mark, setMark] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleDone = () => {
        if (mark.trim() === '') {
            setError('Please enter mark.');
        } else {
            onDone(mark);
            setMark('');
            setError('');
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <input
                    type="text"
                    value={mark}
                    onChange={(e) => setMark(e.target.value)}
                    className={styles.inputMark}
                    placeholder="Enter mark"
                />
                {error && <p style={style.errorMessage}>{error}</p>}
                <div className={styles.buttonContainer}>
                    <button className={styles.doneButton} onClick={handleDone}>DONE</button>
                </div>
            </div>
        </div>
    );
};
const style = {
    errorMessage: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center' as const,
    }
}

export default MarkEntryDialog;
