import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/StudentPage.module.css';

const StudentPage: React.FC = () => {
    const router = useRouter();
    const [studentID, setStudentID] = useState('');

    useEffect(() => {
        if (router.query.id) {
            setStudentID(router.query.id as string);
        }
    }, [router.query]);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>INSTITUTION'S NAME</h1>

            <div className={styles.upperSection}>
                <div className={styles.studentInfo}>
                    <label className={styles.label}>STUDENT ID</label>
                    <input type="text" readOnly className={styles.input} value={studentID} />
                </div>
                <div className={styles.picSection}>
                    <div className={styles.pic}>PIC</div>
                </div>
            </div>

            <div className={styles.middleSection}>
                <button className={styles.button}>TAKE ATTENDANCE</button>
                <button className={styles.button}>MY REMARKS</button>
                <button className={styles.button}>LOGOUT</button>
            </div>

            <div className={styles.statusSection}>
                <div className={styles.statusItem}>
                    <label className={styles.label}>PRESENT TIMES</label>
                    <input type="text" className={styles.textBox} readOnly />
                </div>
                <div className={styles.statusItem}>
                    <label className={styles.label}>ABSENT TIMES</label>
                    <input type="text" className={styles.textBox} readOnly />
                </div>
                <div className={styles.statusItem}>
                    <label className={styles.label}>COURSE TITLE</label>
                    <input type="text" className={styles.textBox} readOnly />
                </div>
            </div>

            <div className={styles.tableContainer}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableHeader}>SN.</th>
                                <th className={styles.tableHeader}>COURSES</th>
                                <th className={styles.tableHeader}>DATE OF ATTENDANCE</th>
                                <th className={styles.tableHeader}>TIME OF ATTENDANCE</th>
                                <th className={styles.tableHeader}>REMARKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 20 }, (_, index) => (
                                <tr key={index}>
                                    <td className={styles.tableCell}>{index + 1}</td>
                                    <td className={styles.tableCell}>Course {index + 1}</td>
                                    <td className={styles.tableCell}>2024-08-22</td>
                                    <td className={styles.tableCell}>10:00 AM</td>
                                    <td className={styles.tableCell}>Present</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default StudentPage;
