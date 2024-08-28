"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [step, setStep] = useState(1);
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('');
  const [id, setId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleInstitutionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInstitution(event.target.value);
    setStep(2);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
    setErrorMessage('');
  };

  const handleIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleSubmit = () => {
    if (id.trim() === '') {
      alert('Please enter your ID');
      return;
    }
    if (!role) {
      setErrorMessage('Please choose your role');
      return;
    }
    if (role === 'student') {
      router.push(`/student?id=${id}`);
    } else if (role === 'lecturer') {
      router.push(`/lecturer?id=${id}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {step === 1 && (
          <>
            <h1 className={styles.welcome}>WELCOME</h1>
            <p className={styles.subtitle}>Let us Take Attendance</p>
            <div className={styles.selectBox}>
              <select id="institution" className={styles.select} onChange={handleInstitutionChange}>
                <option>SELECT INSTITUTION</option>
                <option value="institution1">#INSTITUTION 1</option>
                <option value="institution2">#INSTITUTION 2</option>
                <option value="institution3">#INSTITUTION 3</option>
                <option value="institution4">#INSTITUTION 4</option>
                <option value="institution5">#INSTITUTION 5</option>
              </select>
            </div>
          </>
        )}

        {step === 2 && (
          <div className={styles.miniDialog}>
            <div className={styles.dropdownLabel}>
              <select id="role" className={styles.select} onChange={handleRoleChange}>
                <option>My role as</option>
                <option value="student">Student</option>
                <option value="lecturer">Lecturer</option>
              </select>
            </div>
            <button className={styles.backButton} onClick={() => setStep(1)}>BACK</button>
            <button className={styles.submitButton} onClick={() => setStep(3)}>NEXT</button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          </div>
        )}

        {step === 3 && (
          <div className={styles.miniDialog}>
            <input
              id="idInput"
              type="text"
              className={styles.input}
              placeholder="Enter your ID"
              value={id}
              onChange={handleIDChange}
            />
            <button className={styles.backButton} onClick={() => setStep(2)}>BACK</button>
            <button className={styles.submitButton} onClick={handleSubmit}>SUBMIT</button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
