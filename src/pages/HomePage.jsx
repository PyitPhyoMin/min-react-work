import React, {useContext} from 'react';
import styles from './HomePage.module.css';
import Toggle from '../components/Toggle';
import ModeContext from '../context/ModeContext';

function HomePage({list}) {
    const ctx = useContext(ModeContext);
    return(
        <div className={`${ctx.isDark ? styles.dark : styles.light}`}>
            <div className={styles.appBody}>
            <h1>Pyit Phyo Min - React Work</h1>
            <p className={styles.bodyTag}>Front-End with React JS</p>
            <Toggle />
            {list.map((workItem) => (
                <div key={workItem.id} className={styles.workItem}>
                    <h2>{workItem.urlDescription}</h2>
                    <p className={styles.projDesctiption}>{workItem.projectDescription1}</p>
                    <p className={styles.projDesctiption}>{workItem.projectDescription2}</p>
                    {workItem.image1 !== "" && workItem.image2 !== "" ? (
                    <p className={styles.projDesctiption}><a href={workItem.image1} target="_blank" rel="noopener noreferrer">HomePage</a> 
                     ||<a href={workItem.image2} target="_blank" rel="noopener noreferrer">ProductPage</a></p>
                    ) : (<span></span>)}
                    <p className={styles.itemLink}>Link: <a href={workItem.url} target="_blank" rel="noopener noreferrer">{workItem.url}</a></p>
                    {workItem.sourceCodeLink !=="" ? 
                    (<p className={styles.itemLink}>Source Code: <a href={workItem.sourceCodeLink} target="_blank" rel="noopener noreferrer">GitHub Link</a></p>) : 
                    (<span></span>)}
                </div>
                ))}
            </div>
        </div>
    );
}
export default HomePage;