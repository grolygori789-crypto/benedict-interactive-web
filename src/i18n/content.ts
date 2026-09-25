export const localeCodes = ["en", "th", "es", "pt-br", "fr", "de", "it", "ja", "ko", "id", "vi", "zh-cn", "zh-tw", "ar", "hi", "tr"] as const;

export type LocaleCode = (typeof localeCodes)[number];

export interface LocaleMeta {
  htmlLang: string;
  nativeName: string;
  short: string;
  dir: 'ltr' | 'rtl';
}

export const defaultLocale: LocaleCode = 'en';

export const localeMeta: Record<LocaleCode, LocaleMeta> = {
  "en": {
    "htmlLang": "en",
    "nativeName": "English",
    "short": "EN",
    "dir": "ltr"
  },
  "th": {
    "htmlLang": "th",
    "nativeName": "ภาษาไทย",
    "short": "TH",
    "dir": "ltr"
  },
  "es": {
    "htmlLang": "es",
    "nativeName": "Español",
    "short": "ES",
    "dir": "ltr"
  },
  "pt-br": {
    "htmlLang": "pt-BR",
    "nativeName": "Português (Brasil)",
    "short": "PT",
    "dir": "ltr"
  },
  "fr": {
    "htmlLang": "fr",
    "nativeName": "Français",
    "short": "FR",
    "dir": "ltr"
  },
  "de": {
    "htmlLang": "de",
    "nativeName": "Deutsch",
    "short": "DE",
    "dir": "ltr"
  },
  "it": {
    "htmlLang": "it",
    "nativeName": "Italiano",
    "short": "IT",
    "dir": "ltr"
  },
  "ja": {
    "htmlLang": "ja",
    "nativeName": "日本語",
    "short": "JA",
    "dir": "ltr"
  },
  "ko": {
    "htmlLang": "ko",
    "nativeName": "한국어",
    "short": "KO",
    "dir": "ltr"
  },
  "id": {
    "htmlLang": "id",
    "nativeName": "Bahasa Indonesia",
    "short": "ID",
    "dir": "ltr"
  },
  "vi": {
    "htmlLang": "vi",
    "nativeName": "Tiếng Việt",
    "short": "VI",
    "dir": "ltr"
  },
  "zh-cn": {
    "htmlLang": "zh-CN",
    "nativeName": "简体中文",
    "short": "简",
    "dir": "ltr"
  },
  "zh-tw": {
    "htmlLang": "zh-TW",
    "nativeName": "繁體中文",
    "short": "繁",
    "dir": "ltr"
  },
  "ar": {
    "htmlLang": "ar",
    "nativeName": "العربية",
    "short": "AR",
    "dir": "rtl"
  },
  "hi": {
    "htmlLang": "hi",
    "nativeName": "हिन्दी",
    "short": "HI",
    "dir": "ltr"
  },
  "tr": {
    "htmlLang": "tr",
    "nativeName": "Türkçe",
    "short": "TR",
    "dir": "ltr"
  }
};

