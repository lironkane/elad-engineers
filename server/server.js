const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); //  <--  הוספנו את זה!

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(cors());

// הגדרת ה-transporter של Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  //  <--  משתמש במשתנה סביבה
      pass: process.env.EMAIL_PASS 
    }
});

// ה-endpoint שלנו:  /api/send-email
app.post('/api/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // בדיקות תקינות בסיסיות (מומלץ להוסיף עוד!)
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'יש למלא את כל השדות הדרושים.' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // השתמש במייל ממנו אתה שולח
        to: 'info@elad-engineers.co.il',    //  <--  כתובת המייל *שלך* (של אלעד מהנדסים)
        subject: `פנייה חדשה מאתר אלעד מהנדסים: ${subject}`,
        text: `
            שם: ${name}
            דוא"ל: ${email}
            טלפון: ${phone}
            נושא: ${subject}
            הודעה: ${message}
        `,
        // אפשר להוסיף HTML:
        html: `
            <p>שם: ${name}</p>
            <p>דוא"ל: ${email}</p>
            <p>טלפון: ${phone}</p>
            <p>נושא: ${subject}</p>
            <p>הודעה:</p>
            <p>${message}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("שגיאה בשליחת המייל:", error);
            return res.status(500).json({ error: 'אירעה שגיאה בעת שליחת המייל.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'ההודעה נשלחה בהצלחה!' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});