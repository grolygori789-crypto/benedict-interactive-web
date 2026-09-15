import type { LocaleCode } from './content';

export type LegalDocumentKey = 'privacy' | 'terms' | 'license' | 'legal';

export interface LegalUiCopy {
  contact: string;
  explore: string;
  legalGroup: string;
  studio: string;
  privacy: string;
  terms: string;
  softwareLicense: string;
  legalRights: string;
  contactKicker: string;
  contactTitle: string;
  contactLead: string;
  email: string;
  location: string;
  directEmail: string;
  composerTitle: string;
  composerNote: string;
  name: string;
  yourEmail: string;
  topic: string;
  subject: string;
  message: string;
  productSupport: string;
  business: string;
  feedback: string;
  other: string;
  sendViaEmail: string;
  copyMessage: string;
  copied: string;
  bold: string;
  italic: string;
  bullets: string;
  link: string;
  linkPrompt: string;
  legalLanguageNotice: string;
  lastUpdated: string;
  onThisPage: string;
  questions: string;
  allRightsReserved: string;
}

const en: LegalUiCopy = {
  contact: 'Contact',
  explore: 'Explore',
  legalGroup: 'Legal',
  studio: 'Studio',
  privacy: 'Privacy',
  terms: 'Terms',
  softwareLicense: 'Software License',
  legalRights: 'Legal & Rights',
  contactKicker: 'Contact Benedict Interactive',
  contactTitle: 'Say hello. Keep it simple.',
  contactLead: 'Product help, thoughtful feedback, business enquiries, or a quick hello — send it straight to Benedict Interactive.',
  email: 'Email',
  location: 'Location',
  directEmail: 'Email Benedict Interactive',
  composerTitle: 'Write a message',
  composerNote: 'Compose here, then continue in your email app. The website does not store the message.',
  name: 'Name',
  yourEmail: 'Your email',
  topic: 'Topic',
  subject: 'Subject',
  message: 'Message',
  productSupport: 'Product support',
  business: 'Business',
  feedback: 'Feedback',
  other: 'Other',
  sendViaEmail: 'Send via email',
  copyMessage: 'Copy message',
  copied: 'Copied',
  bold: 'Bold',
  italic: 'Italic',
  bullets: 'Bullets',
  link: 'Link',
  linkPrompt: 'Enter a web address (https://…)',
  legalLanguageNotice: 'This legal document is currently published in English as the authoritative version.',
  lastUpdated: 'Last updated',
  onThisPage: 'On this page',
  questions: 'Questions about this document?',
  allRightsReserved: 'All rights reserved.',
};