export const content = {
  "en": {
    "nav": {
      "home": "Home",
      "products": "Products",
      "philosophy": "Philosophy",
      "support": "Support",
      "language": "Language",
      "menu": "Menu"
    },
    "home": {
      "metaDescription": "Thoughtful software from Benedict Interactive: clear, capable, privacy-minded, and made with character.",
      "kicker": "Independent software studio · Benedict J.",
      "headlineA": "Bright software for",
      "headlineB": "calmer digital lives.",
      "lead": "Thoughtful, human-centered software for a cleaner, simpler, brighter everyday.",
      "primaryCta": "Meet Bearagnostic",
      "secondaryCta": "See the point of view",
      "proof": [
        "Independent",
        "Privacy-minded",
        "Built with care"
      ],
      "founderRole": "Independent developer",
      "founderSlogan": "Better tools. Brighter days!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "coming soon",
        "safe": "Safe & private",
        "light": "Lightweight",
        "android": "Made for Android"
      },
      "philosophyKicker": "A point of view",
      "philosophyTitle": "Technology can be serious without taking itself too seriously.",
      "philosophyBody": "Benedict Interactive makes software that explains itself, respects attention, and leaves room for personality. The interface can smile. The engineering still has to behave.",
      "productKicker": "Featured product",
      "productTitle": "Bearagnostic",
      "productPromise": "Find clutter. Explain the risk. Clean with confidence.",
      "productBody": "A privacy-first Android file clarity assistant that shows you what is taking space, explains what it found, and lets you decide what deserves to stay.",
      "productTags": [
        "Android",
        "Privacy-first",
        "Clear explanations"
      ],
      "productCta": "Explore Bearagnostic",
      "productSupport": "Get support",
      "realScreen": "Real app screen",
      "principlesKicker": "How the work gets made",
      "principlesTitle": "Less theatre. More thought.",
      "principlesIntro": "Three rules keep the work honest — and pleasantly un-dramatic.",
      "principles": [
        {
          "title": "Useful before impressive",
          "body": "A feature earns its place by solving something real."
        },
        {
          "title": "Clarity is a kindness",
          "body": "Good software should not make people decode its intentions."
        },
        {
          "title": "Trust belongs in the structure",
          "body": "Privacy and honest states are design decisions, not footer copy."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Independent by design.",
      "studioBody": "Benedict J. designs, builds, tests, and keeps improving the work here. Staying close to the product means small details do not have to file a meeting request before getting fixed.",
      "studioQuote": "Make it useful. Make it clear. Leave a little room for delight.",
      "closingKicker": "What comes next",
      "closingTitle": "Software should feel like someone cared.",
      "closingBody": "Bearagnostic is the first chapter. The standard stays the same for whatever comes next.",
      "closingCta": "Explore the products"
    },
    "products": {
      "metaDescription": "Products and future tools from Benedict Interactive.",
      "kicker": "Products",
      "title": "Different jobs. Same standard of care.",
      "lead": "Focused software with clear jobs, honest states, and enough character to remember.",
      "bearDescription": "Understand storage clutter before deleting it. Calm, local-first, and refreshingly uninterested in magic buttons.",
      "bearCta": "Explore Bearagnostic",
      "testKicker": "In the lab",
      "testTitle": "Benedict Test Center",
      "testDescription": "A planned QA and release-evidence platform for structured testing, retesting, and a record of what actually happened.",
      "testNote": "Planned as a separate, secured service — because tester data and public marketing pages should not share a kitchen drawer."
    },
    "bear": {
      "metaDescription": "Bearagnostic is a privacy-first Android file clarity assistant from Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Find clutter. Explain the risk. Clean with confidence.",
      "lead": "Bearagnostic helps you understand storage before you clean it up. It finds clutter, explains the risk, and leaves the final decision where it belongs: with you.",
      "featuresKicker": "Why it exists",
      "featuresTitle": "Cleanup with context.",
      "features": [
        {
          "title": "See what is actually there",
          "body": "Surface files and categories without dressing every megabyte up as an emergency."
        },
        {
          "title": "Understand before deleting",
          "body": "Clear explanations help you judge what can go and what probably should not."
        },
        {
          "title": "Privacy stays close",
          "body": "The product direction favors local analysis and minimal data collection."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Lifetime Pro. One payment, no subscription.",
      "proBody": "Lifetime Pro is THB 249 once. Existing verified customers can restore access now; new purchases are not open yet.",
      "proPoints": [
        "THB 249 once for Lifetime Pro",
        "Restore existing Pro with your verified purchase email",
        "Server-verified entitlement, not a fragile client flag"
      ],
      "proStatus": "Existing Pro restoration is live",
      "proNote": "New Pro purchases are not open yet. Existing verified customers can restore access in the production app.",
      "supportCta": "Bearagnostic support"
    },
    "support": {
      "metaDescription": "Support information for Benedict Interactive products.",
      "kicker": "Support",
      "title": "Clear help, without the maze.",
      "lead": "Official help is here, close to the product and easy to find. No scavenger hunt across old posts, mystery links, or five forgotten tabs.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Release notes, installation help, Restore Pro, troubleshooting, and product guidance are available here for the current public release.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "This site is the canonical home for product information. Store listings and social posts may point here; they are not the source of truth.",
      "stagingNote": "Public support is available through Benedict Interactive while the branded support address is being finalized."
    },
    "common": {
      "inDevelopment": "In development",
      "planned": "Planned",
      "viewProduct": "View product",
      "backHome": "Back home",
      "footerLine": "Independent software by Benedict J.",
      "footerStaging": "Public release · Verified downloads from Benedict Interactive",
      "skipToContent": "Skip to content"
    }
  },
  "th": {
    "nav": {
      "home": "หน้าแรก",
      "products": "ผลิตภัณฑ์",
      "philosophy": "แนวคิด",
      "support": "ช่วยเหลือ",
      "language": "ภาษา",
      "menu": "เมนู"
    },
    "home": {
      "metaDescription": "ซอฟต์แวร์ที่คิดมาอย่างดีจาก Benedict Interactive ชัดเจน ใช้งานจริง เคารพความเป็นส่วนตัว และมีบุคลิกในแบบของตัวเอง",
      "kicker": "สตูดิโอซอฟต์แวร์อิสระ · Benedict J.",
      "headlineA": "ซอฟต์แวร์ที่สดใส",
      "headlineB": "เพื่อชีวิตดิจิทัลที่สบายใจขึ้น",
      "lead": "ซอฟต์แวร์ที่คิดถึงคนใช้เป็นหลัก เพื่อทุกวันที่สะอาดขึ้น เรียบง่ายขึ้น และสดใสขึ้น",
      "primaryCta": "รู้จัก Bearagnostic",
      "secondaryCta": "ดูแนวคิดของเรา",
      "proof": [
        "อิสระ",
        "ใส่ใจความเป็นส่วนตัว",
        "ทำด้วยความตั้งใจ"
      ],
      "founderRole": "นักพัฒนาอิสระ",
      "founderSlogan": "เครื่องมือที่ดีกว่า ทุกวันที่สดใสขึ้น!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "เร็วๆ นี้",
        "safe": "ปลอดภัยและเป็นส่วนตัว",
        "light": "เบาเครื่อง",
        "android": "สร้างมาสำหรับ Android"
      },
      "philosophyKicker": "มุมมองของเรา",
      "philosophyTitle": "เทคโนโลยีจริงจังได้ โดยไม่จำเป็นต้องทำหน้าขรึมตลอดเวลา",
      "philosophyBody": "Benedict Interactive ทำซอฟต์แวร์ที่อธิบายตัวเองได้ เคารพเวลาของคนใช้ และยังมีพื้นที่ให้บุคลิกกับรอยยิ้ม หน้าตาเป็นมิตรได้ ส่วนวิศวกรรมข้างในยังต้องเป๊ะเหมือนเดิม",
      "productKicker": "ผลิตภัณฑ์เด่น",
      "productTitle": "Bearagnostic",
      "productPromise": "หาไฟล์รก อธิบายความเสี่ยง แล้วค่อยลบอย่างมั่นใจ",
      "productBody": "ผู้ช่วยจัดการไฟล์บน Android ที่ให้ความสำคัญกับความเป็นส่วนตัว ช่วยให้เห็นว่าอะไรใช้พื้นที่อยู่ อธิบายสิ่งที่พบ แล้วให้คุณเป็นคนตัดสินใจว่าอะไรควรอยู่ต่อ",
      "productTags": [
        "Android",
        "Privacy-first",
        "อธิบายเข้าใจง่าย"
      ],
      "productCta": "ดู Bearagnostic",
      "productSupport": "ขอความช่วยเหลือ",
      "realScreen": "หน้าจอแอปจริง",
      "principlesKicker": "วิธีที่เราทำงาน",
      "principlesTitle": "ลดลีลา เพิ่มความคิด",
      "principlesIntro": "กติกาสามข้อที่ช่วยให้งานตรงไปตรงมา และไม่ต้องเล่นใหญ่เกินเหตุ",
      "principles": [
        {
          "title": "มีประโยชน์ก่อนน่าประทับใจ",
          "body": "ฟีเจอร์จะได้อยู่ต่อ เมื่อมันแก้ปัญหาจริง ไม่ใช่แค่ทำให้รายการดูยาวขึ้น"
        },
        {
          "title": "ความชัดเจนคือความเกรงใจ",
          "body": "ซอฟต์แวร์ที่ดีไม่ควรให้คนใช้ต้องเดาใจมัน"
        },
        {
          "title": "ความไว้ใจต้องอยู่ในโครงสร้าง",
          "body": "ความเป็นส่วนตัวและสถานะที่ซื่อตรงคือการออกแบบ ไม่ใช่ประโยคสวยๆ ในท้ายเว็บ"
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "ตั้งใจเป็นอิสระตั้งแต่แรก",
      "studioBody": "Benedict J. ออกแบบ สร้าง ทดสอบ และค่อยๆ ปรับงานทุกชิ้นด้วยตัวเอง การอยู่ใกล้ผลิตภัณฑ์ทำให้รายละเอียดเล็กๆ ไม่ต้องยื่นใบขอประชุมก่อนถึงจะได้แก้",
      "studioQuote": "ทำให้มีประโยชน์ ทำให้ชัดเจน แล้วเหลือที่ว่างเล็กๆ ให้ความรื่นรมย์",
      "closingKicker": "บทต่อไป",
      "closingTitle": "ซอฟต์แวร์ควรทำให้รู้สึกว่า มีใครสักคนใส่ใจมันจริงๆ",
      "closingBody": "Bearagnostic คือบทแรก ส่วนมาตรฐานของงาน จะเหมือนเดิมไม่ว่าบทต่อไปคืออะไร",
      "closingCta": "ดูผลิตภัณฑ์ทั้งหมด"
    },
    "products": {
      "metaDescription": "ผลิตภัณฑ์และเครื่องมือในอนาคตจาก Benedict Interactive",
      "kicker": "ผลิตภัณฑ์",
      "title": "งานต่างกัน แต่มาตรฐานความใส่ใจเท่ากัน",
      "lead": "ซอฟต์แวร์ที่มีหน้าที่ชัดเจน พูดตรงไปตรงมา และมีบุคลิกพอให้จำได้",
      "bearDescription": "ช่วยให้เข้าใจไฟล์รกก่อนลบ สงบ ทำงานใกล้เครื่อง และไม่ได้ตื่นเต้นกับปุ่มวิเศษเท่าไรนัก",
      "bearCta": "ดู Bearagnostic",
      "testKicker": "กำลังทดลองในแล็บ",
      "testTitle": "Benedict Test Center",
      "testDescription": "แพลตฟอร์ม QA และหลักฐานการทดสอบที่วางแผนไว้ สำหรับการทดสอบ รีเทสต์ และเก็บประวัติว่าเกิดอะไรขึ้นจริง",
      "testNote": "ตั้งใจแยกเป็นบริการที่มีระบบความปลอดภัยของตัวเอง เพราะข้อมูลผู้ทดสอบกับหน้าเว็บประชาสัมพันธ์ไม่ควรถูกยัดไว้ในลิ้นชักเดียวกัน"
    },
    "bear": {
      "metaDescription": "Bearagnostic คือผู้ช่วยจัดการไฟล์ Android ที่ให้ความสำคัญกับความเป็นส่วนตัวจาก Benedict Interactive",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "หาไฟล์รก อธิบายความเสี่ยง แล้วค่อยลบอย่างมั่นใจ",
      "lead": "Bearagnostic ช่วยให้คุณเข้าใจพื้นที่จัดเก็บก่อนเริ่มลบ มันหาสิ่งที่รก อธิบายความเสี่ยง แล้วคืนการตัดสินใจสุดท้ายให้เจ้าของเครื่องอย่างที่ควรจะเป็น",
      "featuresKicker": "ทำไมถึงสร้างมันขึ้นมา",
      "featuresTitle": "ลบไฟล์แบบมีบริบท",
      "features": [
        {
          "title": "เห็นว่าอะไรอยู่ในเครื่องจริงๆ",
          "body": "แสดงไฟล์และหมวดต่างๆ โดยไม่ทำทุกเมกะไบต์ให้ดูเหมือนเหตุฉุกเฉิน"
        },
        {
          "title": "เข้าใจก่อนแตะลบ",
          "body": "คำอธิบายที่ชัดช่วยให้ตัดสินใจได้ว่าอะไรไปได้ และอะไรควรอยู่ต่อ"
        },
        {
          "title": "ความเป็นส่วนตัวอยู่ใกล้ตัว",
          "body": "ทิศทางผลิตภัณฑ์เน้นการวิเคราะห์ในเครื่องและเก็บข้อมูลให้น้อยที่สุด"
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Lifetime Pro จ่ายครั้งเดียว ไม่มีค่าสมาชิกรายเดือน",
      "proBody": "Lifetime Pro ราคา 249 บาท จ่ายครั้งเดียว ลูกค้าที่มีสิทธิ์และผ่านการยืนยันแล้วกู้คืน Pro ได้ทันที ส่วนการซื้อใหม่ยังไม่เปิด",
      "proPoints": [
        "Lifetime Pro 249 บาท จ่ายครั้งเดียว",
        "กู้คืน Pro เดิมด้วยอีเมลจากการซื้อที่ผ่านการยืนยัน",
        "สิทธิ์ตรวจสอบจากเซิร์ฟเวอร์ ไม่พึ่งแฟล็กในเครื่อง"
      ],
      "proStatus": "ลูกค้า Pro เดิมกู้คืนสิทธิ์ได้แล้ว",
      "proNote": "ยังไม่เปิดขาย Pro สำหรับการซื้อใหม่ ลูกค้าที่มีสิทธิ์และผ่านการยืนยันแล้วสามารถ Restore Pro ในแอป Production ได้ทันที",
      "supportCta": "ช่วยเหลือ Bearagnostic"
    },
    "support": {
      "metaDescription": "ข้อมูลช่วยเหลือสำหรับผลิตภัณฑ์ของ Benedict Interactive",
      "kicker": "ช่วยเหลือ",
      "title": "ความช่วยเหลือที่ชัดเจน ไม่ต้องเดินเขาวงกต",
      "lead": "ความช่วยเหลืออย่างเป็นทางการอยู่ที่นี่ ใกล้ผลิตภัณฑ์และหาเจอง่าย ไม่ต้องไล่ขุดโพสต์เก่า ลิงก์ไม่ชัดเจน หรือเปิดหลายแท็บเพื่อหาคำตอบ",
      "bearTitle": "Bearagnostic",
      "bearBody": "รวม release notes วิธีติดตั้ง การกู้คืน Pro การแก้ปัญหา และคู่มือใช้งานสำหรับรุ่นที่เปิดให้ดาวน์โหลดอยู่ในปัจจุบันไว้ที่นี่",
      "generalTitle": "Benedict Interactive",
      "generalBody": "เว็บไซต์นี้คือแหล่งข้อมูลหลักของผลิตภัณฑ์ หน้าร้านและโซเชียลอาจลิงก์มาที่นี่ แต่จะไม่ใช่ต้นฉบับความจริง",
      "stagingNote": "ติดต่อฝ่ายช่วยเหลือของ Benedict Interactive ได้ตามปกติ ระหว่างที่กำลังปิดงานอีเมลซัพพอร์ตภายใต้แบรนด์"
    },
    "common": {
      "inDevelopment": "กำลังพัฒนา",
      "planned": "วางแผนแล้ว",
      "viewProduct": "ดูผลิตภัณฑ์",
      "backHome": "กลับหน้าแรก",
      "footerLine": "ซอฟต์แวร์อิสระโดย Benedict J.",
      "footerStaging": "รุ่นสาธารณะ · ดาวน์โหลดไฟล์ที่ยืนยันแล้วจาก Benedict Interactive",
      "skipToContent": "ข้ามไปยังเนื้อหา"
    }
  },
  "es": {
    "nav": {
      "home": "Inicio",
      "products": "Productos",
      "philosophy": "Filosofía",
      "support": "Soporte",
      "language": "Idioma",
      "menu": "Menú"
    },
    "home": {
      "metaDescription": "Software cuidado de Benedict Interactive: claro, capaz, respetuoso con la privacidad y con personalidad propia.",
      "kicker": "Estudio de software independiente · Benedict J.",
      "headlineA": "Software pensado para",
      "headlineB": "una vida digital más tranquila.",
      "lead": "Software pensado para las personas, para un día a día más limpio, simple y luminoso.",
      "primaryCta": "Conoce Bearagnostic",
      "secondaryCta": "Nuestra forma de pensar",
      "proof": [
        "Independiente",
        "Privacidad primero",
        "Hecho con cuidado"
      ],
      "founderRole": "Desarrollador independiente",
      "founderSlogan": "Mejores herramientas. Días más luminosos.",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "próximamente",
        "safe": "Seguro y privado",
        "light": "Ligero",
        "android": "Hecho para Android"
      },
      "philosophyKicker": "Una forma de verlo",
      "philosophyTitle": "La tecnología puede ser seria sin tomarse demasiado en serio.",
      "philosophyBody": "Benedict Interactive crea software que se explica, respeta tu atención y deja sitio para la personalidad. La interfaz puede sonreír; la ingeniería, en cambio, tiene que portarse impecablemente.",
      "productKicker": "Producto destacado",
      "productTitle": "Bearagnostic",
      "productPromise": "Encuentra el desorden. Entiende el riesgo. Limpia con confianza.",
      "productBody": "Un asistente para Android centrado en la privacidad que muestra qué ocupa espacio, explica lo que encuentra y te deja decidir qué merece quedarse.",
      "productTags": [
        "Android",
        "Privacidad primero",
        "Explicaciones claras"
      ],
      "productCta": "Explorar Bearagnostic",
      "productSupport": "Obtener ayuda",
      "realScreen": "Pantalla real de la app",
      "principlesKicker": "Cómo hacemos las cosas",
      "principlesTitle": "Menos teatro. Más cabeza.",
      "principlesIntro": "Tres reglas para mantener el trabajo honesto y, por suerte, poco dramático.",
      "principles": [
        {
          "title": "Útil antes que impresionante",
          "body": "Una función se gana su sitio resolviendo algo real."
        },
        {
          "title": "La claridad también es amabilidad",
          "body": "El buen software no debería obligarte a adivinar qué pretende hacer."
        },
        {
          "title": "La confianza va en los cimientos",
          "body": "La privacidad y los estados honestos son decisiones de diseño, no letra bonita en el pie de página."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Independiente por diseño.",
      "studioBody": "Benedict J. diseña, desarrolla, prueba y sigue afinando cada pieza. Estar cerca del producto significa que un detalle pequeño no tiene que convocar una reunión para que alguien lo arregle.",
      "studioQuote": "Hazlo útil. Hazlo claro. Y deja un poco de sitio para disfrutarlo.",
      "closingKicker": "Lo que viene",
      "closingTitle": "El software debería sentirse como si a alguien le importara de verdad.",
      "closingBody": "Bearagnostic es el primer capítulo. El estándar será el mismo en todo lo que venga después.",
      "closingCta": "Ver los productos"
    },
    "products": {
      "metaDescription": "Productos y futuras herramientas de Benedict Interactive.",
      "kicker": "Productos",
      "title": "Trabajos distintos. El mismo nivel de cuidado.",
      "lead": "Software enfocado, con objetivos claros, estados honestos y suficiente personalidad como para recordarlo.",
      "bearDescription": "Entiende el desorden de tu almacenamiento antes de borrar. Tranquilo, local y con muy poco interés por los botones mágicos.",
      "bearCta": "Explorar Bearagnostic",
      "testKicker": "En el laboratorio",
      "testTitle": "Benedict Test Center",
      "testDescription": "Una plataforma planificada de QA y evidencias de lanzamiento para pruebas estructuradas, revalidación y un historial de lo que ocurrió de verdad.",
      "testNote": "Será un servicio separado y protegido, porque los datos de testers y una web pública no deberían compartir el mismo cajón de la cocina."
    },
    "bear": {
      "metaDescription": "Bearagnostic es un asistente de claridad de archivos para Android centrado en la privacidad, creado por Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Encuentra el desorden. Entiende el riesgo. Limpia con confianza.",
      "lead": "Bearagnostic te ayuda a entender el almacenamiento antes de limpiarlo. Encuentra el desorden, explica el riesgo y deja la decisión final donde corresponde: contigo.",
      "featuresKicker": "Por qué existe",
      "featuresTitle": "Limpieza con contexto.",
      "features": [
        {
          "title": "Mira qué hay realmente",
          "body": "Muestra archivos y categorías sin convertir cada megabyte en una emergencia nacional."
        },
        {
          "title": "Entiende antes de borrar",
          "body": "Las explicaciones claras ayudan a decidir qué puede irse y qué conviene conservar."
        },
        {
          "title": "La privacidad se queda cerca",
          "body": "La dirección del producto prioriza el análisis local y la mínima recogida de datos."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro de por vida. Un solo pago, sin suscripción.",
      "proBody": "Lifetime Pro cuesta 249 THB en un solo pago. Los clientes verificados que ya lo tienen pueden restaurarlo ahora; las nuevas compras aún no están abiertas.",
      "proPoints": [
        "249 THB una vez por Lifetime Pro",
        "Restaura tu Pro existente con el correo de compra verificado",
        "Entitlement verificado por servidor, no un simple indicador local"
      ],
      "proStatus": "La restauración del Pro existente ya está activa",
      "proNote": "Las nuevas compras de Pro aún no están abiertas. Los clientes verificados que ya lo tienen pueden restaurar el acceso en la app de producción.",
      "supportCta": "Soporte de Bearagnostic"
    },
    "support": {
      "metaDescription": "Información de soporte para los productos de Benedict Interactive.",
      "kicker": "Soporte",
      "title": "Ayuda clara, sin laberintos.",
      "lead": "La ayuda oficial está aquí, cerca del producto y fácil de encontrar. Sin rebuscar entre publicaciones antiguas, enlaces dudosos ni cinco pestañas olvidadas.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Aquí encontrarás notas de versión, instalación, Restore Pro, solución de problemas y orientación para la versión pública actual.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Este sitio es la fuente oficial de información del producto. Las tiendas y redes pueden enlazar aquí; no sustituyen a la fuente original.",
      "stagingNote": "El soporte público de Benedict Interactive está disponible mientras terminamos la dirección de soporte de marca."
    },
    "common": {
      "inDevelopment": "En desarrollo",
      "planned": "Planificado",
      "viewProduct": "Ver producto",
      "backHome": "Volver al inicio",
      "footerLine": "Software independiente de Benedict J.",
      "footerStaging": "Versión pública · Descargas verificadas por Benedict Interactive",
      "skipToContent": "Saltar al contenido"
    }
  },
  "pt-br": {
    "nav": {
      "home": "Início",
      "products": "Produtos",
      "philosophy": "Filosofia",
      "support": "Suporte",
      "language": "Idioma",
      "menu": "Menu"
    },
    "home": {
      "metaDescription": "Software bem pensado da Benedict Interactive: claro, competente, cuidadoso com a privacidade e cheio de personalidade.",
      "kicker": "Estúdio independente de software · Benedict J.",
      "headlineA": "Software para deixar",
      "headlineB": "a vida digital mais leve.",
      "lead": "Software pensado para pessoas, para um dia a dia mais limpo, simples e leve.",
      "primaryCta": "Conheça o Bearagnostic",
      "secondaryCta": "Veja nossa filosofia",
      "proof": [
        "Independente",
        "Privacidade em mente",
        "Feito com cuidado"
      ],
      "founderRole": "Desenvolvedor independente",
      "founderSlogan": "Ferramentas melhores. Dias mais leves!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "em breve",
        "safe": "Seguro e privado",
        "light": "Leve",
        "android": "Feito para Android"
      },
      "philosophyKicker": "Nosso jeito de pensar",
      "philosophyTitle": "Tecnologia pode ser séria sem precisar ficar de cara fechada.",
      "philosophyBody": "A Benedict Interactive cria software que se explica, respeita sua atenção e ainda deixa espaço para personalidade. A interface pode sorrir. A engenharia continua tendo que se comportar muito bem.",
      "productKicker": "Produto em destaque",
      "productTitle": "Bearagnostic",
      "productPromise": "Encontre a bagunça. Entenda o risco. Limpe com confiança.",
      "productBody": "Um assistente de arquivos para Android com privacidade em primeiro plano: mostra o que está ocupando espaço, explica o que encontrou e deixa você decidir o que merece ficar.",
      "productTags": [
        "Android",
        "Privacidade primeiro",
        "Explicações claras"
      ],
      "productCta": "Explorar Bearagnostic",
      "productSupport": "Obter suporte",
      "realScreen": "Tela real do app",
      "principlesKicker": "Como a gente trabalha",
      "principlesTitle": "Menos espetáculo. Mais cabeça.",
      "principlesIntro": "Três regras mantêm o trabalho honesto — e deliciosamente sem drama.",
      "principles": [
        {
          "title": "Útil antes de impressionante",
          "body": "Uma função ganha seu lugar resolvendo um problema de verdade."
        },
        {
          "title": "Clareza também é gentileza",
          "body": "Software bom não deveria fazer você adivinhar o que ele pretende."
        },
        {
          "title": "Confiança nasce na estrutura",
          "body": "Privacidade e estados honestos são decisões de design, não frases bonitas no rodapé."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Independente por escolha.",
      "studioBody": "Benedict J. desenha, desenvolve, testa e continua refinando cada trabalho. Ficar perto do produto significa que um detalhe pequeno não precisa abrir um chamado para marcar uma reunião antes de ser corrigido.",
      "studioQuote": "Faça ser útil. Faça ser claro. E deixe um espacinho para o encanto.",
      "closingKicker": "O que vem depois",
      "closingTitle": "Software deveria parecer feito por alguém que realmente se importou.",
      "closingBody": "Bearagnostic é o primeiro capítulo. O padrão continua o mesmo no que vier depois.",
      "closingCta": "Ver os produtos"
    },
    "products": {
      "metaDescription": "Produtos e futuras ferramentas da Benedict Interactive.",
      "kicker": "Produtos",
      "title": "Trabalhos diferentes. O mesmo cuidado.",
      "lead": "Software focado, com função clara, estados honestos e personalidade suficiente para ficar na memória.",
      "bearDescription": "Entenda a bagunça do armazenamento antes de apagar. Calmo, local e curiosamente pouco impressionado com botões mágicos.",
      "bearCta": "Explorar Bearagnostic",
      "testKicker": "No laboratório",
      "testTitle": "Benedict Test Center",
      "testDescription": "Uma plataforma planejada de QA e evidências de release para testes estruturados, retestes e um histórico do que realmente aconteceu.",
      "testNote": "Será um serviço separado e protegido — porque dados de testers e páginas públicas não deveriam morar na mesma gaveta da cozinha."
    },
    "bear": {
      "metaDescription": "Bearagnostic é um assistente de arquivos para Android com foco em privacidade, criado pela Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Encontre a bagunça. Entenda o risco. Limpe com confiança.",
      "lead": "Bearagnostic ajuda você a entender o armazenamento antes de limpar. Ele encontra a bagunça, explica o risco e deixa a decisão final onde deveria estar: com você.",
      "featuresKicker": "Por que ele existe",
      "featuresTitle": "Limpeza com contexto.",
      "features": [
        {
          "title": "Veja o que realmente está lá",
          "body": "Mostre arquivos e categorias sem transformar cada megabyte em estado de emergência."
        },
        {
          "title": "Entenda antes de apagar",
          "body": "Explicações claras ajudam a decidir o que pode sair e o que provavelmente deveria ficar."
        },
        {
          "title": "Privacidade por perto",
          "body": "A direção do produto prioriza análise local e coleta mínima de dados."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro vitalício. Um pagamento, sem assinatura.",
      "proBody": "Lifetime Pro custa 249 THB em um único pagamento. Clientes já verificados podem restaurar o acesso agora; novas compras ainda não estão abertas.",
      "proPoints": [
        "249 THB uma vez pelo Lifetime Pro",
        "Restaure o Pro existente com o e-mail de compra verificado",
        "Entitlement verificado no servidor, não um simples sinalizador local"
      ],
      "proStatus": "A restauração do Pro existente já está ativa",
      "proNote": "Novas compras de Pro ainda não estão abertas. Clientes já verificados podem restaurar o acesso no app de produção.",
      "supportCta": "Suporte do Bearagnostic"
    },
    "support": {
      "metaDescription": "Informações de suporte para produtos da Benedict Interactive.",
      "kicker": "Suporte",
      "title": "Ajuda clara, sem labirinto.",
      "lead": "A ajuda oficial está aqui, perto do produto e fácil de achar. Nada de garimpar posts antigos, links duvidosos ou cinco abas esquecidas.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Aqui ficam notas da versão, instalação, Restore Pro, solução de problemas e orientações para a versão pública atual.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Este site é a fonte oficial das informações de produto. Lojas e redes sociais podem apontar para cá; não substituem a fonte.",
      "stagingNote": "O suporte público da Benedict Interactive está disponível enquanto finalizamos o endereço de suporte com a marca."
    },
    "common": {
      "inDevelopment": "Em desenvolvimento",
      "planned": "Planejado",
      "viewProduct": "Ver produto",
      "backHome": "Voltar ao início",
      "footerLine": "Software independente por Benedict J.",
      "footerStaging": "Versão pública · Downloads verificados pela Benedict Interactive",
      "skipToContent": "Ir para o conteúdo"
    }
  },
  "fr": {
    "nav": {
      "home": "Accueil",
      "products": "Produits",
      "philosophy": "Philosophie",
      "support": "Assistance",
      "language": "Langue",
      "menu": "Menu"
    },
    "home": {
      "metaDescription": "Des logiciels soignés par Benedict Interactive : clairs, capables, respectueux de la vie privée et avec une vraie personnalité.",
      "kicker": "Studio logiciel indépendant · Benedict J.",
      "headlineA": "Des logiciels clairs pour",
      "headlineB": "une vie numérique plus sereine.",
      "lead": "Des logiciels pensés pour les gens, pour un quotidien plus net, plus simple et plus lumineux.",
      "primaryCta": "Découvrir Bearagnostic",
      "secondaryCta": "Notre point de vue",
      "proof": [
        "Indépendant",
        "Respectueux de la vie privée",
        "Fait avec soin"
      ],
      "founderRole": "Développeur indépendant",
      "founderSlogan": "De meilleurs outils. Des jours plus lumineux !",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "bientôt",
        "safe": "Sûr et privé",
        "light": "Léger",
        "android": "Conçu pour Android"
      },
      "philosophyKicker": "Notre point de vue",
      "philosophyTitle": "La technologie peut être sérieuse sans se prendre trop au sérieux.",
      "philosophyBody": "Benedict Interactive conçoit des logiciels qui s’expliquent, respectent votre attention et gardent une place pour la personnalité. L’interface peut sourire. L’ingénierie, elle, doit rester irréprochable.",
      "productKicker": "Produit à la une",
      "productTitle": "Bearagnostic",
      "productPromise": "Repérez l’encombrement. Comprenez le risque. Nettoyez en confiance.",
      "productBody": "Un assistant Android axé sur la confidentialité qui montre ce qui prend de la place, explique ce qu’il trouve et vous laisse décider ce qui mérite de rester.",
      "productTags": [
        "Android",
        "Confidentialité d’abord",
        "Explications claires"
      ],
      "productCta": "Explorer Bearagnostic",
      "productSupport": "Obtenir de l’aide",
      "realScreen": "Écran réel de l’app",
      "principlesKicker": "Comment nous travaillons",
      "principlesTitle": "Moins de spectacle. Plus de réflexion.",
      "principlesIntro": "Trois règles pour garder le travail honnête — et agréablement peu dramatique.",
      "principles": [
        {
          "title": "Utile avant d’être impressionnant",
          "body": "Une fonction mérite sa place lorsqu’elle résout quelque chose de réel."
        },
        {
          "title": "La clarté est une forme de respect",
          "body": "Un bon logiciel ne devrait pas vous obliger à deviner ses intentions."
        },
        {
          "title": "La confiance se construit dans la structure",
          "body": "La vie privée et les états honnêtes sont des choix de conception, pas du texte de bas de page."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Indépendant par choix.",
      "studioBody": "Benedict J. conçoit, développe, teste et améliore continuellement le travail ici. Rester près du produit évite qu’un petit détail doive réserver une réunion avant d’être corrigé.",
      "studioQuote": "Rendez-le utile. Rendez-le clair. Et gardez un peu de place pour le plaisir.",
      "closingKicker": "La suite",
      "closingTitle": "Un logiciel devrait donner l’impression que quelqu’un s’en est vraiment soucié.",
      "closingBody": "Bearagnostic est le premier chapitre. Le niveau d’exigence restera le même pour la suite.",
      "closingCta": "Voir les produits"
    },
    "products": {
      "metaDescription": "Produits et futurs outils de Benedict Interactive.",
      "kicker": "Produits",
      "title": "Des usages différents. Le même soin.",
      "lead": "Des logiciels ciblés, des objectifs clairs, des états honnêtes et juste assez de personnalité pour qu’on s’en souvienne.",
      "bearDescription": "Comprenez l’encombrement avant de supprimer. Calme, local et délicieusement peu fasciné par les boutons magiques.",
      "bearCta": "Explorer Bearagnostic",
      "testKicker": "Au labo",
      "testTitle": "Benedict Test Center",
      "testDescription": "Une plateforme QA et de preuves de release prévue pour les tests structurés, les retests et un historique de ce qui s’est réellement passé.",
      "testNote": "Prévu comme un service séparé et sécurisé — parce que les données des testeurs et les pages marketing publiques n’ont rien à faire dans le même tiroir."
    },
    "bear": {
      "metaDescription": "Bearagnostic est un assistant Android de clarté des fichiers, axé sur la confidentialité, créé par Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Repérez l’encombrement. Comprenez le risque. Nettoyez en confiance.",
      "lead": "Bearagnostic vous aide à comprendre votre stockage avant de le nettoyer. Il repère l’encombrement, explique le risque et laisse la décision finale à la bonne personne : vous.",
      "featuresKicker": "Pourquoi il existe",
      "featuresTitle": "Nettoyer avec le contexte.",
      "features": [
        {
          "title": "Voyez ce qui est réellement là",
          "body": "Affichez fichiers et catégories sans transformer chaque mégaoctet en urgence nationale."
        },
        {
          "title": "Comprenez avant de supprimer",
          "body": "Des explications claires aident à décider ce qui peut partir et ce qui devrait probablement rester."
        },
        {
          "title": "La vie privée reste proche",
          "body": "La direction produit privilégie l’analyse locale et la collecte minimale de données."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro à vie. Un seul paiement, sans abonnement.",
      "proBody": "Lifetime Pro coûte 249 THB en un seul paiement. Les clients déjà vérifiés peuvent restaurer leur accès dès maintenant ; les nouveaux achats ne sont pas encore ouverts.",
      "proPoints": [
        "249 THB une seule fois pour Lifetime Pro",
        "Restaurez votre Pro existant avec l’e-mail d’achat vérifié",
        "Entitlement vérifié côté serveur, pas un simple indicateur local"
      ],
      "proStatus": "La restauration des accès Pro existants est active",
      "proNote": "Les nouveaux achats Pro ne sont pas encore ouverts. Les clients déjà vérifiés peuvent restaurer leur accès dans l’application de production.",
      "supportCta": "Assistance Bearagnostic"
    },
    "support": {
      "metaDescription": "Informations d’assistance pour les produits Benedict Interactive.",
      "kicker": "Assistance",
      "title": "Une aide claire, sans labyrinthe.",
      "lead": "L’aide officielle est ici, près du produit et facile à trouver. Pas besoin de fouiller d’anciens posts, des liens douteux ou cinq onglets oubliés.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Vous trouverez ici les notes de version, l’installation, Restore Pro, le dépannage et les conseils pour la version publique actuelle.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Ce site est la source officielle des informations produit. Les boutiques et réseaux sociaux peuvent y renvoyer ; ils ne remplacent pas la source.",
      "stagingNote": "Le support public Benedict Interactive reste disponible pendant la finalisation de notre adresse de support de marque."
    },
    "common": {
      "inDevelopment": "En développement",
      "planned": "Prévu",
      "viewProduct": "Voir le produit",
      "backHome": "Retour à l’accueil",
      "footerLine": "Logiciels indépendants par Benedict J.",
      "footerStaging": "Version publique · Téléchargements vérifiés par Benedict Interactive",
      "skipToContent": "Aller au contenu"
    }
  },
  "de": {
    "nav": {
      "home": "Start",
      "products": "Produkte",
      "philosophy": "Philosophie",
      "support": "Support",
      "language": "Sprache",
      "menu": "Menü"
    },
    "home": {
      "metaDescription": "Durchdachte Software von Benedict Interactive: klar, leistungsfähig, datenschutzbewusst und mit eigener Persönlichkeit.",
      "kicker": "Unabhängiges Softwarestudio · Benedict J.",
      "headlineA": "Freundliche Software für",
      "headlineB": "ein ruhigeres digitales Leben.",
      "lead": "Menschlich gedachte Software für einen aufgeräumteren, einfacheren und helleren digitalen Alltag.",
      "primaryCta": "Bearagnostic kennenlernen",
      "secondaryCta": "Unsere Haltung",
      "proof": [
        "Unabhängig",
        "Datenschutzbewusst",
        "Mit Sorgfalt gebaut"
      ],
      "founderRole": "Unabhängiger Entwickler",
      "founderSlogan": "Bessere Werkzeuge. Schönere Tage!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "demnächst",
        "safe": "Sicher & privat",
        "light": "Leichtgewichtig",
        "android": "Für Android gemacht"
      },
      "philosophyKicker": "Eine Haltung",
      "philosophyTitle": "Technologie darf ernsthaft sein, ohne sich ständig ernst zu nehmen.",
      "philosophyBody": "Benedict Interactive baut Software, die sich selbst erklärt, Aufmerksamkeit respektiert und Platz für Persönlichkeit lässt. Die Oberfläche darf lächeln. Die Technik dahinter muss trotzdem sauber arbeiten.",
      "productKicker": "Im Mittelpunkt",
      "productTitle": "Bearagnostic",
      "productPromise": "Ballast finden. Risiko verstehen. Sicher aufräumen.",
      "productBody": "Ein datenschutzorientierter Android-Dateiassistent, der zeigt, was Speicher belegt, Funde verständlich erklärt und die Entscheidung bei Ihnen lässt.",
      "productTags": [
        "Android",
        "Datenschutz zuerst",
        "Klare Erklärungen"
      ],
      "productCta": "Bearagnostic entdecken",
      "productSupport": "Support öffnen",
      "realScreen": "Echter App-Bildschirm",
      "principlesKicker": "Wie wir arbeiten",
      "principlesTitle": "Weniger Show. Mehr Denken.",
      "principlesIntro": "Drei Regeln halten die Arbeit ehrlich — und angenehm frei von Drama.",
      "principles": [
        {
          "title": "Nützlich vor beeindruckend",
          "body": "Eine Funktion verdient ihren Platz, wenn sie ein echtes Problem löst."
        },
        {
          "title": "Klarheit ist Rücksicht",
          "body": "Gute Software sollte niemanden ihre Absichten erraten lassen."
        },
        {
          "title": "Vertrauen gehört in die Struktur",
          "body": "Datenschutz und ehrliche Zustände sind Designentscheidungen, kein Kleingedrucktes im Footer."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Aus Überzeugung unabhängig.",
      "studioBody": "Benedict J. entwirft, entwickelt, testet und verbessert die Arbeit hier laufend. Wer nah am Produkt bleibt, muss für ein kleines Detail nicht erst einen Termin beantragen.",
      "studioQuote": "Mach es nützlich. Mach es klar. Und lass ein wenig Platz für Freude.",
      "closingKicker": "Was als Nächstes kommt",
      "closingTitle": "Software sollte sich so anfühlen, als hätte sich jemand wirklich darum gekümmert.",
      "closingBody": "Bearagnostic ist das erste Kapitel. Der Anspruch bleibt bei allem, was folgt, derselbe.",
      "closingCta": "Produkte ansehen"
    },
    "products": {
      "metaDescription": "Produkte und künftige Werkzeuge von Benedict Interactive.",
      "kicker": "Produkte",
      "title": "Andere Aufgaben. Derselbe Anspruch.",
      "lead": "Fokussierte Software mit klaren Aufgaben, ehrlichen Zuständen und genug Persönlichkeit, um im Gedächtnis zu bleiben.",
      "bearDescription": "Speicherballast verstehen, bevor etwas gelöscht wird. Ruhig, lokal gedacht und erfrischend unbeeindruckt von Zauberknöpfen.",
      "bearCta": "Bearagnostic entdecken",
      "testKicker": "Im Labor",
      "testTitle": "Benedict Test Center",
      "testDescription": "Eine geplante QA- und Release-Evidence-Plattform für strukturierte Tests, Retests und einen nachvollziehbaren Verlauf dessen, was wirklich passiert ist.",
      "testNote": "Als separater, abgesicherter Dienst geplant — denn Testerdaten und öffentliche Marketingseiten gehören nicht in dieselbe Küchenschublade."
    },
    "bear": {
      "metaDescription": "Bearagnostic ist ein datenschutzorientierter Android-Dateiassistent von Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Ballast finden. Risiko verstehen. Sicher aufräumen.",
      "lead": "Bearagnostic hilft, Speicher zu verstehen, bevor aufgeräumt wird. Es findet Ballast, erklärt das Risiko und lässt die letzte Entscheidung dort, wo sie hingehört: bei Ihnen.",
      "featuresKicker": "Warum es das gibt",
      "featuresTitle": "Aufräumen mit Kontext.",
      "features": [
        {
          "title": "Sehen, was wirklich da ist",
          "body": "Dateien und Kategorien sichtbar machen, ohne jedes Megabyte zum Notfall zu erklären."
        },
        {
          "title": "Verstehen, bevor gelöscht wird",
          "body": "Klare Erklärungen helfen einzuschätzen, was weg kann und was besser bleibt."
        },
        {
          "title": "Datenschutz bleibt nah",
          "body": "Die Produktlinie bevorzugt lokale Analyse und minimale Datenerhebung."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro auf Lebenszeit. Einmal zahlen, kein Abo.",
      "proBody": "Lifetime Pro kostet einmalig 249 THB. Bereits verifizierte Kunden können ihren Zugang jetzt wiederherstellen; neue Käufe sind noch nicht geöffnet.",
      "proPoints": [
        "Einmalig 249 THB für Lifetime Pro",
        "Bestehendes Pro mit der verifizierten Kauf-E-Mail wiederherstellen",
        "Serververifiziertes Entitlement statt eines anfälligen lokalen Flags"
      ],
      "proStatus": "Die Wiederherstellung bestehender Pro-Zugänge ist aktiv",
      "proNote": "Neue Pro-Käufe sind noch nicht geöffnet. Bereits verifizierte Kunden können ihren Zugang in der Produktions-App wiederherstellen.",
      "supportCta": "Bearagnostic-Support"
    },
    "support": {
      "metaDescription": "Supportinformationen für Produkte von Benedict Interactive.",
      "kicker": "Support",
      "title": "Klare Hilfe, ohne Labyrinth.",
      "lead": "Offizielle Hilfe ist hier gebündelt: nah am Produkt und leicht zu finden. Keine Suche in alten Posts, dubiosen Links oder fünf vergessenen Tabs.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Hier findest du Release Notes, Installationshilfe, Restore Pro, Fehlerbehebung und Hinweise für die aktuelle öffentliche Version.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Diese Website ist die maßgebliche Quelle für Produktinformationen. Store-Einträge und Social Posts können hierher verweisen; sie sind nicht die Quelle selbst.",
      "stagingNote": "Der öffentliche Benedict-Interactive-Support ist verfügbar, während wir die gebrandete Support-Adresse finalisieren."
    },
    "common": {
      "inDevelopment": "In Entwicklung",
      "planned": "Geplant",
      "viewProduct": "Produkt ansehen",
      "backHome": "Zur Startseite",
      "footerLine": "Unabhängige Software von Benedict J.",
      "footerStaging": "Öffentliche Version · Verifizierte Downloads von Benedict Interactive",
      "skipToContent": "Zum Inhalt springen"
    }
  },
  "it": {
    "nav": {
      "home": "Home",
      "products": "Prodotti",
      "philosophy": "Filosofia",
      "support": "Supporto",
      "language": "Lingua",
      "menu": "Menu"
    },
    "home": {
      "metaDescription": "Software curato da Benedict Interactive: chiaro, capace, attento alla privacy e con una personalità tutta sua.",
      "kicker": "Studio software indipendente · Benedict J.",
      "headlineA": "Software chiaro per",
      "headlineB": "una vita digitale più serena.",
      "lead": "Software pensato per le persone, per giornate più ordinate, semplici e luminose.",
      "primaryCta": "Scopri Bearagnostic",
      "secondaryCta": "Il nostro punto di vista",
      "proof": [
        "Indipendente",
        "Attento alla privacy",
        "Fatto con cura"
      ],
      "founderRole": "Sviluppatore indipendente",
      "founderSlogan": "Strumenti migliori. Giornate più luminose!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "presto",
        "safe": "Sicuro e privato",
        "light": "Leggero",
        "android": "Creato per Android"
      },
      "philosophyKicker": "Un punto di vista",
      "philosophyTitle": "La tecnologia può essere seria senza prendersi troppo sul serio.",
      "philosophyBody": "Benedict Interactive crea software che si spiega, rispetta l’attenzione e lascia spazio alla personalità. L’interfaccia può sorridere. L’ingegneria, invece, deve comportarsi benissimo.",
      "productKicker": "Prodotto in evidenza",
      "productTitle": "Bearagnostic",
      "productPromise": "Trova il disordine. Capisci il rischio. Pulisci con sicurezza.",
      "productBody": "Un assistente Android orientato alla privacy che mostra cosa occupa spazio, spiega ciò che trova e lascia a te la decisione su cosa merita di restare.",
      "productTags": [
        "Android",
        "Privacy prima di tutto",
        "Spiegazioni chiare"
      ],
      "productCta": "Esplora Bearagnostic",
      "productSupport": "Ricevi supporto",
      "realScreen": "Schermata reale dell’app",
      "principlesKicker": "Come lavoriamo",
      "principlesTitle": "Meno teatro. Più pensiero.",
      "principlesIntro": "Tre regole per mantenere il lavoro onesto — e piacevolmente poco drammatico.",
      "principles": [
        {
          "title": "Utile prima che impressionante",
          "body": "Una funzione si guadagna il posto risolvendo qualcosa di reale."
        },
        {
          "title": "La chiarezza è una forma di gentilezza",
          "body": "Il buon software non dovrebbe costringerti a indovinare le sue intenzioni."
        },
        {
          "title": "La fiducia sta nella struttura",
          "body": "Privacy e stati onesti sono scelte di design, non testo da fondo pagina."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Indipendente per scelta.",
      "studioBody": "Benedict J. progetta, sviluppa, testa e continua a rifinire il lavoro. Restare vicino al prodotto significa che un piccolo dettaglio non deve fissare una riunione prima di poter essere sistemato.",
      "studioQuote": "Rendilo utile. Rendilo chiaro. E lascia un po’ di spazio alla meraviglia.",
      "closingKicker": "Quello che viene dopo",
      "closingTitle": "Il software dovrebbe sembrare fatto da qualcuno a cui importava davvero.",
      "closingBody": "Bearagnostic è il primo capitolo. Lo standard resterà lo stesso per ciò che verrà.",
      "closingCta": "Scopri i prodotti"
    },
    "products": {
      "metaDescription": "Prodotti e strumenti futuri di Benedict Interactive.",
      "kicker": "Prodotti",
      "title": "Lavori diversi. La stessa cura.",
      "lead": "Software focalizzato, con compiti chiari, stati onesti e abbastanza personalità da farsi ricordare.",
      "bearDescription": "Capisci il disordine nello spazio di archiviazione prima di eliminare. Calmo, locale e sorprendentemente poco interessato ai pulsanti magici.",
      "bearCta": "Esplora Bearagnostic",
      "testKicker": "In laboratorio",
      "testTitle": "Benedict Test Center",
      "testDescription": "Una piattaforma QA e di prove di rilascio pianificata per test strutturati, retest e una cronologia di ciò che è successo davvero.",
      "testNote": "Previsto come servizio separato e protetto — perché i dati dei tester e le pagine marketing pubbliche non dovrebbero stare nello stesso cassetto della cucina."
    },
    "bear": {
      "metaDescription": "Bearagnostic è un assistente file Android orientato alla privacy, creato da Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Trova il disordine. Capisci il rischio. Pulisci con sicurezza.",
      "lead": "Bearagnostic ti aiuta a capire lo spazio di archiviazione prima di pulirlo. Trova il disordine, spiega il rischio e lascia la decisione finale dove deve stare: nelle tue mani.",
      "featuresKicker": "Perché esiste",
      "featuresTitle": "Pulizia con contesto.",
      "features": [
        {
          "title": "Vedi cosa c’è davvero",
          "body": "Porta alla luce file e categorie senza trasformare ogni megabyte in un’emergenza."
        },
        {
          "title": "Capisci prima di eliminare",
          "body": "Spiegazioni chiare aiutano a valutare cosa può andare e cosa sarebbe meglio tenere."
        },
        {
          "title": "La privacy resta vicina",
          "body": "La direzione del prodotto privilegia analisi locale e raccolta minima dei dati."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro a vita. Un solo pagamento, nessun abbonamento.",
      "proBody": "Lifetime Pro costa 249 THB una tantum. I clienti già verificati possono ripristinare l’accesso ora; i nuovi acquisti non sono ancora aperti.",
      "proPoints": [
        "249 THB una volta per Lifetime Pro",
        "Ripristina il Pro esistente con l’e-mail di acquisto verificata",
        "Entitlement verificato dal server, non un semplice flag locale"
      ],
      "proStatus": "Il ripristino del Pro già acquistato è attivo",
      "proNote": "I nuovi acquisti Pro non sono ancora aperti. I clienti già verificati possono ripristinare l’accesso nell’app di produzione.",
      "supportCta": "Supporto Bearagnostic"
    },
    "support": {
      "metaDescription": "Informazioni di supporto per i prodotti Benedict Interactive.",
      "kicker": "Supporto",
      "title": "Aiuto chiaro, senza labirinti.",
      "lead": "L’assistenza ufficiale è qui, vicina al prodotto e facile da trovare. Niente ricerche tra vecchi post, link poco chiari o cinque schede dimenticate.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Qui trovi note di rilascio, installazione, Restore Pro, risoluzione dei problemi e guide per la versione pubblica attuale.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Questo sito è la fonte ufficiale delle informazioni di prodotto. Store e social possono rimandare qui; non sostituiscono la fonte.",
      "stagingNote": "Il supporto pubblico Benedict Interactive è disponibile mentre finalizziamo l’indirizzo di assistenza con il nostro brand."
    },
    "common": {
      "inDevelopment": "In sviluppo",
      "planned": "Pianificato",
      "viewProduct": "Vedi prodotto",
      "backHome": "Torna alla home",
      "footerLine": "Software indipendente di Benedict J.",
      "footerStaging": "Versione pubblica · Download verificati da Benedict Interactive",
      "skipToContent": "Vai al contenuto"
    }
  },
  "ja": {
    "nav": {
      "home": "ホーム",
      "products": "プロダクト",
      "philosophy": "考え方",
      "support": "サポート",
      "language": "言語",
      "menu": "メニュー"
    },
    "home": {
      "metaDescription": "Benedict Interactiveが丁寧につくる、わかりやすく、頼れて、プライバシーにも配慮したソフトウェア。少しだけ個性もあります。",
      "kicker": "インディペンデント・ソフトウェアスタジオ · Benedict J.",
      "headlineA": "デジタルな毎日に、",
      "headlineB": "明るく穏やかなソフトウェアを。",
      "lead": "人を中心に考えたソフトウェアで、毎日をもっとすっきり、シンプルに、明るく。",
      "primaryCta": "Bearagnosticを見る",
      "secondaryCta": "ものづくりの考え方",
      "proof": [
        "インディペンデント",
        "プライバシーに配慮",
        "丁寧につくる"
      ],
      "founderRole": "インディペンデント開発者",
      "founderSlogan": "もっと良い道具で、もっと明るい毎日を。",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "近日公開",
        "safe": "安全・プライベート",
        "light": "軽快",
        "android": "Android向け"
      },
      "philosophyKicker": "私たちの考え方",
      "philosophyTitle": "テクノロジーは真面目でいい。でも、ずっと真顔でいる必要はありません。",
      "philosophyBody": "Benedict Interactiveが目指すのは、自分の動きをきちんと説明し、人の注意をむやみに奪わず、少しの個性を残したソフトウェア。UIは笑ってもいい。中の仕組みは、きっちり働きます。",
      "productKicker": "注目のプロダクト",
      "productTitle": "Bearagnostic",
      "productPromise": "不要なものを見つける。リスクを理解する。納得して片づける。",
      "productBody": "Android向けのファイル整理アシスタント。何が容量を使っているのかを見せ、見つけたものを説明し、残すか消すかの判断はあなたに委ねます。プライバシーも最初から大切にします。",
      "productTags": [
        "Android",
        "プライバシー重視",
        "わかりやすい説明"
      ],
      "productCta": "Bearagnosticを詳しく見る",
      "productSupport": "サポートを見る",
      "realScreen": "実際のアプリ画面",
      "principlesKicker": "つくり方のルール",
      "principlesTitle": "演出は少なめ。考えることは多め。",
      "principlesIntro": "仕事を誠実に、そして妙に大げさにしないための3つのルールです。",
      "principles": [
        {
          "title": "まず役に立つこと",
          "body": "機能は、実際の問題を解決してはじめて居場所を得ます。"
        },
        {
          "title": "わかりやすさは思いやり",
          "body": "良いソフトウェアは、利用者に意図を推理させません。"
        },
        {
          "title": "信頼は構造に組み込む",
          "body": "プライバシーや正直な状態表示は、フッターの美辞麗句ではなく設計そのものです。"
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "インディペンデントであることも、設計の一部。",
      "studioBody": "Benedict J.が設計し、つくり、試し、そして少しずつ磨き続けています。プロダクトとの距離が近いので、小さな違和感を直すために会議の予約から始める必要はありません。",
      "studioQuote": "役に立つこと。わかりやすいこと。そして、少しだけ楽しいこと。",
      "closingKicker": "これから",
      "closingTitle": "ソフトウェアには、「ちゃんと気にかけてつくられた」感じがあっていい。",
      "closingBody": "Bearagnosticは最初の章です。次に何をつくっても、基準は変えません。",
      "closingCta": "プロダクトを見る"
    },
    "products": {
      "metaDescription": "Benedict Interactiveのプロダクトと、これからのツール。",
      "kicker": "プロダクト",
      "title": "役割は違っても、丁寧さは同じ。",
      "lead": "目的がはっきりしていて、状態に正直で、少しだけ記憶に残る。そんなソフトウェアをつくります。",
      "bearDescription": "削除する前に、まず容量の中身を理解する。落ち着いていて、端末中心で、魔法のボタンにはあまり興味がありません。",
      "bearCta": "Bearagnosticを見る",
      "testKicker": "ラボで準備中",
      "testTitle": "Benedict Test Center",
      "testDescription": "構造化されたテスト、再テスト、そして「実際に何が起きたか」を残すためのQA／リリース証跡プラットフォームを計画しています。",
      "testNote": "テスター情報と公開マーケティングページを同じ引き出しに入れるのは気持ちが悪いので、独立した安全なサービスとして設計します。"
    },
    "bear": {
      "metaDescription": "Bearagnosticは、Benedict Interactiveが開発するプライバシー重視のAndroidファイル整理アシスタントです。",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "不要なものを見つける。リスクを理解する。納得して片づける。",
      "lead": "Bearagnosticは、削除を始める前にストレージを理解するためのアプリです。不要なものを見つけ、リスクを説明し、最後の判断は本来あるべき場所――あなたの手元に残します。",
      "featuresKicker": "なぜつくるのか",
      "featuresTitle": "文脈のあるクリーンアップ。",
      "features": [
        {
          "title": "本当にあるものを見る",
          "body": "ファイルやカテゴリを見せます。すべての1MBを緊急事態のようには扱いません。"
        },
        {
          "title": "消す前に理解する",
          "body": "わかりやすい説明で、消してよいものと残したほうがよいものを判断しやすくします。"
        },
        {
          "title": "プライバシーは近くに置く",
          "body": "プロダクトの方向性は、端末内での分析と最小限のデータ収集を優先します。"
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "買い切りの Lifetime Pro。サブスクなし。",
      "proBody": "Lifetime Pro は 249 THB の買い切りです。確認済みの既存ユーザーは今すぐアクセスを復元できます。新規購入はまだ開始していません。",
      "proPoints": [
        "Lifetime Pro は 249 THB の買い切り",
        "確認済みの購入メールで既存 Pro を復元",
        "壊れやすい端末内フラグではなく、サーバーで利用権を検証"
      ],
      "proStatus": "既存の Pro は今すぐ復元できます",
      "proNote": "Pro の新規購入はまだ開始していません。確認済みの既存ユーザーは本番アプリから Restore Pro を利用できます。",
      "supportCta": "Bearagnosticサポート"
    },
    "support": {
      "metaDescription": "Benedict Interactive製品のサポート情報。",
      "kicker": "サポート",
      "title": "迷路のない、わかりやすいサポート。",
      "lead": "公式サポートはここにまとまっています。製品の近くに、見つけやすく。古い投稿や不明なリンク、開きっぱなしのタブを探し回る必要はありません。",
      "bearTitle": "Bearagnostic",
      "bearBody": "現在公開中のバージョン向けに、リリースノート、インストール、Restore Pro、トラブルシューティング、使い方をまとめています。",
      "generalTitle": "Benedict Interactive",
      "generalBody": "このサイトが製品情報の公式な基準点です。ストアやSNSからここへ案内することはあっても、情報の原本はここに置きます。",
      "stagingNote": "ブランド専用サポートアドレスの準備中も、Benedict Interactive の公開サポートは利用できます。"
    },
    "common": {
      "inDevelopment": "開発中",
      "planned": "計画中",
      "viewProduct": "プロダクトを見る",
      "backHome": "ホームへ戻る",
      "footerLine": "Benedict J.によるインディペンデント・ソフトウェア",
      "footerStaging": "公開版 · Benedict Interactive による検証済みダウンロード",
      "skipToContent": "本文へ移動"
    }
  },
  "ko": {
    "nav": {
      "home": "홈",
      "products": "제품",
      "philosophy": "철학",
      "support": "지원",
      "language": "언어",
      "menu": "메뉴"
    },
    "home": {
      "metaDescription": "Benedict Interactive가 세심하게 만드는 소프트웨어. 명확하고, 믿을 만하고, 개인정보를 존중하며, 자기만의 성격도 있습니다.",
      "kicker": "인디 소프트웨어 스튜디오 · Benedict J.",
      "headlineA": "더 차분한 디지털 일상을 위한",
      "headlineB": "밝고 다정한 소프트웨어.",
      "lead": "사람을 중심에 둔 소프트웨어로, 매일을 더 깔끔하고 단순하고 밝게.",
      "primaryCta": "Bearagnostic 만나보기",
      "secondaryCta": "우리의 생각 보기",
      "proof": [
        "독립적",
        "개인정보 존중",
        "세심하게 제작"
      ],
      "founderRole": "인디 개발자",
      "founderSlogan": "더 좋은 도구. 더 밝은 하루!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "곧 공개",
        "safe": "안전하고 비공개",
        "light": "가볍게",
        "android": "Android용"
      },
      "philosophyKicker": "우리의 관점",
      "philosophyTitle": "기술은 진지해도 됩니다. 그렇다고 늘 심각한 표정일 필요는 없죠.",
      "philosophyBody": "Benedict Interactive는 스스로 설명할 줄 알고, 사람의 주의를 존중하며, 개성을 위한 여백도 남기는 소프트웨어를 만듭니다. 인터페이스는 웃어도 됩니다. 엔지니어링은 여전히 정확해야 하고요.",
      "productKicker": "대표 제품",
      "productTitle": "Bearagnostic",
      "productPromise": "불필요한 파일을 찾고, 위험을 이해하고, 확신 있게 정리하세요.",
      "productBody": "무엇이 공간을 차지하는지 보여 주고, 발견한 내용을 설명한 뒤, 무엇을 남길지는 사용자가 결정하게 하는 개인정보 중심의 Android 파일 정리 도우미입니다.",
      "productTags": [
        "Android",
        "개인정보 우선",
        "명확한 설명"
      ],
      "productCta": "Bearagnostic 살펴보기",
      "productSupport": "지원 받기",
      "realScreen": "실제 앱 화면",
      "principlesKicker": "만드는 방식",
      "principlesTitle": "과한 연출은 덜고, 생각은 더합니다.",
      "principlesIntro": "일을 정직하게, 그리고 기분 좋게 덜 요란하게 만드는 세 가지 원칙입니다.",
      "principles": [
        {
          "title": "멋보다 쓸모가 먼저",
          "body": "기능은 실제 문제를 해결할 때 자리를 얻습니다."
        },
        {
          "title": "명확함은 배려입니다",
          "body": "좋은 소프트웨어라면 사용자가 의도를 추리하게 만들지 않아야 합니다."
        },
        {
          "title": "신뢰는 구조 안에 있어야 합니다",
          "body": "개인정보와 정직한 상태 표시는 푸터 문구가 아니라 설계 결정입니다."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "독립성도 하나의 설계입니다.",
      "studioBody": "Benedict J.가 직접 설계하고, 만들고, 테스트하고, 계속 다듬습니다. 제품과 가까이 있으니 작은 디테일 하나 고치려고 회의 일정부터 잡을 필요는 없습니다.",
      "studioQuote": "쓸모 있게. 명확하게. 그리고 즐거움을 위한 작은 여백도 남기기.",
      "closingKicker": "다음 이야기",
      "closingTitle": "소프트웨어에는 누군가 정말 신경 써서 만들었다는 느낌이 있어야 합니다.",
      "closingBody": "Bearagnostic는 첫 번째 장입니다. 다음에 무엇을 만들든 기준은 그대로입니다.",
      "closingCta": "제품 둘러보기"
    },
    "products": {
      "metaDescription": "Benedict Interactive의 제품과 앞으로의 도구들.",
      "kicker": "제품",
      "title": "하는 일은 달라도, 정성의 기준은 같습니다.",
      "lead": "역할이 분명하고, 상태를 솔직하게 보여 주며, 기억에 남을 만큼의 개성을 가진 소프트웨어를 만듭니다.",
      "bearDescription": "지우기 전에 저장공간의 어수선함부터 이해하세요. 차분하고, 로컬 중심이며, 마법 버튼에는 꽤 무심합니다.",
      "bearCta": "Bearagnostic 보기",
      "testKicker": "랩에서 준비 중",
      "testTitle": "Benedict Test Center",
      "testDescription": "구조화된 테스트와 재테스트, 그리고 실제로 무슨 일이 있었는지 남기는 QA·릴리스 증거 플랫폼을 계획하고 있습니다.",
      "testNote": "테스터 데이터와 공개 마케팅 페이지를 같은 서랍에 넣는 건 별로라서, 별도의 보안 서비스로 설계할 예정입니다."
    },
    "bear": {
      "metaDescription": "Bearagnostic는 Benedict Interactive가 만드는 개인정보 중심 Android 파일 정리 도우미입니다.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "불필요한 파일을 찾고, 위험을 이해하고, 확신 있게 정리하세요.",
      "lead": "Bearagnostic는 정리하기 전에 저장공간을 이해하도록 돕습니다. 어수선함을 찾고, 위험을 설명하고, 마지막 결정은 원래 있어야 할 곳—사용자에게 남겨 둡니다.",
      "featuresKicker": "왜 만들었나요",
      "featuresTitle": "맥락을 알고 정리하기.",
      "features": [
        {
          "title": "실제로 무엇이 있는지 보기",
          "body": "파일과 카테고리를 보여 주되, 모든 메가바이트를 비상사태처럼 포장하지 않습니다."
        },
        {
          "title": "지우기 전에 이해하기",
          "body": "명확한 설명으로 무엇을 지워도 되고 무엇은 남기는 편이 좋은지 판단하기 쉽게 합니다."
        },
        {
          "title": "개인정보는 가까이 두기",
          "body": "제품 방향은 로컬 분석과 최소한의 데이터 수집을 우선합니다."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "평생 Pro. 한 번 결제하고, 구독은 없습니다.",
      "proBody": "Lifetime Pro는 249 THB 1회 결제입니다. 기존에 검증된 고객은 지금 바로 이용 권한을 복원할 수 있으며, 신규 구매는 아직 열리지 않았습니다.",
      "proPoints": [
        "Lifetime Pro 249 THB 1회 결제",
        "검증된 구매 이메일로 기존 Pro 복원",
        "취약한 로컬 플래그가 아닌 서버 검증 entitlement"
      ],
      "proStatus": "기존 Pro 복원이 현재 이용 가능합니다",
      "proNote": "신규 Pro 구매는 아직 열리지 않았습니다. 기존에 검증된 고객은 프로덕션 앱에서 Restore Pro를 사용할 수 있습니다.",
      "supportCta": "Bearagnostic 지원"
    },
    "support": {
      "metaDescription": "Benedict Interactive 제품 지원 정보.",
      "kicker": "지원",
      "title": "미로 없는, 명확한 도움.",
      "lead": "공식 도움말은 여기 한곳에 모여 있습니다. 제품과 가깝고 찾기 쉽게. 오래된 글, 수상한 링크, 잊힌 탭을 뒤질 필요가 없습니다.",
      "bearTitle": "Bearagnostic",
      "bearBody": "현재 공개 버전의 릴리스 노트, 설치 안내, Restore Pro, 문제 해결과 사용 가이드를 여기에서 확인할 수 있습니다.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "이 사이트가 제품 정보의 공식 기준점입니다. 스토어와 소셜 게시물이 여기로 안내할 수는 있어도, 원본 정보 자체는 아닙니다.",
      "stagingNote": "브랜드 전용 지원 주소를 마무리하는 동안에도 Benedict Interactive의 공개 지원은 계속 이용할 수 있습니다."
    },
    "common": {
      "inDevelopment": "개발 중",
      "planned": "계획 중",
      "viewProduct": "제품 보기",
      "backHome": "홈으로",
      "footerLine": "Benedict J.의 인디 소프트웨어",
      "footerStaging": "공개 버전 · Benedict Interactive 검증 다운로드",
      "skipToContent": "본문으로 건너뛰기"
    }
  },
  "id": {
    "nav": {
      "home": "Beranda",
      "products": "Produk",
      "philosophy": "Filosofi",
      "support": "Bantuan",
      "language": "Bahasa",
      "menu": "Menu"
    },
    "home": {
      "metaDescription": "Perangkat lunak yang dibuat dengan penuh pertimbangan oleh Benedict Interactive: jelas, andal, menghargai privasi, dan punya karakter.",
      "kicker": "Studio software independen · Benedict J.",
      "headlineA": "Software cerah untuk",
      "headlineB": "hidup digital yang lebih tenang.",
      "lead": "Software yang berpusat pada manusia, untuk hari-hari yang lebih rapi, sederhana, dan cerah.",
      "primaryCta": "Kenali Bearagnostic",
      "secondaryCta": "Lihat cara kami berpikir",
      "proof": [
        "Independen",
        "Peduli privasi",
        "Dibuat dengan teliti"
      ],
      "founderRole": "Pengembang independen",
      "founderSlogan": "Alat yang lebih baik. Hari yang lebih cerah!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "segera",
        "safe": "Aman & privat",
        "light": "Ringan",
        "android": "Dibuat untuk Android"
      },
      "philosophyKicker": "Cara kami melihatnya",
      "philosophyTitle": "Teknologi boleh serius tanpa harus selalu memasang wajah serius.",
      "philosophyBody": "Benedict Interactive membuat software yang bisa menjelaskan dirinya sendiri, menghargai perhatian pengguna, dan masih punya ruang untuk karakter. Antarmuka boleh tersenyum. Engineering-nya tetap harus rapi.",
      "productKicker": "Produk unggulan",
      "productTitle": "Bearagnostic",
      "productPromise": "Temukan yang berantakan. Pahami risikonya. Bersihkan dengan yakin.",
      "productBody": "Asisten file Android yang mengutamakan privasi: menunjukkan apa yang memakan ruang, menjelaskan apa yang ditemukan, lalu membiarkan Anda memutuskan apa yang layak disimpan.",
      "productTags": [
        "Android",
        "Privasi dulu",
        "Penjelasan jelas"
      ],
      "productCta": "Jelajahi Bearagnostic",
      "productSupport": "Dapatkan bantuan",
      "realScreen": "Layar aplikasi asli",
      "principlesKicker": "Cara kami bekerja",
      "principlesTitle": "Lebih sedikit drama. Lebih banyak pikir.",
      "principlesIntro": "Tiga aturan agar pekerjaan tetap jujur — dan menyenangkan karena tidak lebay.",
      "principles": [
        {
          "title": "Berguna sebelum mengesankan",
          "body": "Sebuah fitur pantas ada kalau benar-benar menyelesaikan masalah."
        },
        {
          "title": "Kejelasan itu bentuk kepedulian",
          "body": "Software yang baik tidak membuat orang menebak-nebak maksudnya."
        },
        {
          "title": "Kepercayaan harus ada di struktur",
          "body": "Privasi dan status yang jujur adalah keputusan desain, bukan kalimat manis di footer."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Independen memang sengaja.",
      "studioBody": "Benedict J. merancang, membuat, menguji, dan terus memperbaiki pekerjaan di sini. Dekat dengan produk berarti detail kecil tidak perlu mengajukan rapat dulu sebelum dibenahi.",
      "studioQuote": "Buat berguna. Buat jelas. Sisakan sedikit ruang untuk rasa senang.",
      "closingKicker": "Berikutnya",
      "closingTitle": "Software seharusnya terasa seperti dibuat oleh seseorang yang benar-benar peduli.",
      "closingBody": "Bearagnostic adalah bab pertama. Standarnya tetap sama untuk apa pun yang datang berikutnya.",
      "closingCta": "Lihat produk"
    },
    "products": {
      "metaDescription": "Produk dan alat masa depan dari Benedict Interactive.",
      "kicker": "Produk",
      "title": "Pekerjaan berbeda. Standar perhatian yang sama.",
      "lead": "Software yang fokus, tugasnya jelas, statusnya jujur, dan cukup berkarakter untuk diingat.",
      "bearDescription": "Pahami kekacauan penyimpanan sebelum menghapus. Tenang, mengutamakan proses lokal, dan tidak terlalu terkesan dengan tombol ajaib.",
      "bearCta": "Jelajahi Bearagnostic",
      "testKicker": "Di lab",
      "testTitle": "Benedict Test Center",
      "testDescription": "Platform QA dan bukti rilis yang direncanakan untuk pengujian terstruktur, retest, dan catatan tentang apa yang benar-benar terjadi.",
      "testNote": "Direncanakan sebagai layanan terpisah dan aman — karena data tester dan halaman marketing publik sebaiknya tidak tinggal di laci dapur yang sama."
    },
    "bear": {
      "metaDescription": "Bearagnostic adalah asisten file Android yang mengutamakan privasi dari Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Temukan yang berantakan. Pahami risikonya. Bersihkan dengan yakin.",
      "lead": "Bearagnostic membantu Anda memahami penyimpanan sebelum membersihkannya. Ia menemukan kekacauan, menjelaskan risiko, lalu mengembalikan keputusan terakhir ke tempat yang semestinya: Anda.",
      "featuresKicker": "Kenapa dibuat",
      "featuresTitle": "Bersih-bersih dengan konteks.",
      "features": [
        {
          "title": "Lihat apa yang benar-benar ada",
          "body": "Tampilkan file dan kategori tanpa membuat setiap megabita terdengar seperti keadaan darurat."
        },
        {
          "title": "Pahami sebelum menghapus",
          "body": "Penjelasan jelas membantu menilai apa yang bisa pergi dan apa yang sebaiknya tetap ada."
        },
        {
          "title": "Privasi tetap dekat",
          "body": "Arah produk mengutamakan analisis lokal dan pengumpulan data seminimal mungkin."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro seumur hidup. Sekali bayar, tanpa langganan.",
      "proBody": "Lifetime Pro berharga 249 THB sekali bayar. Pelanggan lama yang sudah terverifikasi dapat memulihkan akses sekarang; pembelian baru belum dibuka.",
      "proPoints": [
        "249 THB sekali bayar untuk Lifetime Pro",
        "Pulihkan Pro yang sudah dimiliki dengan email pembelian terverifikasi",
        "Entitlement diverifikasi server, bukan sekadar flag lokal"
      ],
      "proStatus": "Pemulihan Pro yang sudah dimiliki sudah aktif",
      "proNote": "Pembelian Pro baru belum dibuka. Pelanggan lama yang sudah terverifikasi dapat memulihkan akses di aplikasi produksi.",
      "supportCta": "Bantuan Bearagnostic"
    },
    "support": {
      "metaDescription": "Informasi bantuan untuk produk Benedict Interactive.",
      "kicker": "Bantuan",
      "title": "Bantuan yang jelas, tanpa labirin.",
      "lead": "Bantuan resmi tersedia di sini, dekat dengan produk dan mudah ditemukan. Tak perlu mengorek posting lama, tautan meragukan, atau lima tab yang terlupakan.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Catatan rilis, panduan instalasi, Restore Pro, pemecahan masalah, dan panduan untuk versi publik saat ini tersedia di sini.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Situs ini adalah rumah resmi informasi produk. Toko aplikasi dan media sosial boleh menunjuk ke sini; mereka bukan sumber utamanya.",
      "stagingNote": "Dukungan publik Benedict Interactive tetap tersedia selama kami menyelesaikan alamat dukungan bermerek."
    },
    "common": {
      "inDevelopment": "Dalam pengembangan",
      "planned": "Direncanakan",
      "viewProduct": "Lihat produk",
      "backHome": "Kembali ke beranda",
      "footerLine": "Software independen oleh Benedict J.",
      "footerStaging": "Rilis publik · Unduhan terverifikasi dari Benedict Interactive",
      "skipToContent": "Lewati ke konten"
    }
  },
  "vi": {
    "nav": {
      "home": "Trang chủ",
      "products": "Sản phẩm",
      "philosophy": "Triết lý",
      "support": "Hỗ trợ",
      "language": "Ngôn ngữ",
      "menu": "Menu"
    },
    "home": {
      "metaDescription": "Phần mềm được làm kỹ lưỡng bởi Benedict Interactive: rõ ràng, đáng tin, tôn trọng quyền riêng tư và có cá tính riêng.",
      "kicker": "Studio phần mềm độc lập · Benedict J.",
      "headlineA": "Phần mềm tươi sáng cho",
      "headlineB": "một đời sống số nhẹ nhàng hơn.",
      "lead": "Phần mềm lấy con người làm trung tâm, để mỗi ngày gọn gàng hơn, đơn giản hơn và sáng sủa hơn.",
      "primaryCta": "Làm quen với Bearagnostic",
      "secondaryCta": "Xem cách chúng tôi nghĩ",
      "proof": [
        "Độc lập",
        "Tôn trọng riêng tư",
        "Làm bằng sự chăm chút"
      ],
      "founderRole": "Nhà phát triển độc lập",
      "founderSlogan": "Công cụ tốt hơn. Ngày tươi sáng hơn!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "sắp có",
        "safe": "An toàn & riêng tư",
        "light": "Gọn nhẹ",
        "android": "Dành cho Android"
      },
      "philosophyKicker": "Góc nhìn của chúng tôi",
      "philosophyTitle": "Công nghệ có thể nghiêm túc mà không cần lúc nào cũng nghiêm nghị.",
      "philosophyBody": "Benedict Interactive làm phần mềm biết tự giải thích, tôn trọng sự chú ý của người dùng và vẫn chừa chỗ cho cá tính. Giao diện có thể mỉm cười; phần kỹ thuật bên trong thì vẫn phải làm việc thật tử tế.",
      "productKicker": "Sản phẩm nổi bật",
      "productTitle": "Bearagnostic",
      "productPromise": "Tìm phần thừa. Hiểu rủi ro. Dọn dẹp tự tin.",
      "productBody": "Trợ lý tệp Android ưu tiên quyền riêng tư, cho bạn thấy thứ gì đang chiếm chỗ, giải thích những gì tìm được và để bạn quyết định thứ gì đáng được giữ lại.",
      "productTags": [
        "Android",
        "Ưu tiên riêng tư",
        "Giải thích rõ ràng"
      ],
      "productCta": "Khám phá Bearagnostic",
      "productSupport": "Nhận hỗ trợ",
      "realScreen": "Màn hình ứng dụng thật",
      "principlesKicker": "Cách chúng tôi làm việc",
      "principlesTitle": "Bớt phô diễn. Thêm suy nghĩ.",
      "principlesIntro": "Ba nguyên tắc giúp công việc luôn trung thực — và dễ chịu vì không làm quá.",
      "principles": [
        {
          "title": "Hữu ích trước, ấn tượng sau",
          "body": "Một tính năng chỉ xứng đáng ở lại khi nó giải quyết việc thật."
        },
        {
          "title": "Rõ ràng cũng là một cách tử tế",
          "body": "Phần mềm tốt không nên bắt người dùng đoán ý của nó."
        },
        {
          "title": "Niềm tin phải nằm trong cấu trúc",
          "body": "Quyền riêng tư và trạng thái trung thực là quyết định thiết kế, không phải câu chữ đẹp ở chân trang."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Độc lập là một chủ ý thiết kế.",
      "studioBody": "Benedict J. tự thiết kế, xây dựng, thử nghiệm và tiếp tục tinh chỉnh mọi thứ ở đây. Ở gần sản phẩm có nghĩa là một chi tiết nhỏ không cần nộp đơn xin họp trước khi được sửa.",
      "studioQuote": "Làm cho hữu ích. Làm cho rõ ràng. Và chừa một chút chỗ cho niềm vui.",
      "closingKicker": "Tiếp theo là gì",
      "closingTitle": "Phần mềm nên khiến bạn cảm thấy có người thật sự quan tâm khi làm ra nó.",
      "closingBody": "Bearagnostic là chương đầu tiên. Tiêu chuẩn sẽ không đổi ở những chương tiếp theo.",
      "closingCta": "Xem các sản phẩm"
    },
    "products": {
      "metaDescription": "Sản phẩm và công cụ tương lai từ Benedict Interactive.",
      "kicker": "Sản phẩm",
      "title": "Công việc khác nhau. Cùng một mức độ chăm chút.",
      "lead": "Phần mềm tập trung, nhiệm vụ rõ ràng, trạng thái trung thực và đủ cá tính để được nhớ tới.",
      "bearDescription": "Hiểu sự lộn xộn trong bộ nhớ trước khi xóa. Điềm tĩnh, ưu tiên xử lý cục bộ và không mấy hứng thú với những nút bấm “thần kỳ”.",
      "bearCta": "Khám phá Bearagnostic",
      "testKicker": "Trong phòng lab",
      "testTitle": "Benedict Test Center",
      "testDescription": "Nền tảng QA và bằng chứng phát hành đang được lên kế hoạch cho kiểm thử có cấu trúc, kiểm thử lại và lưu dấu những gì thực sự đã xảy ra.",
      "testNote": "Sẽ là một dịch vụ tách biệt và bảo mật — vì dữ liệu tester và trang marketing công khai không nên nằm chung một ngăn kéo bếp."
    },
    "bear": {
      "metaDescription": "Bearagnostic là trợ lý tệp Android ưu tiên quyền riêng tư từ Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Tìm phần thừa. Hiểu rủi ro. Dọn dẹp tự tin.",
      "lead": "Bearagnostic giúp bạn hiểu bộ nhớ trước khi dọn dẹp. Nó tìm phần thừa, giải thích rủi ro và để quyết định cuối cùng ở đúng nơi: trong tay bạn.",
      "featuresKicker": "Vì sao nó tồn tại",
      "featuresTitle": "Dọn dẹp có ngữ cảnh.",
      "features": [
        {
          "title": "Thấy đúng những gì đang có",
          "body": "Hiển thị tệp và nhóm tệp mà không biến từng megabyte thành tình trạng khẩn cấp."
        },
        {
          "title": "Hiểu trước khi xóa",
          "body": "Giải thích rõ ràng giúp bạn cân nhắc thứ gì có thể bỏ và thứ gì nên giữ."
        },
        {
          "title": "Quyền riêng tư ở gần bạn",
          "body": "Định hướng sản phẩm ưu tiên phân tích cục bộ và thu thập dữ liệu tối thiểu."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro trọn đời. Thanh toán một lần, không thuê bao.",
      "proBody": "Lifetime Pro có giá 249 THB, thanh toán một lần. Khách hàng hiện tại đã được xác minh có thể khôi phục quyền truy cập ngay; mua mới chưa mở.",
      "proPoints": [
        "249 THB một lần cho Lifetime Pro",
        "Khôi phục Pro hiện có bằng email mua hàng đã xác minh",
        "Entitlement được xác minh trên máy chủ, không phụ thuộc vào cờ cục bộ"
      ],
      "proStatus": "Khôi phục Pro đã mua hiện đã hoạt động",
      "proNote": "Chưa mở mua Pro mới. Khách hàng hiện tại đã được xác minh có thể Restore Pro trong ứng dụng production.",
      "supportCta": "Hỗ trợ Bearagnostic"
    },
    "support": {
      "metaDescription": "Thông tin hỗ trợ cho sản phẩm Benedict Interactive.",
      "kicker": "Hỗ trợ",
      "title": "Trợ giúp rõ ràng, không mê cung.",
      "lead": "Hỗ trợ chính thức ở ngay đây, gần sản phẩm và dễ tìm. Không cần đào bới bài cũ, đường link mơ hồ hay những tab đã bị bỏ quên.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Tại đây có ghi chú phát hành, hướng dẫn cài đặt, Restore Pro, khắc phục sự cố và tài liệu cho phiên bản công khai hiện tại.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Trang này là nguồn thông tin sản phẩm chính thức. Cửa hàng và mạng xã hội có thể dẫn về đây; chúng không phải nguồn gốc của thông tin.",
      "stagingNote": "Hỗ trợ công khai của Benedict Interactive vẫn hoạt động trong khi chúng tôi hoàn tất địa chỉ hỗ trợ mang thương hiệu."
    },
    "common": {
      "inDevelopment": "Đang phát triển",
      "planned": "Đã lên kế hoạch",
      "viewProduct": "Xem sản phẩm",
      "backHome": "Về trang chủ",
      "footerLine": "Phần mềm độc lập bởi Benedict J.",
      "footerStaging": "Bản phát hành công khai · Tải xuống đã xác minh từ Benedict Interactive",
      "skipToContent": "Chuyển đến nội dung"
    }
  },
  "zh-cn": {
    "nav": {
      "home": "首页",
      "products": "产品",
      "philosophy": "理念",
      "support": "支持",
      "language": "语言",
      "menu": "菜单"
    },
    "home": {
      "metaDescription": "Benedict Interactive 用心打造的软件：清晰、可靠、尊重隐私，也保留一点自己的个性。",
      "kicker": "独立软件工作室 · Benedict J.",
      "headlineA": "为更从容的数字生活",
      "headlineB": "做更明亮的软件。",
      "lead": "以人为本的软件，让每一天更整洁、更简单，也更明亮。",
      "primaryCta": "认识 Bearagnostic",
      "secondaryCta": "看看我们的理念",
      "proof": [
        "独立",
        "重视隐私",
        "认真打磨"
      ],
      "founderRole": "独立开发者",
      "founderSlogan": "更好的工具。更明亮的日子！",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "即将上线",
        "safe": "安全且注重隐私",
        "light": "轻巧流畅",
        "android": "专为 Android 打造"
      },
      "philosophyKicker": "我们的看法",
      "philosophyTitle": "技术可以很认真，但没必要一直板着脸。",
      "philosophyBody": "Benedict Interactive 希望软件能把自己说明白，尊重人的注意力，也留一点空间给个性。界面可以笑一笑，工程实现仍然得老老实实做好。",
      "productKicker": "重点产品",
      "productTitle": "Bearagnostic",
      "productPromise": "找到杂乱。理解风险。安心清理。",
      "productBody": "一款以隐私为先的 Android 文件整理助手：告诉你空间被什么占用，解释发现了什么，再由你决定什么该留下。",
      "productTags": [
        "Android",
        "隐私优先",
        "解释清楚"
      ],
      "productCta": "探索 Bearagnostic",
      "productSupport": "获取支持",
      "realScreen": "真实应用界面",
      "principlesKicker": "我们怎么做产品",
      "principlesTitle": "少一点表演，多一点思考。",
      "principlesIntro": "三条原则，让工作保持诚实，也顺便少一点不必要的戏剧性。",
      "principles": [
        {
          "title": "先有用，再惊艳",
          "body": "一个功能只有真正解决问题，才值得留下。"
        },
        {
          "title": "清楚也是一种体贴",
          "body": "好的软件不该让用户猜它到底想干什么。"
        },
        {
          "title": "信任要写进结构里",
          "body": "隐私和诚实的状态提示是设计决定，不是页脚里的漂亮话。"
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "独立，是有意为之。",
      "studioBody": "Benedict J. 亲自设计、开发、测试并持续打磨这里的作品。离产品足够近，小细节就不用先提交一个“申请开会”的申请。",
      "studioQuote": "先让它有用，再让它清楚，还要给一点愉悦留个位置。",
      "closingKicker": "接下来",
      "closingTitle": "软件应该让人感觉：真的有人在乎它是怎么做出来的。",
      "closingBody": "Bearagnostic 是第一章。之后无论做什么，这个标准都不会变。",
      "closingCta": "查看产品"
    },
    "products": {
      "metaDescription": "Benedict Interactive 的产品与未来工具。",
      "kicker": "产品",
      "title": "解决不同的事，保持同样的用心。",
      "lead": "目标明确、状态诚实，并且有一点让人记得住的性格。",
      "bearDescription": "删除之前先看懂存储空间里的杂乱。冷静、本地优先，而且对所谓“神奇按钮”没什么兴趣。",
      "bearCta": "探索 Bearagnostic",
      "testKicker": "实验室进行中",
      "testTitle": "Benedict Test Center",
      "testDescription": "正在规划一套 QA 与发布证据平台，用于结构化测试、复测，以及记录“实际上到底发生了什么”。",
      "testNote": "它会作为独立且受保护的服务存在——测试者数据和公开营销页面，实在没必要塞进同一个抽屉。"
    },
    "bear": {
      "metaDescription": "Bearagnostic 是 Benedict Interactive 打造的隐私优先 Android 文件整理助手。",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "找到杂乱。理解风险。安心清理。",
      "lead": "Bearagnostic 让你在清理之前先看懂存储空间。它找出杂乱、解释风险，然后把最后的决定权放回本来就该在的地方：你手里。",
      "featuresKicker": "为什么做它",
      "featuresTitle": "带着上下文去清理。",
      "features": [
        {
          "title": "看清真正有什么",
          "body": "展示文件和类别，但不会把每一个 MB 都包装成紧急事件。"
        },
        {
          "title": "删除之前先理解",
          "body": "清楚的解释，帮助你判断什么可以删，什么大概还是留着比较好。"
        },
        {
          "title": "让隐私留在身边",
          "body": "产品方向优先考虑本地分析与尽量少的数据收集。"
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "终身 Pro。一次付费，无订阅。",
      "proBody": "Lifetime Pro 为 249 THB 一次买断。已经验证的现有客户现在即可恢复权益；新的购买尚未开放。",
      "proPoints": [
        "Lifetime Pro 249 THB 一次买断",
        "使用已验证的购买邮箱恢复现有 Pro",
        "由服务器验证权益，而不是依赖脆弱的本地标记"
      ],
      "proStatus": "已有 Pro 权益现在可以恢复",
      "proNote": "新的 Pro 购买尚未开放。已经验证的现有客户可以在生产版应用中使用 Restore Pro。",
      "supportCta": "Bearagnostic 支持"
    },
    "support": {
      "metaDescription": "Benedict Interactive 产品支持信息。",
      "kicker": "支持",
      "title": "清楚的帮助，不走迷宫。",
      "lead": "官方帮助就在这里，紧贴产品，也容易找到。不用翻旧帖子、点来路不明的链接，也不用在一堆忘记用途的标签页里找答案。",
      "bearTitle": "Bearagnostic",
      "bearBody": "这里提供当前公开版本的发行说明、安装帮助、Restore Pro、故障排查和使用指南。",
      "generalTitle": "Benedict Interactive",
      "generalBody": "这里是产品信息的官方来源。商店页面和社交媒体可以链接到这里，但它们不是原始信息源。",
      "stagingNote": "在品牌支持邮箱完成迁移前，Benedict Interactive 的公开支持渠道仍正常开放。"
    },
    "common": {
      "inDevelopment": "开发中",
      "planned": "已规划",
      "viewProduct": "查看产品",
      "backHome": "返回首页",
      "footerLine": "Benedict J. 独立开发的软件",
      "footerStaging": "公开版本 · Benedict Interactive 已验证下载",
      "skipToContent": "跳到正文"
    }
  },
  "zh-tw": {
    "nav": {
      "home": "首頁",
      "products": "產品",
      "philosophy": "理念",
      "support": "支援",
      "language": "語言",
      "menu": "選單"
    },
    "home": {
      "metaDescription": "Benedict Interactive 用心打造的軟體：清楚、可靠、尊重隱私，也保留一點自己的個性。",
      "kicker": "獨立軟體工作室 · Benedict J.",
      "headlineA": "為更從容的數位生活",
      "headlineB": "做更明亮的軟體。",
      "lead": "以人為本的軟體，讓每一天更整潔、更簡單，也更明亮。",
      "primaryCta": "認識 Bearagnostic",
      "secondaryCta": "看看我們的理念",
      "proof": [
        "獨立",
        "重視隱私",
        "用心打磨"
      ],
      "founderRole": "獨立開發者",
      "founderSlogan": "更好的工具。更明亮的日子！",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "即將上線",
        "safe": "安全且重視隱私",
        "light": "輕巧流暢",
        "android": "專為 Android 打造"
      },
      "philosophyKicker": "我們的想法",
      "philosophyTitle": "科技可以很認真，但不需要一直板著臉。",
      "philosophyBody": "Benedict Interactive 希望軟體能把自己說清楚、尊重人的注意力，也留一點空間給個性。介面可以笑一笑，工程實作還是得好好做。",
      "productKicker": "焦點產品",
      "productTitle": "Bearagnostic",
      "productPromise": "找出雜亂。理解風險。安心清理。",
      "productBody": "一款以隱私為先的 Android 檔案整理助手：告訴你空間被什麼佔用、解釋發現了什麼，再由你決定什麼值得留下。",
      "productTags": [
        "Android",
        "隱私優先",
        "清楚說明"
      ],
      "productCta": "探索 Bearagnostic",
      "productSupport": "取得支援",
      "realScreen": "真實 App 畫面",
      "principlesKicker": "我們怎麼做產品",
      "principlesTitle": "少一點表演，多一點思考。",
      "principlesIntro": "三條原則，讓工作保持誠實，也順便少一點不必要的戲劇性。",
      "principles": [
        {
          "title": "先有用，再驚艷",
          "body": "一個功能真的解決問題，才值得留下。"
        },
        {
          "title": "清楚也是一種體貼",
          "body": "好的軟體不該讓使用者猜它到底想做什麼。"
        },
        {
          "title": "信任要寫進結構裡",
          "body": "隱私與誠實的狀態提示是設計決定，不是頁尾的漂亮話。"
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "獨立，是有意為之。",
      "studioBody": "Benedict J. 親自設計、開發、測試並持續打磨這裡的作品。離產品夠近，小細節就不用先提出「開會申請」才能被修好。",
      "studioQuote": "先讓它有用，再讓它清楚，也替一點愉悅留個位置。",
      "closingKicker": "接下來",
      "closingTitle": "軟體應該讓人感覺：真的有人在乎它是怎麼做出來的。",
      "closingBody": "Bearagnostic 是第一章。之後無論做什麼，這個標準都不會變。",
      "closingCta": "查看產品"
    },
    "products": {
      "metaDescription": "Benedict Interactive 的產品與未來工具。",
      "kicker": "產品",
      "title": "解決不同的事，保持同樣的用心。",
      "lead": "目標明確、狀態誠實，還有一點讓人記得住的個性。",
      "bearDescription": "刪除之前先看懂儲存空間裡的雜亂。冷靜、本機優先，而且對所謂「神奇按鈕」沒太大興趣。",
      "bearCta": "探索 Bearagnostic",
      "testKicker": "實驗室進行中",
      "testTitle": "Benedict Test Center",
      "testDescription": "正在規劃一套 QA 與發布證據平台，用於結構化測試、複測，以及留下「實際上到底發生了什麼」的紀錄。",
      "testNote": "它會是獨立且受保護的服務——測試者資料和公開行銷頁面，真的沒必要塞在同一個抽屜裡。"
    },
    "bear": {
      "metaDescription": "Bearagnostic 是 Benedict Interactive 打造的隱私優先 Android 檔案整理助手。",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "找出雜亂。理解風險。安心清理。",
      "lead": "Bearagnostic 讓你在清理之前先看懂儲存空間。它找出雜亂、解釋風險，再把最後的決定權放回本來就該在的地方：你手上。",
      "featuresKicker": "為什麼做它",
      "featuresTitle": "帶著脈絡去清理。",
      "features": [
        {
          "title": "看清真正有什麼",
          "body": "顯示檔案與分類，但不會把每一個 MB 都包裝成緊急事件。"
        },
        {
          "title": "刪除之前先理解",
          "body": "清楚的說明，幫助你判斷什麼可以刪，什麼大概還是留著比較好。"
        },
        {
          "title": "讓隱私留在身邊",
          "body": "產品方向優先考量本機分析與盡量少的資料蒐集。"
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "終身 Pro。一次付費，無訂閱。",
      "proBody": "Lifetime Pro 為 249 THB 一次買斷。已驗證的既有客戶現在即可復原權益；新的購買尚未開放。",
      "proPoints": [
        "Lifetime Pro 249 THB 一次買斷",
        "使用已驗證的購買 Email 復原既有 Pro",
        "由伺服器驗證權益，而不是依賴脆弱的本機旗標"
      ],
      "proStatus": "既有 Pro 權益現在可以復原",
      "proNote": "新的 Pro 購買尚未開放。已驗證的既有客戶可以在 Production App 中使用 Restore Pro。",
      "supportCta": "Bearagnostic 支援"
    },
    "support": {
      "metaDescription": "Benedict Interactive 產品支援資訊。",
      "kicker": "支援",
      "title": "清楚的幫助，不走迷宮。",
      "lead": "官方協助就在這裡，緊貼產品，也容易找到。不用翻舊貼文、點來源不明的連結，也不用在一堆忘記用途的分頁裡找答案。",
      "bearTitle": "Bearagnostic",
      "bearBody": "這裡提供目前公開版本的版本說明、安裝協助、Restore Pro、疑難排解與使用指南。",
      "generalTitle": "Benedict Interactive",
      "generalBody": "這裡是產品資訊的官方來源。商店頁面和社群貼文可以連回這裡，但它們不是資訊原本。",
      "stagingNote": "在品牌支援信箱完成遷移前，Benedict Interactive 的公開支援管道仍正常開放。"
    },
    "common": {
      "inDevelopment": "開發中",
      "planned": "已規劃",
      "viewProduct": "查看產品",
      "backHome": "返回首頁",
      "footerLine": "Benedict J. 獨立開發的軟體",
      "footerStaging": "公開版本 · Benedict Interactive 已驗證下載",
      "skipToContent": "跳到主要內容"
    }
  },
  "ar": {
    "nav": {
      "home": "الرئيسية",
      "products": "المنتجات",
      "philosophy": "الفلسفة",
      "support": "الدعم",
      "language": "اللغة",
      "menu": "القائمة"
    },
    "home": {
      "metaDescription": "برمجيات مدروسة من Benedict Interactive: واضحة، موثوقة، تحترم الخصوصية، ولها شخصية من دون ضجيج.",
      "kicker": "استوديو برمجيات مستقل · Benedict J.",
      "headlineA": "برمجيات أكثر إشراقًا",
      "headlineB": "لحياة رقمية أكثر هدوءًا.",
      "lead": "برمجيات تتمحور حول الإنسان، ليصبح يومك الرقمي أنظف وأبسط وأكثر إشراقًا.",
      "primaryCta": "تعرّف إلى Bearagnostic",
      "secondaryCta": "اطّلع على فلسفتنا",
      "proof": [
        "مستقل",
        "يحترم الخصوصية",
        "مصنوع بعناية"
      ],
      "founderRole": "مطوّر مستقل",
      "founderSlogan": "أدوات أفضل. أيام أكثر إشراقًا!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "قريبًا",
        "safe": "آمن وخاص",
        "light": "خفيف",
        "android": "مصمم لأندرويد"
      },
      "philosophyKicker": "وجهة نظرنا",
      "philosophyTitle": "يمكن للتقنية أن تكون جادّة من دون أن تكون متجهّمة طوال الوقت.",
      "philosophyBody": "تصنع Benedict Interactive برمجيات تشرح نفسها، وتحترم انتباه الناس، وتترك مساحة للشخصية. لا بأس أن تبتسم الواجهة؛ أمّا الهندسة في الداخل فعليها أن تبقى منضبطة.",
      "productKicker": "المنتج المميّز",
      "productTitle": "Bearagnostic",
      "productPromise": "اعثر على الفوضى. افهم المخاطر. نظّف بثقة.",
      "productBody": "مساعد ملفات على Android يضع الخصوصية أولًا: يريك ما يشغل المساحة، ويشرح ما وجده، ثم يترك لك قرار ما يستحق البقاء.",
      "productTags": [
        "Android",
        "الخصوصية أولًا",
        "شرح واضح"
      ],
      "productCta": "استكشف Bearagnostic",
      "productSupport": "احصل على الدعم",
      "realScreen": "شاشة حقيقية من التطبيق",
      "principlesKicker": "كيف نعمل",
      "principlesTitle": "استعراض أقل. تفكير أكثر.",
      "principlesIntro": "ثلاث قواعد تبقي العمل صادقًا — ومن حسن الحظ، قليل الدراما.",
      "principles": [
        {
          "title": "الفائدة قبل الإبهار",
          "body": "الميزة تستحق مكانها حين تحل مشكلة حقيقية."
        },
        {
          "title": "الوضوح نوع من الاحترام",
          "body": "البرمجيات الجيدة لا ينبغي أن تجبر المستخدم على تخمين نواياها."
        },
        {
          "title": "الثقة جزء من البنية",
          "body": "الخصوصية والحالات الصادقة قرارات تصميم، وليست جملة جميلة في أسفل الصفحة."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "الاستقلال خيار مقصود.",
      "studioBody": "يصمّم Benedict J. العمل هنا ويطوّره ويختبره ويواصل صقله بنفسه. القرب من المنتج يعني أن التفاصيل الصغيرة لا تحتاج إلى طلب اجتماع قبل أن تُصلح.",
      "studioQuote": "اجعله مفيدًا. اجعله واضحًا. واترك مساحة صغيرة للمتعة.",
      "closingKicker": "ما التالي",
      "closingTitle": "يجب أن تشعر في البرمجيات أن أحدًا اهتم فعلًا بصنعها.",
      "closingBody": "Bearagnostic هو الفصل الأول. وسيبقى المعيار نفسه مهما كان الفصل التالي.",
      "closingCta": "استكشف المنتجات"
    },
    "products": {
      "metaDescription": "منتجات وأدوات مستقبلية من Benedict Interactive.",
      "kicker": "المنتجات",
      "title": "مهام مختلفة. المعيار نفسه من العناية.",
      "lead": "برمجيات مركّزة، بمهام واضحة وحالات صادقة وشخصية تكفي لتبقى في الذاكرة.",
      "bearDescription": "افهم فوضى التخزين قبل أن تحذف. هادئ، محليّ أولًا، وغير منبهر كثيرًا بالأزرار السحرية.",
      "bearCta": "استكشف Bearagnostic",
      "testKicker": "في المختبر",
      "testTitle": "Benedict Test Center",
      "testDescription": "منصة مخطط لها لضمان الجودة وأدلة الإصدار، للاختبارات المنظمة وإعادة الاختبار وتسجيل ما حدث فعلًا.",
      "testNote": "ستكون خدمة منفصلة وآمنة — لأن بيانات المختبرين وصفحات التسويق العامة لا ينبغي أن تسكن الدرج نفسه."
    },
    "bear": {
      "metaDescription": "Bearagnostic مساعد ملفات Android يضع الخصوصية أولًا من Benedict Interactive.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "اعثر على الفوضى. افهم المخاطر. نظّف بثقة.",
      "lead": "يساعدك Bearagnostic على فهم التخزين قبل تنظيفه. يجد الفوضى، ويشرح المخاطر، ويترك القرار الأخير في مكانه الصحيح: لديك.",
      "featuresKicker": "لماذا وُجد",
      "featuresTitle": "تنظيف مع سياق.",
      "features": [
        {
          "title": "اعرف ما هو موجود فعلًا",
          "body": "اعرض الملفات والفئات من دون تحويل كل ميغابايت إلى حالة طوارئ."
        },
        {
          "title": "افهم قبل الحذف",
          "body": "تساعدك التوضيحات الواضحة على تقدير ما يمكن حذفه وما يستحسن إبقاؤه."
        },
        {
          "title": "الخصوصية تبقى قريبة",
          "body": "اتجاه المنتج يفضّل التحليل المحلي وجمع أقل قدر ممكن من البيانات."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Pro مدى الحياة. دفعة واحدة، بلا اشتراك.",
      "proBody": "Lifetime Pro بسعر 249 THB دفعة واحدة. يمكن للعملاء الحاليين الموثقين استعادة الوصول الآن، بينما لم تُفتح المشتريات الجديدة بعد.",
      "proPoints": [
        "249 THB دفعة واحدة لـ Lifetime Pro",
        "استعادة Pro الحالي عبر بريد الشراء الموثق",
        "Entitlement موثّق على الخادم وليس مجرد علامة محلية قابلة للكسر"
      ],
      "proStatus": "استعادة Pro الحالي متاحة الآن",
      "proNote": "المشتريات الجديدة لـ Pro لم تُفتح بعد. يمكن للعملاء الحاليين الموثقين استخدام Restore Pro داخل تطبيق الإنتاج.",
      "supportCta": "دعم Bearagnostic"
    },
    "support": {
      "metaDescription": "معلومات الدعم لمنتجات Benedict Interactive.",
      "kicker": "الدعم",
      "title": "مساعدة واضحة، من دون متاهة.",
      "lead": "الدعم الرسمي موجود هنا، قريب من المنتج وسهل العثور عليه. لا حاجة للبحث في منشورات قديمة أو روابط غامضة أو تبويبات منسية.",
      "bearTitle": "Bearagnostic",
      "bearBody": "تتوفر هنا ملاحظات الإصدار وإرشادات التثبيت وRestore Pro واستكشاف الأخطاء ودليل الإصدار العام الحالي.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "هذا الموقع هو المصدر الرسمي لمعلومات المنتج. قد تشير المتاجر والمنشورات الاجتماعية إليه، لكنها ليست المصدر الأصلي.",
      "stagingNote": "يبقى دعم Benedict Interactive العام متاحاً أثناء استكمال عنوان الدعم ذي العلامة التجارية."
    },
    "common": {
      "inDevelopment": "قيد التطوير",
      "planned": "مخطط له",
      "viewProduct": "عرض المنتج",
      "backHome": "العودة للرئيسية",
      "footerLine": "برمجيات مستقلة من Benedict J.",
      "footerStaging": "إصدار عام · تنزيلات موثّقة من Benedict Interactive",
      "skipToContent": "انتقل إلى المحتوى"
    }
  },
  "hi": {
    "nav": {
      "home": "होम",
      "products": "प्रोडक्ट्स",
      "philosophy": "सोच",
      "support": "सहायता",
      "language": "भाषा",
      "menu": "मेन्यू"
    },
    "home": {
      "metaDescription": "Benedict Interactive का सोच-समझकर बनाया गया सॉफ़्टवेयर: साफ़, भरोसेमंद, प्राइवेसी का सम्मान करने वाला और अपनी अलग पहचान के साथ।",
      "kicker": "स्वतंत्र सॉफ़्टवेयर स्टूडियो · Benedict J.",
      "headlineA": "शांत डिजिटल ज़िंदगी के लिए",
      "headlineB": "साफ़ और उजला सॉफ़्टवेयर।",
      "lead": "लोगों को केंद्र में रखकर बनाया गया सॉफ़्टवेयर, ताकि हर दिन ज़्यादा साफ़, सरल और उजला लगे।",
      "primaryCta": "Bearagnostic से मिलिए",
      "secondaryCta": "हमारी सोच देखें",
      "proof": [
        "स्वतंत्र",
        "प्राइवेसी-सचेत",
        "ध्यान से बनाया गया"
      ],
      "founderRole": "स्वतंत्र डेवलपर",
      "founderSlogan": "बेहतर औज़ार। ज़्यादा उजले दिन!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "जल्द आ रहा है",
        "safe": "सुरक्षित और निजी",
        "light": "हल्का",
        "android": "Android के लिए बनाया गया"
      },
      "philosophyKicker": "हमारी सोच",
      "philosophyTitle": "टेक्नोलॉजी गंभीर हो सकती है, हर समय गंभीर चेहरा बनाना ज़रूरी नहीं।",
      "philosophyBody": "Benedict Interactive ऐसा सॉफ़्टवेयर बनाता है जो खुद को समझाता है, लोगों के ध्यान का सम्मान करता है और थोड़ी-सी शख़्सियत के लिए जगह छोड़ता है। इंटरफ़ेस मुस्कुरा सकता है; इंजीनियरिंग फिर भी अनुशासित रहनी चाहिए।",
      "productKicker": "मुख्य प्रोडक्ट",
      "productTitle": "Bearagnostic",
      "productPromise": "बिखराव खोजें। जोखिम समझें। भरोसे से साफ़ करें।",
      "productBody": "प्राइवेसी-फर्स्ट Android फ़ाइल असिस्टेंट जो दिखाता है कि जगह कहाँ जा रही है, जो मिला उसे समझाता है, और क्या रखना है यह फैसला आपके हाथ में छोड़ता है।",
      "productTags": [
        "Android",
        "प्राइवेसी पहले",
        "साफ़ समझाना"
      ],
      "productCta": "Bearagnostic देखें",
      "productSupport": "सहायता लें",
      "realScreen": "असली ऐप स्क्रीन",
      "principlesKicker": "हम कैसे बनाते हैं",
      "principlesTitle": "कम दिखावा। ज़्यादा सोच।",
      "principlesIntro": "तीन नियम, ताकि काम ईमानदार रहे — और बेवजह नाटकीय न बने।",
      "principles": [
        {
          "title": "पहले उपयोगी, फिर प्रभावशाली",
          "body": "कोई फ़ीचर तभी जगह पाता है जब वह असली समस्या हल करे।"
        },
        {
          "title": "स्पष्टता भी एक तरह की मेहरबानी है",
          "body": "अच्छा सॉफ़्टवेयर लोगों से अपने इरादे का अंदाज़ा लगाने को मजबूर नहीं करता।"
        },
        {
          "title": "भरोसा ढाँचे में होना चाहिए",
          "body": "प्राइवेसी और ईमानदार स्टेट्स डिज़ाइन के फैसले हैं, फ़ुटर की सजावटी लाइनें नहीं।"
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "स्वतंत्र होना भी डिज़ाइन का हिस्सा है।",
      "studioBody": "Benedict J. यहाँ के काम को डिज़ाइन, बिल्ड, टेस्ट और लगातार बेहतर करते हैं। प्रोडक्ट के पास रहने का फायदा यह है कि किसी छोटे डिटेल को ठीक होने से पहले मीटिंग की अर्जी नहीं देनी पड़ती।",
      "studioQuote": "इसे उपयोगी बनाइए। साफ़ बनाइए। और थोड़ी-सी खुशी के लिए जगह छोड़िए।",
      "closingKicker": "आगे क्या",
      "closingTitle": "सॉफ़्टवेयर ऐसा लगना चाहिए जैसे किसी ने सच में उसकी परवाह की हो।",
      "closingBody": "Bearagnostic पहला अध्याय है। आगे जो भी बने, मानक यही रहेगा।",
      "closingCta": "प्रोडक्ट्स देखें"
    },
    "products": {
      "metaDescription": "Benedict Interactive के प्रोडक्ट्स और आने वाले टूल्स।",
      "kicker": "प्रोडक्ट्स",
      "title": "काम अलग। देखभाल का स्तर वही।",
      "lead": "फ़ोकस्ड सॉफ़्टवेयर, साफ़ काम, ईमानदार स्टेट्स और इतनी शख़्सियत कि याद रह जाए।",
      "bearDescription": "डिलीट करने से पहले स्टोरेज की अव्यवस्था समझें। शांत, लोकल-फर्स्ट, और जादुई बटन से खास प्रभावित नहीं।",
      "bearCta": "Bearagnostic देखें",
      "testKicker": "लैब में",
      "testTitle": "Benedict Test Center",
      "testDescription": "संरचित टेस्टिंग, रीटेस्ट और वास्तव में क्या हुआ इसका रिकॉर्ड रखने के लिए एक नियोजित QA व रिलीज़-एविडेंस प्लेटफ़ॉर्म।",
      "testNote": "इसे अलग और सुरक्षित सेवा के रूप में बनाया जाएगा — क्योंकि टेस्टर डेटा और सार्वजनिक मार्केटिंग पेज एक ही रसोई की दराज़ में नहीं रहने चाहिए।"
    },
    "bear": {
      "metaDescription": "Bearagnostic, Benedict Interactive का प्राइवेसी-फर्स्ट Android फ़ाइल असिस्टेंट है।",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "बिखराव खोजें। जोखिम समझें। भरोसे से साफ़ करें।",
      "lead": "Bearagnostic आपको साफ़ करने से पहले स्टोरेज समझने में मदद करता है। यह बिखराव ढूँढता है, जोखिम समझाता है और आख़िरी फैसला वहीं छोड़ता है जहाँ होना चाहिए: आपके पास।",
      "featuresKicker": "यह क्यों है",
      "featuresTitle": "संदर्भ के साथ सफ़ाई।",
      "features": [
        {
          "title": "वास्तव में क्या है, देखें",
          "body": "फ़ाइलें और श्रेणियाँ दिखाएँ, हर मेगाबाइट को आपातकाल बनाए बिना।"
        },
        {
          "title": "डिलीट करने से पहले समझें",
          "body": "साफ़ व्याख्या से समझना आसान होता है कि क्या हट सकता है और क्या शायद रहना चाहिए।"
        },
        {
          "title": "प्राइवेसी पास ही रहे",
          "body": "प्रोडक्ट दिशा लोकल विश्लेषण और न्यूनतम डेटा संग्रह को प्राथमिकता देती है।"
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "लाइफटाइम Pro। एक बार भुगतान, कोई सब्सक्रिप्शन नहीं।",
      "proBody": "Lifetime Pro की कीमत 249 THB है, एक बार भुगतान। पहले से सत्यापित ग्राहक अभी अपना एक्सेस बहाल कर सकते हैं; नई खरीद अभी खुली नहीं है।",
      "proPoints": [
        "Lifetime Pro के लिए 249 THB एक बार",
        "सत्यापित खरीद ईमेल से मौजूदा Pro बहाल करें",
        "कमज़ोर local flag के बजाय server-verified entitlement"
      ],
      "proStatus": "मौजूदा Pro बहाली अभी उपलब्ध है",
      "proNote": "नई Pro खरीद अभी खुली नहीं है। पहले से सत्यापित ग्राहक production app में Restore Pro कर सकते हैं।",
      "supportCta": "Bearagnostic सहायता"
    },
    "support": {
      "metaDescription": "Benedict Interactive प्रोडक्ट्स के लिए सहायता जानकारी।",
      "kicker": "सहायता",
      "title": "साफ़ मदद, बिना भूलभुलैया।",
      "lead": "आधिकारिक मदद यहीं उपलब्ध है—प्रोडक्ट के पास और आसानी से मिलने वाली। पुराने पोस्ट, संदिग्ध लिंक या भूले हुए टैब में खोजबीन करने की जरूरत नहीं।",
      "bearTitle": "Bearagnostic",
      "bearBody": "मौजूदा सार्वजनिक रिलीज़ के release notes, installation help, Restore Pro, troubleshooting और product guidance यहाँ उपलब्ध हैं।",
      "generalTitle": "Benedict Interactive",
      "generalBody": "यह साइट प्रोडक्ट जानकारी का आधिकारिक स्रोत है। स्टोर और सोशल पोस्ट यहाँ लिंक कर सकते हैं; वे मूल स्रोत नहीं हैं।",
      "stagingNote": "ब्रांडेड support address पूरा होने तक Benedict Interactive का public support उपलब्ध रहता है।"
    },
    "common": {
      "inDevelopment": "विकास में",
      "planned": "योजना में",
      "viewProduct": "प्रोडक्ट देखें",
      "backHome": "होम पर जाएँ",
      "footerLine": "Benedict J. का स्वतंत्र सॉफ़्टवेयर",
      "footerStaging": "सार्वजनिक रिलीज़ · Benedict Interactive से सत्यापित डाउनलोड",
      "skipToContent": "मुख्य सामग्री पर जाएँ"
    }
  },
  "tr": {
    "nav": {
      "home": "Ana Sayfa",
      "products": "Ürünler",
      "philosophy": "Felsefe",
      "support": "Destek",
      "language": "Dil",
      "menu": "Menü"
    },
    "home": {
      "metaDescription": "Benedict Interactive’dan özenle yapılmış yazılımlar: açık, yetenekli, gizliliğe saygılı ve kendine özgü.",
      "kicker": "Bağımsız yazılım stüdyosu · Benedict J.",
      "headlineA": "Daha sakin bir dijital yaşam için",
      "headlineB": "ferah ve özenli yazılımlar.",
      "lead": "İnsanı merkeze alan yazılımlar; daha temiz, daha sade ve daha aydınlık bir günlük deneyim için.",
      "primaryCta": "Bearagnostic ile tanış",
      "secondaryCta": "Bakış açımızı gör",
      "proof": [
        "Bağımsız",
        "Gizlilik odaklı",
        "Özenle yapılmış"
      ],
      "founderRole": "Bağımsız geliştirici",
      "founderSlogan": "Daha iyi araçlar. Daha aydınlık günler!",
      "distribution": {
        "uptodown": "Uptodown",
        "soon": "yakında",
        "safe": "Güvenli ve özel",
        "light": "Hafif",
        "android": "Android için"
      },
      "philosophyKicker": "Bakış açımız",
      "philosophyTitle": "Teknoloji ciddi olabilir; ama sürekli ciddi görünmek zorunda değil.",
      "philosophyBody": "Benedict Interactive kendini açıklayan, dikkatinize saygı duyan ve kişiliğe biraz alan bırakan yazılımlar üretir. Arayüz gülümseyebilir. Mühendisliğin ise hâlâ uslu durması gerekir.",
      "productKicker": "Öne çıkan ürün",
      "productTitle": "Bearagnostic",
      "productPromise": "Dağınıklığı bul. Riski anla. Güvenle temizle.",
      "productBody": "Neyin yer kapladığını gösteren, bulduklarını açıklayan ve neyin kalacağına sizin karar vermenizi sağlayan gizlilik öncelikli Android dosya asistanı.",
      "productTags": [
        "Android",
        "Gizlilik öncelikli",
        "Açık açıklamalar"
      ],
      "productCta": "Bearagnostic’i keşfet",
      "productSupport": "Destek al",
      "realScreen": "Gerçek uygulama ekranı",
      "principlesKicker": "Nasıl çalışıyoruz",
      "principlesTitle": "Daha az gösteri. Daha çok düşünce.",
      "principlesIntro": "İşi dürüst ve hoş biçimde dramasız tutan üç kural.",
      "principles": [
        {
          "title": "Önce işe yarasın",
          "body": "Bir özellik, gerçek bir sorunu çözdüğünde yerini hak eder."
        },
        {
          "title": "Açıklık bir nezakettir",
          "body": "İyi yazılım, insanları niyetini tahmin etmeye zorlamaz."
        },
        {
          "title": "Güven yapının içinde olmalı",
          "body": "Gizlilik ve dürüst durumlar tasarım kararıdır; footer süsü değil."
        }
      ],
      "studioKicker": "Benedict Interactive",
      "studioTitle": "Bağımsızlık bilinçli bir seçim.",
      "studioBody": "Benedict J. buradaki işleri tasarlar, geliştirir, test eder ve sürekli iyileştirir. Ürüne yakın olmak, küçük bir detayın düzeltilmeden önce toplantı talebi açmasına gerek kalmaması demek.",
      "studioQuote": "İşe yarasın. Açık olsun. Biraz da keyif için yer bıraksın.",
      "closingKicker": "Sırada ne var",
      "closingTitle": "Yazılım, birinin gerçekten önemsediği hissini vermeli.",
      "closingBody": "Bearagnostic ilk bölüm. Bundan sonra ne gelirse gelsin, standart aynı kalacak.",
      "closingCta": "Ürünleri keşfet"
    },
    "products": {
      "metaDescription": "Benedict Interactive ürünleri ve gelecekteki araçları.",
      "kicker": "Ürünler",
      "title": "Farklı işler. Aynı özen standardı.",
      "lead": "İşi belli, durumu dürüst ve hatırlanacak kadar karakterli odaklı yazılımlar.",
      "bearDescription": "Silmeden önce depolama karmaşasını anlayın. Sakin, yerel odaklı ve sihirli düğmelere pek hayran değil.",
      "bearCta": "Bearagnostic’i keşfet",
      "testKicker": "Laboratuvarda",
      "testTitle": "Benedict Test Center",
      "testDescription": "Yapılandırılmış test, yeniden test ve gerçekte ne olduğuna dair iz bırakmak için planlanan QA ve sürüm kanıtı platformu.",
      "testNote": "Ayrı ve güvenli bir servis olarak planlanıyor — çünkü tester verileriyle herkese açık pazarlama sayfaları aynı mutfak çekmecesine konmamalı."
    },
    "bear": {
      "metaDescription": "Bearagnostic, Benedict Interactive’ın gizlilik öncelikli Android dosya asistanıdır.",
      "kicker": "Benedict Interactive · Android",
      "title": "Bearagnostic",
      "promise": "Dağınıklığı bul. Riski anla. Güvenle temizle.",
      "lead": "Bearagnostic temizlemeden önce depolamayı anlamanıza yardım eder. Dağınıklığı bulur, riski açıklar ve son kararı ait olduğu yerde bırakır: sizde.",
      "featuresKicker": "Neden var",
      "featuresTitle": "Bağlamla temizlik.",
      "features": [
        {
          "title": "Gerçekte ne var, görün",
          "body": "Dosya ve kategorileri, her megabaytı acil durum ilan etmeden gösterir."
        },
        {
          "title": "Silmeden önce anlayın",
          "body": "Açık açıklamalar neyin gidebileceğini, neyin kalmasının daha iyi olacağını değerlendirmeyi kolaylaştırır."
        },
        {
          "title": "Gizlilik yakınınızda kalsın",
          "body": "Ürün yönü yerel analizi ve minimum veri toplamayı önceliklendirir."
        }
      ],
      "proKicker": "Bearagnostic Pro",
      "proTitle": "Ömür boyu Pro. Tek ödeme, abonelik yok.",
      "proBody": "Lifetime Pro tek seferlik 249 THB’dir. Daha önce doğrulanmış müşteriler erişimlerini şimdi geri yükleyebilir; yeni satın alımlar henüz açık değildir.",
      "proPoints": [
        "Lifetime Pro için tek seferlik 249 THB",
        "Doğrulanmış satın alma e-postasıyla mevcut Pro’yu geri yükleyin",
        "Kırılgan bir yerel işaret yerine sunucu doğrulamalı entitlement"
      ],
      "proStatus": "Mevcut Pro geri yükleme artık aktif",
      "proNote": "Yeni Pro satın alımları henüz açık değil. Daha önce doğrulanmış müşteriler production uygulamasında Restore Pro kullanabilir.",
      "supportCta": "Bearagnostic desteği"
    },
    "support": {
      "metaDescription": "Benedict Interactive ürünleri için destek bilgileri.",
      "kicker": "Destek",
      "title": "Labirentsiz, açık yardım.",
      "lead": "Resmî yardım burada, ürüne yakın ve kolay bulunur. Eski gönderiler, şüpheli bağlantılar veya unutulmuş sekmeler arasında arama yapmaya gerek yok.",
      "bearTitle": "Bearagnostic",
      "bearBody": "Güncel herkese açık sürüm için sürüm notları, kurulum yardımı, Restore Pro, sorun giderme ve kullanım rehberi burada bulunur.",
      "generalTitle": "Benedict Interactive",
      "generalBody": "Bu site ürün bilgilerinin resmî kaynağıdır. Mağazalar ve sosyal paylaşımlar buraya yönlendirebilir; kaynak onların kendisi değildir.",
      "stagingNote": "Markalı destek adresini tamamlarken Benedict Interactive’in herkese açık desteği kullanılmaya devam ediyor."
    },
    "common": {
      "inDevelopment": "Geliştiriliyor",
      "planned": "Planlandı",
      "viewProduct": "Ürünü gör",
      "backHome": "Ana sayfaya dön",
      "footerLine": "Benedict J. tarafından bağımsız yazılım",
      "footerStaging": "Herkese açık sürüm · Benedict Interactive tarafından doğrulanmış indirmeler",
      "skipToContent": "İçeriğe geç"
    }
  }
} as const;


export function isLocaleCode(value: string | undefined): value is LocaleCode {
  return Boolean(value && localeCodes.includes(value as LocaleCode));
}

export function getLocaleContent(locale: LocaleCode) {
  return content[locale];
}

export function localizedPath(locale: LocaleCode, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === '/') return `/${locale}/`;
  return `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLocaleCode(parts[0])) parts.shift();
  return `/${parts.join('/')}${pathname.endsWith('/') && parts.length ? '/' : ''}` || '/';
}
