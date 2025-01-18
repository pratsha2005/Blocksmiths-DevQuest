import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
i18n.use(initReactI18next).init({
    lng: 'hi',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en:{
            translation: {
                navbar: {
                    Dashboard: 'Dashboard',
                    About: 'About',
                    Services: 'Services',
                    Contact: 'Contact'
                },
                landing: {
                    title: 'Healthsuraksha',
                    description: 'Take control of your health data with our secure, decentralized platform. HealthChain ensures your medical records are safe, tamper-proof, and accessible only to those you authorize',
                    button1: 'Get started',
                    button2: 'Join Us'
                },
                card: {
                    title: 'Healthsuraksha: Empowering you to master and transform health data management',
                    subtitle1: 'Integration and Accessibility',
                    desc1 : 'Integrates seamlessly with various healthcare systems and data sources, providing a unified and comprehensive health history.',
                    subtitle2 : 'Trust and Transparency',
                    desc2: 'All changes to your health records are recorded transparently on the blockchain, ensuring data integrity and trust ',
                    subtitle3 : 'Security',
                    desc3: 'Leveraging blockchain technology to ensure your health records are safe, immutable, and accessible only by authorized individuals.',
                    subtitle4: 'Ease of Use',
                    desc4: 'Simplify insurance claims and billing processes by securely sharing verified health data with authorized entities.',
                    subtitle5: ''
                }
            }
        },
        hi: {
            translation: {
                navbar: {
                    Dashboard: 'डैशबोर्ड',
                    About: 'के बारे में',
                    Services: 'सेवाएं',
                    Contact: 'संपर्क'
                },
                landing: {
                    title: 'स्वास्थ्य सुरक्षा',
                    description: 'हमारे सुरक्षित, विकेंद्रीकृत प्लेटफ़ॉर्म से अपने स्वास्थ्य डेटा पर नियंत्रण रखें। हेल्थचेन सुनिश्चित करता है कि आपके मेडिकल रिकॉर्ड सुरक्षित, छेड़छाड़-रोधी हों और केवल उन लोगों के लिए ही पहुंच योग्य हों जिन्हें आप अधिकृत करते हैं',
                    button1: 'शुरू हो जाओ',
                    button2: 'हमसे जुड़ें'
                }
            }
        }
    }
})