export const legalUi: Record<LocaleCode, LegalUiCopy> = {
  en,
  th: {
    ...en,
    contact: 'ติดต่อ', explore: 'สำรวจ', legalGroup: 'กฎหมาย', studio: 'สตูดิโอ', privacy: 'ความเป็นส่วนตัว', terms: 'ข้อกำหนด', softwareLicense: 'สิทธิ์การใช้ซอฟต์แวร์', legalRights: 'กฎหมายและสิทธิ์',
    contactKicker: 'ติดต่อ Benedict Interactive', contactTitle: 'คุยกันได้ แบบง่ายๆ', contactLead: 'ขอความช่วยเหลือเกี่ยวกับผลิตภัณฑ์ ส่งข้อเสนอแนะ ติดต่อเรื่องธุรกิจ หรือแค่แวะมาทักทาย — ส่งถึง Benedict Interactive ได้ตรงๆ',
    email: 'อีเมล', location: 'ที่ตั้ง', directEmail: 'ส่งอีเมลถึง Benedict Interactive', composerTitle: 'เขียนข้อความ', composerNote: 'พิมพ์ข้อความที่นี่ แล้วส่งต่อผ่านแอปอีเมลของคุณ เว็บไซต์จะไม่จัดเก็บข้อความนี้',
    name: 'ชื่อ', yourEmail: 'อีเมลของคุณ', topic: 'หัวข้อ', subject: 'ชื่อเรื่อง', message: 'ข้อความ', productSupport: 'ช่วยเหลือผลิตภัณฑ์', business: 'ธุรกิจ', feedback: 'ข้อเสนอแนะ', other: 'อื่นๆ',
    sendViaEmail: 'ส่งผ่านอีเมล', copyMessage: 'คัดลอกข้อความ', copied: 'คัดลอกแล้ว', bold: 'ตัวหนา', italic: 'ตัวเอียง', bullets: 'รายการหัวข้อ', link: 'ลิงก์', linkPrompt: 'ใส่ที่อยู่เว็บ (https://…)',
    legalLanguageNotice: 'เอกสารกฎหมายฉบับนี้เผยแพร่เป็นภาษาอังกฤษ โดยฉบับภาษาอังกฤษเป็นฉบับที่ใช้อ้างอิง', lastUpdated: 'ปรับปรุงล่าสุด', onThisPage: 'เนื้อหาในหน้านี้', questions: 'มีคำถามเกี่ยวกับเอกสารนี้?', allRightsReserved: 'สงวนลิขสิทธิ์และสิทธิ์ทั้งหมด',
  },
  es: {
    ...en,
    contact: 'Contacto', explore: 'Explorar', legalGroup: 'Legal', studio: 'Estudio', privacy: 'Privacidad', terms: 'Términos', softwareLicense: 'Licencia de software', legalRights: 'Legal y derechos',
    contactKicker: 'Contacta con Benedict Interactive', contactTitle: 'Hablemos. Sin complicaciones.', contactLead: 'Ayuda de producto, comentarios, consultas comerciales o un simple saludo — escríbenos directamente.',
    email: 'Correo', location: 'Ubicación', directEmail: 'Escribir a Benedict Interactive', composerTitle: 'Escribe un mensaje', composerNote: 'Redáctalo aquí y continúa en tu app de correo. El sitio no guarda el mensaje.',
    name: 'Nombre', yourEmail: 'Tu correo', topic: 'Tema', subject: 'Asunto', message: 'Mensaje', productSupport: 'Soporte de producto', business: 'Negocios', feedback: 'Comentarios', other: 'Otro', sendViaEmail: 'Enviar por correo', copyMessage: 'Copiar mensaje', copied: 'Copiado', bold: 'Negrita', italic: 'Cursiva', bullets: 'Viñetas', link: 'Enlace', linkPrompt: 'Introduce una dirección web (https://…)',
    legalLanguageNotice: 'Este documento legal se publica actualmente en inglés como versión autorizada.', lastUpdated: 'Última actualización', onThisPage: 'En esta página', questions: '¿Preguntas sobre este documento?', allRightsReserved: 'Todos los derechos reservados.',
  },
  'pt-br': {
    ...en,
    contact: 'Contato', explore: 'Explorar', legalGroup: 'Legal', studio: 'Estúdio', privacy: 'Privacidade', terms: 'Termos', softwareLicense: 'Licença de software', legalRights: 'Legal e direitos',
    contactKicker: 'Fale com a Benedict Interactive', contactTitle: 'Vamos conversar. Sem complicação.', contactLead: 'Suporte de produto, feedback, assuntos comerciais ou só um oi — fale diretamente com a Benedict Interactive.',
    email: 'E-mail', location: 'Localização', directEmail: 'Enviar e-mail para a Benedict Interactive', composerTitle: 'Escreva uma mensagem', composerNote: 'Escreva aqui e continue no seu app de e-mail. O site não armazena a mensagem.',
    name: 'Nome', yourEmail: 'Seu e-mail', topic: 'Assunto', subject: 'Título', message: 'Mensagem', productSupport: 'Suporte do produto', business: 'Negócios', feedback: 'Feedback', other: 'Outro', sendViaEmail: 'Enviar por e-mail', copyMessage: 'Copiar mensagem', copied: 'Copiado', bold: 'Negrito', italic: 'Itálico', bullets: 'Marcadores', link: 'Link', linkPrompt: 'Digite um endereço da web (https://…)',
    legalLanguageNotice: 'Este documento jurídico está publicado atualmente em inglês como versão oficial.', lastUpdated: 'Última atualização', onThisPage: 'Nesta página', questions: 'Dúvidas sobre este documento?', allRightsReserved: 'Todos os direitos reservados.',
  },
  fr: {
    ...en,
    contact: 'Contact', explore: 'Explorer', legalGroup: 'Mentions légales', studio: 'Studio', privacy: 'Confidentialité', terms: 'Conditions', softwareLicense: 'Licence logicielle', legalRights: 'Droits et mentions',
    contactKicker: 'Contacter Benedict Interactive', contactTitle: 'Parlons simplement.', contactLead: 'Aide produit, retour, demande professionnelle ou simple bonjour — écrivez directement à Benedict Interactive.',
    email: 'E-mail', location: 'Localisation', directEmail: 'Écrire à Benedict Interactive', composerTitle: 'Rédiger un message', composerNote: 'Rédigez ici puis continuez dans votre application e-mail. Le site ne stocke pas le message.',
    name: 'Nom', yourEmail: 'Votre e-mail', topic: 'Sujet', subject: 'Objet', message: 'Message', productSupport: 'Assistance produit', business: 'Professionnel', feedback: 'Retour', other: 'Autre', sendViaEmail: 'Envoyer par e-mail', copyMessage: 'Copier le message', copied: 'Copié', bold: 'Gras', italic: 'Italique', bullets: 'Puces', link: 'Lien', linkPrompt: 'Saisissez une adresse web (https://…)',
    legalLanguageNotice: 'Ce document juridique est actuellement publié en anglais, qui constitue la version de référence.', lastUpdated: 'Dernière mise à jour', onThisPage: 'Sur cette page', questions: 'Une question sur ce document ?', allRightsReserved: 'Tous droits réservés.',
  },
  de: {
    ...en,
    contact: 'Kontakt', explore: 'Entdecken', legalGroup: 'Rechtliches', studio: 'Studio', privacy: 'Datenschutz', terms: 'Bedingungen', softwareLicense: 'Softwarelizenz', legalRights: 'Rechtliches & Rechte',
    contactKicker: 'Benedict Interactive kontaktieren', contactTitle: 'Sag hallo. Ganz unkompliziert.', contactLead: 'Produkthilfe, Feedback, geschäftliche Anfragen oder einfach ein Hallo — direkt an Benedict Interactive.',
    email: 'E-Mail', location: 'Standort', directEmail: 'E-Mail an Benedict Interactive', composerTitle: 'Nachricht schreiben', composerNote: 'Hier verfassen und anschließend in deiner E-Mail-App fortfahren. Die Website speichert die Nachricht nicht.',
    name: 'Name', yourEmail: 'Deine E-Mail', topic: 'Thema', subject: 'Betreff', message: 'Nachricht', productSupport: 'Produktsupport', business: 'Geschäftlich', feedback: 'Feedback', other: 'Sonstiges', sendViaEmail: 'Per E-Mail senden', copyMessage: 'Nachricht kopieren', copied: 'Kopiert', bold: 'Fett', italic: 'Kursiv', bullets: 'Aufzählung', link: 'Link', linkPrompt: 'Webadresse eingeben (https://…)',
    legalLanguageNotice: 'Dieses Rechtsdokument wird derzeit auf Englisch als maßgebliche Fassung veröffentlicht.', lastUpdated: 'Zuletzt aktualisiert', onThisPage: 'Auf dieser Seite', questions: 'Fragen zu diesem Dokument?', allRightsReserved: 'Alle Rechte vorbehalten.',
  },
  it: {
    ...en,
    contact: 'Contatti', explore: 'Esplora', legalGroup: 'Note legali', studio: 'Studio', privacy: 'Privacy', terms: 'Termini', softwareLicense: 'Licenza software', legalRights: 'Note legali e diritti',
    contactKicker: 'Contatta Benedict Interactive', contactTitle: 'Parliamone. Senza complicazioni.', contactLead: 'Assistenza prodotto, feedback, richieste commerciali o anche solo un saluto — scrivi direttamente a Benedict Interactive.',
    email: 'Email', location: 'Sede', directEmail: 'Scrivi a Benedict Interactive', composerTitle: 'Scrivi un messaggio', composerNote: 'Scrivi qui e continua nella tua app email. Il sito non memorizza il messaggio.',
    name: 'Nome', yourEmail: 'La tua email', topic: 'Argomento', subject: 'Oggetto', message: 'Messaggio', productSupport: 'Supporto prodotto', business: 'Business', feedback: 'Feedback', other: 'Altro', sendViaEmail: 'Invia via email', copyMessage: 'Copia messaggio', copied: 'Copiato', bold: 'Grassetto', italic: 'Corsivo', bullets: 'Elenco', link: 'Link', linkPrompt: 'Inserisci un indirizzo web (https://…)',
    legalLanguageNotice: 'Questo documento legale è attualmente pubblicato in inglese come versione autorevole.', lastUpdated: 'Ultimo aggiornamento', onThisPage: 'In questa pagina', questions: 'Domande su questo documento?', allRightsReserved: 'Tutti i diritti riservati.',
  },
  ja: {
    ...en,
    contact: 'お問い合わせ', explore: '見る', legalGroup: '法的情報', studio: 'スタジオ', privacy: 'プライバシー', terms: '利用規約', softwareLicense: 'ソフトウェアライセンス', legalRights: '法的情報と権利',
    contactKicker: 'Benedict Interactive へ連絡', contactTitle: '気軽に話しかけてください。', contactLead: '製品サポート、フィードバック、ビジネスのお問い合わせ、ちょっとしたご挨拶まで、Benedict Interactive へ直接どうぞ。',
    email: 'メール', location: '所在地', directEmail: 'Benedict Interactive にメール', composerTitle: 'メッセージを書く', composerNote: 'ここで作成し、メールアプリで送信を続けます。Webサイトは本文を保存しません。',
    name: 'お名前', yourEmail: 'メールアドレス', topic: '種類', subject: '件名', message: 'メッセージ', productSupport: '製品サポート', business: 'ビジネス', feedback: 'フィードバック', other: 'その他', sendViaEmail: 'メールで送る', copyMessage: 'メッセージをコピー', copied: 'コピーしました', bold: '太字', italic: '斜体', bullets: '箇条書き', link: 'リンク', linkPrompt: 'Webアドレスを入力してください（https://…）',
    legalLanguageNotice: 'この法的文書は現在、英語版を正式版として公開しています。', lastUpdated: '最終更新', onThisPage: 'このページの内容', questions: 'この文書についてのご質問', allRightsReserved: 'All rights reserved.',
  },
  ko: {
    ...en,
    contact: '문의', explore: '둘러보기', legalGroup: '법적 정보', studio: '스튜디오', privacy: '개인정보', terms: '이용약관', softwareLicense: '소프트웨어 라이선스', legalRights: '법적 정보 및 권리',
    contactKicker: 'Benedict Interactive 문의', contactTitle: '편하게 이야기해 주세요.', contactLead: '제품 지원, 의견, 비즈니스 문의 또는 간단한 인사까지 Benedict Interactive에 직접 보내 주세요.',
    email: '이메일', location: '위치', directEmail: 'Benedict Interactive에 이메일', composerTitle: '메시지 작성', composerNote: '여기에서 작성한 뒤 이메일 앱에서 계속합니다. 웹사이트는 메시지를 저장하지 않습니다.',
    name: '이름', yourEmail: '이메일 주소', topic: '주제', subject: '제목', message: '메시지', productSupport: '제품 지원', business: '비즈니스', feedback: '피드백', other: '기타', sendViaEmail: '이메일로 보내기', copyMessage: '메시지 복사', copied: '복사됨', bold: '굵게', italic: '기울임', bullets: '글머리 기호', link: '링크', linkPrompt: '웹 주소를 입력하세요 (https://…)',
    legalLanguageNotice: '이 법적 문서는 현재 영어판을 기준 문서로 게시하고 있습니다.', lastUpdated: '최종 업데이트', onThisPage: '이 페이지에서', questions: '이 문서에 대한 문의', allRightsReserved: '모든 권리 보유.',
  },
  id: {
    ...en,
    contact: 'Kontak', explore: 'Jelajahi', legalGroup: 'Legal', studio: 'Studio', privacy: 'Privasi', terms: 'Ketentuan', softwareLicense: 'Lisensi perangkat lunak', legalRights: 'Legal & hak',
    contactKicker: 'Hubungi Benedict Interactive', contactTitle: 'Mari ngobrol. Tetap sederhana.', contactLead: 'Bantuan produk, masukan, pertanyaan bisnis, atau sekadar menyapa — langsung ke Benedict Interactive.',
    email: 'Email', location: 'Lokasi', directEmail: 'Email Benedict Interactive', composerTitle: 'Tulis pesan', composerNote: 'Tulis di sini lalu lanjutkan di aplikasi email Anda. Situs tidak menyimpan pesan.',
    name: 'Nama', yourEmail: 'Email Anda', topic: 'Topik', subject: 'Subjek', message: 'Pesan', productSupport: 'Dukungan produk', business: 'Bisnis', feedback: 'Masukan', other: 'Lainnya', sendViaEmail: 'Kirim lewat email', copyMessage: 'Salin pesan', copied: 'Disalin', bold: 'Tebal', italic: 'Miring', bullets: 'Poin', link: 'Tautan', linkPrompt: 'Masukkan alamat web (https://…)',
    legalLanguageNotice: 'Dokumen hukum ini saat ini diterbitkan dalam bahasa Inggris sebagai versi yang berlaku.', lastUpdated: 'Terakhir diperbarui', onThisPage: 'Di halaman ini', questions: 'Pertanyaan tentang dokumen ini?', allRightsReserved: 'Hak cipta dilindungi.',
  },
  vi: {
    ...en,
    contact: 'Liên hệ', explore: 'Khám phá', legalGroup: 'Pháp lý', studio: 'Studio', privacy: 'Quyền riêng tư', terms: 'Điều khoản', softwareLicense: 'Giấy phép phần mềm', legalRights: 'Pháp lý & quyền',
    contactKicker: 'Liên hệ Benedict Interactive', contactTitle: 'Cứ nhắn nhé. Thật đơn giản.', contactLead: 'Hỗ trợ sản phẩm, góp ý, trao đổi kinh doanh hay chỉ muốn chào một tiếng — gửi thẳng đến Benedict Interactive.',
    email: 'Email', location: 'Địa điểm', directEmail: 'Email Benedict Interactive', composerTitle: 'Viết tin nhắn', composerNote: 'Soạn tại đây rồi tiếp tục trong ứng dụng email của bạn. Trang web không lưu nội dung.',
    name: 'Tên', yourEmail: 'Email của bạn', topic: 'Chủ đề', subject: 'Tiêu đề', message: 'Tin nhắn', productSupport: 'Hỗ trợ sản phẩm', business: 'Kinh doanh', feedback: 'Góp ý', other: 'Khác', sendViaEmail: 'Gửi qua email', copyMessage: 'Sao chép tin nhắn', copied: 'Đã sao chép', bold: 'Đậm', italic: 'Nghiêng', bullets: 'Danh sách', link: 'Liên kết', linkPrompt: 'Nhập địa chỉ web (https://…)',
    legalLanguageNotice: 'Tài liệu pháp lý này hiện được công bố bằng tiếng Anh và bản tiếng Anh là bản có giá trị tham chiếu.', lastUpdated: 'Cập nhật lần cuối', onThisPage: 'Trong trang này', questions: 'Câu hỏi về tài liệu này?', allRightsReserved: 'Bảo lưu mọi quyền.',
  },
  'zh-cn': {
    ...en,
    contact: '联系', explore: '浏览', legalGroup: '法律信息', studio: '工作室', privacy: '隐私', terms: '条款', softwareLicense: '软件许可', legalRights: '法律与权利',
    contactKicker: '联系 Benedict Interactive', contactTitle: '来聊聊，简单一点。', contactLead: '产品支持、建议反馈、商务咨询，或只是打个招呼，都可以直接联系 Benedict Interactive。',
    email: '邮箱', location: '地点', directEmail: '给 Benedict Interactive 发邮件', composerTitle: '写消息', composerNote: '在这里撰写，然后在你的邮件应用中继续。网站不会保存消息内容。',
    name: '姓名', yourEmail: '你的邮箱', topic: '主题', subject: '标题', message: '消息', productSupport: '产品支持', business: '商务', feedback: '反馈', other: '其他', sendViaEmail: '通过邮件发送', copyMessage: '复制消息', copied: '已复制', bold: '粗体', italic: '斜体', bullets: '项目符号', link: '链接', linkPrompt: '输入网址（https://…）',
    legalLanguageNotice: '本法律文件目前以英文发布，英文版本为权威版本。', lastUpdated: '最后更新', onThisPage: '本页内容', questions: '对此文件有疑问？', allRightsReserved: '保留所有权利。',
  },
  'zh-tw': {
    ...en,
    contact: '聯絡', explore: '探索', legalGroup: '法律資訊', studio: '工作室', privacy: '隱私', terms: '條款', softwareLicense: '軟體授權', legalRights: '法律與權利',
    contactKicker: '聯絡 Benedict Interactive', contactTitle: '聊聊吧，簡單就好。', contactLead: '產品支援、意見回饋、商務洽詢，或只是打聲招呼，都可以直接聯絡 Benedict Interactive。',
    email: '電子郵件', location: '地點', directEmail: '寄信給 Benedict Interactive', composerTitle: '撰寫訊息', composerNote: '在這裡撰寫，再到你的郵件 App 繼續。網站不會儲存訊息內容。',
    name: '姓名', yourEmail: '你的電子郵件', topic: '主題', subject: '標題', message: '訊息', productSupport: '產品支援', business: '商務', feedback: '意見回饋', other: '其他', sendViaEmail: '透過郵件傳送', copyMessage: '複製訊息', copied: '已複製', bold: '粗體', italic: '斜體', bullets: '項目符號', link: '連結', linkPrompt: '輸入網址（https://…）',
    legalLanguageNotice: '本法律文件目前以英文發布，英文版本為具效力的參考版本。', lastUpdated: '最後更新', onThisPage: '本頁內容', questions: '對此文件有疑問？', allRightsReserved: '保留所有權利。',
  },
  ar: {
    ...en,
    contact: 'اتصل بنا', explore: 'استكشف', legalGroup: 'قانوني', studio: 'الاستوديو', privacy: 'الخصوصية', terms: 'الشروط', softwareLicense: 'ترخيص البرنامج', legalRights: 'القانون والحقوق',
    contactKicker: 'تواصل مع Benedict Interactive', contactTitle: 'قل مرحبًا. ببساطة.', contactLead: 'دعم المنتج أو الملاحظات أو الاستفسارات التجارية أو مجرد تحية — تواصل مباشرة مع Benedict Interactive.',
    email: 'البريد الإلكتروني', location: 'الموقع', directEmail: 'راسل Benedict Interactive', composerTitle: 'اكتب رسالة', composerNote: 'اكتب هنا ثم تابع في تطبيق البريد لديك. لا يخزن الموقع الرسالة.',
    name: 'الاسم', yourEmail: 'بريدك الإلكتروني', topic: 'الموضوع', subject: 'العنوان', message: 'الرسالة', productSupport: 'دعم المنتج', business: 'الأعمال', feedback: 'ملاحظات', other: 'أخرى', sendViaEmail: 'إرسال بالبريد', copyMessage: 'نسخ الرسالة', copied: 'تم النسخ', bold: 'عريض', italic: 'مائل', bullets: 'نقاط', link: 'رابط', linkPrompt: 'أدخل عنوان ويب (https://…)',
    legalLanguageNotice: 'يُنشر هذا المستند القانوني حاليًا باللغة الإنجليزية باعتبارها النسخة المعتمدة.', lastUpdated: 'آخر تحديث', onThisPage: 'في هذه الصفحة', questions: 'أسئلة حول هذا المستند؟', allRightsReserved: 'جميع الحقوق محفوظة.',
  },
  hi: {
    ...en,
    contact: 'संपर्क', explore: 'देखें', legalGroup: 'कानूनी', studio: 'स्टूडियो', privacy: 'गोपनीयता', terms: 'शर्तें', softwareLicense: 'सॉफ़्टवेयर लाइसेंस', legalRights: 'कानूनी और अधिकार',
    contactKicker: 'Benedict Interactive से संपर्क करें', contactTitle: 'नमस्ते कहिए। सरल रखें।', contactLead: 'उत्पाद सहायता, सुझाव, व्यावसायिक पूछताछ या सिर्फ नमस्ते — सीधे Benedict Interactive को लिखें।',
    email: 'ईमेल', location: 'स्थान', directEmail: 'Benedict Interactive को ईमेल करें', composerTitle: 'संदेश लिखें', composerNote: 'यहाँ लिखें और फिर अपने ईमेल ऐप में आगे बढ़ें। वेबसाइट संदेश को संग्रहीत नहीं करती।',
    name: 'नाम', yourEmail: 'आपका ईमेल', topic: 'विषय', subject: 'शीर्षक', message: 'संदेश', productSupport: 'उत्पाद सहायता', business: 'व्यवसाय', feedback: 'प्रतिक्रिया', other: 'अन्य', sendViaEmail: 'ईमेल से भेजें', copyMessage: 'संदेश कॉपी करें', copied: 'कॉपी किया गया', bold: 'बोल्ड', italic: 'इटैलिक', bullets: 'बुलेट', link: 'लिंक', linkPrompt: 'वेब पता दर्ज करें (https://…)',
    legalLanguageNotice: 'यह कानूनी दस्तावेज़ फिलहाल अंग्रेज़ी में आधिकारिक संस्करण के रूप में प्रकाशित है।', lastUpdated: 'अंतिम अपडेट', onThisPage: 'इस पेज पर', questions: 'इस दस्तावेज़ के बारे में प्रश्न?', allRightsReserved: 'सर्वाधिकार सुरक्षित।',
  },
  tr: {
    ...en,
    contact: 'İletişim', explore: 'Keşfet', legalGroup: 'Yasal', studio: 'Stüdyo', privacy: 'Gizlilik', terms: 'Koşullar', softwareLicense: 'Yazılım lisansı', legalRights: 'Yasal bilgiler ve haklar',
    contactKicker: 'Benedict Interactive ile iletişim', contactTitle: 'Merhaba deyin. Basit kalsın.', contactLead: 'Ürün desteği, geri bildirim, iş görüşmesi ya da sadece bir merhaba — doğrudan Benedict Interactive’e yazın.',
    email: 'E-posta', location: 'Konum', directEmail: 'Benedict Interactive’e e-posta gönder', composerTitle: 'Mesaj yazın', composerNote: 'Burada yazın, ardından e-posta uygulamanızda devam edin. Web sitesi mesajı saklamaz.',
    name: 'Ad', yourEmail: 'E-posta adresiniz', topic: 'Konu', subject: 'Başlık', message: 'Mesaj', productSupport: 'Ürün desteği', business: 'İş', feedback: 'Geri bildirim', other: 'Diğer', sendViaEmail: 'E-posta ile gönder', copyMessage: 'Mesajı kopyala', copied: 'Kopyalandı', bold: 'Kalın', italic: 'İtalik', bullets: 'Madde işaretleri', link: 'Bağlantı', linkPrompt: 'Web adresi girin (https://…)',
    legalLanguageNotice: 'Bu yasal belge şu anda bağlayıcı sürüm olarak İngilizce yayımlanmaktadır.', lastUpdated: 'Son güncelleme', onThisPage: 'Bu sayfada', questions: 'Bu belgeyle ilgili sorunuz mu var?', allRightsReserved: 'Tüm hakları saklıdır.',
  },
};

