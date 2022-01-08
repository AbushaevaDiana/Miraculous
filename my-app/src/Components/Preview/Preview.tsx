import '../../App.css';
import styles from './Preview.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

export function Preview() {
    return (
        <>
            <div className={styles.previewContainer}>
                <div className={styles.previewContent}></div>
            </div>
        </>
    )
}