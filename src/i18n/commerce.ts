import type { LocaleCode } from './content';

export interface CommerceStepCopy {
  title: string;
  body: string;
}

export interface CommerceCopy {
  upgradeCta: string;
  secureCheckout: string;
  lifetime: string;
  comingSoon: string;
  howKicker: string;
  howTitle: string;
  howLead: string;
  steps: readonly [CommerceStepCopy, CommerceStepCopy, CommerceStepCopy, CommerceStepCopy];
  methodsNote: string;
  restoreTitle: string;
  restoreBody: string;
  restoreCta: string;
}

export const commerceCopy: Record<LocaleCode, CommerceCopy> = {
  en: {
    upgradeCta: 'Upgrade to Pro', secureCheckout: 'Secure checkout on Ko-fi', lifetime: 'Lifetime Pro', comingSoon: 'Purchase flow coming soon',
    howKicker: 'How it works', howTitle: 'From checkout to Pro, without the maze.', howLead: 'One clear path. Ko-fi handles payment; Benedict verifies the purchase and Bearagnostic unlocks Pro automatically.',
    steps: [
      { title: 'Choose Pro', body: 'Start the upgrade from Bearagnostic when Pro goes live.' },
      { title: 'Pay on Ko-fi', body: 'Ko-fi shows the payment methods available for your region and device.' },
      { title: 'We verify it', body: 'Benedict receives the verified Ko-fi payment event and checks the exact Pro purchase.' },
      { title: 'Pro unlocks', body: 'Bearagnostic sees the entitlement and switches to Pro automatically.' },
    ],
    methodsNote: 'No separate Visa, Mastercard, debit, PayPal, or local-payment checkout to choose here — Ko-fi presents what is available to the buyer.',
    restoreTitle: 'Already purchased?', restoreBody: 'When Pro launches, purchases can be restored with the email used at checkout — useful after reinstalling or moving to a new device.', restoreCta: 'Go to support',
  },
  th: {
    upgradeCta: 'อัปเกรดเป็น Pro', secureCheckout: 'ชำระเงินอย่างปลอดภัยผ่าน Ko-fi', lifetime: 'Pro แบบตลอดชีพ', comingSoon: 'ระบบสั่งซื้อกำลังจะเปิดให้บริการ',
    howKicker: 'ขั้นตอนการอัปเกรด', howTitle: 'จากการชำระเงินสู่ Pro แบบง่ายและชัดเจน', howLead: 'มีเพียงขั้นตอนเดียวที่เข้าใจง่าย Ko-fi ดูแลการชำระเงิน ส่วน Benedict ตรวจสอบรายการซื้อ และ Bearagnostic ปลดล็อก Pro ให้อัตโนมัติ',
    steps: [
      { title: 'เลือก Pro', body: 'เริ่มอัปเกรดจาก Bearagnostic เมื่อระบบ Pro เปิดให้บริการ' },
      { title: 'ชำระผ่าน Ko-fi', body: 'Ko-fi จะแสดงช่องทางชำระเงินที่รองรับตามประเทศและอุปกรณ์ของคุณ' },
      { title: 'เราตรวจสอบให้', body: 'Benedict รับข้อมูลการชำระที่ Ko-fi ยืนยันแล้ว และตรวจว่าตรงกับรายการ Pro ที่ถูกต้อง' },
      { title: 'ปลดล็อก Pro', body: 'Bearagnostic ตรวจพบสิทธิ์และเปลี่ยนเป็น Pro ให้อัตโนมัติ' },
    ],
    methodsNote: 'ไม่ต้องเลือกหน้าชำระเงินแยกสำหรับ Visa, Mastercard, บัตรเดบิต, PayPal หรือช่องทางท้องถิ่น — Ko-fi จะแสดงตัวเลือกที่ใช้ได้ให้ผู้ซื้อเอง',
    restoreTitle: 'เคยซื้อแล้วใช่ไหม?', restoreBody: 'เมื่อ Pro เปิดให้บริการ คุณจะกู้คืนสิทธิ์ด้วยอีเมลที่ใช้ตอนชำระเงินได้ เหมาะสำหรับกรณีติดตั้งแอปใหม่หรือเปลี่ยนอุปกรณ์', restoreCta: 'ไปที่หน้าช่วยเหลือ',
  },
  es: {
    upgradeCta: 'Mejorar a Pro', secureCheckout: 'Pago seguro en Ko-fi', lifetime: 'Pro de por vida', comingSoon: 'El proceso de compra estará disponible pronto',
    howKicker: 'Cómo funciona', howTitle: 'Del pago a Pro, sin complicaciones.', howLead: 'Un solo recorrido claro. Ko-fi gestiona el pago; Benedict verifica la compra y Bearagnostic desbloquea Pro automáticamente.',
    steps: [
      { title: 'Elige Pro', body: 'Inicia la mejora desde Bearagnostic cuando Pro esté disponible.' },
      { title: 'Paga en Ko-fi', body: 'Ko-fi muestra los métodos de pago disponibles según tu región y dispositivo.' },
      { title: 'Lo verificamos', body: 'Benedict recibe el pago verificado por Ko-fi y comprueba que corresponda exactamente a Pro.' },
      { title: 'Pro se desbloquea', body: 'Bearagnostic detecta el derecho de uso y cambia a Pro automáticamente.' },
    ],
    methodsNote: 'No necesitas elegir aquí un pago separado para Visa, Mastercard, débito, PayPal u opciones locales: Ko-fi muestra lo que esté disponible para cada comprador.',
    restoreTitle: '¿Ya lo compraste?', restoreBody: 'Cuando Pro se lance, podrás restaurar la compra con el correo usado al pagar, incluso después de reinstalar o cambiar de dispositivo.', restoreCta: 'Ir a soporte',
  },
  'pt-br': {
    upgradeCta: 'Fazer upgrade para Pro', secureCheckout: 'Pagamento seguro no Ko-fi', lifetime: 'Pro vitalício', comingSoon: 'Fluxo de compra em breve',
    howKicker: 'Como funciona', howTitle: 'Do pagamento ao Pro, sem complicação.', howLead: 'Um caminho claro. O Ko-fi cuida do pagamento; a Benedict verifica a compra e o Bearagnostic libera o Pro automaticamente.',
    steps: [
      { title: 'Escolha o Pro', body: 'Comece o upgrade pelo Bearagnostic quando o Pro estiver disponível.' },
      { title: 'Pague no Ko-fi', body: 'O Ko-fi mostra as formas de pagamento disponíveis para sua região e seu dispositivo.' },
      { title: 'Nós verificamos', body: 'A Benedict recebe o pagamento verificado pelo Ko-fi e confirma a compra exata do Pro.' },
      { title: 'O Pro é liberado', body: 'O Bearagnostic reconhece o direito de uso e muda para Pro automaticamente.' },
    ],
    methodsNote: 'Não é preciso escolher aqui um checkout separado para Visa, Mastercard, débito, PayPal ou meios locais — o Ko-fi mostra as opções disponíveis ao comprador.',
    restoreTitle: 'Já comprou?', restoreBody: 'Quando o Pro for lançado, será possível restaurar a compra com o e-mail usado no checkout, inclusive após reinstalar ou trocar de aparelho.', restoreCta: 'Ir para o suporte',
  },
  fr: {
    upgradeCta: 'Passer à Pro', secureCheckout: 'Paiement sécurisé sur Ko-fi', lifetime: 'Pro à vie', comingSoon: 'Le parcours d’achat arrive bientôt',
    howKicker: 'Comment ça marche', howTitle: 'Du paiement à Pro, sans parcours compliqué.', howLead: 'Un chemin simple. Ko-fi gère le paiement ; Benedict vérifie l’achat et Bearagnostic déverrouille Pro automatiquement.',
    steps: [
      { title: 'Choisissez Pro', body: 'Lancez la mise à niveau depuis Bearagnostic lorsque Pro sera disponible.' },
      { title: 'Payez sur Ko-fi', body: 'Ko-fi affiche les moyens de paiement disponibles selon votre région et votre appareil.' },
      { title: 'Nous vérifions', body: 'Benedict reçoit l’événement de paiement vérifié par Ko-fi et contrôle l’achat Pro exact.' },
      { title: 'Pro se déverrouille', body: 'Bearagnostic détecte le droit d’accès et passe automatiquement à Pro.' },
    ],
    methodsNote: 'Pas besoin de choisir ici un paiement distinct pour Visa, Mastercard, carte de débit, PayPal ou un moyen local : Ko-fi présente les options disponibles à l’acheteur.',
    restoreTitle: 'Déjà acheté ?', restoreBody: 'Au lancement de Pro, vous pourrez restaurer votre achat avec l’adresse e-mail utilisée lors du paiement, même après une réinstallation ou un changement d’appareil.', restoreCta: 'Accéder à l’assistance',
  },
  de: {
    upgradeCta: 'Auf Pro upgraden', secureCheckout: 'Sicher bezahlen über Ko-fi', lifetime: 'Pro auf Lebenszeit', comingSoon: 'Kaufablauf demnächst verfügbar',
    howKicker: 'So funktioniert es', howTitle: 'Vom Bezahlen zu Pro – ohne Umwege.', howLead: 'Ein klarer Ablauf. Ko-fi übernimmt die Zahlung; Benedict prüft den Kauf und Bearagnostic schaltet Pro automatisch frei.',
    steps: [
      { title: 'Pro auswählen', body: 'Starte das Upgrade in Bearagnostic, sobald Pro verfügbar ist.' },
      { title: 'Über Ko-fi bezahlen', body: 'Ko-fi zeigt die für deine Region und dein Gerät verfügbaren Zahlungsmethoden.' },
      { title: 'Wir prüfen den Kauf', body: 'Benedict erhält das von Ko-fi bestätigte Zahlungsereignis und prüft den genauen Pro-Kauf.' },
      { title: 'Pro wird freigeschaltet', body: 'Bearagnostic erkennt die Berechtigung und wechselt automatisch zu Pro.' },
    ],
    methodsNote: 'Du musst hier keinen separaten Checkout für Visa, Mastercard, Debitkarte, PayPal oder lokale Methoden wählen – Ko-fi zeigt dem Käufer die verfügbaren Optionen.',
    restoreTitle: 'Schon gekauft?', restoreBody: 'Nach dem Pro-Start lässt sich der Kauf mit der beim Bezahlen verwendeten E-Mail wiederherstellen – auch nach Neuinstallation oder Gerätewechsel.', restoreCta: 'Zum Support',
  },
  it: {
    upgradeCta: 'Passa a Pro', secureCheckout: 'Pagamento sicuro su Ko-fi', lifetime: 'Pro a vita', comingSoon: 'Il flusso di acquisto sarà disponibile presto',
    howKicker: 'Come funziona', howTitle: 'Dal pagamento a Pro, senza complicazioni.', howLead: 'Un percorso chiaro. Ko-fi gestisce il pagamento; Benedict verifica l’acquisto e Bearagnostic sblocca Pro automaticamente.',
    steps: [
      { title: 'Scegli Pro', body: 'Avvia l’upgrade da Bearagnostic quando Pro sarà disponibile.' },
      { title: 'Paga su Ko-fi', body: 'Ko-fi mostra i metodi di pagamento disponibili per la tua area e il tuo dispositivo.' },
      { title: 'Noi verifichiamo', body: 'Benedict riceve l’evento di pagamento verificato da Ko-fi e controlla l’acquisto Pro corretto.' },
      { title: 'Pro si sblocca', body: 'Bearagnostic rileva il diritto d’uso e passa automaticamente a Pro.' },
    ],
    methodsNote: 'Non serve scegliere qui un checkout separato per Visa, Mastercard, debito, PayPal o metodi locali: Ko-fi mostra al cliente le opzioni disponibili.',
    restoreTitle: 'Hai già acquistato?', restoreBody: 'Quando Pro sarà disponibile, potrai ripristinare l’acquisto con l’e-mail usata al pagamento, anche dopo una reinstallazione o il cambio di dispositivo.', restoreCta: 'Vai all’assistenza',
  },
  ja: {
    upgradeCta: 'Pro にアップグレード', secureCheckout: 'Ko-fi で安全に決済', lifetime: '買い切り Pro', comingSoon: '購入フローは近日公開予定です',
    howKicker: '購入の流れ', howTitle: '支払いから Pro まで、迷わずシンプルに。', howLead: '流れはひとつだけ。支払いは Ko-fi、購入確認は Benedict、Pro の有効化は Bearagnostic が自動で行います。',
    steps: [
      { title: 'Pro を選ぶ', body: 'Pro の提供開始後、Bearagnostic からアップグレードを開始します。' },
      { title: 'Ko-fi で支払う', body: 'Ko-fi が地域や端末に応じて利用可能な支払い方法を表示します。' },
      { title: '購入を確認', body: 'Benedict が Ko-fi の確認済み支払い通知を受け取り、対象の Pro 購入を照合します。' },
      { title: 'Pro を自動有効化', body: 'Bearagnostic が利用権を確認すると、自動で Pro に切り替わります。' },
    ],
    methodsNote: 'Visa、Mastercard、デビット、PayPal、各地域の支払い方法をここで個別に選ぶ必要はありません。利用可能な方法は Ko-fi が購入者に表示します。',
    restoreTitle: 'すでに購入済みですか？', restoreBody: 'Pro の提供開始後は、購入時のメールアドレスで復元できます。再インストールや端末変更後でも利用できます。', restoreCta: 'サポートを見る',
  },
  ko: {
    upgradeCta: 'Pro로 업그레이드', secureCheckout: 'Ko-fi에서 안전하게 결제', lifetime: '평생 Pro', comingSoon: '구매 절차가 곧 제공됩니다',
    howKicker: '이용 방법', howTitle: '결제부터 Pro까지, 복잡하지 않게.', howLead: '하나의 명확한 흐름입니다. 결제는 Ko-fi가 처리하고, Benedict가 구매를 확인하며, Bearagnostic이 Pro를 자동으로 잠금 해제합니다.',
    steps: [
      { title: 'Pro 선택', body: 'Pro가 출시되면 Bearagnostic에서 업그레이드를 시작합니다.' },
      { title: 'Ko-fi에서 결제', body: 'Ko-fi가 지역과 기기에 맞는 사용 가능한 결제 수단을 표시합니다.' },
      { title: '구매 확인', body: 'Benedict가 Ko-fi의 검증된 결제 이벤트를 받아 정확한 Pro 구매인지 확인합니다.' },
      { title: 'Pro 자동 잠금 해제', body: 'Bearagnostic이 사용 권한을 확인하면 자동으로 Pro로 전환됩니다.' },
    ],
    methodsNote: 'Visa, Mastercard, 직불카드, PayPal 또는 현지 결제 수단을 여기서 따로 고를 필요가 없습니다. Ko-fi가 구매자에게 가능한 옵션을 보여줍니다.',
    restoreTitle: '이미 구매하셨나요?', restoreBody: 'Pro 출시 후에는 결제에 사용한 이메일로 구매를 복원할 수 있습니다. 재설치나 기기 변경 후에도 사용할 수 있습니다.', restoreCta: '지원 페이지로 이동',
  },
  id: {
    upgradeCta: 'Upgrade ke Pro', secureCheckout: 'Pembayaran aman melalui Ko-fi', lifetime: 'Pro seumur hidup', comingSoon: 'Alur pembelian segera hadir',
    howKicker: 'Cara kerjanya', howTitle: 'Dari pembayaran ke Pro, tanpa alur yang rumit.', howLead: 'Satu alur yang jelas. Ko-fi menangani pembayaran; Benedict memverifikasi pembelian dan Bearagnostic membuka Pro secara otomatis.',
    steps: [
      { title: 'Pilih Pro', body: 'Mulai upgrade dari Bearagnostic saat Pro sudah tersedia.' },
      { title: 'Bayar di Ko-fi', body: 'Ko-fi menampilkan metode pembayaran yang tersedia untuk wilayah dan perangkat Anda.' },
      { title: 'Kami verifikasi', body: 'Benedict menerima event pembayaran yang telah diverifikasi Ko-fi dan memeriksa pembelian Pro yang tepat.' },
      { title: 'Pro terbuka', body: 'Bearagnostic melihat hak akses dan beralih ke Pro secara otomatis.' },
    ],
    methodsNote: 'Tidak perlu memilih checkout terpisah untuk Visa, Mastercard, debit, PayPal, atau metode lokal — Ko-fi menampilkan opsi yang tersedia kepada pembeli.',
    restoreTitle: 'Sudah pernah membeli?', restoreBody: 'Saat Pro diluncurkan, pembelian dapat dipulihkan dengan email yang digunakan saat checkout, termasuk setelah memasang ulang atau mengganti perangkat.', restoreCta: 'Buka dukungan',
  },
  vi: {
    upgradeCta: 'Nâng cấp lên Pro', secureCheckout: 'Thanh toán an toàn qua Ko-fi', lifetime: 'Pro trọn đời', comingSoon: 'Quy trình mua hàng sắp ra mắt',
    howKicker: 'Cách hoạt động', howTitle: 'Từ thanh toán đến Pro, rõ ràng và đơn giản.', howLead: 'Chỉ một quy trình dễ hiểu. Ko-fi xử lý thanh toán; Benedict xác minh giao dịch và Bearagnostic tự động mở khóa Pro.',
    steps: [
      { title: 'Chọn Pro', body: 'Bắt đầu nâng cấp từ Bearagnostic khi Pro chính thức mở bán.' },
      { title: 'Thanh toán trên Ko-fi', body: 'Ko-fi hiển thị các phương thức thanh toán phù hợp với khu vực và thiết bị của bạn.' },
      { title: 'Chúng tôi xác minh', body: 'Benedict nhận sự kiện thanh toán đã được Ko-fi xác minh và kiểm tra đúng giao dịch Pro.' },
      { title: 'Pro được mở khóa', body: 'Bearagnostic nhận quyền sử dụng và tự động chuyển sang Pro.' },
    ],
    methodsNote: 'Bạn không cần chọn riêng Visa, Mastercard, thẻ ghi nợ, PayPal hay phương thức địa phương tại đây — Ko-fi sẽ hiển thị các lựa chọn khả dụng cho người mua.',
    restoreTitle: 'Đã mua trước đó?', restoreBody: 'Khi Pro ra mắt, bạn có thể khôi phục giao dịch bằng email đã dùng khi thanh toán, kể cả sau khi cài lại hoặc đổi thiết bị.', restoreCta: 'Đi đến hỗ trợ',
  },
  'zh-cn': {
    upgradeCta: '升级到 Pro', secureCheckout: '通过 Ko-fi 安全付款', lifetime: '终身 Pro', comingSoon: '购买流程即将上线',
    howKicker: '购买方式', howTitle: '从付款到 Pro，简单清楚，不绕路。', howLead: '只需一条清晰流程。Ko-fi 负责付款，Benedict 验证购买，Bearagnostic 自动解锁 Pro。',
    steps: [
      { title: '选择 Pro', body: 'Pro 上线后，可直接从 Bearagnostic 开始升级。' },
      { title: '在 Ko-fi 付款', body: 'Ko-fi 会根据你的地区和设备显示可用的付款方式。' },
      { title: '我们进行验证', body: 'Benedict 接收 Ko-fi 已验证的付款事件，并核对正确的 Pro 购买记录。' },
      { title: '自动解锁 Pro', body: 'Bearagnostic 确认权益后，会自动切换为 Pro。' },
    ],
    methodsNote: '无需在这里分别选择 Visa、Mastercard、借记卡、PayPal 或本地付款方式——Ko-fi 会向购买者显示可用选项。',
    restoreTitle: '已经购买过？', restoreBody: 'Pro 上线后，可使用结账时的邮箱恢复购买；即使重新安装或更换设备也可以恢复。', restoreCta: '前往支持',
  },
  'zh-tw': {
    upgradeCta: '升級至 Pro', secureCheckout: '透過 Ko-fi 安全付款', lifetime: '終身 Pro', comingSoon: '購買流程即將上線',
    howKicker: '購買方式', howTitle: '從付款到 Pro，簡單清楚、不繞路。', howLead: '只需一條清楚流程。Ko-fi 負責付款，Benedict 驗證購買，Bearagnostic 自動解鎖 Pro。',
    steps: [
      { title: '選擇 Pro', body: 'Pro 上線後，可直接從 Bearagnostic 開始升級。' },
      { title: '在 Ko-fi 付款', body: 'Ko-fi 會依你的地區與裝置顯示可用的付款方式。' },
      { title: '我們進行驗證', body: 'Benedict 接收 Ko-fi 已驗證的付款事件，並核對正確的 Pro 購買紀錄。' },
      { title: '自動解鎖 Pro', body: 'Bearagnostic 確認權益後，會自動切換為 Pro。' },
    ],
    methodsNote: '不需要在這裡分別選擇 Visa、Mastercard、簽帳金融卡、PayPal 或當地付款方式——Ko-fi 會向購買者顯示可用選項。',
    restoreTitle: '已經購買過？', restoreBody: 'Pro 上線後，可使用結帳時的電子郵件恢復購買；即使重新安裝或更換裝置也能恢復。', restoreCta: '前往支援',
  },
  ar: {
    upgradeCta: 'الترقية إلى Pro', secureCheckout: 'دفع آمن عبر Ko-fi', lifetime: 'Pro مدى الحياة', comingSoon: 'مسار الشراء سيتوفر قريبًا',
    howKicker: 'كيف تعمل العملية', howTitle: 'من الدفع إلى Pro بخطوات واضحة وبسيطة.', howLead: 'مسار واحد واضح: يتولى Ko-fi عملية الدفع، ويتحقق Benedict من عملية الشراء، ثم يفتح Bearagnostic مزايا Pro تلقائيًا.',
    steps: [
      { title: 'اختر Pro', body: 'ابدأ الترقية من Bearagnostic عند إطلاق Pro.' },
      { title: 'ادفع عبر Ko-fi', body: 'يعرض Ko-fi وسائل الدفع المتاحة حسب منطقتك وجهازك.' },
      { title: 'نتحقق من الشراء', body: 'يستقبل Benedict إشعار الدفع الموثق من Ko-fi ويتحقق من عملية شراء Pro الصحيحة.' },
      { title: 'يُفتح Pro تلقائيًا', body: 'يتعرف Bearagnostic على الاستحقاق ويتحول إلى Pro تلقائيًا.' },
    ],
    methodsNote: 'لا حاجة لاختيار صفحة دفع منفصلة لـ Visa أو Mastercard أو بطاقة الخصم أو PayPal أو الوسائل المحلية؛ يعرض Ko-fi الخيارات المتاحة للمشتري.',
    restoreTitle: 'اشتريت Pro من قبل؟', restoreBody: 'عند إطلاق Pro، ستتمكن من استعادة الشراء باستخدام البريد الإلكتروني المستخدم عند الدفع، حتى بعد إعادة تثبيت التطبيق أو تغيير الجهاز.', restoreCta: 'الانتقال إلى الدعم',
  },
  hi: {
    upgradeCta: 'Pro में अपग्रेड करें', secureCheckout: 'Ko-fi पर सुरक्षित भुगतान', lifetime: 'लाइफटाइम Pro', comingSoon: 'खरीद प्रक्रिया जल्द उपलब्ध होगी',
    howKicker: 'यह कैसे काम करता है', howTitle: 'भुगतान से Pro तक, बिना उलझन के।', howLead: 'एक साफ़ और सरल प्रक्रिया। भुगतान Ko-fi संभालता है, Benedict खरीद की पुष्टि करता है और Bearagnostic अपने-आप Pro अनलॉक कर देता है।',
    steps: [
      { title: 'Pro चुनें', body: 'Pro उपलब्ध होने पर Bearagnostic से अपग्रेड शुरू करें।' },
      { title: 'Ko-fi पर भुगतान करें', body: 'Ko-fi आपके क्षेत्र और डिवाइस के लिए उपलब्ध भुगतान विकल्प दिखाता है।' },
      { title: 'हम पुष्टि करते हैं', body: 'Benedict Ko-fi से सत्यापित भुगतान सूचना प्राप्त करके सही Pro खरीद की जाँच करता है।' },
      { title: 'Pro अनलॉक होता है', body: 'Bearagnostic अधिकार पहचानते ही अपने-आप Pro में बदल जाता है।' },
    ],
    methodsNote: 'यहाँ Visa, Mastercard, डेबिट, PayPal या स्थानीय भुगतान के लिए अलग checkout चुनने की जरूरत नहीं है — Ko-fi खरीदार को उपलब्ध विकल्प दिखाता है।',
    restoreTitle: 'पहले ही खरीद चुके हैं?', restoreBody: 'Pro लॉन्च होने के बाद checkout में इस्तेमाल किए गए ईमेल से खरीद बहाल की जा सकेगी, चाहे ऐप दोबारा इंस्टॉल किया हो या डिवाइस बदला हो।', restoreCta: 'सहायता पर जाएँ',
  },
  tr: {
    upgradeCta: 'Pro’ya yükselt', secureCheckout: 'Ko-fi üzerinden güvenli ödeme', lifetime: 'Ömür boyu Pro', comingSoon: 'Satın alma akışı yakında',
    howKicker: 'Nasıl çalışır', howTitle: 'Ödemeden Pro’ya, gereksiz karmaşa olmadan.', howLead: 'Tek ve net bir akış. Ödemeyi Ko-fi yönetir; Benedict satın alımı doğrular, Bearagnostic ise Pro’yu otomatik olarak açar.',
    steps: [
      { title: 'Pro’yu seçin', body: 'Pro kullanıma açıldığında yükseltmeyi Bearagnostic içinden başlatın.' },
      { title: 'Ko-fi üzerinden ödeyin', body: 'Ko-fi, bölgeniz ve cihazınız için kullanılabilen ödeme yöntemlerini gösterir.' },
      { title: 'Biz doğrularız', body: 'Benedict, Ko-fi tarafından doğrulanmış ödeme olayını alır ve doğru Pro satın alımını kontrol eder.' },
      { title: 'Pro otomatik açılır', body: 'Bearagnostic yetkiyi gördüğünde otomatik olarak Pro’ya geçer.' },
    ],
    methodsNote: 'Burada Visa, Mastercard, banka kartı, PayPal veya yerel yöntemler için ayrı bir ödeme sayfası seçmeniz gerekmez; Ko-fi alıcıya kullanılabilir seçenekleri gösterir.',
    restoreTitle: 'Daha önce satın aldınız mı?', restoreBody: 'Pro kullanıma açıldığında satın alma sırasında kullandığınız e-postayla erişimi geri yükleyebilirsiniz; yeniden kurulum veya cihaz değişiminde de geçerlidir.', restoreCta: 'Desteğe git',
  },
};

export function getCommerceCopy(locale: LocaleCode): CommerceCopy {
  return commerceCopy[locale] ?? commerceCopy.en;
}