export const getLegalUi = (locale: LocaleCode): LegalUiCopy => legalUi[locale] ?? en;

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  metaDescription: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}

export const legalDocuments: Record<LegalDocumentKey, LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    metaDescription: 'How Benedict Interactive handles website analytics, contact messages, and privacy.',
    lead: 'A clear explanation of what this website measures, what it does not track, and what happens when you contact Benedict Interactive.',
    updated: '15 September 2026',
    sections: [
      {
        id: 'overview',
        heading: '1. Overview',
        paragraphs: [
          'Benedict Interactive is an independent software studio operated from Bangkok, Thailand. This Privacy Policy explains how the Benedict Interactive website handles information when you visit the site, interact with product links, or contact us by email.',
          'The site is designed around data minimization. We do not use advertising trackers, behavioral advertising profiles, or Benedict-set analytics cookies.',
        ],
      },
      {
        id: 'analytics',
        heading: '2. Website analytics',
        paragraphs: [
          'The site uses Cloudflare Web Analytics for privacy-focused page, traffic, performance, referrer, device, and country-level reporting. Cloudflare states that Web Analytics does not collect or use visitors’ personal data and does not rely on cookies or localStorage for these measurements.',
          'Benedict Interactive also records a small set of first-party aggregate product interaction events, such as a product page view, opening a product page, clicking a download link, opening support, or expressing interest in a planned Pro offering. These events are designed for product-level measurement rather than individual tracking.',
        ],
        bullets: [
          'The custom product event dataset does not store IP addresses, user-agent strings, referrers, cookies, local-storage identifiers, account identifiers, or arbitrary message content.',
          'Paths are recorded without query strings or URL fragments.',
          'A download-button click is treated only as a click. It is not represented as a completed download or installation.',
        ],
      },
      {
        id: 'contact',
        heading: '3. Contact and email',
        paragraphs: [
          'The contact composer on this site prepares a message in your browser and then hands the prepared draft to your email application. The website does not receive or store the contents of the draft before you choose to send it.',
          'If you send an email to Benedict Interactive, we receive the information contained in that email, which may include your name, email address, subject, message, and any information you choose to include. Email is currently handled through Gmail, a Google service.',
        ],
      },
      {
        id: 'purpose',
        heading: '4. Why information is used',
        paragraphs: [
          'Aggregate analytics are used to understand whether the website works well, which product pages receive attention, and where performance or usability should improve. Contact information is used to respond to support requests, feedback, business enquiries, and other correspondence.',
          'Where applicable law requires a legal basis for processing, Benedict Interactive relies on the basis appropriate to the activity, including steps requested by you, legitimate interests in operating and improving the site, and compliance with legal obligations.',
        ],
      },
      {
        id: 'providers',
        heading: '5. Service providers',
        paragraphs: [
          'Cloudflare provides website delivery, Pages hosting, Web Analytics, and the aggregate Analytics Engine used by this site. Google provides the Gmail service used for Benedict Interactive email correspondence. These providers process information under their own terms and privacy practices.',
          'Benedict Interactive does not sell personal information and does not provide contact messages to advertisers or data brokers.',
        ],
      },
      {
        id: 'retention',
        heading: '6. Retention',
        paragraphs: [
          'Aggregate website analytics are retained according to the applicable Cloudflare product settings and retention limits. Benedict Interactive does not attempt to turn those aggregate analytics into a permanent visitor profile.',
          'Email correspondence is kept only as long as reasonably needed to respond, maintain relevant support or business records, resolve disputes, protect the service, or meet legal obligations. Retention can therefore vary by message and context.',
        ],
      },
      {
        id: 'rights',
        heading: '7. Your privacy rights',
        paragraphs: [
          'Depending on where you live, applicable privacy law may give you rights to request access, correction, deletion, restriction, objection, portability, or other action concerning personal information we hold about you. You may also have a right to complain to a competent data-protection authority.',
          'To make a privacy request, email benedict.support@gmail.com. We may need enough information to verify the request and locate the relevant correspondence.',
        ],
      },
      {
        id: 'international',
        heading: '8. International processing',
        paragraphs: [
          'Cloudflare and Google operate internationally. Information processed through their services may therefore be handled in countries other than your own, subject to the safeguards and terms used by those providers and applicable law.',
        ],
      },
      {
        id: 'children',
        heading: '9. Children',
        paragraphs: [
          'This website is a general software studio and product-information site and is not designed to collect personal information from children. If you believe a child has sent personal information to Benedict Interactive, contact us so the situation can be reviewed.',
        ],
      },
      {
        id: 'changes',
        heading: '10. Changes and contact',
        paragraphs: [
          'This policy may be updated as the website, analytics, contact system, products, or legal requirements change. The date at the top of the policy shows the latest revision.',
          'Privacy questions can be sent to benedict.support@gmail.com. Benedict Interactive is operated from Bangkok, Thailand.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    metaDescription: 'Terms governing use of the Benedict Interactive website and public website content.',
    lead: 'Straightforward rules for using the Benedict Interactive website, its content, and its public product information.',
    updated: '15 September 2026',
    sections: [
      {
        id: 'scope',
        heading: '1. Scope and acceptance',
        paragraphs: [
          'These Terms of Use apply to the Benedict Interactive website and public website content. By using the site, you agree to these Terms to the extent permitted by applicable law. If you do not agree, please do not use the site.',
          'For these Terms, “Benedict Interactive”, “we”, “us”, and “our” refer to the operator of this independent software studio website based in Bangkok, Thailand.',
        ],
      },
      {
        id: 'information',
        heading: '2. Product information and pre-release status',
        paragraphs: [
          'Some products, features, distribution channels, prices, purchase systems, or services described on the site may be in development, planned, or not yet publicly available. A planned feature is not a promise that it will ship on a particular date or in a particular form.',
          'We try to keep public product information accurate and current, but software changes. The current product, release notes, purchase flow, or product-specific documentation may supersede older website descriptions.',
        ],
      },
      {
        id: 'acceptable-use',
        heading: '3. Acceptable use',
        paragraphs: ['You may use the public site for ordinary lawful browsing, evaluation, support, and communication. You must not misuse the site or interfere with its operation.'],
        bullets: [
          'Do not attempt unauthorized access to non-public systems, administrative tools, credentials, or data.',
          'Do not deliberately disrupt, overload, scrape abusively, probe for vulnerabilities without authorization, or bypass technical protections.',
          'Do not use the site or its content to impersonate Benedict Interactive or to mislead others about sponsorship, ownership, or endorsement.',
        ],
      },
      {
        id: 'ip',
        heading: '4. Intellectual property',
        paragraphs: [
          'Except for third-party material identified as such, the website design, original text, Benedict Interactive brand assets, original artwork, software materials, and other original content are owned by or licensed to Benedict Interactive and are protected by applicable intellectual-property laws.',
          'Using the site does not transfer ownership of any intellectual property. Limited ordinary browser caching and personal reference use are permitted; broader copying, redistribution, republication, resale, or commercial reuse requires permission unless applicable law provides otherwise.',
        ],
      },
      {
        id: 'software',
        heading: '5. Software is licensed separately',
        paragraphs: [
          'Software distributed by Benedict Interactive is governed by the applicable software license or product-specific terms, not merely by these website Terms. The general Benedict Interactive Software License is available on this site and may be supplemented or replaced by product-specific terms when a product is released.',
        ],
      },
      {
        id: 'third-party',
        heading: '6. Third-party services and links',
        paragraphs: [
          'The site may link to app stores, distribution services, hosting providers, email services, payment providers, documentation, or other third-party services. Those services are controlled by their own operators and may have separate terms, privacy policies, availability, and fees.',
          'A link does not by itself mean Benedict Interactive endorses every statement, product, or policy on the destination site.',
        ],
      },
      {
        id: 'warranty',
        heading: '7. Website availability and disclaimer',
        paragraphs: [
          'The website and its public information are provided on an “as available” basis. To the maximum extent permitted by law, Benedict Interactive does not guarantee uninterrupted access, error-free operation, or that every piece of public information will remain current forever.',
          'Nothing in these Terms excludes rights or warranties that cannot legally be excluded under applicable consumer law.',
        ],
      },
      {
        id: 'liability',
        heading: '8. Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by applicable law, Benedict Interactive will not be liable for indirect, incidental, special, or consequential loss arising solely from use of this public website. This limitation does not apply where liability cannot legally be limited or excluded.',
        ],
      },
      {
        id: 'changes',
        heading: '9. Changes to these Terms',
        paragraphs: [
          'These Terms may be updated when the website, products, legal requirements, or business model changes. Material commercial terms such as pricing, refunds, payment methods, and entitlement rules will be published only when those systems are actually ready.',
        ],
      },
      {
        id: 'law',
        heading: '10. Governing law and mandatory rights',
        paragraphs: [
          'These Terms are governed by the laws of Thailand, without limiting any mandatory consumer or statutory rights that apply to you under the law of your place of residence.',
        ],
      },
      {
        id: 'contact',
        heading: '11. Contact',
        paragraphs: ['Questions about these Terms can be sent to benedict.support@gmail.com. Benedict Interactive is operated from Bangkok, Thailand.'],
      },
    ],
  },
  license: {
    title: 'Software License',
    metaDescription: 'General software-license terms for software distributed by Benedict Interactive.',
    lead: 'The general license framework for Benedict Interactive software, including Bearagnostic unless product-specific terms say otherwise.',
    updated: '15 September 2026',
    sections: [
      {
        id: 'scope',
        heading: '1. Scope',
        paragraphs: [
          'This general Software License applies to software distributed by Benedict Interactive when the software or its download page refers to this license and no product-specific license replaces it. Product-specific terms may add to or override this general license.',
          'A public product page is not itself a software license grant. The license applies when software is actually made available to you under these terms.',
        ],
      },
      {
        id: 'grant',
        heading: '2. License grant',
        paragraphs: [
          'Subject to these terms, Benedict Interactive grants you a limited, non-exclusive, non-transferable, non-sublicensable license to install and use the software on devices you own or control for lawful personal use or internal business use, as permitted by the product and any applicable purchase terms.',
          'The software is licensed, not sold. Ownership of the software and its intellectual property remains with Benedict Interactive and its licensors.',
        ],
      },
      {
        id: 'restrictions',
        heading: '3. Restrictions',
        paragraphs: ['Unless applicable law expressly gives you a right that cannot be restricted, you may not:'],
        bullets: [
          'redistribute, resell, sublicense, rent, lease, or provide the software as a hosted service without written permission;',
          'remove or falsify copyright, attribution, trademark, license, or ownership notices;',
          'use the software, brand, or product identity to impersonate Benedict Interactive or distribute misleading or modified builds as official releases;',
          'circumvent license, entitlement, security, or integrity controls;',
          'reverse engineer, decompile, or disassemble the software except to the extent applicable law expressly permits that activity despite this restriction.',
        ],
      },
      {
        id: 'copies',
        heading: '4. Copies and devices',
        paragraphs: [
          'Reasonable backup copies may be made when necessary for your own licensed use, provided ownership and license notices are preserved. Any device-count, account, restoration, or entitlement limit published for a specific product also applies.',
        ],
      },
      {
        id: 'third-party',
        heading: '5. Open-source and third-party components',
        paragraphs: [
          'Benedict Interactive software may include third-party or open-source components. Those components remain subject to their own licenses and notices. Where a third-party license gives you rights that differ from this general license, that third-party license controls for the relevant component.',
        ],
      },
      {
        id: 'updates',
        heading: '6. Updates and services',
        paragraphs: [
          'Updates may add, change, fix, or remove features. Unless a product-specific commitment says otherwise, Benedict Interactive does not promise that every version, platform, integration, store, or online service will remain available indefinitely.',
          'Security, privacy, and data-safety behavior described by a product should be evaluated against the version you are actually using and the current product documentation.',
        ],
      },
      {
        id: 'pro',
        heading: '7. Paid features and entitlement',
        paragraphs: [
          'If a product later offers paid or Pro features, the applicable purchase, refund, restoration, device, and entitlement terms will be published with the live commercial flow. A planned price or planned Pro description on a pre-release page does not create a purchase right or permanent commercial promise.',
        ],
      },
      {
        id: 'privacy',
        heading: '8. Privacy',
        paragraphs: [
          'Use of any connected online service is also subject to the applicable privacy policy. Product-specific privacy behavior may be described separately where the software processes device files, diagnostics, account information, or other data.',
        ],
      },
      {
        id: 'warranty',
        heading: '9. Warranty and liability',
        paragraphs: [
          'To the maximum extent permitted by applicable law, software is provided without warranties beyond those expressly stated in the product or purchase terms. Nothing in this license excludes statutory rights or liability that cannot legally be excluded or limited.',
        ],
      },
      {
        id: 'termination',
        heading: '10. Termination',
        paragraphs: [
          'The license ends if you materially breach these terms and do not cure the breach where cure is required by law. When a license ends, you must stop using copies that are no longer licensed. Terms concerning ownership, third-party rights, disclaimers, and other provisions that logically survive termination continue to apply.',
        ],
      },
      {
        id: 'law',
        heading: '11. Governing law',
        paragraphs: [
          'This license is governed by the laws of Thailand, without limiting mandatory statutory or consumer rights that apply in your jurisdiction.',
        ],
      },
      {
        id: 'contact',
        heading: '12. Contact',
        paragraphs: ['License questions and permission requests can be sent to benedict.support@gmail.com.'],
      },
    ],
  },
  legal: {
    title: 'Legal & Rights',
    metaDescription: 'Copyright, brand, permissions, and rights information for Benedict Interactive.',
    lead: 'Ownership, permissions, third-party rights, and the rules around using Benedict Interactive material.',
    updated: '15 September 2026',
    sections: [
      {
        id: 'copyright',
        heading: '1. Copyright',
        paragraphs: [
          '© 2026 Benedict Interactive. All rights reserved. Except where otherwise identified, original website text, design, graphics, artwork, brand assets, documentation, and original software materials are owned by or licensed to Benedict Interactive and are protected by applicable copyright and related laws.',
          'Copyright protection does not depend on the presence of this notice. The notice is provided to make ownership and permitted use clearer.',
        ],
      },
      {
        id: 'brands',
        heading: '2. Brands and product names',
        paragraphs: [
          'Benedict Interactive, Bearagnostic, Benedict Test Center, their logos, product marks, and related visual identities are used as brand identifiers of Benedict Interactive unless otherwise stated.',
          'Nothing on this page should be read as a claim that a mark is registered unless it is explicitly identified as registered. A registered-trademark symbol is not used unless registration status supports it.',
        ],
      },
      {
        id: 'permissions',
        heading: '3. Permission to reuse material',
        paragraphs: [
          'You may link to public pages and make ordinary personal references to Benedict Interactive products. Republishing substantial original text, artwork, screenshots, brand assets, downloadable files, or software for commercial use, resale, redistribution, or impersonation requires permission unless applicable law independently allows the use.',
          'For press, editorial, educational, partnership, distribution, or other reuse requests, contact Benedict Interactive before assuming permission.',
        ],
      },
      {
        id: 'third-party',
        heading: '4. Third-party and open-source rights',
        paragraphs: [
          'Third-party names, logos, platforms, services, libraries, fonts, open-source components, and other third-party material remain the property of their respective owners. Their appearance on this site does not transfer ownership to Benedict Interactive.',
          'Open-source and third-party software notices remain governed by the relevant upstream licenses. Benedict Interactive does not claim exclusive rights over material that belongs to others.',
        ],
      },
      {
        id: 'reports',
        heading: '5. Rights or infringement concerns',
        paragraphs: [
          'If you believe material on this site infringes your rights, send a clear notice to benedict.support@gmail.com identifying the material, the right you believe is affected, the basis of your claim, and a reliable way to contact you. Good-faith reports will be reviewed.',
        ],
      },
      {
        id: 'location',
        heading: '6. Studio contact',
        paragraphs: [
          'Benedict Interactive is an independent software studio operated from Bangkok, Thailand. Public contact email: benedict.support@gmail.com.',
          '“Bangkok, Thailand” describes the studio location and is not presented as a public walk-in office address.',
        ],
      },
    ],
  },
};

export const getLegalDocument = (key: LegalDocumentKey): LegalDocument => legalDocuments[key];
