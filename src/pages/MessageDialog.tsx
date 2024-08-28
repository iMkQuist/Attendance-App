import React from 'react';
import styles from '../styles/LecturerPage.module.css';


interface MessageDialogProps {
    isOpen: boolean;
    onClose: () => void;
    mark: string;
    option: string;
    onMySheetClick: () => void;
}

const MessageDialog: React.FC<MessageDialogProps> = ({ isOpen, onClose, mark, option, onMySheetClick }) => {
    if (!isOpen) return null;
    const getMessage = () => {
        if (option === 'Everyone') {
            return `You have awarded ${mark} free marks to everyone today. Click 'My Sheet' to see the list or 'Return to Main Page'.`;
        } else if (option === 'Presents') {
            return `You have awarded ${mark} free marks to those present today. Click 'My Sheet' to see the list or 'Return to Main Page'.`;
        }
        return '';
    };
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <p className={styles.message}>
                    {getMessage()}
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.noButton} onClick={() => {
                        onMySheetClick();
                        onClose();
                    }}
                    >My Sheet</button>
                    <button className={styles.yesButton}>Main Page</button>
                </div>
            </div>
        </div>
    );
};

export default MessageDialog;
