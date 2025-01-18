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
                    Contact: 'Contact',
                },
                landing: {
                    title: 'Healthsuraksha',
                    description: 'Take control of your health data with our secure, decentralized platform. HealthChain ensures your medical records are safe, tamper-proof, and accessible only to those you authorize',
                    button1: 'Get started',
                    button2: 'Join Us',
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
                    subtitle5: 'Security',
                    desc5 : 'Leveraging blockchain technology to ensure your health records are safe, immutable, and accessible only by authorized individuals.',
                    subtitle6: 'Global Reach',
                    desc6: 'Accessible from anywhere, facilitating care for patients traveling or relocating internationally.' ,
                }
            }
        },
        hi: {
            translation: {
                navbar: {
                    Dashboard: 'डैशबोर्ड',
                    About: 'के बारे में',
                    Services: 'सेवाएं',
                    Contact: 'संपर्क',
                }
                },
                landing: {
                    title: 'स्वास्थ्य सुरक्षा',
                    description: 'हमारे सुरक्षित, विकेंद्रीकृत प्लेटफ़ॉर्म से अपने स्वास्थ्य डेटा पर नियंत्रण रखें। हेल्थचेन सुनिश्चित करता है कि आपके मेडिकल रिकॉर्ड सुरक्षित, छेड़छाड़-रोधी हों और केवल उन लोगों के लिए ही पहुंच योग्य हों जिन्हें आप अधिकृत करते हैं',
                    button1: 'शुरू हो जाओ',
                    button2: 'हमसे जुड़ें',
                },
                card: {
                    title: 'स्वास्थ्य सुरक्षा: आपको स्वास्थ्य डेटा प्रबंधन में महारत हासिल करने और बदलने के लिए सशक्त बनाना',
                    subtitle1: 'एकीकरण और पहुंच',
                    desc1 : 'एक एकीकृत और व्यापक स्वास्थ्य इतिहास प्रदान करते हुए, विभिन्न स्वास्थ्य देखभाल प्रणालियों और डेटा स्रोतों के साथ सहजता से एकीकृत होता है।',
                    subtitle2 : 'विश्वास और पारदर्शिता',
                    desc2: 'आपके स्वास्थ्य रिकॉर्ड में सभी परिवर्तन ब्लॉकचेन पर पारदर्शी रूप से दर्ज किए जाते हैं, जिससे डेटा अखंडता और विश्वास सुनिश्चित होता है',
                    subtitle3 : 'सुरक्षा',
                    desc3: 'यह सुनिश्चित करने के लिए ब्लॉकचेन तकनीक का लाभ उठाना कि आपके स्वास्थ्य रिकॉर्ड सुरक्षित, अपरिवर्तनीय और केवल अधिकृत व्यक्तियों द्वारा ही पहुंच योग्य हैं।',
                    subtitle4: 'उपयोग में आसानी',
                    desc4: 'अधिकृत संस्थाओं के साथ सत्यापित स्वास्थ्य डेटा को सुरक्षित रूप से साझा करके बीमा दावों और बिलिंग प्रक्रियाओं को सरल बनाएं।',
                    subtitle5: 'Security',
                    desc5 : 'Leveraging blockchain technology to ensure your health records are safe, immutable, and accessible only by authorized individuals.',
                    subtitle6: 'विश्वव्यापी पहुँच',
                    desc6: 'कहीं से भी पहुंच योग्य, अंतरराष्ट्रीय स्तर पर यात्रा करने वाले या स्थानांतरित होने वाले मरीजों की देखभाल की सुविधा' ,
                }
            }
        }
    }
)