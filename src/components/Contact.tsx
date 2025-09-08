import styles from '../css/Contact.module.css';
import { useState } from 'react';
export default function Contact() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789-@.";
    const obfuscatedPhoneNumber = "58w5bm..s7z5s9f2ssdm7pgj039ka8-b1@i1rj2gbzq03s1aohifykokx@on2q9l52bmvtk6apf.ndcy8ybnl3urj-a3ey-2@h7j0hucy-omts3kzr0taw0ylzykei9gv..zex7n1nez18@zmuvi3f2-u0.ttwbmu-6wfafxp9vjvmg0f7.9v@8hhmurpoqi4xv8@.i.eyz66jkiej-bkzbrf6m6w-kvusxj1.-hu21rwk@gt78xple4aga.0cn.2sz4zw93qcb3lyd170dksyg7e62ojcdba24oc@5u729a7lgm26.k02@z-9zhsyx3rgvtj35t2ipzq33u.4cmxftdsrphoncq3ly1dn1sreri0sm9oaxc.rp4fyn7dtrxx6";
    const obfuscatedEmail = "hgl5tf4sokr50ylm4i1kmjondckt-ycf8v6asdnsuos2ydholl2i9@y5r1.b@f7-hie4i2o4t@eo7p-ild0cptd5lpoc4c3tb835llhoteoqu72myn4kua3rdq68nyo-.y--i84cc@y898@8iodvtlkqrf95lt.oc8v-i1wku8m37quggoschzmk28@8mr4nbwgai7y9.3pozlvno0h0d52am.-nqc74-xt8lrj61ka25u4mbvpe0@jocwpvhvw-cuvo65fz.qd12.say3mb3pdiew-b@.t";

    const [isRevealed, setIsRevealed] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [email, setEmail] = useState('exampleEmail@example.com');

    function revealContactInfo() {
        setPhoneNumber(decryptObfuscatedString(obfuscatedPhoneNumber));
        setEmail(decryptObfuscatedString(obfuscatedEmail));
        setIsRevealed(true);
    }

    /*
    function generateObfuscatedString(inputString: string) {
        const splitString = inputString.split('');
        let outputString = '';

        for (const character of splitString) {
            const alphabetIndex = alphabet.indexOf(character);
            outputString += character;

            for (let i = 0; i < alphabetIndex; i++) {
                outputString += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
        
        console.log(`${outputString}`);
        console.log(decryptObfuscatedString(outputString));
    }
    */

    function decryptObfuscatedString(inputString: string) {
        let currentIndex = 0;
        let outputString = '';

        while (currentIndex < inputString.length) {
            const currentValue = inputString[currentIndex];
            outputString = outputString + currentValue;
            
            currentIndex += alphabet.indexOf(currentValue) + 1;
        }

        return outputString;
    }

    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.contactCard}>
                <h1>Contact Info</h1>
                <p>Phone: <span className={isRevealed ? styles.revealed : styles.hidden}>{phoneNumber}</span></p>
                <p>Email: <span className={isRevealed ? styles.revealed : styles.hidden}>{email}</span></p>
                <button onClick={revealContactInfo} className={styles.revealButton}>Reveal Contact Info</button>
            </div>
        </div>
    )
}