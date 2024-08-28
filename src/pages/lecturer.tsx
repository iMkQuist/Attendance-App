import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LecturerPage.module.css';
import MarkEntryDialog from './MarkEntryDialog';
import MessageDialog from './MessageDialog';
import SheetMenu from './MySheet';
import coursesData from './coursesData';


interface ConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <p className={styles.message}>PROCEED TO CONDUCT ATTENDANCE?</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.noButton} onClick={onClose}>NO</button>
                    <button className={styles.yesButton} onClick={onConfirm}>YES</button>
                </div>
            </div>
        </div>
    );
};


interface CourseMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectCourse: (course: string) => void;
}

const CourseMenu: React.FC<CourseMenuProps> = ({ isOpen, onClose, onSelectCourse }) => {
    if (!isOpen) return null;

    const courses = Object.keys(coursesData);

    return (
        <div className={styles.menuOverlay} onClick={onClose}>
            <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
                {courses.map((course, index) => (
                    <div key={index} className={styles.menuItem} onClick={() => onSelectCourse(course)}>
                        {course}
                    </div>
                ))}
            </div>
        </div>
    );
};

interface AwardMarksMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectOption: (option: string) => void;
}

const AwardMarksMenu: React.FC<AwardMarksMenuProps> = ({ isOpen, onClose, onSelectOption }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <p className={styles.message}>AWARD FREE MARKS TO</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.noButton} onClick={() => onSelectOption('Everyone')}>Everyone</button>
                    <button className={styles.yesButton} onClick={() => onSelectOption('Presents')}>Presents</button>
                </div>
            </div>
        </div>
    );
};

const LecturerPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isAwardMarksMenuOpen, setIsAwardMarksMenuOpen] = useState(false);
    const [isMarkEntryDialogOpen, setIsMarkEntryDialogOpen] = useState(false);
    const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
    const [isSheetMenuOpen, setIsSheetMenuOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [markOption, setMarkOption] = useState<string>("");
    const [mark, setMark] = useState<string>("");
    const [totalStudents, setTotalStudents] = useState<number>(0);

    const handleTakeAttendance = () => setIsCourseMenuOpen(true);

    const handleSelectCourse = (course: string) => {
        setSelectedCourse(course);
        setIsCourseMenuOpen(false);
        setIsConfirmationOpen(true);

        const students = coursesData[course] || [];
        setTotalStudents(students.length);
    };

    const handleConfirmAttendance = () => {
        setIsConfirmationOpen(false);
        // Additional logic for confirmed attendance
    };

    const handleAwardMarks = () => setIsAwardMarksMenuOpen(true);

    const handleSelectAwardOption = (option: string) => {
        setMarkOption(option);
        setIsAwardMarksMenuOpen(false);
        setIsMarkEntryDialogOpen(true);
    };

    const handleMarkEntryDone = (enteredMark: string) => {
        setMark(enteredMark);
        setIsMarkEntryDialogOpen(false);
        setIsMessageDialogOpen(true);
    };

    const handleMySheetClick = () => {
        setIsSheetMenuOpen(true);
    };

    const handleLogout = () => {
        router.push('/');
    };

    const students = coursesData[selectedCourse] || [];
    const noRecordMessage = selectedCourse ? "" : "No records available yet";

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>INSTITUTION'S NAME</h1>

            <div className={styles.upperSection}>
                <div className={styles.lecturerInfo}>
                    <label className={styles.label}>LECTURER ID</label>
                    <input type="text" value={id} readOnly className={styles.Lecturerinput} />
                </div>
                <div className={styles.picSection}>
                    <div className={styles.pic}>PIC</div>
                </div>
            </div>

            <div className={styles.middleSection}>
                <button className={styles.button} onClick={handleTakeAttendance}>TAKE ATTENDANCE</button>
                <button className={styles.button} onClick={handleAwardMarks}>REMARKS</button>
                <button className={styles.button} onClick={handleMySheetClick}>MY SHEET</button>
                <button className={styles.button} onClick={handleLogout}>LOGOUT</button>
            </div>

            <div className={styles.statusSection}>
                <div className={styles.statusItem}>
                    <label className={styles.label}>TOTAL PRESENTS</label>
                    <input type="number" className={styles.textBox} readOnly />
                </div>
                <div className={styles.statusItem}>
                    <label className={styles.label}>TOTAL ABSENTS</label>
                    <input type="number" className={styles.textBox} readOnly />
                </div>
                <div className={styles.statusItem}>
                    <label className={styles.label}>TOTAL STUDENTS</label>
                    <input type="number" className={styles.textBox} value={totalStudents} readOnly />
                </div>
                <div className={styles.statusItem}>
                    <label className={styles.label}>COURSE TITLE</label>
                    <input type="text" value={selectedCourse} className={styles.textBox} readOnly />
                </div>
            </div>

            <div className={styles.tableContainer}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableHeader}>ID</th>
                                <th className={styles.tableHeader}>Name</th>
                                <th className={styles.tableHeader}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length > 0 ? (
                                students.map(student => (
                                    <tr key={student.id}>
                                        <td className={styles.tableCell}>{student.id}</td>
                                        <td className={styles.tableCell}>{student.name}</td>
                                        <td className={styles.tableCell}>
                                            <input type="checkbox" className={styles.checkbox} readOnly /> Absent
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className={styles.tableCell}>{noRecordMessage}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <button className={styles.bottomButton}>MARKS HISTORY</button>
                <div>
                    <button className={styles.bottomButton}>CLOSE ATTENDANCE</button>
                    <button className={styles.bottomButton}>MULTIPLE ATTENDEES</button>
                </div>
            </div>

            <ConfirmationDialog
                isOpen={isConfirmationOpen}
                onClose={() => setIsConfirmationOpen(false)}
                onConfirm={handleConfirmAttendance}
            />

            <CourseMenu
                isOpen={isCourseMenuOpen}
                onClose={() => setIsCourseMenuOpen(false)}
                onSelectCourse={handleSelectCourse}
            />

            <AwardMarksMenu
                isOpen={isAwardMarksMenuOpen}
                onClose={() => setIsAwardMarksMenuOpen(false)}
                onSelectOption={handleSelectAwardOption}
            />


            <MarkEntryDialog
                isOpen={isMarkEntryDialogOpen}
                onClose={() => setIsMarkEntryDialogOpen(false)}
                onDone={handleMarkEntryDone}
            />

            <MessageDialog
                isOpen={isMessageDialogOpen}
                onClose={() => setIsMessageDialogOpen(false)}
                mark={mark}
                option={markOption}
                onMySheetClick={handleMySheetClick}
            />

            <SheetMenu
                isOpen={isSheetMenuOpen}
                onClose={() => setIsSheetMenuOpen(false)}
                courseTitle={selectedCourse}
            />
        </div>
    );
};

export default LecturerPage;
