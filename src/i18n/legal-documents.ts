import type { LocaleCode } from './content';
import type { LegalDocument, LegalDocumentKey } from './legal';

type LocalizedLegalLocale = Exclude<LocaleCode, 'en'>;

export const localizedLegalDocuments = {
  "th": {
    "privacy": {
      "title": "นโยบายความเป็นส่วนตัว",
      "metaDescription": "วิธีที่ Benedict Interactive จัดการข้อมูลการใช้งานเว็บไซต์ การติดต่อ และความเป็นส่วนตัว",
      "lead": "อธิบายแบบตรงไปตรงมาว่าเว็บไซต์นี้วัดอะไร ไม่ติดตามอะไร และเกิดอะไรขึ้นเมื่อคุณติดต่อ Benedict Interactive",
      "updated": "25 กันยายน 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. ภาพรวม",
          "paragraphs": [
            "Benedict Interactive เป็นสตูดิโอซอฟต์แวร์อิสระที่ดำเนินงานจากกรุงเทพฯ ประเทศไทย นโยบายนี้อธิบายการจัดการข้อมูลเมื่อคุณเข้าชมเว็บไซต์ เปิดลิงก์ผลิตภัณฑ์ หรือติดต่อเราทางอีเมล เว็บไซต์ออกแบบตามหลักเก็บข้อมูลเท่าที่จำเป็น และเราไม่ใช้ตัวติดตามโฆษณา โปรไฟล์โฆษณาตามพฤติกรรม หรือคุกกี้วิเคราะห์ที่ Benedict ตั้งขึ้นเอง"
          ]
        },
        {
          "id": "analytics",
          "heading": "2. การวิเคราะห์การใช้งานเว็บไซต์",
          "paragraphs": [
            "เว็บไซต์ใช้ Cloudflare Web Analytics เพื่อดูภาพรวมของหน้าเว็บ ทราฟฟิก ประสิทธิภาพ แหล่งอ้างอิง ประเภทอุปกรณ์ และประเทศ โดย Cloudflare ระบุว่าระบบนี้ไม่ใช้คุกกี้หรือ localStorage เพื่อวัดผลดังกล่าว นอกจากนี้ Benedict Interactive เก็บเหตุการณ์การใช้งานผลิตภัณฑ์แบบรวมเพียงบางประเภท เช่น การเปิดหน้าผลิตภัณฑ์ การกดดาวน์โหลด การเปิดหน้าช่วยเหลือ หรือการแสดงความสนใจใน Pro เพื่อดูภาพรวมของผลิตภัณฑ์ ไม่ได้ใช้เพื่อติดตามบุคคล"
          ],
          "bullets": [
            "ชุดข้อมูลเหตุการณ์ผลิตภัณฑ์ไม่เก็บ IP address, user-agent, referrer, cookies, local-storage identifiers, account identifiers หรือเนื้อหาข้อความที่ผู้ใช้พิมพ์",
            "เส้นทางหน้าเว็บที่บันทึกจะตัด query string และ URL fragment ออก",
            "การกดปุ่มดาวน์โหลดนับเป็นเพียงการคลิก ไม่ถือว่าเป็นการดาวน์โหลดหรือติดตั้งสำเร็จ"
          ]
        },
        {
          "id": "contact",
          "heading": "3. การติดต่อและอีเมล",
          "paragraphs": [
            "ช่องเขียนข้อความบนเว็บไซต์จะเตรียมข้อความในเบราว์เซอร์ของคุณ แล้วส่งต่อร่างไปยังแอปหรือบริการอีเมลที่คุณเลือก เว็บไซต์ไม่ได้รับหรือเก็บเนื้อหาร่างก่อนที่คุณจะกดส่ง หากคุณส่งอีเมลถึง Benedict Interactive เราจะได้รับข้อมูลที่อยู่ในอีเมลนั้น เช่น ชื่อ อีเมล หัวเรื่อง ข้อความ และข้อมูลอื่นที่คุณเลือกส่ง ปัจจุบันอีเมลของเราใช้งานผ่าน Gmail ของ Google"
          ]
        },
        {
          "id": "purpose",
          "heading": "4. เราใช้ข้อมูลเพื่ออะไร",
          "paragraphs": [
            "ข้อมูลวิเคราะห์แบบรวมใช้เพื่อดูว่าเว็บไซต์ทำงานดีหรือไม่ หน้าใดได้รับความสนใจ และส่วนใดควรปรับปรุง ส่วนข้อมูลจากการติดต่อใช้เพื่อตอบคำถามด้านการช่วยเหลือ ข้อเสนอแนะ เรื่องธุรกิจ และการติดต่ออื่นๆ หากกฎหมายกำหนดให้ต้องมีฐานทางกฎหมาย เราจะอาศัยฐานที่เหมาะกับกิจกรรมนั้น เช่น การดำเนินการตามที่คุณร้องขอ ประโยชน์โดยชอบในการดูแลและพัฒนาเว็บไซต์ หรือการปฏิบัติตามกฎหมาย"
          ]
        },
        {
          "id": "providers",
          "heading": "5. ผู้ให้บริการภายนอก",
          "paragraphs": [
            "Cloudflare ให้บริการส่งมอบเว็บไซต์ Pages hosting, Web Analytics และ Analytics Engine ส่วน Google ให้บริการ Gmail สำหรับการติดต่อทางอีเมล ผู้ให้บริการเหล่านี้ดำเนินการภายใต้ข้อกำหนดและนโยบายความเป็นส่วนตัวของตนเอง Benedict Interactive ไม่ขายข้อมูลส่วนบุคคล และไม่ส่งข้อความติดต่อให้ผู้โฆษณาหรือนายหน้าข้อมูล"
          ]
        },
        {
          "id": "retention",
          "heading": "6. ระยะเวลาการเก็บข้อมูล",
          "paragraphs": [
            "ข้อมูลวิเคราะห์แบบรวมจะถูกเก็บตามการตั้งค่าและระยะเวลาของบริการ Cloudflare เราไม่พยายามนำข้อมูลเหล่านั้นไปสร้างโปรไฟล์ผู้เยี่ยมชมถาวร ส่วนอีเมลจะเก็บเท่าที่สมเหตุสมผลเพื่อใช้ตอบกลับ ดูแลประวัติการช่วยเหลือหรือธุรกิจ แก้ข้อพิพาท ปกป้องบริการ หรือปฏิบัติตามกฎหมาย ดังนั้นระยะเวลาจึงอาจต่างกันตามแต่ละกรณี"
          ]
        },
        {
          "id": "rights",
          "heading": "7. สิทธิ์เกี่ยวกับข้อมูลส่วนบุคคลของคุณ",
          "paragraphs": [
            "กฎหมายในพื้นที่ที่คุณอาศัยอยู่อาจให้สิทธิ์ในการขอเข้าถึง แก้ไข ลบ จำกัด คัดค้าน โอนย้าย หรือดำเนินการอื่นกับข้อมูลส่วนบุคคลที่เรามีเกี่ยวกับคุณ รวมถึงสิทธิ์ร้องเรียนต่อหน่วยงานคุ้มครองข้อมูลที่มีอำนาจ หากต้องการใช้สิทธิ์ โปรดอีเมลมาที่ benedict.support@gmail.com เราอาจขอข้อมูลเท่าที่จำเป็นเพื่อยืนยันคำขอและค้นหาการติดต่อที่เกี่ยวข้อง"
          ]
        },
        {
          "id": "international",
          "heading": "8. การประมวลผลข้ามประเทศ",
          "paragraphs": [
            "Cloudflare และ Google ให้บริการในหลายประเทศ ข้อมูลที่ประมวลผลผ่านบริการเหล่านี้จึงอาจถูกจัดการในประเทศอื่นนอกเหนือจากประเทศของคุณ ภายใต้มาตรการ ข้อกำหนดของผู้ให้บริการ และกฎหมายที่เกี่ยวข้อง"
          ]
        },
        {
          "id": "children",
          "heading": "9. เด็ก",
          "paragraphs": [
            "เว็บไซต์นี้เป็นเว็บไซต์ของสตูดิโอซอฟต์แวร์และข้อมูลผลิตภัณฑ์ทั่วไป ไม่ได้ออกแบบมาเพื่อเก็บข้อมูลส่วนบุคคลจากเด็ก หากคุณเชื่อว่าเด็กได้ส่งข้อมูลส่วนบุคคลถึง Benedict Interactive โปรดติดต่อเราเพื่อให้ตรวจสอบและจัดการได้เหมาะสม"
          ]
        },
        {
          "id": "changes",
          "heading": "10. การเปลี่ยนแปลงและการติดต่อ",
          "paragraphs": [
            "เราอาจปรับปรุงนโยบายนี้เมื่อเว็บไซต์ ระบบวิเคราะห์ ช่องทางติดต่อ ผลิตภัณฑ์ หรือข้อกฎหมายเปลี่ยนไป วันที่ด้านบนคือวันที่แก้ไขล่าสุด หากมีคำถามเรื่องความเป็นส่วนตัว ติดต่อได้ที่ benedict.support@gmail.com Benedict Interactive ดำเนินงานจากกรุงเทพฯ ประเทศไทย"
          ]
        }
      ]
    },
    "terms": {
      "title": "ข้อกำหนดการใช้งาน",
      "metaDescription": "ข้อกำหนดสำหรับการใช้เว็บไซต์และเนื้อหาสาธารณะของ Benedict Interactive",
      "lead": "กติกาที่อ่านเข้าใจง่ายสำหรับการใช้เว็บไซต์ เนื้อหา และข้อมูลผลิตภัณฑ์สาธารณะของ Benedict Interactive",
      "updated": "25 กันยายน 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. ขอบเขตและการยอมรับ",
          "paragraphs": [
            "ข้อกำหนดนี้ใช้กับเว็บไซต์ Benedict Interactive และเนื้อหาสาธารณะบนเว็บไซต์ การใช้งานเว็บไซต์ถือว่าคุณยอมรับข้อกำหนดนี้เท่าที่กฎหมายอนุญาต หากไม่ยอมรับ โปรดอย่าใช้เว็บไซต์ ในเอกสารนี้ “Benedict Interactive”, “เรา” และคำที่มีความหมายเดียวกัน หมายถึงผู้ดำเนินเว็บไซต์ของสตูดิโอซอฟต์แวร์อิสระแห่งนี้ซึ่งตั้งอยู่ในกรุงเทพฯ ประเทศไทย"
          ]
        },
        {
          "id": "information",
          "heading": "2. ข้อมูลผลิตภัณฑ์และสถานะการให้บริการ",
          "paragraphs": [
            "ผลิตภัณฑ์ ฟีเจอร์ ช่องทางเผยแพร่ ราคา ระบบซื้อ และบริการแต่ละรายการอาจเปิดให้ใช้งานในช่วงเวลาหรือสถานะที่ต่างกัน หากระบุว่าเป็นแผนในอนาคตหรือจะเปิดภายหลัง ไม่ถือเป็นคำรับรองว่าจะพร้อมในวันหรือรูปแบบใดโดยเฉพาะ เราพยายามให้ข้อมูลบนเว็บไซต์เป็นปัจจุบัน แต่ตัวผลิตภัณฑ์ release notes ขั้นตอนซื้อ หรือเอกสารเฉพาะผลิตภัณฑ์ล่าสุดอาจแทนที่ข้อความเดิมบนเว็บไซต์"
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. การใช้งานที่ยอมรับได้",
          "paragraphs": [
            "คุณใช้เว็บไซต์สาธารณะเพื่อการเข้าชม ประเมินผลิตภัณฑ์ ขอความช่วยเหลือ และติดต่อสื่อสารโดยชอบด้วยกฎหมายได้ แต่ต้องไม่ใช้เว็บไซต์ในทางที่ผิดหรือรบกวนการทำงานของระบบ"
          ],
          "bullets": [
            "ห้ามพยายามเข้าถึงระบบที่ไม่เปิดสาธารณะ เครื่องมือผู้ดูแล ระบบยืนยันตัวตน หรือข้อมูลโดยไม่ได้รับอนุญาต",
            "ห้ามจงใจรบกวน ทำให้ระบบรับภาระเกินควร scrape อย่างไม่เหมาะสม ทดสอบช่องโหว่โดยไม่ได้รับอนุญาต หรือหลบเลี่ยงมาตรการป้องกันทางเทคนิค",
            "ห้ามใช้เว็บไซต์หรือเนื้อหาเพื่อแอบอ้างเป็น Benedict Interactive หรือทำให้ผู้อื่นเข้าใจผิดเรื่องผู้สนับสนุน ความเป็นเจ้าของ หรือการรับรอง"
          ]
        },
        {
          "id": "ip",
          "heading": "4. ทรัพย์สินทางปัญญา",
          "paragraphs": [
            "เว้นแต่ระบุว่าเป็นของบุคคลที่สาม การออกแบบเว็บไซต์ ข้อความต้นฉบับ ทรัพย์สินแบรนด์ Benedict Interactive งานศิลป์ วัสดุซอฟต์แวร์ และเนื้อหาต้นฉบับอื่นเป็นของ Benedict Interactive หรือได้รับสิทธิ์ให้ใช้ และได้รับความคุ้มครองตามกฎหมายทรัพย์สินทางปัญญาที่เกี่ยวข้อง การใช้เว็บไซต์ไม่ได้โอนความเป็นเจ้าของสิทธิ์ใดให้คุณ การเก็บ cache ตามปกติของเบราว์เซอร์และการอ้างอิงส่วนบุคคลทำได้ แต่การคัดลอก เผยแพร่ซ้ำ จำหน่ายต่อ หรือใช้เชิงพาณิชย์ในวงกว้างต้องได้รับอนุญาต เว้นแต่กฎหมายให้สิทธิ์ไว้ต่างหาก"
          ]
        },
        {
          "id": "software",
          "heading": "5. ซอฟต์แวร์มีสิทธิ์การใช้งานแยกต่างหาก",
          "paragraphs": [
            "ซอฟต์แวร์ที่ Benedict Interactive เผยแพร่จะอยู่ภายใต้สัญญาอนุญาตซอฟต์แวร์หรือข้อกำหนดเฉพาะผลิตภัณฑ์ ไม่ได้อยู่ภายใต้ข้อกำหนดเว็บไซต์นี้เพียงอย่างเดียว สัญญาอนุญาตซอฟต์แวร์ทั่วไปมีเผยแพร่บนเว็บไซต์ และเมื่อผลิตภัณฑ์เปิดตัวอาจมีข้อกำหนดเฉพาะที่เพิ่มเติมหรือแทนที่ได้"
          ]
        },
        {
          "id": "third-party",
          "heading": "6. บริการและลิงก์ของบุคคลที่สาม",
          "paragraphs": [
            "เว็บไซต์อาจเชื่อมไปยัง app store บริการกระจายไฟล์ ผู้ให้บริการโฮสติ้ง อีเมล ระบบชำระเงิน เอกสาร หรือบริการอื่นของบุคคลที่สาม บริการเหล่านั้นอยู่ภายใต้ผู้ให้บริการของตนเองและอาจมีข้อกำหนด นโยบายความเป็นส่วนตัว ความพร้อมใช้งาน หรือค่าบริการต่างกัน การมีลิงก์ไม่ได้หมายความว่า Benedict Interactive รับรองทุกข้อความ ผลิตภัณฑ์ หรือนโยบายของเว็บไซต์ปลายทาง"
          ]
        },
        {
          "id": "warranty",
          "heading": "7. ความพร้อมใช้งานและข้อจำกัดการรับรอง",
          "paragraphs": [
            "เว็บไซต์และข้อมูลสาธารณะให้บริการตามสภาพที่พร้อมใช้งาน ภายในขอบเขตสูงสุดที่กฎหมายอนุญาต Benedict Interactive ไม่รับประกันว่าจะเข้าถึงได้ต่อเนื่อง ปราศจากข้อผิดพลาด หรือว่าข้อมูลทุกชิ้นจะเป็นปัจจุบันตลอดไป ทั้งนี้ไม่มีข้อความใดในข้อกำหนดนี้ตัดสิทธิ์หรือการรับรองที่กฎหมายคุ้มครองผู้บริโภคห้ามตัดออก"
          ]
        },
        {
          "id": "liability",
          "heading": "8. ข้อจำกัดความรับผิด",
          "paragraphs": [
            "ภายในขอบเขตสูงสุดที่กฎหมายใช้บังคับอนุญาต Benedict Interactive จะไม่รับผิดสำหรับความเสียหายทางอ้อม ความเสียหายโดยบังเอิญ ความเสียหายพิเศษ หรือผลสืบเนื่องที่เกิดจากการใช้เว็บไซต์สาธารณะนี้เพียงอย่างเดียว ข้อจำกัดนี้ไม่ใช้ในกรณีที่กฎหมายไม่อนุญาตให้จำกัดหรือตัดความรับผิด"
          ]
        },
        {
          "id": "changes",
          "heading": "9. การเปลี่ยนแปลงข้อกำหนด",
          "paragraphs": [
            "เราอาจปรับข้อกำหนดนี้เมื่อเว็บไซต์ ผลิตภัณฑ์ กฎหมาย หรือรูปแบบธุรกิจเปลี่ยนไป เงื่อนไขเชิงพาณิชย์ที่สำคัญ เช่น ราคา การคืนเงิน วิธีชำระเงิน และสิทธิ์การใช้งานแบบชำระเงิน จะเผยแพร่เมื่อระบบนั้นพร้อมใช้งานจริงเท่านั้น"
          ]
        },
        {
          "id": "law",
          "heading": "10. กฎหมายที่ใช้บังคับและสิทธิ์ที่กฎหมายคุ้มครอง",
          "paragraphs": [
            "ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย โดยไม่จำกัดสิทธิ์ผู้บริโภคหรือสิทธิ์ตามกฎหมายที่ไม่สามารถตัดออกได้ซึ่งอาจใช้กับคุณตามกฎหมายของสถานที่ที่คุณอาศัยอยู่"
          ]
        },
        {
          "id": "contact",
          "heading": "11. ติดต่อ",
          "paragraphs": [
            "คำถามเกี่ยวกับข้อกำหนดนี้ส่งได้ที่ benedict.support@gmail.com Benedict Interactive ดำเนินงานจากกรุงเทพฯ ประเทศไทย"
          ]
        }
      ]
    },
    "license": {
      "title": "สัญญาอนุญาตซอฟต์แวร์",
      "metaDescription": "ข้อกำหนดสิทธิ์การใช้งานทั่วไปสำหรับซอฟต์แวร์ที่เผยแพร่โดย Benedict Interactive",
      "lead": "กรอบสิทธิ์การใช้งานทั่วไปสำหรับซอฟต์แวร์ของ Benedict Interactive รวมถึง Bearagnostic เว้นแต่มีข้อกำหนดเฉพาะผลิตภัณฑ์ระบุไว้ต่างหาก",
      "updated": "25 กันยายน 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. ขอบเขต",
          "paragraphs": [
            "สัญญาอนุญาตทั่วไปนี้ใช้กับซอฟต์แวร์ที่ Benedict Interactive เผยแพร่ เมื่อซอฟต์แวร์หรือหน้าดาวน์โหลดอ้างถึงสัญญานี้และไม่มีสัญญาเฉพาะผลิตภัณฑ์มาแทน ข้อกำหนดเฉพาะผลิตภัณฑ์อาจเพิ่มเติมหรือมีผลเหนือสัญญาทั่วไปนี้ได้ หน้าผลิตภัณฑ์สาธารณะเพียงอย่างเดียวไม่ถือเป็นการให้สิทธิ์ใช้งาน สิทธิ์เกิดขึ้นเมื่อมีการมอบซอฟต์แวร์ให้คุณภายใต้ข้อกำหนดนี้จริง"
          ]
        },
        {
          "id": "grant",
          "heading": "2. การให้สิทธิ์ใช้งาน",
          "paragraphs": [
            "ภายใต้ข้อกำหนดนี้ Benedict Interactive ให้สิทธิ์แบบจำกัด ไม่ผูกขาด โอนไม่ได้ และให้สิทธิ์ช่วงต่อไม่ได้ เพื่อให้คุณติดตั้งและใช้ซอฟต์แวร์บนอุปกรณ์ที่คุณเป็นเจ้าของหรือควบคุม สำหรับการใช้งานส่วนบุคคลหรือภายในธุรกิจที่ชอบด้วยกฎหมาย ตามที่ผลิตภัณฑ์และเงื่อนไขการซื้อที่เกี่ยวข้องอนุญาต ซอฟต์แวร์เป็นการให้สิทธิ์ใช้งาน ไม่ใช่การขายกรรมสิทธิ์ และกรรมสิทธิ์ในซอฟต์แวร์รวมถึงทรัพย์สินทางปัญญายังคงเป็นของ Benedict Interactive และผู้ให้สิทธิ์ที่เกี่ยวข้อง"
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. ข้อจำกัด",
          "paragraphs": [
            "เว้นแต่กฎหมายที่ใช้บังคับให้สิทธิ์แก่คุณไว้อย่างชัดเจนและไม่สามารถจำกัดได้ คุณต้องไม่:"
          ],
          "bullets": [
            "เผยแพร่ต่อ ขายต่อ ให้สิทธิ์ช่วง ให้เช่า ให้เช่าซื้อ หรือให้บริการซอฟต์แวร์ในรูปแบบ hosted service โดยไม่มีอนุญาตเป็นลายลักษณ์อักษร",
            "ลบหรือปลอมแปลงข้อความลิขสิทธิ์ การระบุที่มา เครื่องหมายการค้า ใบอนุญาต หรือความเป็นเจ้าของ",
            "ใช้ซอฟต์แวร์ แบรนด์ หรืออัตลักษณ์ผลิตภัณฑ์เพื่อแอบอ้างเป็น Benedict Interactive หรือเผยแพร่ build ที่ดัดแปลง/ทำให้เข้าใจผิดว่าเป็นของทางการ",
            "หลบเลี่ยงระบบใบอนุญาต สิทธิ์การใช้งาน ระบบความปลอดภัย หรือการตรวจสอบความถูกต้อง",
            "ทำ reverse engineering, decompile หรือ disassemble เว้นแต่กฎหมายอนุญาตให้ทำได้โดยชัดแจ้งแม้มีข้อจำกัดนี้"
          ]
        },
        {
          "id": "copies",
          "heading": "4. สำเนาและอุปกรณ์",
          "paragraphs": [
            "คุณอาจทำสำเนาสำรองในจำนวนที่สมเหตุสมผลเมื่อจำเป็นต่อการใช้งานที่ได้รับอนุญาต โดยต้องเก็บข้อความแสดงกรรมสิทธิ์และสิทธิ์การใช้งานไว้ ข้อจำกัดจำนวนอุปกรณ์ บัญชี การกู้คืนสิทธิ์ หรือ entitlement ที่ประกาศสำหรับผลิตภัณฑ์ใดก็ยังคงใช้บังคับ"
          ]
        },
        {
          "id": "third-party",
          "heading": "5. ส่วนประกอบโอเพนซอร์สและบุคคลที่สาม",
          "paragraphs": [
            "ซอฟต์แวร์ของ Benedict Interactive อาจมีส่วนประกอบจากบุคคลที่สามหรือโอเพนซอร์ส ส่วนเหล่านั้นยังอยู่ภายใต้ใบอนุญาตและประกาศของเจ้าของเดิม หากใบอนุญาตของบุคคลที่สามให้สิทธิ์ที่ต่างจากสัญญาทั่วไปนี้ ให้ใช้ใบอนุญาตของบุคคลที่สามกับส่วนประกอบนั้น"
          ]
        },
        {
          "id": "updates",
          "heading": "6. อัปเดตและบริการ",
          "paragraphs": [
            "การอัปเดตอาจเพิ่ม เปลี่ยน แก้ไข หรือนำฟีเจอร์ออก เว้นแต่มีคำมั่นเฉพาะผลิตภัณฑ์ Benedict Interactive ไม่รับรองว่าทุกเวอร์ชัน แพลตฟอร์ม integration ร้านค้า หรือบริการออนไลน์จะมีให้ใช้ตลอดไป การประเมินเรื่องความปลอดภัย ความเป็นส่วนตัว และการจัดการข้อมูลควรอิงกับเวอร์ชันที่คุณใช้อยู่จริงและเอกสารผลิตภัณฑ์ล่าสุด"
          ]
        },
        {
          "id": "pro",
          "heading": "7. ฟีเจอร์แบบชำระเงินและสิทธิ์ Pro",
          "paragraphs": [
            "เมื่อผลิตภัณฑ์มีฟีเจอร์แบบชำระเงินหรือ Pro ให้ยึดเงื่อนไขการซื้อ การคืนเงิน การกู้คืนสิทธิ์ จำนวนอุปกรณ์ และ entitlement ตามขั้นตอนการขายจริงหรือเอกสารผลิตภัณฑ์ล่าสุด ความพร้อมใช้งาน ราคา และวิธีกู้คืนสิทธิ์อาจเปลี่ยนแปลงสำหรับการซื้อในอนาคต โดยยังอยู่ภายใต้กฎหมายที่ใช้บังคับและเงื่อนไขที่เกี่ยวข้องกับการซื้อที่มีผลอยู่"
          ]
        },
        {
          "id": "privacy",
          "heading": "8. ความเป็นส่วนตัว",
          "paragraphs": [
            "การใช้บริการออนไลน์ที่เชื่อมต่ออยู่ภายใต้นโยบายความเป็นส่วนตัวที่เกี่ยวข้องด้วย และผลิตภัณฑ์อาจมีคำอธิบายความเป็นส่วนตัวเฉพาะเพิ่มเติมในกรณีที่ซอฟต์แวร์ประมวลผลไฟล์ในอุปกรณ์ ข้อมูลวินิจฉัย ข้อมูลบัญชี หรือข้อมูลอื่น"
          ]
        },
        {
          "id": "warranty",
          "heading": "9. การรับประกันและความรับผิด",
          "paragraphs": [
            "ภายในขอบเขตสูงสุดที่กฎหมายอนุญาต ซอฟต์แวร์ให้บริการโดยไม่มีการรับประกันอื่นนอกเหนือจากที่ระบุไว้อย่างชัดเจนในข้อกำหนดของผลิตภัณฑ์หรือการซื้อ ไม่มีข้อความใดในสัญญานี้ตัดสิทธิ์ตามกฎหมายหรือความรับผิดที่กฎหมายไม่อนุญาตให้ตัดหรือจำกัด"
          ]
        },
        {
          "id": "termination",
          "heading": "10. การสิ้นสุดสิทธิ์",
          "paragraphs": [
            "สิทธิ์การใช้งานสิ้นสุดลงหากคุณฝ่าฝืนข้อกำหนดอย่างมีนัยสำคัญและไม่แก้ไขเมื่อกฎหมายกำหนดให้มีโอกาสแก้ไข เมื่อสิทธิ์สิ้นสุด คุณต้องหยุดใช้สำเนาที่ไม่ได้รับอนุญาตอีกต่อไป ข้อกำหนดเรื่องกรรมสิทธิ์ สิทธิ์ของบุคคลที่สาม ข้อจำกัดความรับผิด และข้อกำหนดที่โดยลักษณะควรมีผลต่อไป ยังคงมีผลหลังสิ้นสุดสิทธิ์"
          ]
        },
        {
          "id": "law",
          "heading": "11. กฎหมายที่ใช้บังคับ",
          "paragraphs": [
            "สัญญาอนุญาตนี้อยู่ภายใต้กฎหมายไทย โดยไม่จำกัดสิทธิ์ตามกฎหมายหรือสิทธิ์ผู้บริโภคที่บังคับใช้ในเขตอำนาจของคุณ"
          ]
        },
        {
          "id": "contact",
          "heading": "12. ติดต่อ",
          "paragraphs": [
            "คำถามเกี่ยวกับสิทธิ์การใช้งานหรือคำขออนุญาตส่งได้ที่ benedict.support@gmail.com"
          ]
        }
      ]
    },
    "legal": {
      "title": "กฎหมายและสิทธิ์",
      "metaDescription": "ข้อมูลลิขสิทธิ์ แบรนด์ การขออนุญาต และสิทธิ์ต่างๆ ของ Benedict Interactive",
      "lead": "ข้อมูลเรื่องความเป็นเจ้าของ การอนุญาต สิทธิ์ของบุคคลที่สาม และหลักการใช้เนื้อหาของ Benedict Interactive",
      "updated": "25 กันยายน 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. ลิขสิทธิ์",
          "paragraphs": [
            "© 2026 Benedict Interactive. สงวนลิขสิทธิ์และสิทธิ์ทั้งหมด เว้นแต่ระบุไว้เป็นอย่างอื่น ข้อความต้นฉบับ การออกแบบ กราฟิก งานศิลป์ ทรัพย์สินแบรนด์ เอกสาร และวัสดุซอฟต์แวร์ต้นฉบับบนเว็บไซต์เป็นของ Benedict Interactive หรือได้รับสิทธิ์ให้ใช้ และได้รับความคุ้มครองตามกฎหมายลิขสิทธิ์และกฎหมายที่เกี่ยวข้อง การคุ้มครองลิขสิทธิ์ไม่ได้ขึ้นอยู่กับการมีข้อความนี้ ข้อความนี้มีไว้เพื่อให้ความเป็นเจ้าของและขอบเขตการใช้งานชัดเจนขึ้น"
          ]
        },
        {
          "id": "brands",
          "heading": "2. แบรนด์และชื่อผลิตภัณฑ์",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center รวมถึงโลโก้ เครื่องหมายผลิตภัณฑ์ และอัตลักษณ์ภาพที่เกี่ยวข้อง ใช้เป็นเครื่องหมายระบุแบรนด์ของ Benedict Interactive เว้นแต่ระบุไว้ต่างหาก หน้านี้ไม่ได้อ้างว่าเครื่องหมายใดจดทะเบียนแล้ว เว้นแต่จะระบุชัดเจน และจะไม่ใช้สัญลักษณ์เครื่องหมายการค้าจดทะเบียนหากสถานะการจดทะเบียนไม่รองรับ"
          ]
        },
        {
          "id": "permissions",
          "heading": "3. การขออนุญาตนำเนื้อหาไปใช้",
          "paragraphs": [
            "คุณสามารถลิงก์ไปยังหน้าสาธารณะและกล่าวถึงผลิตภัณฑ์ของ Benedict Interactive ตามปกติได้ แต่การนำข้อความต้นฉบับจำนวนมาก งานศิลป์ ภาพหน้าจอ ทรัพย์สินแบรนด์ ไฟล์ดาวน์โหลด หรือซอฟต์แวร์ไปเผยแพร่ซ้ำ ใช้เชิงพาณิชย์ ขายต่อ แจกจ่าย หรือแอบอ้าง ต้องได้รับอนุญาต เว้นแต่กฎหมายอนุญาตให้ใช้ได้โดยอิสระ หากต้องการใช้เพื่อสื่อ บทความ การศึกษา พันธมิตร การกระจายผลิตภัณฑ์ หรือวัตถุประสงค์อื่น โปรดติดต่อ Benedict Interactive ก่อน"
          ]
        },
        {
          "id": "third-party",
          "heading": "4. สิทธิ์ของบุคคลที่สามและโอเพนซอร์ส",
          "paragraphs": [
            "ชื่อ โลโก้ แพลตฟอร์ม บริการ ไลบรารี ฟอนต์ ส่วนประกอบโอเพนซอร์ส และเนื้อหาอื่นของบุคคลที่สามยังคงเป็นทรัพย์สินของเจ้าของแต่ละราย การปรากฏบนเว็บไซต์ไม่ได้โอนกรรมสิทธิ์ให้ Benedict Interactive ประกาศและใบอนุญาตของซอฟต์แวร์โอเพนซอร์สหรือบุคคลที่สามยังอยู่ภายใต้ใบอนุญาตต้นทาง และ Benedict Interactive ไม่อ้างสิทธิ์แต่เพียงผู้เดียวเหนือสิ่งที่เป็นของผู้อื่น"
          ]
        },
        {
          "id": "reports",
          "heading": "5. การแจ้งปัญหาเรื่องสิทธิ์หรือการละเมิด",
          "paragraphs": [
            "หากคุณเชื่อว่าเนื้อหาบนเว็บไซต์ละเมิดสิทธิ์ของคุณ โปรดส่งรายละเอียดที่ชัดเจนมาที่ benedict.support@gmail.com โดยระบุเนื้อหาที่เกี่ยวข้อง สิทธิ์ที่คุณเชื่อว่าได้รับผลกระทบ เหตุผลของคำร้อง และช่องทางติดต่อที่เชื่อถือได้ เราจะตรวจสอบรายงานที่ส่งมาโดยสุจริต"
          ]
        },
        {
          "id": "location",
          "heading": "6. ช่องทางติดต่อสตูดิโอ",
          "paragraphs": [
            "Benedict Interactive เป็นสตูดิโอซอฟต์แวร์อิสระที่ดำเนินงานจากกรุงเทพฯ ประเทศไทย อีเมลสาธารณะสำหรับติดต่อคือ benedict.support@gmail.com คำว่า “กรุงเทพฯ ประเทศไทย” ใช้ระบุสถานที่ตั้งของสตูดิโอ ไม่ได้หมายความว่าเป็นที่อยู่สำนักงานสำหรับบุคคลทั่วไปเข้าพบ"
          ]
        }
      ]
    }
  },
  "es": {
    "privacy": {
      "title": "Política de privacidad",
      "metaDescription": "Cómo gestiona Benedict Interactive las analíticas del sitio, los mensajes de contacto y la privacidad.",
      "lead": "Una explicación clara de qué mide este sitio, qué no rastrea y qué ocurre cuando contactas con Benedict Interactive.",
      "updated": "25 de septiembre de 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Resumen",
          "paragraphs": [
            "Benedict Interactive es un estudio de software independiente con sede operativa en Bangkok, Tailandia. Esta política explica cómo se trata la información cuando visitas el sitio, usas enlaces de productos o nos escribes por correo. El sitio está diseñado para recopilar la menor cantidad de datos posible: no usamos rastreadores publicitarios, perfiles de publicidad conductual ni cookies analíticas propias de Benedict."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Analítica del sitio",
          "paragraphs": [
            "Usamos Cloudflare Web Analytics para obtener información agregada sobre páginas, tráfico, rendimiento, procedencia, dispositivo y país. Cloudflare indica que este servicio no usa cookies ni localStorage para estas mediciones. Benedict Interactive también registra un conjunto reducido de eventos agregados del producto —por ejemplo, abrir una página, pulsar un enlace de descarga, entrar en soporte o mostrar interés por una futura versión Pro— para entender el uso del producto, no para seguir a personas concretas."
          ],
          "bullets": [
            "El conjunto de eventos no guarda direcciones IP, cadenas de user-agent, referentes, cookies, identificadores de localStorage, identificadores de cuenta ni el contenido libre de mensajes.",
            "Las rutas se guardan sin parámetros de consulta ni fragmentos de URL.",
            "Un clic en Descargar se cuenta solo como clic; no se presenta como una descarga o instalación completada."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Contacto y correo electrónico",
          "paragraphs": [
            "El editor de contacto prepara el mensaje en tu navegador y entrega el borrador a la aplicación o servicio de correo que elijas. El sitio no recibe ni almacena ese borrador antes de que decidas enviarlo. Si nos escribes, recibiremos la información incluida en el correo —como nombre, dirección, asunto, mensaje y cualquier dato que decidas añadir—. Actualmente el correo de Benedict Interactive se gestiona mediante Gmail, un servicio de Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Para qué usamos la información",
          "paragraphs": [
            "Las analíticas agregadas sirven para comprobar si el sitio funciona bien, saber qué páginas reciben atención y detectar mejoras de rendimiento o usabilidad. Los datos de contacto se usan para responder a soporte, comentarios, consultas comerciales y demás correspondencia. Cuando la ley exige una base jurídica, usamos la que corresponda a la actividad, como atender una solicitud tuya, nuestros intereses legítimos en operar y mejorar el sitio o el cumplimiento de obligaciones legales."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Proveedores de servicios",
          "paragraphs": [
            "Cloudflare presta la entrega del sitio, Pages hosting, Web Analytics y Analytics Engine. Google presta Gmail para la correspondencia de Benedict Interactive. Estos proveedores tratan información conforme a sus propios términos y políticas. Benedict Interactive no vende datos personales ni entrega mensajes de contacto a anunciantes o intermediarios de datos."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Conservación",
          "paragraphs": [
            "Las analíticas agregadas se conservan según la configuración y los límites del servicio de Cloudflare; no intentamos convertirlas en perfiles permanentes de visitantes. Los correos se conservan solo el tiempo razonablemente necesario para responder, mantener registros relevantes de soporte o negocio, resolver disputas, proteger el servicio o cumplir obligaciones legales. Por eso el plazo puede variar según el mensaje y el contexto."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Tus derechos de privacidad",
          "paragraphs": [
            "Según dónde vivas, la legislación aplicable puede darte derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad u otras medidas respecto de tus datos personales, además del derecho a reclamar ante una autoridad competente. Para ejercerlos, escribe a benedict.support@gmail.com. Podemos pedir información suficiente para verificar la solicitud y localizar la correspondencia relacionada."
          ]
        },
        {
          "id": "international",
          "heading": "8. Tratamiento internacional",
          "paragraphs": [
            "Cloudflare y Google operan internacionalmente, por lo que la información tratada mediante sus servicios puede gestionarse en países distintos al tuyo, de acuerdo con las salvaguardias y condiciones de esos proveedores y con la legislación aplicable."
          ]
        },
        {
          "id": "children",
          "heading": "9. Menores",
          "paragraphs": [
            "Este es un sitio general de un estudio de software y de información de productos; no está diseñado para recopilar datos personales de menores. Si crees que un menor ha enviado información personal a Benedict Interactive, ponte en contacto con nosotros para que podamos revisar la situación."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Cambios y contacto",
          "paragraphs": [
            "Podemos actualizar esta política cuando cambien el sitio, las analíticas, el sistema de contacto, los productos o los requisitos legales. La fecha superior indica la última revisión. Para consultas de privacidad, escribe a benedict.support@gmail.com. Benedict Interactive opera desde Bangkok, Tailandia."
          ]
        }
      ]
    },
    "terms": {
      "title": "Términos de uso",
      "metaDescription": "Condiciones que regulan el uso del sitio y del contenido público de Benedict Interactive.",
      "lead": "Reglas sencillas para usar el sitio de Benedict Interactive, su contenido y la información pública de sus productos.",
      "updated": "25 de septiembre de 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Ámbito y aceptación",
          "paragraphs": [
            "Estos Términos se aplican al sitio de Benedict Interactive y a su contenido público. Al usarlo, aceptas estas condiciones en la medida permitida por la ley. Si no estás de acuerdo, no utilices el sitio. En este documento, “Benedict Interactive”, “nosotros” y expresiones equivalentes se refieren al operador de este estudio de software independiente con base en Bangkok, Tailandia."
          ]
        },
        {
          "id": "information",
          "heading": "2. Información del producto y disponibilidad",
          "paragraphs": [
            "La disponibilidad de productos, funciones, canales de distribución, precios, sistemas de compra y servicios puede variar según su fase de lanzamiento. Si algo se presenta como previsto o disponible más adelante, no implica una promesa de fecha ni de formato concretos. Intentamos mantener la información al día, pero el producto actual, las notas de versión, el proceso de compra o la documentación específica pueden sustituir descripciones anteriores del sitio."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Uso aceptable",
          "paragraphs": [
            "Puedes usar el sitio para navegar, evaluar productos, pedir soporte y comunicarte de forma lícita. No debes abusar del sitio ni interferir con su funcionamiento."
          ],
          "bullets": [
            "No intentes acceder sin autorización a sistemas no públicos, herramientas administrativas, credenciales o datos.",
            "No interrumpas deliberadamente el servicio, lo sobrecargues, hagas scraping abusivo, pruebes vulnerabilidades sin permiso ni eludas protecciones técnicas.",
            "No uses el sitio ni su contenido para hacerte pasar por Benedict Interactive o inducir a error sobre patrocinio, propiedad o respaldo."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Propiedad intelectual",
          "paragraphs": [
            "Salvo el material de terceros identificado como tal, el diseño del sitio, los textos originales, los activos de marca, las ilustraciones, los materiales de software y demás contenido original pertenecen a Benedict Interactive o se usan bajo licencia y están protegidos por la legislación aplicable. Usar el sitio no te transfiere esos derechos. Se permite el almacenamiento normal del navegador y la referencia personal, pero copiar, redistribuir, republicar, revender o reutilizar comercialmente de forma más amplia requiere permiso salvo que la ley disponga otra cosa."
          ]
        },
        {
          "id": "software",
          "heading": "5. El software se licencia por separado",
          "paragraphs": [
            "El software distribuido por Benedict Interactive se rige por la licencia aplicable o por términos específicos del producto, no solo por estos Términos del sitio. La licencia general está disponible aquí y puede complementarse o sustituirse por condiciones específicas cuando un producto se publique."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Servicios y enlaces de terceros",
          "paragraphs": [
            "El sitio puede enlazar a tiendas de aplicaciones, servicios de distribución, hosting, correo, pagos, documentación u otros servicios de terceros. Cada uno está controlado por su propio operador y puede tener condiciones, políticas, disponibilidad y tarifas distintas. Un enlace no implica que Benedict Interactive respalde todo lo que aparezca en el destino."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Disponibilidad y exención de garantías",
          "paragraphs": [
            "El sitio y su información pública se ofrecen según disponibilidad. Hasta donde lo permita la ley, Benedict Interactive no garantiza acceso ininterrumpido, funcionamiento sin errores ni que toda la información permanezca actualizada indefinidamente. Nada de estos Términos elimina derechos o garantías que la legislación de consumo no permita excluir."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Limitación de responsabilidad",
          "paragraphs": [
            "Hasta donde lo permita la ley aplicable, Benedict Interactive no será responsable de pérdidas indirectas, incidentales, especiales o consecuentes derivadas únicamente del uso de este sitio público. Esta limitación no se aplica cuando la responsabilidad no pueda limitarse o excluirse legalmente."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Cambios en estos Términos",
          "paragraphs": [
            "Podemos actualizar estas condiciones si cambian el sitio, los productos, la ley o el modelo de negocio. Las condiciones comerciales importantes —como precios, reembolsos, métodos de pago o reglas de acceso— solo se publicarán cuando esos sistemas estén realmente listos."
          ]
        },
        {
          "id": "law",
          "heading": "10. Ley aplicable y derechos obligatorios",
          "paragraphs": [
            "Estos Términos se rigen por las leyes de Tailandia, sin limitar los derechos imperativos de consumo o legales que puedan corresponderte en tu lugar de residencia."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Contacto",
          "paragraphs": [
            "Puedes enviar preguntas sobre estos Términos a benedict.support@gmail.com. Benedict Interactive opera desde Bangkok, Tailandia."
          ]
        }
      ]
    },
    "license": {
      "title": "Licencia de software",
      "metaDescription": "Condiciones generales de licencia para el software distribuido por Benedict Interactive.",
      "lead": "Marco general de licencia del software de Benedict Interactive, incluido Bearagnostic salvo que existan términos específicos del producto.",
      "updated": "25 de septiembre de 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Ámbito",
          "paragraphs": [
            "Esta licencia general se aplica al software distribuido por Benedict Interactive cuando el software o su página de descarga remiten a ella y no existe una licencia específica que la sustituya. Los términos de un producto pueden ampliarla o prevalecer sobre ella. Una página pública de producto no concede por sí sola una licencia; esta entra en vigor cuando el software se pone realmente a tu disposición bajo estas condiciones."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Concesión de licencia",
          "paragraphs": [
            "Con sujeción a estas condiciones, Benedict Interactive te concede una licencia limitada, no exclusiva, intransferible y no sublicenciable para instalar y usar el software en dispositivos que poseas o controles, con fines personales lícitos o para uso interno de una empresa según permita el producto y las condiciones de compra aplicables. El software se licencia, no se vende; su titularidad y propiedad intelectual siguen perteneciendo a Benedict Interactive y a sus licenciantes."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Restricciones",
          "paragraphs": [
            "Salvo que la ley aplicable te reconozca expresamente un derecho que no pueda restringirse, no puedes:"
          ],
          "bullets": [
            "redistribuir, revender, sublicenciar, alquilar, arrendar o ofrecer el software como servicio alojado sin permiso escrito;",
            "eliminar o falsear avisos de copyright, atribución, marca, licencia o propiedad;",
            "usar el software, la marca o la identidad del producto para suplantar a Benedict Interactive o presentar compilaciones modificadas o engañosas como oficiales;",
            "eludir controles de licencia, derechos de acceso, seguridad o integridad;",
            "realizar ingeniería inversa, descompilar o desensamblar salvo en la medida en que la ley lo permita expresamente pese a esta restricción."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Copias y dispositivos",
          "paragraphs": [
            "Puedes hacer copias de seguridad razonables cuando sean necesarias para tu propio uso autorizado, manteniendo los avisos de propiedad y licencia. También se aplican los límites de dispositivos, cuentas, restauración o derechos publicados para cada producto."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Componentes de código abierto y de terceros",
          "paragraphs": [
            "El software puede incluir componentes de terceros o de código abierto. Esos componentes siguen sujetos a sus propias licencias y avisos. Si una licencia de terceros te concede derechos distintos de esta licencia general, aquella prevalece para ese componente."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Actualizaciones y servicios",
          "paragraphs": [
            "Las actualizaciones pueden añadir, cambiar, corregir o retirar funciones. Salvo compromiso específico, Benedict Interactive no promete que todas las versiones, plataformas, integraciones, tiendas o servicios en línea estén disponibles para siempre. La seguridad, privacidad y tratamiento de datos deben evaluarse según la versión que uses y la documentación vigente."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Funciones de pago y derechos Pro",
          "paragraphs": [
            "Cuando un producto ofrece funciones de pago o Pro, se aplican las condiciones de compra, reembolso, restauración, dispositivos y derechos publicadas en el flujo comercial activo o en la documentación vigente del producto. La disponibilidad, el precio y los métodos de restauración pueden cambiar para compras futuras, siempre sujetos a la legislación aplicable y a las condiciones correspondientes a una compra válida."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Privacidad",
          "paragraphs": [
            "El uso de servicios en línea conectados también queda sujeto a la política de privacidad aplicable. Un producto puede explicar por separado su tratamiento de archivos del dispositivo, diagnósticos, datos de cuenta u otra información."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Garantías y responsabilidad",
          "paragraphs": [
            "Hasta donde lo permita la ley, el software se proporciona sin garantías distintas de las expresamente indicadas en el producto o en las condiciones de compra. Nada de esta licencia elimina derechos legales ni responsabilidades que no puedan excluirse o limitarse."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Terminación",
          "paragraphs": [
            "La licencia termina si incumples de forma sustancial estas condiciones y no subsanas el incumplimiento cuando la ley exija esa posibilidad. Al terminar, debes dejar de usar las copias que ya no estén autorizadas. Las cláusulas sobre propiedad, derechos de terceros, exenciones y otras que por su naturaleza deban continuar seguirán vigentes."
          ]
        },
        {
          "id": "law",
          "heading": "11. Ley aplicable",
          "paragraphs": [
            "Esta licencia se rige por las leyes de Tailandia, sin limitar los derechos legales o de consumo obligatorios aplicables en tu jurisdicción."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Contacto",
          "paragraphs": [
            "Las consultas sobre licencias y solicitudes de permiso pueden enviarse a benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "Información legal y derechos",
      "metaDescription": "Información sobre copyright, marcas, permisos y derechos de Benedict Interactive.",
      "lead": "Titularidad, permisos, derechos de terceros y reglas para reutilizar material de Benedict Interactive.",
      "updated": "25 de septiembre de 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Copyright",
          "paragraphs": [
            "© 2026 Benedict Interactive. Todos los derechos reservados. Salvo indicación contraria, los textos originales, el diseño, los gráficos, las ilustraciones, los activos de marca, la documentación y los materiales originales de software pertenecen a Benedict Interactive o se usan bajo licencia y están protegidos por las leyes aplicables. La protección de copyright no depende de este aviso; se incluye para aclarar la titularidad y el uso permitido."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Marcas y nombres de producto",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, sus logotipos, marcas de producto e identidades visuales se usan como identificadores de Benedict Interactive salvo que se indique lo contrario. Nada de esta página afirma que una marca esté registrada a menos que se diga expresamente; no se utiliza el símbolo de marca registrada sin una base registral que lo justifique."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Permiso para reutilizar material",
          "paragraphs": [
            "Puedes enlazar páginas públicas y hacer referencias personales normales a los productos. Para republicar cantidades sustanciales de texto original, ilustraciones, capturas, activos de marca, archivos descargables o software con fines comerciales, reventa, redistribución o suplantación, necesitas permiso salvo que la ley permita ese uso de forma independiente. Para prensa, edición, educación, alianzas, distribución u otros usos, contacta con Benedict Interactive antes de asumir que existe autorización."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Derechos de terceros y código abierto",
          "paragraphs": [
            "Los nombres, logotipos, plataformas, servicios, bibliotecas, fuentes, componentes de código abierto y demás material de terceros siguen perteneciendo a sus respectivos titulares. Que aparezcan en el sitio no transfiere su propiedad a Benedict Interactive. Las licencias y avisos de terceros continúan rigiendo el material correspondiente; Benedict Interactive no reclama derechos exclusivos sobre contenido ajeno."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Avisos sobre derechos o infracciones",
          "paragraphs": [
            "Si crees que algún material del sitio vulnera tus derechos, escribe a benedict.support@gmail.com e identifica el material, el derecho afectado, el fundamento de tu reclamación y una forma fiable de contactarte. Revisaremos de buena fe los avisos presentados de buena fe."
          ]
        },
        {
          "id": "location",
          "heading": "6. Contacto del estudio",
          "paragraphs": [
            "Benedict Interactive es un estudio de software independiente que opera desde Bangkok, Tailandia. Correo público: benedict.support@gmail.com. “Bangkok, Tailandia” describe la ubicación del estudio y no se presenta como una dirección de oficina abierta al público."
          ]
        }
      ]
    }
  },
  "pt-br": {
    "privacy": {
      "title": "Política de Privacidade",
      "metaDescription": "Como a Benedict Interactive lida com análises do site, mensagens de contato e privacidade.",
      "lead": "Uma explicação clara do que este site mede, do que ele não rastreia e do que acontece quando você entra em contato com a Benedict Interactive.",
      "updated": "25 de setembro de 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Visão geral",
          "paragraphs": [
            "A Benedict Interactive é um estúdio independente de software operado a partir de Bangkok, Tailândia. Esta política explica como as informações são tratadas quando você visita o site, interage com links de produtos ou entra em contato por e-mail. O site segue o princípio de coletar o mínimo necessário: não usamos rastreadores de publicidade, perfis de anúncios comportamentais nem cookies analíticos definidos pela Benedict."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Análises do site",
          "paragraphs": [
            "Usamos o Cloudflare Web Analytics para obter dados agregados sobre páginas, tráfego, desempenho, origem, dispositivo e país. Segundo a Cloudflare, esse serviço não depende de cookies nem de localStorage para essas medições. A Benedict Interactive também registra um conjunto pequeno de eventos agregados de produto — como abrir uma página, clicar em download, acessar o suporte ou demonstrar interesse em uma futura oferta Pro — para entender o uso do produto, e não para acompanhar pessoas individualmente."
          ],
          "bullets": [
            "O conjunto de eventos não armazena endereço IP, user-agent, referrer, cookies, identificadores de localStorage, identificadores de conta nem conteúdo livre de mensagens.",
            "Os caminhos são registrados sem query strings nem fragmentos de URL.",
            "Um clique no botão de download é contado apenas como clique; não é tratado como download ou instalação concluída."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Contato e e-mail",
          "paragraphs": [
            "O editor de contato prepara a mensagem no seu navegador e entrega o rascunho ao aplicativo ou serviço de e-mail que você escolher. O site não recebe nem armazena esse rascunho antes de você decidir enviá-lo. Se você nos enviar um e-mail, receberemos as informações incluídas nele, como nome, endereço de e-mail, assunto, mensagem e qualquer outro dado que você optar por enviar. Atualmente o e-mail da Benedict Interactive é operado pelo Gmail, serviço do Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Para que usamos as informações",
          "paragraphs": [
            "As análises agregadas ajudam a entender se o site funciona bem, quais páginas recebem atenção e onde desempenho ou usabilidade podem melhorar. As informações de contato servem para responder a suporte, feedback, assuntos comerciais e outras mensagens. Quando a lei exige uma base jurídica, usamos a base adequada à atividade, como atender a uma solicitação sua, nossos interesses legítimos em operar e melhorar o site ou o cumprimento de obrigações legais."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Prestadores de serviço",
          "paragraphs": [
            "A Cloudflare fornece entrega do site, Pages hosting, Web Analytics e Analytics Engine. O Google fornece o Gmail usado na correspondência da Benedict Interactive. Esses prestadores tratam informações de acordo com seus próprios termos e práticas de privacidade. A Benedict Interactive não vende dados pessoais e não fornece mensagens de contato a anunciantes ou corretores de dados."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Retenção",
          "paragraphs": [
            "Os dados agregados de análise são mantidos conforme as configurações e os limites de retenção dos produtos da Cloudflare; não tentamos transformá-los em perfis permanentes de visitantes. E-mails são mantidos apenas pelo tempo razoavelmente necessário para responder, preservar registros relevantes de suporte ou negócios, resolver disputas, proteger o serviço ou cumprir obrigações legais. Por isso, o período pode variar conforme a mensagem e o contexto."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Seus direitos de privacidade",
          "paragraphs": [
            "Dependendo de onde você mora, a lei pode garantir direitos de acesso, correção, exclusão, restrição, oposição, portabilidade ou outras medidas sobre seus dados pessoais, além do direito de reclamar a uma autoridade competente. Para exercer esses direitos, escreva para benedict.support@gmail.com. Podemos pedir informações suficientes para verificar a solicitação e localizar a correspondência relevante."
          ]
        },
        {
          "id": "international",
          "heading": "8. Tratamento internacional",
          "paragraphs": [
            "Cloudflare e Google operam internacionalmente. Por isso, informações processadas por esses serviços podem ser tratadas em países diferentes do seu, de acordo com as salvaguardas e condições dos próprios prestadores e com a legislação aplicável."
          ]
        },
        {
          "id": "children",
          "heading": "9. Crianças",
          "paragraphs": [
            "Este é um site geral de estúdio de software e informações de produtos, e não foi projetado para coletar dados pessoais de crianças. Se você acredita que uma criança enviou informações pessoais à Benedict Interactive, entre em contato para que possamos analisar a situação."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Alterações e contato",
          "paragraphs": [
            "Podemos atualizar esta política quando o site, as análises, o sistema de contato, os produtos ou as exigências legais mudarem. A data no topo indica a revisão mais recente. Dúvidas sobre privacidade podem ser enviadas para benedict.support@gmail.com. A Benedict Interactive opera a partir de Bangkok, Tailândia."
          ]
        }
      ]
    },
    "terms": {
      "title": "Termos de Uso",
      "metaDescription": "Termos que regem o uso do site e do conteúdo público da Benedict Interactive.",
      "lead": "Regras diretas para usar o site da Benedict Interactive, seu conteúdo e as informações públicas de produtos.",
      "updated": "25 de setembro de 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Escopo e aceitação",
          "paragraphs": [
            "Estes Termos se aplicam ao site da Benedict Interactive e ao conteúdo público nele publicado. Ao usar o site, você concorda com estes Termos na medida permitida pela lei. Se não concordar, não use o site. Neste documento, “Benedict Interactive”, “nós” e expressões equivalentes se referem ao operador deste estúdio independente de software baseado em Bangkok, Tailândia."
          ]
        },
        {
          "id": "information",
          "heading": "2. Informações do produto e disponibilidade",
          "paragraphs": [
            "Produtos, recursos, canais de distribuição, preços, sistemas de compra e serviços podem ter diferentes estágios de disponibilidade. Quando algo é apresentado como planejado ou disponível mais adiante, isso não representa promessa de data ou formato específicos. Buscamos manter as informações atualizadas, mas o produto atual, as notas de versão, o fluxo de compra ou a documentação específica podem substituir descrições anteriores do site."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Uso aceitável",
          "paragraphs": [
            "Você pode usar o site para navegação, avaliação, suporte e comunicação lícitos. Não deve usar o site de forma abusiva nem interferir no seu funcionamento."
          ],
          "bullets": [
            "Não tente obter acesso não autorizado a sistemas privados, ferramentas administrativas, credenciais ou dados.",
            "Não interrompa deliberadamente, sobrecarregue, faça scraping abusivo, teste vulnerabilidades sem autorização nem contorne proteções técnicas.",
            "Não use o site ou seu conteúdo para se passar pela Benedict Interactive ou induzir terceiros ao erro sobre patrocínio, propriedade ou endosso."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Propriedade intelectual",
          "paragraphs": [
            "Exceto quando material de terceiros for identificado como tal, o design do site, textos originais, ativos da marca, ilustrações, materiais de software e outros conteúdos originais pertencem à Benedict Interactive ou são usados sob licença e são protegidos pela legislação aplicável. Usar o site não transfere a você qualquer direito de propriedade intelectual. Cache normal do navegador e referência pessoal são permitidos; cópia, redistribuição, republicação, revenda ou reutilização comercial mais ampla exigem autorização, salvo quando a lei determinar o contrário."
          ]
        },
        {
          "id": "software",
          "heading": "5. O software é licenciado separadamente",
          "paragraphs": [
            "O software distribuído pela Benedict Interactive é regido pela licença aplicável ou por termos específicos do produto, e não apenas por estes Termos do site. A licença geral está disponível aqui e pode ser complementada ou substituída por termos específicos quando um produto for lançado."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Serviços e links de terceiros",
          "paragraphs": [
            "O site pode apontar para lojas de aplicativos, serviços de distribuição, hospedagem, e-mail, pagamentos, documentação ou outros serviços de terceiros. Cada serviço é controlado pelo seu próprio operador e pode ter termos, políticas, disponibilidade e custos diferentes. Um link não significa, por si só, que a Benedict Interactive endossa tudo o que existe no destino."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Disponibilidade e isenção de garantias",
          "paragraphs": [
            "O site e suas informações públicas são fornecidos conforme disponíveis. No limite permitido por lei, a Benedict Interactive não garante acesso ininterrupto, funcionamento sem erros ou que todas as informações permaneçam atualizadas indefinidamente. Nada nestes Termos exclui direitos ou garantias que a legislação de consumo não permita excluir."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Limitação de responsabilidade",
          "paragraphs": [
            "No limite permitido pela legislação aplicável, a Benedict Interactive não será responsável por perdas indiretas, incidentais, especiais ou consequenciais decorrentes exclusivamente do uso deste site público. Essa limitação não se aplica quando a responsabilidade não puder ser legalmente limitada ou excluída."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Alterações nestes Termos",
          "paragraphs": [
            "Podemos atualizar estes Termos quando o site, os produtos, a lei ou o modelo de negócio mudarem. Condições comerciais relevantes — como preço, reembolso, métodos de pagamento e regras de entitlement — só serão publicadas quando esses sistemas estiverem realmente prontos."
          ]
        },
        {
          "id": "law",
          "heading": "10. Lei aplicável e direitos obrigatórios",
          "paragraphs": [
            "Estes Termos são regidos pelas leis da Tailândia, sem limitar direitos obrigatórios do consumidor ou outros direitos legais aplicáveis a você no seu local de residência."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Contato",
          "paragraphs": [
            "Dúvidas sobre estes Termos podem ser enviadas para benedict.support@gmail.com. A Benedict Interactive opera a partir de Bangkok, Tailândia."
          ]
        }
      ]
    },
    "license": {
      "title": "Licença de Software",
      "metaDescription": "Termos gerais de licença para software distribuído pela Benedict Interactive.",
      "lead": "O quadro geral de licenciamento do software da Benedict Interactive, incluindo Bearagnostic, salvo se houver termos específicos do produto.",
      "updated": "25 de setembro de 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Escopo",
          "paragraphs": [
            "Esta licença geral se aplica ao software distribuído pela Benedict Interactive quando o software ou sua página de download fizer referência a ela e nenhuma licença específica do produto a substituir. Termos específicos podem complementar ou prevalecer sobre esta licença. Uma página pública de produto, por si só, não concede uma licença; ela passa a valer quando o software é efetivamente disponibilizado a você sob estas condições."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Concessão da licença",
          "paragraphs": [
            "Sujeita a estas condições, a Benedict Interactive concede a você uma licença limitada, não exclusiva, intransferível e não sublicenciável para instalar e usar o software em dispositivos que você possua ou controle, para uso pessoal lícito ou uso interno de uma empresa conforme permitido pelo produto e pelas condições de compra aplicáveis. O software é licenciado, não vendido; sua titularidade e propriedade intelectual permanecem com a Benedict Interactive e seus licenciadores."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Restrições",
          "paragraphs": [
            "Salvo quando a lei aplicável lhe conceder expressamente um direito que não possa ser restringido, você não pode:"
          ],
          "bullets": [
            "redistribuir, revender, sublicenciar, alugar, arrendar ou oferecer o software como serviço hospedado sem autorização por escrito;",
            "remover ou falsificar avisos de copyright, atribuição, marca, licença ou propriedade;",
            "usar o software, a marca ou a identidade do produto para se passar pela Benedict Interactive ou apresentar builds modificadas ou enganosas como oficiais;",
            "contornar controles de licença, entitlement, segurança ou integridade;",
            "fazer engenharia reversa, descompilar ou desmontar o software, exceto na medida em que a lei permita expressamente essa atividade apesar desta restrição."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Cópias e dispositivos",
          "paragraphs": [
            "Você pode fazer cópias de segurança razoáveis quando necessárias ao seu próprio uso autorizado, desde que preserve os avisos de propriedade e licença. Limites de dispositivos, contas, restauração ou entitlement publicados para um produto específico também se aplicam."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Componentes de código aberto e de terceiros",
          "paragraphs": [
            "O software pode incluir componentes de terceiros ou de código aberto. Esses componentes continuam sujeitos às suas próprias licenças e avisos. Quando uma licença de terceiros conceder direitos diferentes dos previstos aqui, ela prevalece para o componente correspondente."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Atualizações e serviços",
          "paragraphs": [
            "Atualizações podem adicionar, alterar, corrigir ou remover recursos. Salvo compromisso específico do produto, a Benedict Interactive não promete que todas as versões, plataformas, integrações, lojas ou serviços online permanecerão disponíveis indefinidamente. Segurança, privacidade e tratamento de dados devem ser avaliados com base na versão que você realmente usa e na documentação atual."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Recursos pagos e entitlement Pro",
          "paragraphs": [
            "Quando um produto oferece recursos pagos ou Pro, valem os termos de compra, reembolso, restauração, dispositivos e entitlement publicados no fluxo comercial ativo ou na documentação atual do produto. Disponibilidade, preço e métodos de restauração podem mudar para compras futuras, sempre sujeitos à legislação aplicável e aos termos vigentes de uma compra válida."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Privacidade",
          "paragraphs": [
            "O uso de serviços online conectados também está sujeito à política de privacidade aplicável. Um produto pode descrever separadamente como trata arquivos do dispositivo, diagnósticos, dados de conta ou outras informações."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Garantias e responsabilidade",
          "paragraphs": [
            "No limite permitido pela lei, o software é fornecido sem garantias além das expressamente informadas no produto ou nos termos de compra. Nada nesta licença exclui direitos legais ou responsabilidades que não possam ser excluídos ou limitados."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Encerramento",
          "paragraphs": [
            "A licença termina se você violar de forma relevante estas condições e não corrigir a violação quando a lei exigir oportunidade de correção. Após o encerramento, você deve parar de usar cópias que deixaram de estar licenciadas. Cláusulas sobre propriedade, direitos de terceiros, isenções e outras que por sua natureza devam sobreviver continuam em vigor."
          ]
        },
        {
          "id": "law",
          "heading": "11. Lei aplicável",
          "paragraphs": [
            "Esta licença é regida pelas leis da Tailândia, sem limitar direitos legais ou do consumidor obrigatórios aplicáveis na sua jurisdição."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Contato",
          "paragraphs": [
            "Dúvidas sobre licença e pedidos de autorização podem ser enviados para benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "Informações legais e direitos",
      "metaDescription": "Informações sobre copyright, marca, permissões e direitos da Benedict Interactive.",
      "lead": "Titularidade, permissões, direitos de terceiros e regras para reutilizar materiais da Benedict Interactive.",
      "updated": "25 de setembro de 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Direitos autorais",
          "paragraphs": [
            "© 2026 Benedict Interactive. Todos os direitos reservados. Salvo indicação em contrário, textos originais, design, gráficos, ilustrações, ativos de marca, documentação e materiais originais de software pertencem à Benedict Interactive ou são usados sob licença e são protegidos pela legislação aplicável. A proteção autoral não depende deste aviso; ele existe para deixar a titularidade e o uso permitido mais claros."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Marcas e nomes de produtos",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, seus logotipos, marcas de produto e identidades visuais são usados como identificadores da Benedict Interactive, salvo indicação em contrário. Nada nesta página afirma que uma marca seja registrada, a menos que isso seja indicado expressamente; o símbolo de marca registrada não é usado sem base registral correspondente."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Permissão para reutilizar materiais",
          "paragraphs": [
            "Você pode criar links para páginas públicas e fazer referências pessoais normais aos produtos. Republicar quantidade substancial de texto original, arte, capturas de tela, ativos de marca, arquivos para download ou software para fins comerciais, revenda, redistribuição ou falsificação de identidade exige autorização, salvo quando a lei permitir o uso independentemente. Para imprensa, editorial, educação, parceria, distribuição ou outros usos, entre em contato com a Benedict Interactive antes de presumir que há permissão."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Direitos de terceiros e código aberto",
          "paragraphs": [
            "Nomes, logotipos, plataformas, serviços, bibliotecas, fontes, componentes open source e outros materiais de terceiros continuam pertencendo aos seus respectivos titulares. A presença no site não transfere propriedade à Benedict Interactive. Licenças e avisos de terceiros continuam regendo o material correspondente; a Benedict Interactive não reivindica direitos exclusivos sobre o que pertence a outros."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Questões de direitos ou infração",
          "paragraphs": [
            "Se você acredita que algum material deste site viola seus direitos, escreva para benedict.support@gmail.com identificando o material, o direito que considera afetado, a base da reclamação e uma forma confiável de contato. Relatos feitos de boa-fé serão analisados."
          ]
        },
        {
          "id": "location",
          "heading": "6. Contato do estúdio",
          "paragraphs": [
            "A Benedict Interactive é um estúdio independente de software operado a partir de Bangkok, Tailândia. E-mail público: benedict.support@gmail.com. “Bangkok, Tailândia” descreve a localização do estúdio e não é apresentado como endereço de escritório aberto ao público."
          ]
        }
      ]
    }
  },
  "fr": {
    "privacy": {
      "title": "Politique de confidentialité",
      "metaDescription": "Comment Benedict Interactive gère les statistiques du site, les messages de contact et la confidentialité.",
      "lead": "Une explication claire de ce que le site mesure, de ce qu’il ne suit pas et de ce qui se passe lorsque vous contactez Benedict Interactive.",
      "updated": "25 septembre 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Vue d’ensemble",
          "paragraphs": [
            "Benedict Interactive est un studio logiciel indépendant exploité depuis Bangkok, en Thaïlande. Cette politique explique comment les informations sont traitées lorsque vous consultez le site, utilisez des liens produit ou nous contactez par e-mail. Le site est conçu pour limiter la collecte au strict nécessaire : nous n’utilisons ni traceurs publicitaires, ni profils de publicité comportementale, ni cookies d’analyse déposés par Benedict."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Statistiques du site",
          "paragraphs": [
            "Nous utilisons Cloudflare Web Analytics pour obtenir des données agrégées sur les pages, le trafic, les performances, la provenance, le type d’appareil et le pays. Cloudflare indique que ce service ne repose ni sur des cookies ni sur localStorage pour ces mesures. Benedict Interactive enregistre aussi quelques événements agrégés liés aux produits — par exemple l’ouverture d’une page produit, un clic de téléchargement, l’accès au support ou un intérêt pour une future offre Pro — afin de comprendre l’usage des produits, pas de suivre des personnes."
          ],
          "bullets": [
            "Le jeu de données d’événements ne stocke ni adresse IP, ni user-agent, ni référent, ni cookie, ni identifiant localStorage, ni identifiant de compte, ni contenu libre de message.",
            "Les chemins sont enregistrés sans paramètres de requête ni fragments d’URL.",
            "Un clic sur Télécharger reste un simple clic ; il n’est pas présenté comme un téléchargement ou une installation terminée."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Contact et e-mail",
          "paragraphs": [
            "Le formulaire de contact prépare votre message dans le navigateur puis transmet le brouillon à l’application ou au service de messagerie de votre choix. Le site ne reçoit ni ne stocke ce brouillon avant que vous décidiez de l’envoyer. Si vous nous écrivez, nous recevons les informations contenues dans l’e-mail, comme votre nom, votre adresse, l’objet, le message et les éléments que vous choisissez d’ajouter. La messagerie Benedict Interactive est actuellement gérée via Gmail, un service Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Pourquoi ces informations sont utilisées",
          "paragraphs": [
            "Les statistiques agrégées servent à vérifier le bon fonctionnement du site, à voir quelles pages intéressent les visiteurs et à repérer les améliorations possibles. Les informations de contact servent à répondre au support, aux retours, aux demandes professionnelles et aux autres échanges. Lorsque la loi exige une base juridique, nous utilisons celle qui correspond à l’activité, par exemple l’exécution de votre demande, notre intérêt légitime à exploiter et améliorer le site, ou le respect d’une obligation légale."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Prestataires",
          "paragraphs": [
            "Cloudflare fournit la diffusion du site, Pages hosting, Web Analytics et Analytics Engine. Google fournit Gmail pour les échanges par e-mail. Ces prestataires traitent les informations selon leurs propres conditions et pratiques. Benedict Interactive ne vend pas de données personnelles et ne transmet pas les messages de contact à des annonceurs ou courtiers en données."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Conservation",
          "paragraphs": [
            "Les statistiques agrégées sont conservées selon les paramètres et limites des services Cloudflare ; nous ne cherchons pas à les transformer en profil permanent de visiteur. Les e-mails ne sont conservés que pendant la durée raisonnablement nécessaire pour répondre, tenir des dossiers utiles de support ou d’activité, régler un litige, protéger le service ou respecter la loi. La durée peut donc varier selon le contexte."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Vos droits",
          "paragraphs": [
            "Selon votre lieu de résidence, la loi peut vous donner des droits d’accès, de rectification, d’effacement, de limitation, d’opposition, de portabilité ou d’autres droits sur vos données personnelles, ainsi qu’un droit de réclamation auprès d’une autorité compétente. Pour exercer un droit, écrivez à benedict.support@gmail.com. Nous pouvons demander les éléments nécessaires pour vérifier la demande et retrouver les échanges concernés."
          ]
        },
        {
          "id": "international",
          "heading": "8. Traitement international",
          "paragraphs": [
            "Cloudflare et Google opèrent dans plusieurs pays. Des informations traitées via leurs services peuvent donc l’être hors de votre pays, conformément aux garanties et conditions de ces prestataires et au droit applicable."
          ]
        },
        {
          "id": "children",
          "heading": "9. Enfants",
          "paragraphs": [
            "Ce site présente un studio logiciel et ses produits au grand public ; il n’est pas conçu pour collecter des données personnelles d’enfants. Si vous pensez qu’un enfant a envoyé des informations personnelles à Benedict Interactive, contactez-nous afin que nous puissions examiner la situation."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Modifications et contact",
          "paragraphs": [
            "Cette politique peut évoluer avec le site, les statistiques, le système de contact, les produits ou les obligations légales. La date indiquée en haut correspond à la dernière révision. Pour toute question de confidentialité : benedict.support@gmail.com. Benedict Interactive est exploité depuis Bangkok, en Thaïlande."
          ]
        }
      ]
    },
    "terms": {
      "title": "Conditions d’utilisation",
      "metaDescription": "Conditions applicables à l’utilisation du site et des contenus publics de Benedict Interactive.",
      "lead": "Des règles simples pour utiliser le site Benedict Interactive, ses contenus et ses informations produit publiques.",
      "updated": "25 septembre 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Champ d’application et acceptation",
          "paragraphs": [
            "Ces Conditions s’appliquent au site Benedict Interactive et à ses contenus publics. En utilisant le site, vous les acceptez dans la mesure permise par la loi. Si vous n’êtes pas d’accord, n’utilisez pas le site. Dans ce document, « Benedict Interactive », « nous » et les termes équivalents désignent l’exploitant de ce studio logiciel indépendant basé à Bangkok, en Thaïlande."
          ]
        },
        {
          "id": "information",
          "heading": "2. Informations produit et disponibilité",
          "paragraphs": [
            "La disponibilité des produits, fonctionnalités, canaux de distribution, tarifs, systèmes d’achat et services peut varier selon leur phase de déploiement. Lorsqu’un élément est présenté comme prévu ou disponible ultérieurement, cela ne constitue pas une promesse de date ni de forme précise. Nous veillons à maintenir les informations à jour, mais le produit actuel, les notes de version, le parcours d’achat ou la documentation propre au produit peuvent remplacer des descriptions plus anciennes du site."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Utilisation acceptable",
          "paragraphs": [
            "Vous pouvez utiliser le site pour une consultation, une évaluation, une demande de support ou une communication licite. Vous ne devez pas en faire un usage abusif ni perturber son fonctionnement."
          ],
          "bullets": [
            "N’essayez pas d’accéder sans autorisation à des systèmes privés, outils d’administration, identifiants ou données.",
            "Ne perturbez pas volontairement le service, ne le surchargez pas, n’effectuez pas de scraping abusif, de tests de vulnérabilité non autorisés ni de contournement des protections techniques.",
            "N’utilisez pas le site ou son contenu pour vous faire passer pour Benedict Interactive ou créer une confusion sur un parrainage, une propriété ou un soutien."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Propriété intellectuelle",
          "paragraphs": [
            "Sauf pour les éléments tiers clairement identifiés, la conception du site, les textes originaux, les éléments de marque, les illustrations, les ressources logicielles et les autres contenus originaux appartiennent à Benedict Interactive ou sont utilisés sous licence et protégés par le droit applicable. Utiliser le site ne vous transfère aucun droit de propriété intellectuelle. La mise en cache normale du navigateur et la référence personnelle sont permises ; une copie, redistribution, republication, revente ou réutilisation commerciale plus large nécessite une autorisation, sauf si la loi prévoit autre chose."
          ]
        },
        {
          "id": "software",
          "heading": "5. Le logiciel fait l’objet d’une licence distincte",
          "paragraphs": [
            "Les logiciels distribués par Benedict Interactive sont régis par la licence applicable ou par des conditions propres au produit, et pas seulement par les présentes Conditions du site. La licence générale est disponible ici et peut être complétée ou remplacée par des conditions spécifiques lors de la sortie d’un produit."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Services et liens tiers",
          "paragraphs": [
            "Le site peut renvoyer vers des boutiques d’applications, services de distribution, hébergeurs, messageries, prestataires de paiement, documentations ou autres services tiers. Chacun est exploité selon ses propres conditions, politiques, disponibilités et tarifs. Un lien ne signifie pas que Benedict Interactive approuve tout ce qui figure sur le site de destination."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Disponibilité et garanties",
          "paragraphs": [
            "Le site et ses informations publiques sont fournis selon leur disponibilité. Dans les limites permises par la loi, Benedict Interactive ne garantit ni un accès continu, ni une absence totale d’erreur, ni l’actualité permanente de chaque information. Rien dans ces Conditions ne supprime les droits ou garanties que le droit de la consommation interdit d’exclure."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Limitation de responsabilité",
          "paragraphs": [
            "Dans les limites permises par le droit applicable, Benedict Interactive n’est pas responsable des pertes indirectes, accessoires, spéciales ou consécutives résultant uniquement de l’utilisation de ce site public. Cette limitation ne s’applique pas lorsque la responsabilité ne peut légalement être limitée ou exclue."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Modification des Conditions",
          "paragraphs": [
            "Ces Conditions peuvent être mises à jour si le site, les produits, la loi ou le modèle économique évoluent. Les éléments commerciaux importants — prix, remboursements, moyens de paiement ou règles d’accès — ne seront publiés que lorsque les systèmes correspondants seront réellement prêts."
          ]
        },
        {
          "id": "law",
          "heading": "10. Droit applicable et droits impératifs",
          "paragraphs": [
            "Ces Conditions sont régies par le droit thaïlandais, sans limiter les droits impératifs du consommateur ou autres droits légaux applicables dans votre lieu de résidence."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Contact",
          "paragraphs": [
            "Pour toute question sur ces Conditions : benedict.support@gmail.com. Benedict Interactive est exploité depuis Bangkok, en Thaïlande."
          ]
        }
      ]
    },
    "license": {
      "title": "Licence logicielle",
      "metaDescription": "Conditions générales de licence applicables aux logiciels distribués par Benedict Interactive.",
      "lead": "Le cadre général de licence des logiciels Benedict Interactive, y compris Bearagnostic sauf conditions spécifiques contraires.",
      "updated": "25 septembre 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Champ d’application",
          "paragraphs": [
            "Cette licence générale s’applique aux logiciels distribués par Benedict Interactive lorsqu’un logiciel ou sa page de téléchargement y renvoie et qu’aucune licence propre au produit ne la remplace. Des conditions spécifiques peuvent la compléter ou prévaloir. Une page produit publique n’accorde pas à elle seule une licence ; celle-ci s’applique lorsque le logiciel vous est effectivement fourni sous ces conditions."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Octroi de licence",
          "paragraphs": [
            "Sous réserve de ces conditions, Benedict Interactive vous accorde une licence limitée, non exclusive, non transférable et non sous-licenciable pour installer et utiliser le logiciel sur des appareils que vous possédez ou contrôlez, pour un usage personnel licite ou un usage interne professionnel selon les règles du produit et les conditions d’achat applicables. Le logiciel est concédé sous licence, pas vendu ; sa propriété et ses droits de propriété intellectuelle restent ceux de Benedict Interactive et de ses concédants."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Restrictions",
          "paragraphs": [
            "Sauf si la loi vous accorde expressément un droit qui ne peut être restreint, vous ne pouvez pas :"
          ],
          "bullets": [
            "redistribuer, revendre, sous-licencier, louer ou proposer le logiciel comme service hébergé sans autorisation écrite ;",
            "supprimer ou falsifier les mentions de copyright, d’attribution, de marque, de licence ou de propriété ;",
            "utiliser le logiciel, la marque ou l’identité du produit pour vous faire passer pour Benedict Interactive ou présenter une version modifiée/trompeuse comme officielle ;",
            "contourner les contrôles de licence, d’accès, de sécurité ou d’intégrité ;",
            "faire de l’ingénierie inverse, décompiler ou désassembler le logiciel, sauf dans la mesure expressément autorisée par la loi malgré cette restriction."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Copies et appareils",
          "paragraphs": [
            "Vous pouvez effectuer des copies de sauvegarde raisonnables si elles sont nécessaires à votre propre usage autorisé, en conservant les mentions de propriété et de licence. Les limites d’appareils, de comptes, de restauration ou d’accès publiées pour un produit restent applicables."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Composants open source et tiers",
          "paragraphs": [
            "Le logiciel peut contenir des composants tiers ou open source. Ils restent soumis à leurs propres licences et mentions. Si une licence tierce vous accorde des droits différents de ceux prévus ici, elle prévaut pour le composant concerné."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Mises à jour et services",
          "paragraphs": [
            "Les mises à jour peuvent ajouter, modifier, corriger ou supprimer des fonctions. Sauf engagement spécifique, Benedict Interactive ne promet pas que chaque version, plateforme, intégration, boutique ou service en ligne restera disponible indéfiniment. La sécurité, la confidentialité et le traitement des données doivent être appréciés selon la version réellement utilisée et la documentation à jour."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Fonctions payantes et droits Pro",
          "paragraphs": [
            "Lorsqu’un produit propose des fonctionnalités payantes ou Pro, les conditions d’achat, de remboursement, de restauration, d’appareils et de droits d’accès publiées dans le parcours commercial actif ou la documentation produit en vigueur s’appliquent. La disponibilité, les tarifs et les méthodes de restauration peuvent évoluer pour les achats futurs, sous réserve du droit applicable et des conditions attachées à un achat valide."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Confidentialité",
          "paragraphs": [
            "L’utilisation de services en ligne connectés est également soumise à la politique de confidentialité applicable. Un produit peut décrire séparément le traitement des fichiers de l’appareil, diagnostics, données de compte ou autres informations."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Garanties et responsabilité",
          "paragraphs": [
            "Dans les limites permises par la loi, le logiciel est fourni sans garantie autre que celles expressément prévues par le produit ou les conditions d’achat. Rien dans cette licence ne supprime des droits légaux ou une responsabilité qui ne peuvent être exclus ou limités."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Résiliation",
          "paragraphs": [
            "La licence prend fin en cas de violation substantielle de ces conditions non corrigée lorsqu’un délai de correction est requis par la loi. À la fin de la licence, vous devez cesser d’utiliser les copies qui ne sont plus autorisées. Les clauses relatives à la propriété, aux droits de tiers, aux exclusions et celles qui doivent logiquement survivre continuent de s’appliquer."
          ]
        },
        {
          "id": "law",
          "heading": "11. Droit applicable",
          "paragraphs": [
            "Cette licence est régie par le droit thaïlandais, sans limiter les droits légaux ou de consommation impératifs applicables dans votre juridiction."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Contact",
          "paragraphs": [
            "Les questions de licence et demandes d’autorisation peuvent être envoyées à benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "Mentions légales et droits",
      "metaDescription": "Informations sur le copyright, les marques, les autorisations et les droits de Benedict Interactive.",
      "lead": "Propriété, autorisations, droits de tiers et règles de réutilisation des contenus Benedict Interactive.",
      "updated": "25 septembre 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Droit d’auteur",
          "paragraphs": [
            "© 2026 Benedict Interactive. Tous droits réservés. Sauf indication contraire, les textes originaux, la conception, les graphismes, les illustrations, les éléments de marque, la documentation et les ressources logicielles originales appartiennent à Benedict Interactive ou sont utilisés sous licence et protégés par le droit applicable. La protection du droit d’auteur ne dépend pas de cette mention ; elle sert à clarifier la propriété et les usages autorisés."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Marques et noms de produits",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, leurs logos, marques produit et identités visuelles sont utilisés comme signes distinctifs de Benedict Interactive sauf indication contraire. Cette page ne prétend pas qu’une marque est enregistrée sauf si cela est indiqué explicitement ; le symbole de marque déposée n’est pas utilisé sans statut d’enregistrement correspondant."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Réutilisation de contenus",
          "paragraphs": [
            "Vous pouvez créer des liens vers les pages publiques et faire des références personnelles ordinaires aux produits. Republier une quantité substantielle de textes originaux, illustrations, captures d’écran, éléments de marque, fichiers téléchargeables ou logiciels à des fins commerciales, de revente, de redistribution ou d’usurpation nécessite une autorisation, sauf droit légal indépendant. Pour la presse, l’édition, l’éducation, les partenariats, la distribution ou d’autres usages, contactez Benedict Interactive avant de présumer qu’une autorisation existe."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Droits de tiers et open source",
          "paragraphs": [
            "Les noms, logos, plateformes, services, bibliothèques, polices, composants open source et autres contenus tiers restent la propriété de leurs titulaires. Leur présence sur le site ne transfère aucun droit à Benedict Interactive. Les licences et mentions tierces continuent de régir les éléments concernés ; Benedict Interactive ne revendique pas de droit exclusif sur ce qui appartient à autrui."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Signalement d’un problème de droits",
          "paragraphs": [
            "Si vous estimez qu’un contenu du site porte atteinte à vos droits, écrivez à benedict.support@gmail.com en identifiant le contenu, le droit concerné, le fondement de votre demande et un moyen fiable de vous contacter. Les signalements faits de bonne foi seront examinés."
          ]
        },
        {
          "id": "location",
          "heading": "6. Contact du studio",
          "paragraphs": [
            "Benedict Interactive est un studio logiciel indépendant exploité depuis Bangkok, en Thaïlande. E-mail public : benedict.support@gmail.com. « Bangkok, Thaïlande » décrit l’emplacement du studio et n’est pas présenté comme une adresse de bureau ouverte au public."
          ]
        }
      ]
    }
  },
  "de": {
    "privacy": {
      "title": "Datenschutzerklärung",
      "metaDescription": "Wie Benedict Interactive Website-Analysen, Kontaktanfragen und Datenschutz handhabt.",
      "lead": "Eine verständliche Erklärung dazu, was diese Website misst, was sie nicht verfolgt und was passiert, wenn Sie Benedict Interactive kontaktieren.",
      "updated": "25. September 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Überblick",
          "paragraphs": [
            "Benedict Interactive ist ein unabhängiges Softwarestudio, das von Bangkok, Thailand, aus betrieben wird. Diese Erklärung beschreibt, wie Informationen verarbeitet werden, wenn Sie die Website besuchen, Produktlinks verwenden oder uns per E-Mail kontaktieren. Die Website ist auf Datenminimierung ausgelegt: Wir verwenden keine Werbetracker, keine verhaltensbasierten Werbeprofile und keine von Benedict gesetzten Analyse-Cookies."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Website-Analyse",
          "paragraphs": [
            "Wir verwenden Cloudflare Web Analytics für zusammengefasste Angaben zu Seiten, Traffic, Leistung, Verweisen, Gerätetyp und Land. Cloudflare gibt an, dass dafür weder Cookies noch localStorage eingesetzt werden. Zusätzlich erfasst Benedict Interactive einige wenige aggregierte Produktaktionen — etwa den Aufruf einer Produktseite, einen Download-Klick, den Aufruf des Supports oder Interesse an einem geplanten Pro-Angebot — um die Nutzung des Produkts zu verstehen, nicht einzelne Personen zu verfolgen."
          ],
          "bullets": [
            "Der Datensatz speichert keine IP-Adressen, User-Agent-Strings, Referrer, Cookies, localStorage-Kennungen, Konto-IDs oder frei eingegebene Nachrichteninhalte.",
            "Pfade werden ohne Query-Strings und URL-Fragmente gespeichert.",
            "Ein Klick auf „Download“ zählt nur als Klick und wird nicht als abgeschlossener Download oder als Installation dargestellt."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Kontakt und E-Mail",
          "paragraphs": [
            "Der Kontakt-Editor erstellt die Nachricht in Ihrem Browser und übergibt den Entwurf anschließend an die von Ihnen gewählte E-Mail-App oder den E-Mail-Dienst. Die Website erhält oder speichert den Entwurf nicht, bevor Sie ihn senden. Wenn Sie Benedict Interactive eine E-Mail schicken, erhalten wir die darin enthaltenen Angaben, etwa Name, E-Mail-Adresse, Betreff, Nachricht und weitere Informationen, die Sie freiwillig hinzufügen. Der E-Mail-Verkehr wird derzeit über Gmail, einen Dienst von Google, abgewickelt."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Wofür Informationen verwendet werden",
          "paragraphs": [
            "Aggregierte Analysen helfen uns zu beurteilen, ob die Website gut funktioniert, welche Produktseiten Aufmerksamkeit erhalten und wo Leistung oder Bedienbarkeit verbessert werden sollten. Kontaktdaten verwenden wir zur Beantwortung von Supportanfragen, Feedback, geschäftlichen Anfragen und anderer Korrespondenz. Soweit eine Rechtsgrundlage erforderlich ist, stützen wir uns auf die für die jeweilige Tätigkeit passende Grundlage, etwa die Bearbeitung Ihrer Anfrage, berechtigte Interessen am Betrieb und an der Verbesserung der Website oder gesetzliche Pflichten."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Dienstleister",
          "paragraphs": [
            "Cloudflare stellt Website-Auslieferung, Pages Hosting, Web Analytics und Analytics Engine bereit. Google stellt Gmail für die E-Mail-Kommunikation bereit. Diese Anbieter verarbeiten Informationen nach ihren eigenen Bedingungen und Datenschutzpraktiken. Benedict Interactive verkauft keine personenbezogenen Daten und gibt Kontaktanfragen nicht an Werbetreibende oder Datenhändler weiter."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Speicherdauer",
          "paragraphs": [
            "Aggregierte Analysedaten werden nach den Einstellungen und Aufbewahrungsgrenzen der Cloudflare-Dienste gespeichert; wir versuchen nicht, daraus dauerhafte Besucherprofile zu erstellen. E-Mails werden nur so lange aufbewahrt, wie es vernünftigerweise für Antworten, relevante Support- oder Geschäftsunterlagen, Streitbeilegung, den Schutz des Dienstes oder gesetzliche Pflichten erforderlich ist. Die Dauer kann deshalb je nach Nachricht und Kontext variieren."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Ihre Datenschutzrechte",
          "paragraphs": [
            "Je nach Wohnort können Ihnen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit oder andere Maßnahmen zustehen; außerdem kann ein Beschwerderecht bei einer zuständigen Datenschutzbehörde bestehen. Für entsprechende Anfragen schreiben Sie an benedict.support@gmail.com. Wir können ausreichende Angaben benötigen, um die Anfrage zu prüfen und die betreffende Korrespondenz zu finden."
          ]
        },
        {
          "id": "international",
          "heading": "8. Internationale Verarbeitung",
          "paragraphs": [
            "Cloudflare und Google arbeiten international. Informationen können daher über deren Dienste auch in anderen Ländern verarbeitet werden, vorbehaltlich der Schutzmaßnahmen und Bedingungen der Anbieter sowie des anwendbaren Rechts."
          ]
        },
        {
          "id": "children",
          "heading": "9. Kinder",
          "paragraphs": [
            "Diese Website ist eine allgemeine Studio- und Produktinformationsseite und nicht darauf ausgelegt, personenbezogene Daten von Kindern zu sammeln. Wenn Sie glauben, dass ein Kind Benedict Interactive persönliche Informationen übermittelt hat, kontaktieren Sie uns bitte, damit wir den Vorgang prüfen können."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Änderungen und Kontakt",
          "paragraphs": [
            "Diese Erklärung kann angepasst werden, wenn sich Website, Analysen, Kontaktsystem, Produkte oder rechtliche Anforderungen ändern. Das Datum oben zeigt die letzte Überarbeitung. Datenschutzfragen können an benedict.support@gmail.com gesendet werden. Benedict Interactive wird von Bangkok, Thailand, aus betrieben."
          ]
        }
      ]
    },
    "terms": {
      "title": "Nutzungsbedingungen",
      "metaDescription": "Bedingungen für die Nutzung der Benedict-Interactive-Website und ihrer öffentlichen Inhalte.",
      "lead": "Klare Regeln für die Nutzung der Website, ihrer Inhalte und der öffentlich bereitgestellten Produktinformationen.",
      "updated": "25. September 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Geltungsbereich und Zustimmung",
          "paragraphs": [
            "Diese Bedingungen gelten für die Benedict-Interactive-Website und ihre öffentlichen Inhalte. Mit der Nutzung stimmen Sie ihnen zu, soweit das anwendbare Recht dies zulässt. Wenn Sie nicht zustimmen, nutzen Sie die Website bitte nicht. „Benedict Interactive“, „wir“ und entsprechende Formulierungen bezeichnen in diesen Bedingungen den Betreiber dieses unabhängigen Softwarestudios mit Sitz in Bangkok, Thailand."
          ]
        },
        {
          "id": "information",
          "heading": "2. Produktinformationen und Verfügbarkeit",
          "paragraphs": [
            "Produkte, Funktionen, Vertriebswege, Preise, Kaufsysteme und Dienste können sich in unterschiedlichen Phasen der Verfügbarkeit befinden. Wird etwas als geplant oder später verfügbar beschrieben, ist das keine Zusage für einen bestimmten Termin oder eine bestimmte Ausgestaltung. Wir halten die Angaben möglichst aktuell; das aktuelle Produkt, Release Notes, der Kaufablauf oder produktspezifische Dokumentation können ältere Website-Beschreibungen ersetzen."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Zulässige Nutzung",
          "paragraphs": [
            "Sie dürfen die Website für rechtmäßiges Browsen, die Bewertung von Produkten, Support und Kommunikation nutzen. Missbrauch oder Eingriffe in den Betrieb sind nicht zulässig."
          ],
          "bullets": [
            "Versuchen Sie nicht, unbefugt auf nicht öffentliche Systeme, Admin-Werkzeuge, Zugangsdaten oder Daten zuzugreifen.",
            "Stören oder überlasten Sie den Dienst nicht absichtlich, betreiben Sie kein missbräuchliches Scraping, keine unautorisierten Schwachstellentests und umgehen Sie keine technischen Schutzmaßnahmen.",
            "Nutzen Sie Website oder Inhalte nicht, um sich als Benedict Interactive auszugeben oder andere über Sponsoring, Eigentum oder Unterstützung zu täuschen."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Geistiges Eigentum",
          "paragraphs": [
            "Sofern Drittmaterial nicht entsprechend gekennzeichnet ist, gehören Webdesign, Originaltexte, Markenmaterial, Grafiken, Softwarematerialien und andere eigene Inhalte Benedict Interactive oder werden von uns lizenziert und sind durch geltendes Recht geschützt. Durch die Nutzung der Website gehen keine Rechte auf Sie über. Normales Browser-Caching und persönliche Bezugnahme sind zulässig; weitergehendes Kopieren, Weiterverbreiten, Wiederveröffentlichen, Weiterverkaufen oder kommerzielle Wiederverwenden bedarf einer Erlaubnis, sofern das Gesetz nichts anderes erlaubt."
          ]
        },
        {
          "id": "software",
          "heading": "5. Software wird separat lizenziert",
          "paragraphs": [
            "Von Benedict Interactive vertriebene Software unterliegt der jeweils anwendbaren Softwarelizenz oder produktspezifischen Bedingungen und nicht nur diesen Website-Bedingungen. Die allgemeine Lizenz ist auf dieser Website verfügbar und kann bei Veröffentlichung eines Produkts durch spezielle Bedingungen ergänzt oder ersetzt werden."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Dienste und Links Dritter",
          "paragraphs": [
            "Die Website kann auf App-Stores, Vertriebsdienste, Hosting, E-Mail-Dienste, Zahlungsanbieter, Dokumentation oder andere Angebote Dritter verlinken. Diese werden von eigenen Betreibern kontrolliert und können eigene Bedingungen, Datenschutzregeln, Verfügbarkeit und Gebühren haben. Ein Link bedeutet nicht automatisch, dass Benedict Interactive sämtliche Aussagen, Produkte oder Richtlinien des Zielangebots unterstützt."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Verfügbarkeit und Gewährleistung",
          "paragraphs": [
            "Website und öffentliche Informationen werden nach Verfügbarkeit bereitgestellt. Soweit gesetzlich zulässig, garantiert Benedict Interactive keinen unterbrechungsfreien Zugang, fehlerfreien Betrieb oder eine unbegrenzte Aktualität aller Angaben. Rechte oder Gewährleistungen, die nach zwingendem Verbraucherrecht nicht ausgeschlossen werden dürfen, bleiben unberührt."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Haftungsbeschränkung",
          "paragraphs": [
            "Soweit das anwendbare Recht dies zulässt, haftet Benedict Interactive nicht für mittelbare, zufällige, besondere oder Folgeschäden, die allein aus der Nutzung dieser öffentlichen Website entstehen. Diese Beschränkung gilt nicht, soweit eine Haftung gesetzlich nicht beschränkt oder ausgeschlossen werden darf."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Änderungen dieser Bedingungen",
          "paragraphs": [
            "Wir können diese Bedingungen anpassen, wenn sich Website, Produkte, rechtliche Anforderungen oder Geschäftsmodell ändern. Wesentliche kommerzielle Regelungen — etwa Preise, Erstattungen, Zahlungsmethoden oder Zugriffsrechte — werden erst veröffentlicht, wenn die entsprechenden Systeme tatsächlich einsatzbereit sind."
          ]
        },
        {
          "id": "law",
          "heading": "10. Anwendbares Recht und zwingende Rechte",
          "paragraphs": [
            "Diese Bedingungen unterliegen thailändischem Recht, ohne zwingende Verbraucher- oder sonstige gesetzliche Rechte einzuschränken, die an Ihrem Wohnort gelten."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Kontakt",
          "paragraphs": [
            "Fragen zu diesen Bedingungen können an benedict.support@gmail.com geschickt werden. Benedict Interactive wird von Bangkok, Thailand, aus betrieben."
          ]
        }
      ]
    },
    "license": {
      "title": "Softwarelizenz",
      "metaDescription": "Allgemeine Lizenzbedingungen für von Benedict Interactive vertriebene Software.",
      "lead": "Der allgemeine Lizenzrahmen für Benedict-Interactive-Software, einschließlich Bearagnostic, sofern keine produktspezifischen Bedingungen etwas anderes vorsehen.",
      "updated": "25. September 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Geltungsbereich",
          "paragraphs": [
            "Diese allgemeine Lizenz gilt für Software von Benedict Interactive, wenn die Software oder ihre Downloadseite darauf verweist und keine produktspezifische Lizenz sie ersetzt. Produktspezifische Bedingungen können sie ergänzen oder überlagern. Eine öffentliche Produktseite gewährt allein noch keine Lizenz; diese gilt erst, wenn die Software Ihnen tatsächlich unter diesen Bedingungen bereitgestellt wird."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Lizenzgewährung",
          "paragraphs": [
            "Unter diesen Bedingungen gewährt Benedict Interactive Ihnen eine beschränkte, nicht ausschließliche, nicht übertragbare und nicht unterlizenzierbare Lizenz, die Software auf Geräten zu installieren und zu verwenden, die Ihnen gehören oder die Sie kontrollieren, für rechtmäßige private oder interne geschäftliche Zwecke im Rahmen des Produkts und der anwendbaren Kaufbedingungen. Die Software wird lizenziert, nicht verkauft; Eigentum und geistige Schutzrechte verbleiben bei Benedict Interactive und seinen Lizenzgebern."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Einschränkungen",
          "paragraphs": [
            "Sofern Ihnen das anwendbare Recht nicht ausdrücklich ein Recht einräumt, das nicht beschränkt werden darf, ist Folgendes untersagt:"
          ],
          "bullets": [
            "Weiterverbreitung, Weiterverkauf, Unterlizenzierung, Vermietung, Leasing oder Bereitstellung als gehosteter Dienst ohne schriftliche Erlaubnis;",
            "Entfernen oder Verfälschen von Copyright-, Quellen-, Marken-, Lizenz- oder Eigentumshinweisen;",
            "Nutzung von Software, Marke oder Produktidentität zur Nachahmung von Benedict Interactive oder zur Verbreitung veränderter bzw. irreführender Builds als offizielle Versionen;",
            "Umgehung von Lizenz-, Berechtigungs-, Sicherheits- oder Integritätskontrollen;",
            "Reverse Engineering, Dekompilierung oder Disassemblierung, außer soweit dies trotz dieser Einschränkung ausdrücklich gesetzlich erlaubt ist."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Kopien und Geräte",
          "paragraphs": [
            "Angemessene Sicherungskopien sind zulässig, soweit sie für Ihre lizenzierte Nutzung erforderlich sind und Eigentums- sowie Lizenzhinweise erhalten bleiben. Veröffentlichten Geräte-, Konto-, Wiederherstellungs- oder Berechtigungsgrenzen eines Produkts gelten zusätzlich."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Open-Source- und Drittkomponenten",
          "paragraphs": [
            "Die Software kann Komponenten Dritter oder Open-Source-Komponenten enthalten. Für diese gelten weiterhin deren eigene Lizenzen und Hinweise. Gewährt eine Dritt-Lizenz abweichende Rechte, ist sie für die betreffende Komponente maßgeblich."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Updates und Dienste",
          "paragraphs": [
            "Updates können Funktionen hinzufügen, ändern, reparieren oder entfernen. Ohne produktspezifische Zusage verspricht Benedict Interactive nicht, dass jede Version, Plattform, Integration, jeder Store oder Online-Dienst dauerhaft verfügbar bleibt. Sicherheit, Datenschutz und Datenverhalten sind anhand der tatsächlich verwendeten Version und der aktuellen Dokumentation zu beurteilen."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Bezahlfunktionen und Pro-Berechtigungen",
          "paragraphs": [
            "Bietet ein Produkt kostenpflichtige oder Pro-Funktionen an, gelten die Kauf-, Erstattungs-, Wiederherstellungs-, Geräte- und Berechtigungsbedingungen des jeweils aktiven Verkaufsablaufs oder der aktuellen Produktdokumentation. Verfügbarkeit, Preise und Wiederherstellungsmethoden können sich für künftige Käufe ändern; maßgeblich bleiben das anwendbare Recht und die Bedingungen eines gültigen Kaufs."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Datenschutz",
          "paragraphs": [
            "Die Nutzung verbundener Online-Dienste unterliegt zusätzlich der jeweiligen Datenschutzerklärung. Produktspezifische Hinweise können gesondert beschreiben, wie Gerätedateien, Diagnosedaten, Kontoinformationen oder andere Daten verarbeitet werden."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Gewährleistung und Haftung",
          "paragraphs": [
            "Soweit gesetzlich zulässig, wird die Software ohne andere als die ausdrücklich in Produkt- oder Kaufbedingungen genannten Garantien bereitgestellt. Gesetzliche Rechte oder Haftungen, die nicht ausgeschlossen oder beschränkt werden dürfen, bleiben unberührt."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Beendigung",
          "paragraphs": [
            "Die Lizenz endet bei einem wesentlichen Verstoß gegen diese Bedingungen, der nicht behoben wird, soweit das Gesetz eine Abhilfemöglichkeit vorsieht. Nach Ende der Lizenz dürfen nicht mehr lizenzierte Kopien nicht weiter genutzt werden. Bestimmungen zu Eigentum, Rechten Dritter, Haftungsausschlüssen und andere ihrer Natur nach fortgeltende Regelungen bleiben bestehen."
          ]
        },
        {
          "id": "law",
          "heading": "11. Anwendbares Recht",
          "paragraphs": [
            "Diese Lizenz unterliegt thailändischem Recht, ohne zwingende gesetzliche oder Verbraucherrechte in Ihrer Rechtsordnung einzuschränken."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Kontakt",
          "paragraphs": [
            "Fragen zur Lizenz und Genehmigungsanfragen können an benedict.support@gmail.com gesendet werden."
          ]
        }
      ]
    },
    "legal": {
      "title": "Rechtliches & Rechte",
      "metaDescription": "Informationen zu Urheberrecht, Marken, Genehmigungen und Rechten von Benedict Interactive.",
      "lead": "Eigentum, Genehmigungen, Rechte Dritter und Regeln für die Nutzung von Benedict-Interactive-Material.",
      "updated": "25. September 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Urheberrecht",
          "paragraphs": [
            "© 2026 Benedict Interactive. Alle Rechte vorbehalten. Soweit nicht anders angegeben, gehören Originaltexte, Design, Grafiken, Illustrationen, Markenmaterial, Dokumentation und eigene Softwarematerialien Benedict Interactive oder werden unter Lizenz genutzt und sind durch geltendes Recht geschützt. Der Schutz entsteht nicht erst durch diesen Hinweis; er dient dazu, Eigentum und erlaubte Nutzung klarzustellen."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Marken und Produktnamen",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center sowie ihre Logos, Produktkennzeichen und visuellen Identitäten werden, sofern nicht anders angegeben, als Markenkennzeichen von Benedict Interactive verwendet. Diese Seite behauptet keine Registrierung einer Marke, sofern sie nicht ausdrücklich als registriert bezeichnet wird; ein Registrierungszeichen wird nur verwendet, wenn ein entsprechender Status besteht."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Erlaubnis zur Wiederverwendung",
          "paragraphs": [
            "Sie dürfen auf öffentliche Seiten verlinken und Produkte im normalen persönlichen Rahmen erwähnen. Eine umfangreiche Wiederveröffentlichung eigener Texte, Grafiken, Screenshots, Markenmaterialien, Downloads oder Software für kommerzielle Zwecke, Weiterverkauf, Weiterverbreitung oder Nachahmung erfordert eine Erlaubnis, sofern das Gesetz die Nutzung nicht unabhängig erlaubt. Für Presse, Redaktion, Bildung, Partnerschaften, Distribution oder andere Wiederverwendungen kontaktieren Sie Benedict Interactive bitte vorab."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Rechte Dritter und Open Source",
          "paragraphs": [
            "Namen, Logos, Plattformen, Dienste, Bibliotheken, Schriften, Open-Source-Komponenten und anderes Drittmaterial bleiben Eigentum der jeweiligen Rechteinhaber. Ihre Darstellung auf der Website überträgt keine Rechte auf Benedict Interactive. Dritt- und Open-Source-Lizenzen gelten weiterhin für die jeweiligen Bestandteile; Benedict Interactive beansprucht keine ausschließlichen Rechte an fremdem Material."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Hinweise auf Rechtsverletzungen",
          "paragraphs": [
            "Wenn Sie glauben, dass Material auf dieser Website Ihre Rechte verletzt, schreiben Sie an benedict.support@gmail.com und nennen Sie das betreffende Material, das betroffene Recht, die Grundlage Ihrer Beanstandung und eine verlässliche Kontaktmöglichkeit. Hinweise in gutem Glauben werden geprüft."
          ]
        },
        {
          "id": "location",
          "heading": "6. Kontakt zum Studio",
          "paragraphs": [
            "Benedict Interactive ist ein unabhängiges Softwarestudio, das von Bangkok, Thailand, aus betrieben wird. Öffentliche Kontaktadresse: benedict.support@gmail.com. „Bangkok, Thailand“ bezeichnet den Standort des Studios und ist nicht als öffentlich zugängliche Büroanschrift angegeben."
          ]
        }
      ]
    }
  },
  "it": {
    "privacy": {
      "title": "Informativa sulla privacy",
      "metaDescription": "Come Benedict Interactive gestisce le statistiche del sito, i messaggi di contatto e la privacy.",
      "lead": "Una spiegazione chiara di cosa misura questo sito, cosa non traccia e cosa succede quando contatti Benedict Interactive.",
      "updated": "25 settembre 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Panoramica",
          "paragraphs": [
            "Benedict Interactive è uno studio software indipendente gestito da Bangkok, Thailandia. Questa informativa spiega come vengono trattate le informazioni quando visiti il sito, usi i link dei prodotti o ci contatti via email. Il sito è progettato per raccogliere il minimo necessario: non utilizziamo tracker pubblicitari, profili di pubblicità comportamentale o cookie analitici impostati da Benedict."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Analisi del sito",
          "paragraphs": [
            "Usiamo Cloudflare Web Analytics per dati aggregati su pagine, traffico, prestazioni, provenienza, dispositivo e paese. Cloudflare dichiara che queste misurazioni non dipendono da cookie o localStorage. Benedict Interactive registra inoltre pochi eventi aggregati relativi ai prodotti — per esempio l’apertura di una pagina, un clic sul download, l’accesso al supporto o l’interesse per una futura offerta Pro — per capire l’uso del prodotto, non per seguire singole persone."
          ],
          "bullets": [
            "Il dataset degli eventi non conserva indirizzi IP, stringhe user-agent, referrer, cookie, identificatori localStorage, identificatori di account o contenuti liberi dei messaggi.",
            "I percorsi vengono registrati senza query string né frammenti URL.",
            "Un clic su Download viene contato solo come clic e non come download o installazione completata."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Contatto ed email",
          "paragraphs": [
            "L’editor di contatto prepara il messaggio nel browser e passa la bozza all’app o al servizio email scelto da te. Il sito non riceve né conserva la bozza prima che tu decida di inviarla. Se ci scrivi, riceviamo le informazioni contenute nell’email, come nome, indirizzo, oggetto, messaggio e qualsiasi altro dato che scegli di includere. Attualmente la posta di Benedict Interactive è gestita tramite Gmail, un servizio Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Perché usiamo le informazioni",
          "paragraphs": [
            "Le statistiche aggregate ci aiutano a capire se il sito funziona bene, quali pagine ricevono attenzione e dove migliorare prestazioni o usabilità. Le informazioni di contatto servono per rispondere a richieste di supporto, feedback, contatti commerciali e altra corrispondenza. Quando la legge richiede una base giuridica, utilizziamo quella adeguata all’attività, ad esempio l’esecuzione di una tua richiesta, il nostro legittimo interesse a gestire e migliorare il sito o l’adempimento di obblighi di legge."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Fornitori di servizi",
          "paragraphs": [
            "Cloudflare fornisce distribuzione del sito, Pages hosting, Web Analytics e Analytics Engine. Google fornisce Gmail per la corrispondenza di Benedict Interactive. Questi fornitori trattano le informazioni secondo i propri termini e le proprie pratiche sulla privacy. Benedict Interactive non vende dati personali e non fornisce messaggi di contatto ad inserzionisti o data broker."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Conservazione",
          "paragraphs": [
            "Le statistiche aggregate vengono conservate secondo le impostazioni e i limiti dei servizi Cloudflare; non cerchiamo di trasformarle in profili permanenti dei visitatori. Le email vengono conservate solo per il tempo ragionevolmente necessario a rispondere, mantenere registri utili di supporto o attività, gestire controversie, proteggere il servizio o rispettare obblighi legali. La durata può quindi variare in base al messaggio e al contesto."
          ]
        },
        {
          "id": "rights",
          "heading": "7. I tuoi diritti sulla privacy",
          "paragraphs": [
            "A seconda di dove vivi, la legge può riconoscerti diritti di accesso, rettifica, cancellazione, limitazione, opposizione, portabilità o altre tutele sui tuoi dati personali, oltre al diritto di presentare reclamo a un’autorità competente. Per esercitarli scrivi a benedict.support@gmail.com. Potremmo chiedere informazioni sufficienti per verificare la richiesta e individuare la corrispondenza pertinente."
          ]
        },
        {
          "id": "international",
          "heading": "8. Trattamento internazionale",
          "paragraphs": [
            "Cloudflare e Google operano a livello internazionale. Le informazioni elaborate tramite i loro servizi possono quindi essere trattate in paesi diversi dal tuo, secondo le garanzie e i termini dei fornitori e la legge applicabile."
          ]
        },
        {
          "id": "children",
          "heading": "9. Minori",
          "paragraphs": [
            "Questo è un sito generale di uno studio software e di informazioni sui prodotti e non è progettato per raccogliere dati personali di minori. Se ritieni che un minore abbia inviato informazioni personali a Benedict Interactive, contattaci così da poter verificare la situazione."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Modifiche e contatti",
          "paragraphs": [
            "Questa informativa può essere aggiornata se cambiano il sito, le analisi, il sistema di contatto, i prodotti o i requisiti legali. La data in alto indica l’ultima revisione. Per domande sulla privacy: benedict.support@gmail.com. Benedict Interactive opera da Bangkok, Thailandia."
          ]
        }
      ]
    },
    "terms": {
      "title": "Termini di utilizzo",
      "metaDescription": "Termini che regolano l’uso del sito e dei contenuti pubblici di Benedict Interactive.",
      "lead": "Regole semplici per usare il sito Benedict Interactive, i suoi contenuti e le informazioni pubbliche sui prodotti.",
      "updated": "25 settembre 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Ambito e accettazione",
          "paragraphs": [
            "Questi Termini si applicano al sito Benedict Interactive e ai suoi contenuti pubblici. Usando il sito, li accetti nella misura consentita dalla legge. Se non sei d’accordo, non usare il sito. In questo documento, “Benedict Interactive”, “noi” e formule equivalenti indicano l’operatore di questo studio software indipendente con base a Bangkok, Thailandia."
          ]
        },
        {
          "id": "information",
          "heading": "2. Informazioni sul prodotto e disponibilità",
          "paragraphs": [
            "Prodotti, funzioni, canali di distribuzione, prezzi, sistemi di acquisto e servizi possono trovarsi in fasi diverse di disponibilità. Se qualcosa è indicato come previsto o disponibile in seguito, non costituisce una promessa di data o modalità specifiche. Cerchiamo di mantenere le informazioni aggiornate, ma il prodotto attuale, le note di rilascio, il percorso di acquisto o la documentazione specifica possono sostituire descrizioni precedenti del sito."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Uso consentito",
          "paragraphs": [
            "Puoi usare il sito per navigazione, valutazione, supporto e comunicazioni lecite. Non devi abusare del sito né interferire con il suo funzionamento."
          ],
          "bullets": [
            "Non tentare accessi non autorizzati a sistemi non pubblici, strumenti amministrativi, credenziali o dati.",
            "Non interrompere o sovraccaricare intenzionalmente il servizio, non fare scraping abusivo, test di vulnerabilità non autorizzati o aggirare protezioni tecniche.",
            "Non usare il sito o i suoi contenuti per impersonare Benedict Interactive o creare confusione su sponsorizzazione, proprietà o approvazione."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Proprietà intellettuale",
          "paragraphs": [
            "Salvo i materiali di terzi chiaramente indicati, design del sito, testi originali, asset del marchio, illustrazioni, materiali software e altri contenuti originali appartengono a Benedict Interactive o sono usati in licenza e sono protetti dalla legge applicabile. L’uso del sito non trasferisce alcun diritto di proprietà intellettuale. La normale cache del browser e l’uso personale di riferimento sono consentiti; copie, redistribuzione, ripubblicazione, rivendita o riutilizzo commerciale più ampi richiedono autorizzazione, salvo diversa previsione di legge."
          ]
        },
        {
          "id": "software",
          "heading": "5. Il software è concesso in licenza separatamente",
          "paragraphs": [
            "Il software distribuito da Benedict Interactive è regolato dalla licenza applicabile o da termini specifici del prodotto, non soltanto da questi Termini del sito. La licenza generale è disponibile qui e può essere integrata o sostituita da condizioni specifiche al momento del rilascio di un prodotto."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Servizi e link di terzi",
          "paragraphs": [
            "Il sito può collegarsi a store di app, servizi di distribuzione, hosting, email, pagamenti, documentazione o altri servizi di terzi. Ognuno è gestito dal proprio operatore e può avere termini, privacy, disponibilità e costi differenti. Un link non significa di per sé che Benedict Interactive approvi tutto ciò che compare nella destinazione."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Disponibilità e garanzie",
          "paragraphs": [
            "Il sito e le informazioni pubbliche sono forniti in base alla disponibilità. Nella misura consentita dalla legge, Benedict Interactive non garantisce accesso ininterrotto, assenza di errori o aggiornamento perpetuo di ogni informazione. Nulla in questi Termini elimina diritti o garanzie che la normativa a tutela dei consumatori non consente di escludere."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Limitazione di responsabilità",
          "paragraphs": [
            "Nella misura consentita dalla legge applicabile, Benedict Interactive non risponde di perdite indirette, incidentali, speciali o consequenziali derivanti esclusivamente dall’uso di questo sito pubblico. La limitazione non vale dove la responsabilità non può essere legalmente limitata o esclusa."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Modifiche ai Termini",
          "paragraphs": [
            "Possiamo aggiornare questi Termini se cambiano il sito, i prodotti, la legge o il modello di business. Le condizioni commerciali importanti — prezzi, rimborsi, metodi di pagamento e regole di accesso — saranno pubblicate solo quando i relativi sistemi saranno realmente pronti."
          ]
        },
        {
          "id": "law",
          "heading": "10. Legge applicabile e diritti inderogabili",
          "paragraphs": [
            "Questi Termini sono regolati dalle leggi della Thailandia, senza limitare i diritti inderogabili del consumatore o altri diritti previsti dalla legge del luogo in cui risiedi."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Contatti",
          "paragraphs": [
            "Domande su questi Termini possono essere inviate a benedict.support@gmail.com. Benedict Interactive opera da Bangkok, Thailandia."
          ]
        }
      ]
    },
    "license": {
      "title": "Licenza software",
      "metaDescription": "Condizioni generali di licenza per il software distribuito da Benedict Interactive.",
      "lead": "Il quadro generale di licenza del software Benedict Interactive, incluso Bearagnostic salvo condizioni specifiche del prodotto.",
      "updated": "25 settembre 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Ambito",
          "paragraphs": [
            "Questa licenza generale si applica al software distribuito da Benedict Interactive quando il software o la relativa pagina di download la richiama e non esiste una licenza specifica che la sostituisca. Termini specifici possono integrarla o prevalere. Una pagina pubblica di prodotto, da sola, non concede una licenza; la licenza si applica quando il software viene effettivamente messo a tua disposizione secondo queste condizioni."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Concessione della licenza",
          "paragraphs": [
            "Nel rispetto di queste condizioni, Benedict Interactive ti concede una licenza limitata, non esclusiva, non trasferibile e non sublicenziabile per installare e usare il software su dispositivi che possiedi o controlli, per uso personale lecito o uso interno aziendale secondo quanto consentito dal prodotto e dalle condizioni di acquisto applicabili. Il software è concesso in licenza, non venduto; titolarità e proprietà intellettuale restano a Benedict Interactive e ai suoi licenzianti."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Limitazioni",
          "paragraphs": [
            "Salvo che la legge applicabile ti riconosca espressamente un diritto che non può essere limitato, non puoi:"
          ],
          "bullets": [
            "redistribuire, rivendere, sublicenziare, noleggiare, concedere in leasing o offrire il software come servizio ospitato senza autorizzazione scritta;",
            "rimuovere o falsificare avvisi di copyright, attribuzione, marchio, licenza o proprietà;",
            "usare software, marchio o identità del prodotto per impersonare Benedict Interactive o presentare build modificate o fuorvianti come ufficiali;",
            "aggirare controlli di licenza, entitlement, sicurezza o integrità;",
            "effettuare reverse engineering, decompilare o disassemblare, salvo nella misura in cui la legge lo consenta espressamente nonostante questa limitazione."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Copie e dispositivi",
          "paragraphs": [
            "Puoi creare copie di backup ragionevoli se necessarie al tuo uso autorizzato, mantenendo gli avvisi di proprietà e licenza. Restano validi anche eventuali limiti pubblicati su dispositivi, account, ripristino o entitlement del prodotto."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Componenti open source e di terzi",
          "paragraphs": [
            "Il software può includere componenti di terzi o open source. Tali componenti restano soggetti alle proprie licenze e avvisi. Se una licenza di terzi concede diritti diversi da questa licenza generale, prevale per il componente interessato."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Aggiornamenti e servizi",
          "paragraphs": [
            "Gli aggiornamenti possono aggiungere, modificare, correggere o rimuovere funzioni. Salvo impegni specifici, Benedict Interactive non promette che ogni versione, piattaforma, integrazione, store o servizio online rimanga disponibile per sempre. Sicurezza, privacy e trattamento dei dati vanno valutati in base alla versione realmente utilizzata e alla documentazione aggiornata."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Funzioni a pagamento e diritti Pro",
          "paragraphs": [
            "Quando un prodotto offre funzioni a pagamento o Pro, si applicano le condizioni di acquisto, rimborso, ripristino, dispositivi ed entitlement pubblicate nel flusso commerciale attivo o nella documentazione corrente del prodotto. Disponibilità, prezzi e metodi di ripristino possono cambiare per gli acquisti futuri, nel rispetto della legge applicabile e delle condizioni relative a un acquisto valido."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Privacy",
          "paragraphs": [
            "L’uso di servizi online collegati è inoltre soggetto all’informativa privacy applicabile. Un prodotto può descrivere separatamente come tratta file del dispositivo, diagnostica, dati dell’account o altre informazioni."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Garanzie e responsabilità",
          "paragraphs": [
            "Nella misura consentita dalla legge, il software viene fornito senza garanzie ulteriori rispetto a quelle espressamente indicate nel prodotto o nelle condizioni di acquisto. Nulla in questa licenza elimina diritti o responsabilità che la legge non permette di escludere o limitare."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Cessazione",
          "paragraphs": [
            "La licenza termina in caso di violazione sostanziale di queste condizioni non sanata quando la legge richiede la possibilità di porvi rimedio. Alla cessazione devi smettere di usare le copie non più autorizzate. Le clausole su proprietà, diritti di terzi, esclusioni e altre disposizioni che per loro natura devono continuare restano efficaci."
          ]
        },
        {
          "id": "law",
          "heading": "11. Legge applicabile",
          "paragraphs": [
            "Questa licenza è regolata dalle leggi della Thailandia, senza limitare diritti inderogabili previsti dalla legge o dalla normativa consumeristica applicabile nella tua giurisdizione."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Contatti",
          "paragraphs": [
            "Domande sulla licenza e richieste di autorizzazione possono essere inviate a benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "Note legali e diritti",
      "metaDescription": "Informazioni su copyright, marchi, autorizzazioni e diritti di Benedict Interactive.",
      "lead": "Titolarità, autorizzazioni, diritti di terzi e regole per il riutilizzo dei materiali Benedict Interactive.",
      "updated": "25 settembre 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Copyright",
          "paragraphs": [
            "© 2026 Benedict Interactive. Tutti i diritti riservati. Salvo diversa indicazione, testi originali, design, grafica, illustrazioni, asset del marchio, documentazione e materiali software originali appartengono a Benedict Interactive o sono utilizzati in licenza e sono protetti dalla legge applicabile. La protezione del copyright non dipende dalla presenza di questo avviso; l’avviso serve a chiarire titolarità e usi consentiti."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Marchi e nomi dei prodotti",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, i relativi loghi, marchi di prodotto e identità visive sono usati come segni distintivi di Benedict Interactive salvo diversa indicazione. Questa pagina non afferma che un marchio sia registrato a meno che ciò non sia indicato espressamente; il simbolo di marchio registrato non viene usato senza un corrispondente stato di registrazione."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Permesso di riutilizzo",
          "paragraphs": [
            "Puoi collegarti alle pagine pubbliche e fare normali riferimenti personali ai prodotti. La ripubblicazione sostanziale di testi originali, illustrazioni, screenshot, asset del marchio, file scaricabili o software per fini commerciali, rivendita, redistribuzione o impersonificazione richiede autorizzazione, salvo che la legge consenta autonomamente l’uso. Per stampa, editoria, istruzione, partnership, distribuzione o altri riutilizzi, contatta Benedict Interactive prima di presumere che il permesso sia concesso."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Diritti di terzi e open source",
          "paragraphs": [
            "Nomi, loghi, piattaforme, servizi, librerie, font, componenti open source e altri materiali di terzi restano di proprietà dei rispettivi titolari. La loro presenza sul sito non trasferisce proprietà a Benedict Interactive. Licenze e avvisi di terzi continuano a disciplinare il materiale interessato; Benedict Interactive non rivendica diritti esclusivi su contenuti altrui."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Segnalazioni su diritti o violazioni",
          "paragraphs": [
            "Se ritieni che materiale sul sito violi i tuoi diritti, scrivi a benedict.support@gmail.com indicando il materiale, il diritto interessato, il fondamento della richiesta e un recapito affidabile. Le segnalazioni presentate in buona fede saranno esaminate."
          ]
        },
        {
          "id": "location",
          "heading": "6. Contatto dello studio",
          "paragraphs": [
            "Benedict Interactive è uno studio software indipendente gestito da Bangkok, Thailandia. Email pubblica: benedict.support@gmail.com. “Bangkok, Thailandia” indica la località dello studio e non viene presentata come indirizzo di un ufficio aperto al pubblico."
          ]
        }
      ]
    }
  },
  "id": {
    "privacy": {
      "title": "Kebijakan Privasi",
      "metaDescription": "Cara Benedict Interactive menangani analitik situs, pesan kontak, dan privasi.",
      "lead": "Penjelasan sederhana tentang apa yang diukur situs ini, apa yang tidak dilacak, dan apa yang terjadi saat Anda menghubungi Benedict Interactive.",
      "updated": "25 September 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Ringkasan",
          "paragraphs": [
            "Benedict Interactive adalah studio perangkat lunak independen yang dijalankan dari Bangkok, Thailand. Kebijakan ini menjelaskan bagaimana informasi ditangani saat Anda mengunjungi situs, membuka tautan produk, atau menghubungi kami lewat email. Situs ini dirancang dengan prinsip minimisasi data: kami tidak memakai pelacak iklan, profil iklan berbasis perilaku, atau cookie analitik yang dipasang Benedict."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Analitik situs",
          "paragraphs": [
            "Kami menggunakan Cloudflare Web Analytics untuk melihat data agregat tentang halaman, lalu lintas, performa, sumber kunjungan, perangkat, dan negara. Cloudflare menyatakan layanan ini tidak bergantung pada cookie atau localStorage untuk pengukuran tersebut. Benedict Interactive juga mencatat beberapa peristiwa produk secara agregat—misalnya membuka halaman produk, mengeklik unduhan, membuka dukungan, atau menunjukkan minat pada penawaran Pro yang direncanakan—untuk memahami penggunaan produk, bukan melacak individu."
          ],
          "bullets": [
            "Dataset peristiwa tidak menyimpan alamat IP, user-agent, referrer, cookie, pengenal localStorage, pengenal akun, atau isi pesan bebas.",
            "Path dicatat tanpa query string dan fragmen URL.",
            "Klik tombol unduh hanya dihitung sebagai klik, bukan sebagai unduhan atau instalasi yang selesai."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Kontak dan email",
          "paragraphs": [
            "Komposer kontak menyiapkan pesan di browser Anda lalu meneruskan draf ke aplikasi atau layanan email yang Anda pilih. Situs tidak menerima atau menyimpan isi draf sebelum Anda memutuskan untuk mengirimnya. Jika Anda mengirim email kepada Benedict Interactive, kami menerima informasi yang ada di email tersebut, seperti nama, alamat email, subjek, pesan, dan informasi lain yang Anda pilih untuk disertakan. Saat ini email Benedict Interactive ditangani melalui Gmail, layanan Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Untuk apa informasi digunakan",
          "paragraphs": [
            "Analitik agregat membantu kami memahami apakah situs bekerja dengan baik, halaman produk mana yang paling banyak diperhatikan, serta bagian mana yang perlu ditingkatkan. Informasi kontak digunakan untuk menjawab permintaan dukungan, masukan, pertanyaan bisnis, dan korespondensi lain. Jika hukum mensyaratkan dasar hukum pemrosesan, kami menggunakan dasar yang sesuai, seperti memenuhi permintaan Anda, kepentingan sah untuk mengoperasikan dan meningkatkan situs, atau memenuhi kewajiban hukum."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Penyedia layanan",
          "paragraphs": [
            "Cloudflare menyediakan pengiriman situs, Pages hosting, Web Analytics, dan Analytics Engine. Google menyediakan Gmail untuk korespondensi Benedict Interactive. Penyedia tersebut memproses informasi sesuai ketentuan dan praktik privasi mereka sendiri. Benedict Interactive tidak menjual data pribadi dan tidak memberikan pesan kontak kepada pengiklan atau broker data."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Penyimpanan",
          "paragraphs": [
            "Data analitik agregat disimpan sesuai pengaturan dan batas retensi layanan Cloudflare; kami tidak berusaha mengubahnya menjadi profil pengunjung permanen. Email disimpan hanya selama wajar diperlukan untuk menjawab, menjaga catatan dukungan atau bisnis yang relevan, menyelesaikan sengketa, melindungi layanan, atau memenuhi kewajiban hukum. Lama penyimpanan dapat berbeda tergantung pesan dan konteks."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Hak privasi Anda",
          "paragraphs": [
            "Tergantung tempat tinggal Anda, hukum yang berlaku dapat memberi hak untuk meminta akses, koreksi, penghapusan, pembatasan, keberatan, portabilitas, atau tindakan lain terhadap data pribadi Anda, serta hak untuk mengadu kepada otoritas yang berwenang. Untuk mengajukan permintaan, kirim email ke benedict.support@gmail.com. Kami mungkin membutuhkan informasi yang cukup untuk memverifikasi permintaan dan menemukan korespondensi terkait."
          ]
        },
        {
          "id": "international",
          "heading": "8. Pemrosesan lintas negara",
          "paragraphs": [
            "Cloudflare dan Google beroperasi secara internasional. Informasi yang diproses melalui layanan mereka dapat ditangani di negara lain, sesuai perlindungan dan ketentuan penyedia tersebut serta hukum yang berlaku."
          ]
        },
        {
          "id": "children",
          "heading": "9. Anak-anak",
          "paragraphs": [
            "Situs ini adalah situs umum studio perangkat lunak dan informasi produk, bukan layanan yang dirancang untuk mengumpulkan data pribadi anak. Jika Anda yakin seorang anak telah mengirim informasi pribadi kepada Benedict Interactive, hubungi kami agar situasinya dapat ditinjau."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Perubahan dan kontak",
          "paragraphs": [
            "Kebijakan ini dapat diperbarui jika situs, analitik, sistem kontak, produk, atau ketentuan hukum berubah. Tanggal di bagian atas menunjukkan revisi terakhir. Pertanyaan privasi dapat dikirim ke benedict.support@gmail.com. Benedict Interactive dijalankan dari Bangkok, Thailand."
          ]
        }
      ]
    },
    "terms": {
      "title": "Ketentuan Penggunaan",
      "metaDescription": "Ketentuan yang mengatur penggunaan situs dan konten publik Benedict Interactive.",
      "lead": "Aturan yang mudah dipahami untuk menggunakan situs Benedict Interactive, kontennya, dan informasi produk publik.",
      "updated": "25 September 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Cakupan dan persetujuan",
          "paragraphs": [
            "Ketentuan ini berlaku untuk situs Benedict Interactive dan konten publiknya. Dengan menggunakan situs, Anda menyetujui ketentuan ini sejauh diizinkan oleh hukum. Jika tidak setuju, jangan gunakan situs. Dalam dokumen ini, “Benedict Interactive”, “kami”, dan istilah sejenis merujuk pada operator studio perangkat lunak independen ini yang berbasis di Bangkok, Thailand."
          ]
        },
        {
          "id": "information",
          "heading": "2. Informasi produk dan ketersediaan",
          "paragraphs": [
            "Produk, fitur, kanal distribusi, harga, sistem pembelian, dan layanan dapat berada pada tahap ketersediaan atau peluncuran yang berbeda. Jika sesuatu disebut direncanakan atau tersedia nanti, itu bukan janji tentang tanggal atau bentuk tertentu. Kami berupaya menjaga informasi tetap mutakhir, tetapi produk saat ini, catatan rilis, alur pembelian, atau dokumentasi khusus produk dapat menggantikan keterangan lama di situs."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Penggunaan yang diperbolehkan",
          "paragraphs": [
            "Anda dapat menggunakan situs untuk penelusuran, evaluasi, dukungan, dan komunikasi yang sah. Jangan menyalahgunakan situs atau mengganggu operasinya."
          ],
          "bullets": [
            "Jangan mencoba mengakses sistem nonpublik, alat admin, kredensial, atau data tanpa izin.",
            "Jangan sengaja mengganggu atau membebani layanan, melakukan scraping secara abusif, menguji kerentanan tanpa izin, atau melewati perlindungan teknis.",
            "Jangan gunakan situs atau kontennya untuk menyamar sebagai Benedict Interactive atau menyesatkan orang tentang sponsor, kepemilikan, atau dukungan."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Kekayaan intelektual",
          "paragraphs": [
            "Kecuali materi pihak ketiga yang dinyatakan demikian, desain situs, teks asli, aset merek, karya visual, materi perangkat lunak, dan konten asli lain dimiliki atau dilisensikan kepada Benedict Interactive dan dilindungi hukum yang berlaku. Menggunakan situs tidak memindahkan hak kekayaan intelektual kepada Anda. Cache browser normal dan penggunaan referensi pribadi diperbolehkan; penyalinan, distribusi ulang, penerbitan ulang, penjualan kembali, atau penggunaan komersial yang lebih luas memerlukan izin kecuali hukum menentukan lain."
          ]
        },
        {
          "id": "software",
          "heading": "5. Perangkat lunak dilisensikan secara terpisah",
          "paragraphs": [
            "Perangkat lunak Benedict Interactive tunduk pada lisensi yang berlaku atau ketentuan khusus produk, bukan hanya Ketentuan situs ini. Lisensi umum tersedia di situs dan dapat dilengkapi atau digantikan oleh ketentuan khusus saat produk dirilis."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Layanan dan tautan pihak ketiga",
          "paragraphs": [
            "Situs dapat menautkan ke toko aplikasi, layanan distribusi, hosting, email, pembayaran, dokumentasi, atau layanan pihak ketiga lain. Masing-masing dikendalikan operatornya sendiri dan dapat memiliki ketentuan, kebijakan privasi, ketersediaan, serta biaya berbeda. Adanya tautan tidak berarti Benedict Interactive mendukung seluruh isi atau kebijakan tujuan tersebut."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Ketersediaan dan penafian",
          "paragraphs": [
            "Situs dan informasi publik disediakan sesuai ketersediaan. Sejauh diizinkan hukum, Benedict Interactive tidak menjamin akses tanpa putus, operasi tanpa kesalahan, atau bahwa semua informasi akan selalu mutakhir. Tidak ada bagian dari Ketentuan ini yang menghapus hak atau jaminan yang tidak boleh dikesampingkan menurut hukum konsumen."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Batas tanggung jawab",
          "paragraphs": [
            "Sejauh diizinkan hukum yang berlaku, Benedict Interactive tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, atau konsekuensial yang timbul semata-mata dari penggunaan situs publik ini. Batasan ini tidak berlaku jika tanggung jawab secara hukum tidak boleh dibatasi atau dikesampingkan."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Perubahan Ketentuan",
          "paragraphs": [
            "Ketentuan ini dapat diperbarui ketika situs, produk, hukum, atau model bisnis berubah. Ketentuan komersial penting seperti harga, refund, metode pembayaran, dan aturan hak akses hanya akan dipublikasikan ketika sistem tersebut benar-benar siap."
          ]
        },
        {
          "id": "law",
          "heading": "10. Hukum yang berlaku dan hak wajib",
          "paragraphs": [
            "Ketentuan ini diatur oleh hukum Thailand tanpa membatasi hak konsumen atau hak hukum wajib yang berlaku bagi Anda di tempat tinggal Anda."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Kontak",
          "paragraphs": [
            "Pertanyaan tentang Ketentuan ini dapat dikirim ke benedict.support@gmail.com. Benedict Interactive dijalankan dari Bangkok, Thailand."
          ]
        }
      ]
    },
    "license": {
      "title": "Lisensi Perangkat Lunak",
      "metaDescription": "Ketentuan lisensi umum untuk perangkat lunak yang didistribusikan Benedict Interactive.",
      "lead": "Kerangka lisensi umum untuk perangkat lunak Benedict Interactive, termasuk Bearagnostic kecuali ada ketentuan khusus produk.",
      "updated": "25 September 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Cakupan",
          "paragraphs": [
            "Lisensi umum ini berlaku untuk perangkat lunak Benedict Interactive jika perangkat lunak atau halaman unduhnya merujuk pada lisensi ini dan tidak ada lisensi khusus yang menggantikannya. Ketentuan khusus produk dapat menambah atau mengesampingkan bagian dari lisensi umum ini. Halaman produk publik saja tidak memberikan lisensi; lisensi berlaku saat perangkat lunak benar-benar diberikan kepada Anda berdasarkan ketentuan ini."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Pemberian lisensi",
          "paragraphs": [
            "Dengan tunduk pada ketentuan ini, Benedict Interactive memberi Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan tidak dapat disublisensikan untuk memasang serta menggunakan perangkat lunak pada perangkat yang Anda miliki atau kendalikan, untuk penggunaan pribadi yang sah atau penggunaan internal bisnis sesuai produk dan ketentuan pembelian. Perangkat lunak dilisensikan, bukan dijual; kepemilikan dan hak kekayaan intelektual tetap pada Benedict Interactive dan pemberi lisensinya."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Pembatasan",
          "paragraphs": [
            "Kecuali hukum secara tegas memberi Anda hak yang tidak dapat dibatasi, Anda tidak boleh:"
          ],
          "bullets": [
            "mendistribusikan ulang, menjual kembali, mensublisensikan, menyewakan, atau menyediakan perangkat lunak sebagai hosted service tanpa izin tertulis;",
            "menghapus atau memalsukan pemberitahuan hak cipta, atribusi, merek, lisensi, atau kepemilikan;",
            "menggunakan perangkat lunak, merek, atau identitas produk untuk menyamar sebagai Benedict Interactive atau menyebarkan build modifikasi yang menyesatkan sebagai rilis resmi;",
            "melewati kontrol lisensi, entitlement, keamanan, atau integritas;",
            "melakukan reverse engineering, decompile, atau disassemble kecuali sejauh hukum secara tegas mengizinkannya meskipun ada pembatasan ini."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Salinan dan perangkat",
          "paragraphs": [
            "Salinan cadangan yang wajar boleh dibuat jika diperlukan untuk penggunaan berlisensi Anda sendiri, dengan tetap mempertahankan pemberitahuan kepemilikan dan lisensi. Batas perangkat, akun, pemulihan, atau entitlement yang dipublikasikan untuk suatu produk juga tetap berlaku."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Komponen open source dan pihak ketiga",
          "paragraphs": [
            "Perangkat lunak dapat menyertakan komponen pihak ketiga atau open source. Komponen tersebut tetap tunduk pada lisensi dan pemberitahuannya sendiri. Jika lisensi pihak ketiga memberi hak yang berbeda dari lisensi umum ini, lisensi pihak ketiga berlaku untuk komponen tersebut."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Pembaruan dan layanan",
          "paragraphs": [
            "Pembaruan dapat menambah, mengubah, memperbaiki, atau menghapus fitur. Kecuali ada komitmen khusus produk, Benedict Interactive tidak menjanjikan setiap versi, platform, integrasi, toko, atau layanan online akan tersedia selamanya. Keamanan, privasi, dan perilaku data harus dinilai berdasarkan versi yang benar-benar Anda gunakan dan dokumentasi terbaru."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Fitur berbayar dan entitlement Pro",
          "paragraphs": [
            "Jika suatu produk menawarkan fitur berbayar atau Pro, ketentuan pembelian, refund, pemulihan, perangkat, dan entitlement yang berlaku adalah yang dipublikasikan dalam alur komersial aktif atau dokumentasi produk terkini. Ketersediaan, harga, dan metode pemulihan dapat berubah untuk pembelian mendatang, dengan tetap tunduk pada hukum yang berlaku dan ketentuan untuk pembelian yang sah."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Privasi",
          "paragraphs": [
            "Penggunaan layanan online yang terhubung juga tunduk pada kebijakan privasi yang berlaku. Produk dapat menjelaskan secara terpisah bagaimana file perangkat, diagnostik, informasi akun, atau data lain diproses."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Jaminan dan tanggung jawab",
          "paragraphs": [
            "Sejauh diizinkan hukum, perangkat lunak disediakan tanpa jaminan lain selain yang secara tegas dinyatakan dalam produk atau ketentuan pembelian. Lisensi ini tidak menghapus hak hukum atau tanggung jawab yang secara hukum tidak dapat dikesampingkan atau dibatasi."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Pengakhiran",
          "paragraphs": [
            "Lisensi berakhir jika Anda melakukan pelanggaran material dan tidak memperbaikinya ketika hukum mewajibkan kesempatan untuk memperbaiki. Setelah lisensi berakhir, Anda harus berhenti menggunakan salinan yang tidak lagi dilisensikan. Ketentuan tentang kepemilikan, hak pihak ketiga, penafian, dan bagian lain yang secara wajar harus tetap berlaku akan terus berlaku."
          ]
        },
        {
          "id": "law",
          "heading": "11. Hukum yang berlaku",
          "paragraphs": [
            "Lisensi ini diatur oleh hukum Thailand tanpa membatasi hak hukum atau hak konsumen wajib yang berlaku di yurisdiksi Anda."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Kontak",
          "paragraphs": [
            "Pertanyaan lisensi dan permintaan izin dapat dikirim ke benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "Informasi Hukum & Hak",
      "metaDescription": "Informasi hak cipta, merek, izin, dan hak Benedict Interactive.",
      "lead": "Kepemilikan, izin, hak pihak ketiga, dan aturan penggunaan ulang materi Benedict Interactive.",
      "updated": "25 September 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Hak cipta",
          "paragraphs": [
            "© 2026 Benedict Interactive. Seluruh hak dilindungi. Kecuali dinyatakan lain, teks asli, desain, grafis, karya visual, aset merek, dokumentasi, dan materi perangkat lunak asli dimiliki atau dilisensikan kepada Benedict Interactive serta dilindungi hukum yang berlaku. Perlindungan hak cipta tidak bergantung pada adanya pemberitahuan ini; pemberitahuan ini hanya memperjelas kepemilikan dan penggunaan yang diizinkan."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Merek dan nama produk",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, logo, tanda produk, dan identitas visual terkait digunakan sebagai pengenal merek Benedict Interactive kecuali dinyatakan lain. Halaman ini tidak menyatakan suatu merek telah terdaftar kecuali disebut secara tegas; simbol merek terdaftar tidak digunakan tanpa status pendaftaran yang mendukungnya."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Izin menggunakan ulang materi",
          "paragraphs": [
            "Anda boleh menautkan ke halaman publik dan membuat referensi pribadi yang wajar terhadap produk. Menerbitkan ulang sebagian besar teks asli, karya visual, tangkapan layar, aset merek, file unduhan, atau perangkat lunak untuk tujuan komersial, penjualan kembali, distribusi ulang, atau penyamaran memerlukan izin kecuali hukum secara terpisah mengizinkan penggunaan tersebut. Untuk pers, editorial, pendidikan, kemitraan, distribusi, atau penggunaan ulang lain, hubungi Benedict Interactive terlebih dahulu."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Hak pihak ketiga dan open source",
          "paragraphs": [
            "Nama, logo, platform, layanan, library, font, komponen open source, dan materi pihak ketiga lain tetap menjadi milik pemiliknya masing-masing. Kemunculannya di situs tidak memindahkan kepemilikan kepada Benedict Interactive. Lisensi dan pemberitahuan pihak ketiga tetap mengatur materi terkait; Benedict Interactive tidak mengklaim hak eksklusif atas milik pihak lain."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Masalah hak atau pelanggaran",
          "paragraphs": [
            "Jika Anda yakin materi di situs ini melanggar hak Anda, kirim pemberitahuan ke benedict.support@gmail.com yang menjelaskan materi tersebut, hak yang terdampak, dasar klaim, dan cara menghubungi Anda. Laporan yang diajukan dengan itikad baik akan ditinjau."
          ]
        },
        {
          "id": "location",
          "heading": "6. Kontak studio",
          "paragraphs": [
            "Benedict Interactive adalah studio perangkat lunak independen yang dijalankan dari Bangkok, Thailand. Email publik: benedict.support@gmail.com. “Bangkok, Thailand” menjelaskan lokasi studio dan bukan alamat kantor yang dibuka untuk kunjungan umum."
          ]
        }
      ]
    }
  },
  "vi": {
    "privacy": {
      "title": "Chính sách quyền riêng tư",
      "metaDescription": "Cách Benedict Interactive xử lý phân tích website, tin nhắn liên hệ và quyền riêng tư.",
      "lead": "Giải thích rõ website này đo lường những gì, không theo dõi những gì và điều gì xảy ra khi bạn liên hệ Benedict Interactive.",
      "updated": "25 tháng 9 năm 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Tổng quan",
          "paragraphs": [
            "Benedict Interactive là studio phần mềm độc lập hoạt động từ Bangkok, Thái Lan. Chính sách này giải thích cách thông tin được xử lý khi bạn truy cập website, mở liên kết sản phẩm hoặc liên hệ qua email. Website được xây dựng theo nguyên tắc thu thập tối thiểu: chúng tôi không dùng trình theo dõi quảng cáo, hồ sơ quảng cáo theo hành vi hay cookie phân tích do Benedict đặt."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Phân tích website",
          "paragraphs": [
            "Chúng tôi dùng Cloudflare Web Analytics để xem dữ liệu tổng hợp về trang, lưu lượng, hiệu năng, nguồn truy cập, thiết bị và quốc gia. Cloudflare cho biết dịch vụ này không dựa vào cookie hoặc localStorage cho các phép đo đó. Benedict Interactive cũng ghi nhận một số ít sự kiện sản phẩm ở dạng tổng hợp — như mở trang sản phẩm, bấm tải xuống, mở hỗ trợ hoặc bày tỏ quan tâm tới gói Pro dự kiến — nhằm hiểu mức độ sử dụng sản phẩm, không phải theo dõi từng cá nhân."
          ],
          "bullets": [
            "Bộ dữ liệu sự kiện không lưu địa chỉ IP, user-agent, referrer, cookie, định danh localStorage, định danh tài khoản hoặc nội dung tin nhắn tự do.",
            "Đường dẫn được ghi mà không có query string hoặc URL fragment.",
            "Một lần bấm nút tải xuống chỉ được tính là một cú nhấp, không được xem là tải xuống hay cài đặt hoàn tất."
          ]
        },
        {
          "id": "contact",
          "heading": "3. Liên hệ và email",
          "paragraphs": [
            "Trình soạn liên hệ tạo tin nhắn ngay trong trình duyệt rồi chuyển bản nháp sang ứng dụng hoặc dịch vụ email bạn chọn. Website không nhận hoặc lưu nội dung bản nháp trước khi bạn quyết định gửi. Khi bạn gửi email cho Benedict Interactive, chúng tôi nhận thông tin có trong email đó, chẳng hạn tên, địa chỉ email, tiêu đề, nội dung và những gì bạn tự chọn cung cấp. Hiện email của Benedict Interactive được xử lý qua Gmail, dịch vụ của Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Thông tin được dùng để làm gì",
          "paragraphs": [
            "Dữ liệu phân tích tổng hợp giúp chúng tôi biết website có hoạt động tốt không, trang sản phẩm nào được quan tâm và phần nào cần cải thiện về hiệu năng hoặc trải nghiệm. Thông tin liên hệ được dùng để trả lời hỗ trợ, góp ý, trao đổi kinh doanh và thư từ khác. Khi pháp luật yêu cầu cơ sở pháp lý, chúng tôi dựa trên cơ sở phù hợp với hoạt động, như thực hiện yêu cầu của bạn, lợi ích hợp pháp trong việc vận hành và cải thiện website, hoặc tuân thủ nghĩa vụ pháp luật."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Nhà cung cấp dịch vụ",
          "paragraphs": [
            "Cloudflare cung cấp hạ tầng phân phối website, Pages hosting, Web Analytics và Analytics Engine. Google cung cấp Gmail cho thư từ của Benedict Interactive. Các nhà cung cấp này xử lý thông tin theo điều khoản và chính sách riêng của họ. Benedict Interactive không bán dữ liệu cá nhân và không cung cấp tin nhắn liên hệ cho nhà quảng cáo hoặc môi giới dữ liệu."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Thời gian lưu giữ",
          "paragraphs": [
            "Dữ liệu phân tích tổng hợp được lưu theo cài đặt và giới hạn của dịch vụ Cloudflare; chúng tôi không cố biến dữ liệu đó thành hồ sơ người truy cập lâu dài. Email chỉ được giữ trong thời gian hợp lý để trả lời, duy trì hồ sơ hỗ trợ hoặc kinh doanh cần thiết, xử lý tranh chấp, bảo vệ dịch vụ hoặc đáp ứng nghĩa vụ pháp luật. Vì vậy thời gian lưu có thể khác nhau tùy nội dung và bối cảnh."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Quyền riêng tư của bạn",
          "paragraphs": [
            "Tùy nơi bạn sinh sống, pháp luật có thể cho bạn quyền yêu cầu truy cập, chỉnh sửa, xóa, hạn chế, phản đối, chuyển dữ liệu hoặc quyền khác đối với thông tin cá nhân, cũng như quyền khiếu nại tới cơ quan có thẩm quyền. Để gửi yêu cầu, hãy email benedict.support@gmail.com. Chúng tôi có thể cần đủ thông tin để xác minh yêu cầu và tìm thư từ liên quan."
          ]
        },
        {
          "id": "international",
          "heading": "8. Xử lý dữ liệu ở nhiều quốc gia",
          "paragraphs": [
            "Cloudflare và Google hoạt động trên phạm vi quốc tế. Vì vậy thông tin xử lý qua các dịch vụ này có thể được xử lý tại quốc gia khác, theo biện pháp bảo vệ, điều khoản của nhà cung cấp và pháp luật áp dụng."
          ]
        },
        {
          "id": "children",
          "heading": "9. Trẻ em",
          "paragraphs": [
            "Đây là website chung của một studio phần mềm và giới thiệu sản phẩm, không được thiết kế để thu thập dữ liệu cá nhân của trẻ em. Nếu bạn tin rằng một trẻ em đã gửi thông tin cá nhân cho Benedict Interactive, hãy liên hệ để chúng tôi xem xét."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Thay đổi và liên hệ",
          "paragraphs": [
            "Chính sách này có thể được cập nhật khi website, hệ thống phân tích, kênh liên hệ, sản phẩm hoặc yêu cầu pháp lý thay đổi. Ngày ở đầu trang là ngày sửa đổi gần nhất. Câu hỏi về quyền riêng tư có thể gửi tới benedict.support@gmail.com. Benedict Interactive hoạt động từ Bangkok, Thái Lan."
          ]
        }
      ]
    },
    "terms": {
      "title": "Điều khoản sử dụng",
      "metaDescription": "Điều khoản áp dụng khi sử dụng website và nội dung công khai của Benedict Interactive.",
      "lead": "Những quy tắc dễ hiểu khi sử dụng website Benedict Interactive, nội dung và thông tin sản phẩm công khai.",
      "updated": "25 tháng 9 năm 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Phạm vi và sự chấp thuận",
          "paragraphs": [
            "Các Điều khoản này áp dụng cho website Benedict Interactive và nội dung công khai trên đó. Khi sử dụng website, bạn đồng ý với Điều khoản trong phạm vi pháp luật cho phép. Nếu không đồng ý, vui lòng không sử dụng website. Trong tài liệu này, “Benedict Interactive”, “chúng tôi” và cách gọi tương đương chỉ đơn vị vận hành studio phần mềm độc lập đặt tại Bangkok, Thái Lan."
          ]
        },
        {
          "id": "information",
          "heading": "2. Thông tin sản phẩm và tình trạng cung cấp",
          "paragraphs": [
            "Sản phẩm, tính năng, kênh phân phối, giá, hệ thống mua hàng và dịch vụ có thể ở các giai đoạn cung cấp hoặc triển khai khác nhau. Nội dung được ghi là dự kiến hoặc sẽ có sau không phải là cam kết về một ngày hay hình thức cụ thể. Chúng tôi cố gắng giữ thông tin luôn cập nhật, nhưng sản phẩm hiện tại, ghi chú phát hành, quy trình mua hoặc tài liệu riêng của sản phẩm có thể thay thế mô tả cũ trên website."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Cách sử dụng được chấp nhận",
          "paragraphs": [
            "Bạn có thể dùng website để duyệt, đánh giá sản phẩm, nhận hỗ trợ và liên hệ một cách hợp pháp. Không được lạm dụng website hoặc cản trở hoạt động của hệ thống."
          ],
          "bullets": [
            "Không cố truy cập trái phép vào hệ thống không công khai, công cụ quản trị, thông tin đăng nhập hoặc dữ liệu.",
            "Không cố ý phá gián đoạn, gây quá tải, scraping lạm dụng, kiểm thử lỗ hổng khi chưa được phép hoặc vượt qua biện pháp bảo vệ kỹ thuật.",
            "Không dùng website hoặc nội dung để giả danh Benedict Interactive hoặc làm người khác hiểu sai về tài trợ, quyền sở hữu hay sự chứng thực."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Sở hữu trí tuệ",
          "paragraphs": [
            "Trừ nội dung bên thứ ba được ghi rõ, thiết kế website, văn bản gốc, tài sản thương hiệu, hình minh họa, tài liệu phần mềm và nội dung gốc khác thuộc về hoặc được cấp phép cho Benedict Interactive và được bảo vệ theo luật áp dụng. Việc sử dụng website không chuyển giao quyền sở hữu trí tuệ cho bạn. Bộ nhớ đệm trình duyệt thông thường và tham khảo cá nhân được phép; sao chép, phân phối lại, đăng lại, bán lại hoặc tái sử dụng thương mại rộng hơn cần có phép trừ khi pháp luật quy định khác."
          ]
        },
        {
          "id": "software",
          "heading": "5. Phần mềm có giấy phép riêng",
          "paragraphs": [
            "Phần mềm do Benedict Interactive phân phối chịu sự điều chỉnh của giấy phép tương ứng hoặc điều khoản riêng của sản phẩm, không chỉ các Điều khoản website này. Giấy phép chung có trên website và có thể được bổ sung hoặc thay thế bằng điều khoản riêng khi sản phẩm phát hành."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Dịch vụ và liên kết bên thứ ba",
          "paragraphs": [
            "Website có thể liên kết tới cửa hàng ứng dụng, dịch vụ phân phối, hosting, email, thanh toán, tài liệu hoặc dịch vụ bên thứ ba khác. Mỗi dịch vụ do đơn vị riêng vận hành và có thể có điều khoản, chính sách, tình trạng sẵn có và phí riêng. Một liên kết không đồng nghĩa Benedict Interactive xác nhận mọi nội dung tại trang đích."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Khả năng truy cập và tuyên bố miễn trừ",
          "paragraphs": [
            "Website và thông tin công khai được cung cấp tùy theo khả năng sẵn có. Trong phạm vi pháp luật cho phép, Benedict Interactive không bảo đảm truy cập liên tục, vận hành không lỗi hoặc mọi thông tin luôn được cập nhật mãi mãi. Không nội dung nào trong Điều khoản này loại bỏ quyền hoặc bảo đảm mà luật bảo vệ người tiêu dùng không cho phép loại bỏ."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Giới hạn trách nhiệm",
          "paragraphs": [
            "Trong phạm vi pháp luật áp dụng cho phép, Benedict Interactive không chịu trách nhiệm đối với thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc hệ quả phát sinh chỉ từ việc sử dụng website công khai này. Giới hạn này không áp dụng khi pháp luật không cho phép giới hạn hoặc loại trừ trách nhiệm."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Thay đổi Điều khoản",
          "paragraphs": [
            "Chúng tôi có thể cập nhật Điều khoản khi website, sản phẩm, pháp luật hoặc mô hình kinh doanh thay đổi. Các điều kiện thương mại quan trọng như giá, hoàn tiền, phương thức thanh toán và quy tắc quyền sử dụng chỉ được công bố khi hệ thống tương ứng thực sự sẵn sàng."
          ]
        },
        {
          "id": "law",
          "heading": "10. Luật áp dụng và quyền bắt buộc",
          "paragraphs": [
            "Điều khoản này chịu sự điều chỉnh của pháp luật Thái Lan, nhưng không hạn chế quyền người tiêu dùng hoặc quyền pháp định bắt buộc áp dụng cho bạn theo pháp luật nơi bạn cư trú."
          ]
        },
        {
          "id": "contact",
          "heading": "11. Liên hệ",
          "paragraphs": [
            "Câu hỏi về Điều khoản có thể gửi tới benedict.support@gmail.com. Benedict Interactive hoạt động từ Bangkok, Thái Lan."
          ]
        }
      ]
    },
    "license": {
      "title": "Giấy phép phần mềm",
      "metaDescription": "Điều khoản giấy phép chung cho phần mềm do Benedict Interactive phân phối.",
      "lead": "Khung giấy phép chung cho phần mềm Benedict Interactive, bao gồm Bearagnostic trừ khi có điều khoản riêng của sản phẩm.",
      "updated": "25 tháng 9 năm 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Phạm vi",
          "paragraphs": [
            "Giấy phép chung này áp dụng cho phần mềm do Benedict Interactive phân phối khi phần mềm hoặc trang tải xuống dẫn chiếu tới giấy phép này và không có giấy phép riêng thay thế. Điều khoản riêng của sản phẩm có thể bổ sung hoặc được ưu tiên áp dụng. Một trang sản phẩm công khai tự nó không cấp giấy phép; giấy phép chỉ áp dụng khi phần mềm thực sự được cung cấp cho bạn theo các điều khoản này."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Cấp quyền sử dụng",
          "paragraphs": [
            "Theo các điều khoản này, Benedict Interactive cấp cho bạn quyền sử dụng có giới hạn, không độc quyền, không chuyển nhượng và không được cấp lại để cài đặt và sử dụng phần mềm trên thiết bị bạn sở hữu hoặc kiểm soát, cho mục đích cá nhân hợp pháp hoặc sử dụng nội bộ trong doanh nghiệp theo phạm vi sản phẩm và điều kiện mua áp dụng. Phần mềm được cấp quyền sử dụng, không phải bán đứt; quyền sở hữu và sở hữu trí tuệ vẫn thuộc Benedict Interactive và các bên cấp phép."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Hạn chế",
          "paragraphs": [
            "Trừ khi pháp luật áp dụng trao cho bạn một quyền không thể bị hạn chế, bạn không được:"
          ],
          "bullets": [
            "phân phối lại, bán lại, cấp phép lại, cho thuê hoặc cung cấp phần mềm dưới dạng hosted service khi chưa có phép bằng văn bản;",
            "xóa hoặc làm sai lệch thông báo bản quyền, ghi nhận nguồn, nhãn hiệu, giấy phép hoặc quyền sở hữu;",
            "dùng phần mềm, thương hiệu hoặc nhận diện sản phẩm để giả danh Benedict Interactive hoặc phát hành bản build đã sửa đổi/gây hiểu nhầm như bản chính thức;",
            "vượt qua kiểm soát giấy phép, entitlement, bảo mật hoặc tính toàn vẹn;",
            "reverse engineering, decompile hoặc disassemble trừ khi pháp luật cho phép rõ ràng bất chấp hạn chế này."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Bản sao và thiết bị",
          "paragraphs": [
            "Bạn có thể tạo số lượng bản sao lưu hợp lý khi cần cho việc sử dụng đã được cấp phép, miễn là giữ nguyên thông báo quyền sở hữu và giấy phép. Mọi giới hạn về thiết bị, tài khoản, khôi phục hoặc entitlement được công bố cho sản phẩm cụ thể vẫn áp dụng."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Thành phần mã nguồn mở và bên thứ ba",
          "paragraphs": [
            "Phần mềm có thể bao gồm thành phần bên thứ ba hoặc mã nguồn mở. Các thành phần đó vẫn chịu giấy phép và thông báo riêng. Nếu giấy phép bên thứ ba trao quyền khác với giấy phép chung này, giấy phép bên thứ ba sẽ áp dụng cho thành phần tương ứng."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Bản cập nhật và dịch vụ",
          "paragraphs": [
            "Bản cập nhật có thể thêm, thay đổi, sửa hoặc gỡ tính năng. Trừ khi có cam kết riêng của sản phẩm, Benedict Interactive không hứa mọi phiên bản, nền tảng, tích hợp, cửa hàng hay dịch vụ trực tuyến sẽ tồn tại mãi. Vấn đề bảo mật, quyền riêng tư và xử lý dữ liệu nên được đánh giá theo phiên bản bạn thực sự đang dùng và tài liệu hiện hành."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Tính năng trả phí và quyền Pro",
          "paragraphs": [
            "Khi một sản phẩm có tính năng trả phí hoặc Pro, các điều khoản về mua hàng, hoàn tiền, khôi phục, thiết bị và quyền sử dụng được công bố trong quy trình thương mại đang hoạt động hoặc tài liệu sản phẩm hiện hành sẽ được áp dụng. Tình trạng cung cấp, giá và phương thức khôi phục có thể thay đổi đối với các giao dịch trong tương lai, theo pháp luật áp dụng và các điều khoản của giao dịch hợp lệ."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Quyền riêng tư",
          "paragraphs": [
            "Việc sử dụng dịch vụ trực tuyến được kết nối còn chịu chính sách quyền riêng tư tương ứng. Sản phẩm có thể mô tả riêng cách xử lý tệp trên thiết bị, chẩn đoán, dữ liệu tài khoản hoặc thông tin khác."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Bảo đảm và trách nhiệm",
          "paragraphs": [
            "Trong phạm vi pháp luật cho phép, phần mềm được cung cấp mà không có bảo đảm nào khác ngoài những gì được nêu rõ trong sản phẩm hoặc điều kiện mua. Không nội dung nào trong giấy phép này loại bỏ quyền pháp luật hoặc trách nhiệm không thể bị loại trừ hay hạn chế."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Chấm dứt",
          "paragraphs": [
            "Giấy phép chấm dứt nếu bạn vi phạm nghiêm trọng các điều khoản và không khắc phục khi pháp luật yêu cầu phải có cơ hội khắc phục. Khi giấy phép kết thúc, bạn phải ngừng sử dụng các bản sao không còn được cấp phép. Các điều khoản về quyền sở hữu, quyền bên thứ ba, miễn trừ và những nội dung theo bản chất cần tiếp tục có hiệu lực vẫn được áp dụng."
          ]
        },
        {
          "id": "law",
          "heading": "11. Luật áp dụng",
          "paragraphs": [
            "Giấy phép này chịu sự điều chỉnh của pháp luật Thái Lan mà không hạn chế quyền pháp định hoặc quyền người tiêu dùng bắt buộc áp dụng tại khu vực của bạn."
          ]
        },
        {
          "id": "contact",
          "heading": "12. Liên hệ",
          "paragraphs": [
            "Câu hỏi về giấy phép và yêu cầu xin phép có thể gửi tới benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "Thông tin pháp lý & quyền",
      "metaDescription": "Thông tin về bản quyền, thương hiệu, xin phép và các quyền của Benedict Interactive.",
      "lead": "Quyền sở hữu, việc xin phép, quyền của bên thứ ba và quy tắc tái sử dụng tài liệu Benedict Interactive.",
      "updated": "25 tháng 9 năm 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Bản quyền",
          "paragraphs": [
            "© 2026 Benedict Interactive. Bảo lưu mọi quyền. Trừ khi có ghi chú khác, văn bản gốc, thiết kế, đồ họa, hình minh họa, tài sản thương hiệu, tài liệu và vật liệu phần mềm gốc thuộc Benedict Interactive hoặc được cấp phép cho Benedict Interactive và được bảo vệ theo luật áp dụng. Việc bảo hộ bản quyền không phụ thuộc vào thông báo này; thông báo nhằm làm rõ quyền sở hữu và phạm vi sử dụng được phép."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Thương hiệu và tên sản phẩm",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, logo, dấu hiệu sản phẩm và nhận diện hình ảnh liên quan được dùng làm dấu hiệu thương hiệu của Benedict Interactive trừ khi nêu khác. Trang này không tuyên bố nhãn hiệu nào đã đăng ký trừ khi nói rõ; biểu tượng nhãn hiệu đã đăng ký không được sử dụng nếu không có tình trạng đăng ký phù hợp."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Xin phép tái sử dụng tài liệu",
          "paragraphs": [
            "Bạn có thể liên kết tới trang công khai và nhắc tới sản phẩm theo cách cá nhân thông thường. Việc đăng lại lượng đáng kể văn bản gốc, hình ảnh, ảnh chụp màn hình, tài sản thương hiệu, tệp tải xuống hoặc phần mềm cho mục đích thương mại, bán lại, phân phối lại hoặc giả mạo cần được cho phép trừ khi pháp luật tự cho phép việc sử dụng đó. Với nhu cầu báo chí, biên tập, giáo dục, hợp tác, phân phối hoặc tái sử dụng khác, hãy liên hệ Benedict Interactive trước."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Quyền bên thứ ba và mã nguồn mở",
          "paragraphs": [
            "Tên, logo, nền tảng, dịch vụ, thư viện, phông chữ, thành phần mã nguồn mở và tài liệu bên thứ ba khác vẫn thuộc chủ sở hữu tương ứng. Việc xuất hiện trên website không chuyển quyền sở hữu sang Benedict Interactive. Giấy phép và thông báo của bên thứ ba vẫn điều chỉnh các thành phần liên quan; Benedict Interactive không tuyên bố quyền độc quyền đối với tài sản của người khác."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Vấn đề về quyền hoặc vi phạm",
          "paragraphs": [
            "Nếu bạn cho rằng tài liệu trên website xâm phạm quyền của mình, hãy gửi thông báo tới benedict.support@gmail.com, nêu rõ tài liệu, quyền bị ảnh hưởng, cơ sở khiếu nại và cách liên hệ đáng tin cậy. Các báo cáo thiện chí sẽ được xem xét."
          ]
        },
        {
          "id": "location",
          "heading": "6. Liên hệ studio",
          "paragraphs": [
            "Benedict Interactive là studio phần mềm độc lập hoạt động từ Bangkok, Thái Lan. Email công khai: benedict.support@gmail.com. “Bangkok, Thái Lan” chỉ mô tả vị trí của studio và không được trình bày như địa chỉ văn phòng mở cửa cho khách vãng lai."
          ]
        }
      ]
    }
  },
  "tr": {
    "privacy": {
      "title": "Gizlilik Politikası",
      "metaDescription": "Benedict Interactive’ın site analitiği, iletişim mesajları ve gizliliği nasıl ele aldığı.",
      "lead": "Bu sitenin neyi ölçtüğünü, neyi takip etmediğini ve Benedict Interactive ile iletişime geçtiğinizde ne olduğunu açıkça anlatır.",
      "updated": "25 Eylül 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. Genel bakış",
          "paragraphs": [
            "Benedict Interactive, Bangkok, Tayland’dan faaliyet gösteren bağımsız bir yazılım stüdyosudur. Bu politika; siteyi ziyaret ettiğinizde, ürün bağlantılarını kullandığınızda veya e-posta ile bize ulaştığınızda bilgilerin nasıl ele alındığını açıklar. Site veri minimizasyonu esasına göre tasarlanmıştır: reklam takipçileri, davranışsal reklam profilleri veya Benedict tarafından yerleştirilen analiz çerezleri kullanmıyoruz."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. Site analitiği",
          "paragraphs": [
            "Sayfalar, trafik, performans, yönlendiren kaynak, cihaz ve ülke hakkında toplu raporlama için Cloudflare Web Analytics kullanıyoruz. Cloudflare, bu ölçümler için çerez veya localStorage kullanmadığını belirtir. Benedict Interactive ayrıca ürün kullanımını anlamak amacıyla ürün sayfası görüntüleme, indirme bağlantısına tıklama, destek sayfasını açma veya planlanan Pro seçeneğine ilgi gösterme gibi az sayıda toplu ürün olayı kaydeder; amaç bireyleri takip etmek değildir."
          ],
          "bullets": [
            "Özel ürün olayları veri seti IP adresi, user-agent, referrer, çerez, localStorage tanımlayıcısı, hesap kimliği veya serbest metin mesaj içeriği saklamaz.",
            "Sayfa yolları query string ve URL fragment olmadan kaydedilir.",
            "İndirme düğmesine tıklama yalnızca tıklama olarak sayılır; tamamlanmış indirme veya kurulum sayılmaz."
          ]
        },
        {
          "id": "contact",
          "heading": "3. İletişim ve e-posta",
          "paragraphs": [
            "İletişim düzenleyicisi mesajınızı tarayıcınızda hazırlar ve taslağı seçtiğiniz e-posta uygulamasına veya hizmetine aktarır. Siz göndermeye karar vermeden site taslak içeriğini almaz veya saklamaz. Benedict Interactive’a e-posta gönderirseniz adınız, e-posta adresiniz, konu, mesaj ve kendi isteğinizle eklediğiniz bilgiler bize ulaşır. E-posta iletişimi şu anda Google’ın Gmail hizmeti üzerinden yürütülmektedir."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. Bilgileri neden kullanıyoruz",
          "paragraphs": [
            "Toplu analizler sitenin iyi çalışıp çalışmadığını, hangi ürün sayfalarının ilgi gördüğünü ve performans veya kullanılabilirliğin nerede geliştirilebileceğini anlamamıza yardımcı olur. İletişim bilgileri destek talepleri, geri bildirim, iş görüşmeleri ve diğer yazışmalara yanıt vermek için kullanılır. Hukukun bir işleme dayanağı istediği durumlarda, talebinizi yerine getirme, siteyi işletme ve geliştirmeye yönelik meşru menfaat veya yasal yükümlülük gibi uygun dayanağı kullanırız."
          ]
        },
        {
          "id": "providers",
          "heading": "5. Hizmet sağlayıcılar",
          "paragraphs": [
            "Cloudflare site dağıtımı, Pages hosting, Web Analytics ve Analytics Engine sağlar. Google, Benedict Interactive e-posta yazışmaları için Gmail sağlar. Bu sağlayıcılar bilgileri kendi koşulları ve gizlilik uygulamaları kapsamında işler. Benedict Interactive kişisel bilgileri satmaz ve iletişim mesajlarını reklamcılara veya veri brokerlarına vermez."
          ]
        },
        {
          "id": "retention",
          "heading": "6. Saklama süresi",
          "paragraphs": [
            "Toplu analiz verileri Cloudflare ürün ayarları ve saklama sınırlarına göre tutulur; bunlardan kalıcı ziyaretçi profili oluşturmaya çalışmayız. E-postalar yalnızca yanıt vermek, gerekli destek veya iş kayıtlarını korumak, uyuşmazlıkları çözmek, hizmeti korumak veya yasal yükümlülükleri yerine getirmek için makul ölçüde gerekli süre boyunca saklanır. Süre mesaj ve bağlama göre değişebilir."
          ]
        },
        {
          "id": "rights",
          "heading": "7. Gizlilik haklarınız",
          "paragraphs": [
            "Yaşadığınız yere göre yürürlükteki hukuk; erişim, düzeltme, silme, kısıtlama, itiraz, taşınabilirlik veya kişisel verilerinizle ilgili başka haklar tanıyabilir; ayrıca yetkili bir veri koruma makamına şikâyet hakkınız olabilir. Talep için benedict.support@gmail.com adresine yazabilirsiniz. Talebi doğrulamak ve ilgili yazışmayı bulmak için yeterli bilgi isteyebiliriz."
          ]
        },
        {
          "id": "international",
          "heading": "8. Uluslararası işleme",
          "paragraphs": [
            "Cloudflare ve Google uluslararası ölçekte çalışır. Bu hizmetler üzerinden işlenen bilgiler, sağlayıcıların güvenceleri ve koşulları ile yürürlükteki hukuka tabi olarak ülkeniz dışındaki yerlerde de işlenebilir."
          ]
        },
        {
          "id": "children",
          "heading": "9. Çocuklar",
          "paragraphs": [
            "Bu site genel amaçlı bir yazılım stüdyosu ve ürün bilgi sitesidir; çocuklardan kişisel bilgi toplamak üzere tasarlanmamıştır. Bir çocuğun Benedict Interactive’a kişisel bilgi gönderdiğini düşünüyorsanız durumu inceleyebilmemiz için bizimle iletişime geçin."
          ]
        },
        {
          "id": "changes",
          "heading": "10. Değişiklikler ve iletişim",
          "paragraphs": [
            "Site, analitik, iletişim sistemi, ürünler veya yasal gereklilikler değiştikçe bu politika güncellenebilir. Üstteki tarih son revizyonu gösterir. Gizlilik soruları için benedict.support@gmail.com adresine yazabilirsiniz. Benedict Interactive Bangkok, Tayland’dan faaliyet gösterir."
          ]
        }
      ]
    },
    "terms": {
      "title": "Kullanım Koşulları",
      "metaDescription": "Benedict Interactive sitesi ve herkese açık içeriklerinin kullanım koşulları.",
      "lead": "Benedict Interactive sitesini, içeriklerini ve herkese açık ürün bilgilerini kullanmaya ilişkin açık kurallar.",
      "updated": "25 Eylül 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Kapsam ve kabul",
          "paragraphs": [
            "Bu Koşullar Benedict Interactive sitesi ve herkese açık içerikleri için geçerlidir. Siteyi kullanarak, yürürlükteki hukukun izin verdiği ölçüde bu Koşulları kabul etmiş olursunuz. Kabul etmiyorsanız siteyi kullanmayın. Bu belgede “Benedict Interactive”, “biz” ve benzeri ifadeler Bangkok, Tayland merkezli bu bağımsız yazılım stüdyosu sitesinin işletmecisini ifade eder."
          ]
        },
        {
          "id": "information",
          "heading": "2. Ürün bilgileri ve kullanılabilirlik",
          "paragraphs": [
            "Ürünler, özellikler, dağıtım kanalları, fiyatlar, satın alma sistemleri ve hizmetler farklı erişim veya yayına alma aşamalarında olabilir. Bir şeyin planlandığının ya da daha sonra sunulacağının belirtilmesi, belirli bir tarih veya biçimde sunulacağı anlamına gelmez. Bilgileri güncel tutmaya çalışırız; ancak mevcut ürün, sürüm notları, satın alma akışı veya ürüne özel belgeler sitedeki eski açıklamaların yerini alabilir."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. Kabul edilebilir kullanım",
          "paragraphs": [
            "Siteyi yasal gezinme, değerlendirme, destek ve iletişim amacıyla kullanabilirsiniz. Siteyi kötüye kullanamaz veya çalışmasına müdahale edemezsiniz."
          ],
          "bullets": [
            "Herkese açık olmayan sistemlere, yönetim araçlarına, kimlik bilgilerine veya verilere izinsiz erişmeye çalışmayın.",
            "Hizmeti kasten bozmayın veya aşırı yüklemeyin; kötüye kullanım niteliğinde scraping, izinsiz zafiyet testi veya teknik korumaları aşma girişiminde bulunmayın.",
            "Siteyi veya içeriğini Benedict Interactive gibi davranmak ya da sponsorluk, mülkiyet veya onay konusunda başkalarını yanıltmak için kullanmayın."
          ]
        },
        {
          "id": "ip",
          "heading": "4. Fikri mülkiyet",
          "paragraphs": [
            "Üçüncü taraf olduğu belirtilen materyaller dışında, site tasarımı, özgün metinler, marka varlıkları, çizimler, yazılım materyalleri ve diğer özgün içerikler Benedict Interactive’a aittir veya lisanslıdır ve yürürlükteki fikri mülkiyet hukuku kapsamında korunur. Siteyi kullanmanız size mülkiyet hakkı vermez. Normal tarayıcı önbelleği ve kişisel referans kullanımı serbesttir; daha kapsamlı kopyalama, yeniden dağıtım, yeniden yayın, yeniden satış veya ticari kullanım, hukuk aksini öngörmedikçe izin gerektirir."
          ]
        },
        {
          "id": "software",
          "heading": "5. Yazılım ayrı lisanslanır",
          "paragraphs": [
            "Benedict Interactive tarafından dağıtılan yazılım, yalnızca bu site Koşullarına değil, uygulanabilir yazılım lisansına veya ürüne özel koşullara tabidir. Genel yazılım lisansı sitede bulunur ve ürün yayınlandığında özel koşullarla tamamlanabilir veya değiştirilebilir."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. Üçüncü taraf hizmetleri ve bağlantılar",
          "paragraphs": [
            "Site uygulama mağazaları, dağıtım hizmetleri, hosting, e-posta, ödeme sağlayıcıları, belgeler veya diğer üçüncü taraf hizmetlerine bağlantı verebilir. Bu hizmetlerin her biri kendi işletmecisi tarafından yönetilir ve farklı koşullara, gizlilik politikalarına, erişilebilirliğe veya ücretlere sahip olabilir. Bir bağlantı, Benedict Interactive’ın hedefteki her içeriği veya politikayı onayladığı anlamına gelmez."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. Kullanılabilirlik ve feragat",
          "paragraphs": [
            "Site ve herkese açık bilgiler mevcut oldukları haliyle sunulur. Hukukun izin verdiği azami ölçüde Benedict Interactive kesintisiz erişim, hatasız çalışma veya her bilginin süresiz olarak güncel kalacağı garantisini vermez. Tüketici hukukunun çıkarılmasına izin vermediği hak veya garantiler bu Koşullardan etkilenmez."
          ]
        },
        {
          "id": "liability",
          "heading": "8. Sorumluluğun sınırlandırılması",
          "paragraphs": [
            "Yürürlükteki hukukun izin verdiği ölçüde Benedict Interactive, yalnızca bu herkese açık sitenin kullanımından doğan dolaylı, arızi, özel veya sonuç niteliğindeki zararlardan sorumlu değildir. Sorumluluğun hukuken sınırlandırılamadığı veya kaldırılamadığı durumlarda bu hüküm uygulanmaz."
          ]
        },
        {
          "id": "changes",
          "heading": "9. Koşullardaki değişiklikler",
          "paragraphs": [
            "Site, ürünler, hukuk veya iş modeli değiştiğinde bu Koşullar güncellenebilir. Fiyat, iade, ödeme yöntemi ve erişim/entitlement kuralları gibi önemli ticari şartlar yalnızca ilgili sistemler gerçekten hazır olduğunda yayınlanır."
          ]
        },
        {
          "id": "law",
          "heading": "10. Uygulanacak hukuk ve zorunlu haklar",
          "paragraphs": [
            "Bu Koşullar Tayland hukukuna tabidir; bulunduğunuz yerde size tanınan zorunlu tüketici veya yasal hakları sınırlamaz."
          ]
        },
        {
          "id": "contact",
          "heading": "11. İletişim",
          "paragraphs": [
            "Bu Koşullarla ilgili sorular benedict.support@gmail.com adresine gönderilebilir. Benedict Interactive Bangkok, Tayland’dan faaliyet gösterir."
          ]
        }
      ]
    },
    "license": {
      "title": "Yazılım Lisansı",
      "metaDescription": "Benedict Interactive tarafından dağıtılan yazılımlar için genel lisans koşulları.",
      "lead": "Ürüne özel koşullar aksini söylemediği sürece Bearagnostic dahil Benedict Interactive yazılımlarına uygulanan genel lisans çerçevesi.",
      "updated": "25 Eylül 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. Kapsam",
          "paragraphs": [
            "Bu genel lisans, yazılım veya indirme sayfası bu lisansa atıf yaptığında ve yerine geçen ürüne özel bir lisans bulunmadığında Benedict Interactive yazılımları için geçerlidir. Ürüne özel koşullar bu lisansı tamamlayabilir veya bazı konularda üstün olabilir. Herkese açık bir ürün sayfası tek başına lisans vermez; lisans yazılım size bu koşullar altında gerçekten sunulduğunda uygulanır."
          ]
        },
        {
          "id": "grant",
          "heading": "2. Lisans verilmesi",
          "paragraphs": [
            "Bu koşullara tabi olarak Benedict Interactive, sahip olduğunuz veya kontrol ettiğiniz cihazlarda, ürünün ve uygulanabilir satın alma koşullarının izin verdiği yasal kişisel kullanım veya işletme içi kullanım için yazılımı kurup kullanmanıza sınırlı, münhasır olmayan, devredilemez ve alt lisans verilemez bir hak tanır. Yazılım satılmaz, lisanslanır; mülkiyet ve fikri haklar Benedict Interactive ve lisans verenlerinde kalır."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. Kısıtlamalar",
          "paragraphs": [
            "Yürürlükteki hukuk açıkça kısıtlanamayacak bir hak tanımadıkça şunları yapamazsınız:"
          ],
          "bullets": [
            "yazılı izin olmadan yazılımı yeniden dağıtmak, yeniden satmak, alt lisanslamak, kiralamak veya barındırılan hizmet olarak sunmak;",
            "telif, atıf, marka, lisans veya mülkiyet bildirimlerini kaldırmak ya da tahrif etmek;",
            "yazılımı, markayı veya ürün kimliğini Benedict Interactive gibi davranmak veya değiştirilmiş/yanıltıcı buildleri resmi sürüm olarak sunmak için kullanmak;",
            "lisans, entitlement, güvenlik veya bütünlük kontrollerini aşmak;",
            "hukuk bu kısıtlamaya rağmen açıkça izin vermedikçe tersine mühendislik, decompile veya disassemble yapmak."
          ]
        },
        {
          "id": "copies",
          "heading": "4. Kopyalar ve cihazlar",
          "paragraphs": [
            "Lisanslı kullanımınız için gerekli olduğunda makul yedek kopyalar oluşturabilirsiniz; mülkiyet ve lisans bildirimleri korunmalıdır. Belirli ürünler için yayınlanan cihaz, hesap, geri yükleme veya entitlement sınırları da geçerlidir."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. Açık kaynak ve üçüncü taraf bileşenleri",
          "paragraphs": [
            "Yazılım üçüncü taraf veya açık kaynak bileşenleri içerebilir. Bu bileşenler kendi lisans ve bildirimlerine tabidir. Bir üçüncü taraf lisansı bu genel lisanstan farklı haklar tanıyorsa ilgili bileşen için o lisans geçerlidir."
          ]
        },
        {
          "id": "updates",
          "heading": "6. Güncellemeler ve hizmetler",
          "paragraphs": [
            "Güncellemeler özellik ekleyebilir, değiştirebilir, düzeltebilir veya kaldırabilir. Ürüne özel bir taahhüt yoksa Benedict Interactive her sürümün, platformun, entegrasyonun, mağazanın veya çevrim içi hizmetin süresiz kullanılabilir kalacağını vaat etmez. Güvenlik, gizlilik ve veri davranışı kullandığınız gerçek sürüm ve güncel dokümana göre değerlendirilmelidir."
          ]
        },
        {
          "id": "pro",
          "heading": "7. Ücretli özellikler ve Pro entitlement",
          "paragraphs": [
            "Bir ürün ücretli veya Pro özellikler sunuyorsa satın alma, iade, geri yükleme, cihaz ve kullanım hakkı koşullarında geçerli olan; aktif satış akışında veya güncel ürün belgelerinde yayımlanan şartlardır. Gelecekteki satın alımlar için kullanılabilirlik, fiyat ve geri yükleme yöntemleri değişebilir; her durumda yürürlükteki hukuk ve geçerli satın alma koşulları uygulanır."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. Gizlilik",
          "paragraphs": [
            "Bağlı çevrim içi hizmetlerin kullanımı ilgili gizlilik politikasına da tabidir. Ürün, cihaz dosyaları, tanılama verileri, hesap bilgileri veya diğer verilerin nasıl işlendiğini ayrıca açıklayabilir."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. Garanti ve sorumluluk",
          "paragraphs": [
            "Hukukun izin verdiği ölçüde yazılım, ürün veya satın alma koşullarında açıkça belirtilenler dışında garanti olmaksızın sunulur. Bu lisans, hukuken kaldırılamayan veya sınırlandırılamayan yasal hakları ya da sorumluluğu ortadan kaldırmaz."
          ]
        },
        {
          "id": "termination",
          "heading": "10. Sona erme",
          "paragraphs": [
            "Bu koşulları önemli ölçüde ihlal eder ve hukukun gerektirdiği durumlarda ihlali gidermediğiniz takdirde lisans sona erer. Lisans sona erdiğinde artık lisanslı olmayan kopyaları kullanmayı bırakmalısınız. Mülkiyet, üçüncü taraf hakları, feragat hükümleri ve doğası gereği devam etmesi gereken diğer hükümler yürürlükte kalır."
          ]
        },
        {
          "id": "law",
          "heading": "11. Uygulanacak hukuk",
          "paragraphs": [
            "Bu lisans Tayland hukukuna tabidir; bulunduğunuz yargı alanında geçerli zorunlu yasal veya tüketici haklarını sınırlamaz."
          ]
        },
        {
          "id": "contact",
          "heading": "12. İletişim",
          "paragraphs": [
            "Lisans soruları ve izin talepleri benedict.support@gmail.com adresine gönderilebilir."
          ]
        }
      ]
    },
    "legal": {
      "title": "Yasal Bilgiler ve Haklar",
      "metaDescription": "Benedict Interactive’ın telif, marka, izin ve haklarına ilişkin bilgiler.",
      "lead": "Mülkiyet, izinler, üçüncü taraf hakları ve Benedict Interactive materyallerini yeniden kullanma kuralları.",
      "updated": "25 Eylül 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. Telif hakkı",
          "paragraphs": [
            "© 2026 Benedict Interactive. Tüm hakları saklıdır. Aksi belirtilmedikçe özgün site metinleri, tasarım, grafikler, görseller, marka varlıkları, dokümantasyon ve özgün yazılım materyalleri Benedict Interactive’a aittir veya lisanslıdır ve yürürlükteki hukukla korunur. Telif hakkı koruması bu bildirimin bulunmasına bağlı değildir; bildirim mülkiyeti ve izin verilen kullanımı açıklığa kavuşturmak içindir."
          ]
        },
        {
          "id": "brands",
          "heading": "2. Markalar ve ürün adları",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, logoları, ürün işaretleri ve ilgili görsel kimlikler aksi belirtilmedikçe Benedict Interactive marka tanımlayıcıları olarak kullanılır. Açıkça belirtilmediği sürece bu sayfa herhangi bir markanın tescilli olduğunu iddia etmez; tescil durumu desteklemediği sürece tescilli marka sembolü kullanılmaz."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. Materyali yeniden kullanma izni",
          "paragraphs": [
            "Herkese açık sayfalara bağlantı verebilir ve ürünlerden normal kişisel bağlamda söz edebilirsiniz. Özgün metinlerin, görsellerin, ekran görüntülerinin, marka varlıklarının, indirilebilir dosyaların veya yazılımın önemli kısmını ticari amaç, yeniden satış, yeniden dağıtım veya kimlik taklidi için yeniden yayınlamak, hukuk ayrıca izin vermedikçe izin gerektirir. Basın, editoryal, eğitim, ortaklık, dağıtım veya başka kullanımlar için önceden Benedict Interactive ile iletişime geçin."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. Üçüncü taraf ve açık kaynak hakları",
          "paragraphs": [
            "Üçüncü taraf adları, logoları, platformları, hizmetleri, kütüphaneleri, yazı tipleri, açık kaynak bileşenleri ve diğer materyaller kendi hak sahiplerine aittir. Sitede görünmeleri mülkiyeti Benedict Interactive’a geçirmez. İlgili üçüncü taraf lisansları ve bildirimleri geçerliliğini korur; Benedict Interactive başkalarına ait materyal üzerinde münhasır hak iddia etmez."
          ]
        },
        {
          "id": "reports",
          "heading": "5. Hak veya ihlal bildirimleri",
          "paragraphs": [
            "Sitedeki bir materyalin haklarınızı ihlal ettiğini düşünüyorsanız benedict.support@gmail.com adresine materyali, etkilendiğini düşündüğünüz hakkı, talebinizin dayanağını ve güvenilir bir iletişim yolunu belirten açık bir bildirim gönderin. İyi niyetli bildirimler incelenecektir."
          ]
        },
        {
          "id": "location",
          "heading": "6. Stüdyo iletişimi",
          "paragraphs": [
            "Benedict Interactive, Bangkok, Tayland’dan faaliyet gösteren bağımsız bir yazılım stüdyosudur. Herkese açık iletişim e-postası: benedict.support@gmail.com. “Bangkok, Tayland” stüdyonun konumunu belirtir; halka açık, ziyaret edilebilir bir ofis adresi olarak sunulmaz."
          ]
        }
      ]
    }
  },
  "ja": {
    "privacy": {
      "title": "プライバシーポリシー",
      "metaDescription": "Benedict Interactive におけるウェブ解析、問い合わせメール、プライバシーの取り扱いについて説明します。",
      "lead": "このサイトが何を計測し、何を追跡せず、Benedict Interactive に連絡したときに何が起こるのかを分かりやすく説明します。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "overview",
          "heading": "1. 概要",
          "paragraphs": [
            "Benedict Interactive は、タイ・バンコクを拠点に運営する独立系ソフトウェアスタジオです。このポリシーでは、サイトの閲覧、製品リンクの利用、メールでのお問い合わせの際に情報をどのように扱うかを説明します。サイトは必要最小限のデータだけを扱う方針で設計しており、広告トラッカー、行動ターゲティング広告用のプロファイル、Benedict が独自に設定する解析 Cookie は使用していません。"
          ]
        },
        {
          "id": "analytics",
          "heading": "2. ウェブ解析",
          "paragraphs": [
            "ページ、トラフィック、パフォーマンス、参照元、端末、国などの集計情報を確認するために Cloudflare Web Analytics を利用しています。Cloudflare は、この計測に Cookie や localStorage を利用しないと説明しています。Benedict Interactive ではさらに、製品ページの表示、ダウンロードリンクのクリック、サポートページの表示、今後予定する Pro への関心など、ごく少数の製品イベントを集計して記録します。目的は製品全体の利用状況を把握することで、個人を追跡することではありません。"
          ],
          "bullets": [
            "製品イベント用データセットには、IP アドレス、user-agent、referrer、Cookie、localStorage の識別子、アカウント ID、自由入力メッセージの本文を保存しません。",
            "ページパスは、クエリ文字列と URL フラグメントを除いた形で記録します。",
            "ダウンロードボタンのクリックは「クリック」としてのみ数え、ダウンロード完了やインストール完了として扱いません。"
          ]
        },
        {
          "id": "contact",
          "heading": "3. お問い合わせとメール",
          "paragraphs": [
            "問い合わせフォームで作成した文章はブラウザ内で下書きされ、その後、利用者が選んだメールアプリまたはメールサービスへ引き渡されます。送信を選ぶ前の下書き本文を、このウェブサイトが受け取ったり保存したりすることはありません。Benedict Interactive にメールを送信した場合は、氏名、メールアドレス、件名、本文、そのほか利用者が任意で記載した情報を受け取ります。現在、Benedict Interactive のメール対応には Google の Gmail を利用しています。"
          ]
        },
        {
          "id": "purpose",
          "heading": "4. 情報を利用する目的",
          "paragraphs": [
            "集計された解析情報は、サイトが正常に機能しているか、どの製品ページが見られているか、パフォーマンスや使いやすさをどこで改善すべきかを把握するために利用します。問い合わせ情報は、サポート、フィードバック、事業に関する相談、そのほかの連絡への返信に利用します。法令上、処理の法的根拠が必要な場合は、利用者から依頼された対応、サイトの運営・改善に関する正当な利益、法的義務の履行など、その活動に適した根拠に基づいて取り扱います。"
          ]
        },
        {
          "id": "providers",
          "heading": "5. 外部サービス",
          "paragraphs": [
            "Cloudflare はサイト配信、Pages hosting、Web Analytics、Analytics Engine を提供しています。Google は Benedict Interactive のメール連絡に使用する Gmail を提供しています。各社はそれぞれの利用規約とプライバシー方針に従って情報を処理します。Benedict Interactive が個人情報を販売したり、問い合わせ内容を広告会社やデータ仲介業者へ提供したりすることはありません。"
          ]
        },
        {
          "id": "retention",
          "heading": "6. 保存期間",
          "paragraphs": [
            "集計された解析データは、Cloudflare の各サービスに設定された保存条件と上限に従って保持されます。これらの情報から恒久的な訪問者プロファイルを作成することはありません。メールは、返信、必要なサポート・事業記録の保持、紛争対応、サービス保護、法的義務への対応に合理的に必要な期間だけ保存します。そのため、保存期間は内容や状況によって異なります。"
          ]
        },
        {
          "id": "rights",
          "heading": "7. プライバシーに関する権利",
          "paragraphs": [
            "居住地によっては、個人情報へのアクセス、訂正、削除、処理の制限、異議申立て、データポータビリティなどの権利や、所管のデータ保護機関へ申し立てる権利が法律で認められている場合があります。権利行使のご連絡は benedict.support@gmail.com までお願いします。本人確認や該当する連絡記録の特定に必要な範囲で追加情報をお願いすることがあります。"
          ]
        },
        {
          "id": "international",
          "heading": "8. 国際的なデータ処理",
          "paragraphs": [
            "Cloudflare と Google は複数の国で事業を行っています。そのため、これらのサービスを通じて処理される情報が利用者の居住国外で取り扱われる場合があります。その際は、各サービスが定める保護措置・条件と適用法令に従います。"
          ]
        },
        {
          "id": "children",
          "heading": "9. 子どもの情報",
          "paragraphs": [
            "このサイトは一般向けのソフトウェアスタジオおよび製品情報サイトであり、子どもの個人情報を収集することを目的としていません。子どもが Benedict Interactive に個人情報を送った可能性がある場合は、状況を確認できるようご連絡ください。"
          ]
        },
        {
          "id": "changes",
          "heading": "10. 変更とお問い合わせ",
          "paragraphs": [
            "サイト、解析、問い合わせ方法、製品、法的要件の変更に応じて、このポリシーを更新することがあります。ページ上部の日付が最新の改定日です。プライバシーに関するお問い合わせは benedict.support@gmail.com まで。Benedict Interactive はタイ・バンコクを拠点に運営しています。"
          ]
        }
      ]
    },
    "terms": {
      "title": "利用規約",
      "metaDescription": "Benedict Interactive のウェブサイトと公開コンテンツの利用条件です。",
      "lead": "Benedict Interactive のサイト、コンテンツ、公開されている製品情報を利用する際のルールを分かりやすくまとめています。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 適用範囲と同意",
          "paragraphs": [
            "本規約は Benedict Interactive のウェブサイトおよび公開コンテンツに適用されます。適用法令で認められる範囲において、サイトを利用することで本規約に同意したものとみなされます。同意できない場合はサイトを利用しないでください。本規約で「Benedict Interactive」「当方」「当スタジオ」などと記載する場合、タイ・バンコクを拠点とするこの独立系ソフトウェアスタジオの運営者を指します。"
          ]
        },
        {
          "id": "information",
          "heading": "2. 製品情報と提供状況",
          "paragraphs": [
            "製品、機能、配布経路、価格、購入システム、サービスは、それぞれ提供状況や公開時期が異なる場合があります。「予定」または「今後提供」と記載された内容は、特定の日付や形での提供を保証するものではありません。情報は可能な限り最新に保ちますが、現在の製品、リリースノート、購入フロー、製品別ドキュメントが過去のサイト説明に優先する場合があります。"
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. 適切な利用",
          "paragraphs": [
            "サイトは、適法な閲覧、製品の検討、サポート、連絡のために利用できます。サイトを悪用したり、正常な運用を妨害したりしてはいけません。"
          ],
          "bullets": [
            "非公開システム、管理ツール、認証情報、データへ許可なくアクセスしようとしないでください。",
            "意図的な妨害や過負荷、過度なスクレイピング、無断の脆弱性調査、技術的保護の回避を行わないでください。",
            "Benedict Interactive を装ったり、スポンサー関係、所有関係、推薦・承認について他者を誤認させたりする目的で、サイトやコンテンツを利用しないでください。"
          ]
        },
        {
          "id": "ip",
          "heading": "4. 知的財産",
          "paragraphs": [
            "第三者のものとして明示された素材を除き、サイトデザイン、オリジナル文章、Benedict Interactive のブランド素材、イラスト、ソフトウェア関連素材、その他のオリジナルコンテンツは Benedict Interactive が所有するか、適法なライセンスに基づいて利用しており、関連法令により保護されます。サイトを利用しても知的財産の所有権が利用者へ移ることはありません。通常のブラウザキャッシュや個人的な参照は認められますが、より広い範囲での複製、再配布、再掲載、再販売、商用利用には、法律上別の権利がある場合を除き許可が必要です。"
          ]
        },
        {
          "id": "software",
          "heading": "5. ソフトウェアは別途ライセンスされます",
          "paragraphs": [
            "Benedict Interactive が配布するソフトウェアには、本サイト規約だけでなく、該当するソフトウェアライセンスまたは製品別条件が適用されます。一般ソフトウェアライセンスは本サイトで確認でき、製品の公開時には製品別条件で補足または置き換えられることがあります。"
          ]
        },
        {
          "id": "third-party",
          "heading": "6. 第三者サービスと外部リンク",
          "paragraphs": [
            "サイトには、アプリストア、配布サービス、ホスティング、メール、決済、ドキュメントなど第三者サービスへのリンクが含まれることがあります。各サービスはそれぞれの運営者が管理し、独自の規約、プライバシーポリシー、提供状況、料金が適用される場合があります。リンクがあるだけで、Benedict Interactive がリンク先のすべての内容や方針を支持していることにはなりません。"
          ]
        },
        {
          "id": "warranty",
          "heading": "7. サイトの提供と免責",
          "paragraphs": [
            "サイトと公開情報は、利用可能な状態に応じて提供されます。法律で許される最大限の範囲で、Benedict Interactive は常時アクセスできること、完全にエラーがないこと、すべての情報が永久に最新であることを保証しません。消費者保護法などにより排除できない権利や保証は、本規約によって排除されません。"
          ]
        },
        {
          "id": "liability",
          "heading": "8. 責任の制限",
          "paragraphs": [
            "適用法令で認められる最大限の範囲で、この公開サイトの利用のみから生じる間接的、付随的、特別または結果的な損失について、Benedict Interactive は責任を負いません。ただし、法律上責任を制限または排除できない場合はこの限りではありません。"
          ]
        },
        {
          "id": "changes",
          "heading": "9. 規約の変更",
          "paragraphs": [
            "サイト、製品、法令、事業モデルの変更に応じて、本規約を更新することがあります。価格、返金、支払方法、利用権のルールなど重要な商取引条件は、実際の仕組みが利用可能になった時点で公開します。"
          ]
        },
        {
          "id": "law",
          "heading": "10. 準拠法と強行的な権利",
          "paragraphs": [
            "本規約はタイ法に準拠します。ただし、居住地の法律により利用者に認められる、排除できない消費者の権利や法定の権利を制限するものではありません。"
          ]
        },
        {
          "id": "contact",
          "heading": "11. お問い合わせ",
          "paragraphs": [
            "本規約に関するお問い合わせは benedict.support@gmail.com までお願いします。Benedict Interactive はタイ・バンコクを拠点に運営しています。"
          ]
        }
      ]
    },
    "license": {
      "title": "ソフトウェアライセンス",
      "metaDescription": "Benedict Interactive が配布するソフトウェアに適用される一般ライセンス条件です。",
      "lead": "製品別条件に別段の定めがない限り、Bearagnostic を含む Benedict Interactive ソフトウェアに適用される一般的なライセンスです。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 適用範囲",
          "paragraphs": [
            "本一般ライセンスは、Benedict Interactive が配布するソフトウェアまたはそのダウンロードページが本ライセンスを参照し、製品別ライセンスによって置き換えられていない場合に適用されます。製品別条件が本ライセンスを補足したり、一部について優先したりすることがあります。公開製品ページを見るだけでライセンスが付与されるわけではなく、ソフトウェアが実際に本条件のもとで提供された時点でライセンスが適用されます。"
          ]
        },
        {
          "id": "grant",
          "heading": "2. ライセンスの付与",
          "paragraphs": [
            "本条件に従うことを前提として、Benedict Interactive は、利用者が所有または管理する端末にソフトウェアをインストールし、製品および該当する購入条件で認められる範囲の適法な個人利用または社内利用を行うための、限定的、非独占的、譲渡不可、再許諾不可のライセンスを付与します。ソフトウェアは販売ではなくライセンス提供です。所有権および知的財産権は Benedict Interactive とそのライセンサーに留保されます。"
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. 禁止事項",
          "paragraphs": [
            "適用法令が、制限できない権利として明示的に認めている場合を除き、次の行為はできません。"
          ],
          "bullets": [
            "書面による許可なく、ソフトウェアを再配布、再販売、再許諾、貸与、リース、またはホステッドサービスとして提供すること。",
            "著作権、出典、商標、ライセンス、所有権に関する表示を削除または偽装すること。",
            "Benedict Interactive を装う目的でソフトウェア、ブランド、製品アイデンティティを利用したり、改変版・誤解を招く版を公式版として配布したりすること。",
            "ライセンス、利用権、セキュリティ、完全性に関する制御を回避すること。",
            "法律が本制限にかかわらず明示的に認める範囲を超えて、リバースエンジニアリング、逆コンパイル、逆アセンブルを行うこと。"
          ]
        },
        {
          "id": "copies",
          "heading": "4. バックアップと端末",
          "paragraphs": [
            "自身の許諾された利用に必要な範囲で合理的なバックアップコピーを作成できます。その場合、所有権およびライセンス表示を維持してください。製品ごとに端末数、アカウント、復元、利用権の上限が公開されている場合は、その条件も適用されます。"
          ]
        },
        {
          "id": "third-party",
          "heading": "5. オープンソースおよび第三者コンポーネント",
          "paragraphs": [
            "ソフトウェアには第三者またはオープンソースのコンポーネントが含まれることがあります。それらには各自のライセンスと表示が引き続き適用されます。第三者ライセンスが本一般ライセンスと異なる権利を付与する場合、該当コンポーネントについては第三者ライセンスが優先します。"
          ]
        },
        {
          "id": "updates",
          "heading": "6. アップデートとサービス",
          "paragraphs": [
            "アップデートでは、機能の追加、変更、修正、削除が行われることがあります。製品固有の約束がない限り、Benedict Interactive はすべてのバージョン、プラットフォーム、連携、ストア、オンラインサービスが永久に提供されることを約束しません。セキュリティ、プライバシー、データの扱いは、実際に使用しているバージョンと最新の製品ドキュメントに基づいて判断してください。"
          ]
        },
        {
          "id": "pro",
          "heading": "7. 有料機能と Pro の利用権",
          "paragraphs": [
            "有料機能または Pro を提供している製品については、実際に利用できる購入フローまたは最新の製品ドキュメントに記載された購入、返金、復元、端末、利用権の条件が適用されます。提供状況、価格、復元方法は今後の購入について変更される場合がありますが、適用法および有効な購入に適用される条件に従います。"
          ]
        },
        {
          "id": "privacy",
          "heading": "8. プライバシー",
          "paragraphs": [
            "接続型オンラインサービスの利用には、該当するプライバシーポリシーも適用されます。端末内ファイル、診断情報、アカウント情報、その他のデータを処理する製品については、製品固有のプライバシー情報を別途記載することがあります。"
          ]
        },
        {
          "id": "warranty",
          "heading": "9. 保証と責任",
          "paragraphs": [
            "法律で認められる最大限の範囲で、ソフトウェアには製品または購入条件に明示されたもの以外の保証は付されません。本ライセンスは、法律上排除または制限できない法定の権利や責任を排除するものではありません。"
          ]
        },
        {
          "id": "termination",
          "heading": "10. ライセンスの終了",
          "paragraphs": [
            "本条件への重大な違反があり、法令上是正の機会が必要な場合にその違反を是正しなかったときは、ライセンスが終了します。終了後は、ライセンスが失効したコピーの使用を中止してください。所有権、第三者の権利、免責その他、性質上終了後も存続すべき条項は引き続き有効です。"
          ]
        },
        {
          "id": "law",
          "heading": "11. 準拠法",
          "paragraphs": [
            "本ライセンスはタイ法に準拠します。ただし、利用者の法域で適用される強行的な法定権利または消費者の権利を制限しません。"
          ]
        },
        {
          "id": "contact",
          "heading": "12. お問い合わせ",
          "paragraphs": [
            "ライセンスに関する質問や利用許可の申請は benedict.support@gmail.com までお願いします。"
          ]
        }
      ]
    },
    "legal": {
      "title": "法的情報・権利",
      "metaDescription": "Benedict Interactive の著作権、ブランド、利用許可、権利に関する情報です。",
      "lead": "所有権、利用許可、第三者の権利、Benedict Interactive の素材を利用する際のルールをまとめています。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. 著作権",
          "paragraphs": [
            "© 2026 Benedict Interactive. All rights reserved. 別途明示されている場合を除き、オリジナルの文章、デザイン、グラフィック、アートワーク、ブランド素材、ドキュメント、ソフトウェア素材は Benedict Interactive が所有するか、適法なライセンスに基づいて利用しており、関連法令により保護されています。著作権保護はこの表示の有無によって発生するものではありません。この表示は、所有関係と許可される利用を分かりやすくするためのものです。"
          ]
        },
        {
          "id": "brands",
          "heading": "2. ブランドと製品名",
          "paragraphs": [
            "Benedict Interactive、Bearagnostic、Benedict Test Center、それぞれのロゴ、製品マーク、関連するビジュアルアイデンティティは、別途記載がない限り Benedict Interactive のブランドを示すものとして使用しています。明示的に登録済みと記載しない限り、このページが商標登録を主張するものではありません。登録状況の根拠がない限り、登録商標記号も使用しません。"
          ]
        },
        {
          "id": "permissions",
          "heading": "3. 素材の再利用",
          "paragraphs": [
            "公開ページへのリンクや、製品に関する一般的な個人的言及は可能です。一方、オリジナル文章、アートワーク、スクリーンショット、ブランド素材、ダウンロードファイル、ソフトウェアの相当部分を、商用利用、再販売、再配布、なりすまし等の目的で再掲載する場合は、法律上独立した利用権がある場合を除き許可が必要です。報道、編集、教育、提携、配布などで再利用したい場合は、事前に Benedict Interactive へお問い合わせください。"
          ]
        },
        {
          "id": "third-party",
          "heading": "4. 第三者およびオープンソースの権利",
          "paragraphs": [
            "第三者の名称、ロゴ、プラットフォーム、サービス、ライブラリ、フォント、オープンソースコンポーネント、その他の素材は、それぞれの権利者に帰属します。サイト上に表示されることで Benedict Interactive に所有権が移ることはありません。各ライセンスと表示は引き続き該当素材に適用され、Benedict Interactive が他者の素材について独占的権利を主張することはありません。"
          ]
        },
        {
          "id": "reports",
          "heading": "5. 権利侵害に関するご連絡",
          "paragraphs": [
            "サイト上の素材がご自身の権利を侵害していると考える場合は、対象素材、侵害されたと考える権利、申し立ての根拠、確実に連絡できる方法を記載して benedict.support@gmail.com までお知らせください。誠実に提出された申告は確認します。"
          ]
        },
        {
          "id": "location",
          "heading": "6. スタジオへの連絡",
          "paragraphs": [
            "Benedict Interactive はタイ・バンコクを拠点に運営する独立系ソフトウェアスタジオです。公開連絡先メール: benedict.support@gmail.com。「Bangkok, Thailand」はスタジオの所在地を示すもので、一般来訪者向けのオフィス住所として案内しているものではありません。"
          ]
        }
      ]
    }
  },
  "ko": {
    "privacy": {
      "title": "개인정보 처리방침",
      "metaDescription": "Benedict Interactive가 웹사이트 분석, 문의 메시지와 개인정보를 어떻게 처리하는지 설명합니다.",
      "lead": "이 사이트가 무엇을 측정하고 무엇을 추적하지 않는지, Benedict Interactive에 연락하면 어떤 정보가 처리되는지 쉽게 설명합니다.",
      "updated": "2026년 9월 25일",
      "sections": [
        {
          "id": "overview",
          "heading": "1. 개요",
          "paragraphs": [
            "Benedict Interactive는 태국 방콕에서 운영되는 독립 소프트웨어 스튜디오입니다. 이 정책은 사이트 방문, 제품 링크 이용, 이메일 문의 과정에서 정보를 어떻게 다루는지 설명합니다. 사이트는 필요한 정보만 최소한으로 처리하도록 설계되었으며, 광고 추적기, 행동 기반 광고 프로필, Benedict가 직접 설정하는 분석 쿠키를 사용하지 않습니다."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. 웹사이트 분석",
          "paragraphs": [
            "페이지, 트래픽, 성능, 유입 경로, 기기, 국가에 관한 집계 정보를 보기 위해 Cloudflare Web Analytics를 사용합니다. Cloudflare는 이 측정에 쿠키나 localStorage를 사용하지 않는다고 밝히고 있습니다. Benedict Interactive는 제품 페이지 열기, 다운로드 링크 클릭, 지원 페이지 열기, 향후 Pro 서비스에 대한 관심 표시 등 소수의 제품 이벤트도 집계 형태로 기록합니다. 목적은 제품 이용 흐름을 이해하는 것이며 개인을 추적하는 것이 아닙니다."
          ],
          "bullets": [
            "제품 이벤트 데이터에는 IP 주소, user-agent, referrer, 쿠키, localStorage 식별자, 계정 식별자, 자유 입력 메시지 내용이 저장되지 않습니다.",
            "페이지 경로는 query string과 URL fragment를 제외하고 기록합니다.",
            "다운로드 버튼 클릭은 클릭으로만 집계하며 실제 다운로드 완료나 설치 완료로 간주하지 않습니다."
          ]
        },
        {
          "id": "contact",
          "heading": "3. 문의 및 이메일",
          "paragraphs": [
            "문의 작성기는 브라우저 안에서 메시지를 준비한 뒤 사용자가 선택한 이메일 앱 또는 서비스로 초안을 넘깁니다. 사용자가 보내기 전에는 이 웹사이트가 초안 내용을 받거나 저장하지 않습니다. Benedict Interactive로 이메일을 보내면 이름, 이메일 주소, 제목, 본문 및 사용자가 자발적으로 포함한 정보가 전달됩니다. 현재 Benedict Interactive의 이메일은 Google의 Gmail을 통해 처리됩니다."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. 정보를 사용하는 목적",
          "paragraphs": [
            "집계 분석은 사이트가 잘 작동하는지, 어떤 제품 페이지가 관심을 받는지, 성능이나 사용성을 어디서 개선해야 하는지 파악하는 데 사용합니다. 문의 정보는 지원 요청, 피드백, 비즈니스 문의 및 기타 연락에 답하기 위해 사용합니다. 법률상 처리 근거가 필요한 경우에는 사용자의 요청 이행, 사이트 운영·개선에 대한 정당한 이익, 법적 의무 준수 등 해당 활동에 맞는 근거를 적용합니다."
          ]
        },
        {
          "id": "providers",
          "heading": "5. 외부 서비스 제공자",
          "paragraphs": [
            "Cloudflare는 사이트 전송, Pages hosting, Web Analytics 및 Analytics Engine을 제공합니다. Google은 Benedict Interactive의 이메일 연락에 사용하는 Gmail을 제공합니다. 각 서비스 제공자는 자체 약관과 개인정보 보호 기준에 따라 정보를 처리합니다. Benedict Interactive는 개인정보를 판매하지 않으며 문의 내용을 광고주나 데이터 브로커에게 제공하지 않습니다."
          ]
        },
        {
          "id": "retention",
          "heading": "6. 보관 기간",
          "paragraphs": [
            "집계 분석 데이터는 Cloudflare 서비스의 설정과 보관 한도에 따라 유지되며, 이를 이용해 영구적인 방문자 프로필을 만들지 않습니다. 이메일은 답변, 필요한 지원·업무 기록 유지, 분쟁 해결, 서비스 보호 또는 법적 의무 이행에 합리적으로 필요한 기간만 보관합니다. 따라서 보관 기간은 메시지와 상황에 따라 달라질 수 있습니다."
          ]
        },
        {
          "id": "rights",
          "heading": "7. 개인정보 관련 권리",
          "paragraphs": [
            "거주 지역의 법률에 따라 개인정보 열람, 정정, 삭제, 처리 제한, 이의 제기, 이동권 등 여러 권리가 인정될 수 있으며 관할 개인정보 보호 기관에 민원을 제기할 권리가 있을 수도 있습니다. 요청은 benedict.support@gmail.com으로 보내 주세요. 요청 확인과 관련 연락 기록 확인을 위해 필요한 범위에서 추가 정보를 요청할 수 있습니다."
          ]
        },
        {
          "id": "international",
          "heading": "8. 국외 처리",
          "paragraphs": [
            "Cloudflare와 Google은 여러 국가에서 서비스를 운영합니다. 따라서 해당 서비스를 통해 처리되는 정보는 사용자의 거주 국가 외 지역에서 처리될 수 있으며, 각 제공자의 보호 조치와 조건 및 적용 법률을 따릅니다."
          ]
        },
        {
          "id": "children",
          "heading": "9. 아동",
          "paragraphs": [
            "이 사이트는 일반적인 소프트웨어 스튜디오 및 제품 안내 사이트이며 아동의 개인정보를 수집하도록 설계되지 않았습니다. 아동이 Benedict Interactive에 개인정보를 보냈다고 생각되는 경우 검토할 수 있도록 연락해 주세요."
          ]
        },
        {
          "id": "changes",
          "heading": "10. 변경 및 문의",
          "paragraphs": [
            "사이트, 분석, 문의 시스템, 제품 또는 법적 요구사항이 바뀌면 이 정책을 업데이트할 수 있습니다. 상단 날짜가 최근 개정일입니다. 개인정보 관련 문의는 benedict.support@gmail.com으로 보내 주세요. Benedict Interactive는 태국 방콕에서 운영됩니다."
          ]
        }
      ]
    },
    "terms": {
      "title": "이용약관",
      "metaDescription": "Benedict Interactive 웹사이트와 공개 콘텐츠 이용에 적용되는 조건입니다.",
      "lead": "Benedict Interactive 웹사이트, 콘텐츠와 공개 제품 정보를 이용할 때 알아야 할 규칙을 쉽게 정리했습니다.",
      "updated": "2026년 9월 25일",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 적용 범위와 동의",
          "paragraphs": [
            "이 약관은 Benedict Interactive 웹사이트와 공개 콘텐츠에 적용됩니다. 적용 법률이 허용하는 범위에서 사이트를 이용하면 본 약관에 동의한 것으로 봅니다. 동의하지 않는 경우 사이트를 이용하지 마세요. 여기서 “Benedict Interactive”, “당사”, “저희” 등은 태국 방콕을 기반으로 이 독립 소프트웨어 스튜디오 사이트를 운영하는 주체를 뜻합니다."
          ]
        },
        {
          "id": "information",
          "heading": "2. 제품 정보 및 이용 가능 여부",
          "paragraphs": [
            "제품, 기능, 배포 채널, 가격, 구매 시스템 및 서비스는 공개 또는 제공 단계가 서로 다를 수 있습니다. ‘예정’ 또는 ‘추후 제공’으로 표시된 내용은 특정 날짜나 형태로 제공된다는 약속이 아닙니다. 공개 정보는 가능한 한 최신으로 유지하지만, 현재 제품, 릴리스 노트, 구매 절차 또는 제품별 문서가 이전 웹사이트 설명보다 우선할 수 있습니다."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. 허용되는 이용",
          "paragraphs": [
            "사이트는 합법적인 탐색, 제품 평가, 지원 및 소통을 위해 이용할 수 있습니다. 사이트를 악용하거나 정상 운영을 방해해서는 안 됩니다."
          ],
          "bullets": [
            "비공개 시스템, 관리자 도구, 인증정보 또는 데이터에 허가 없이 접근하려 하지 마세요.",
            "의도적인 방해나 과부하, 악의적인 scraping, 무단 취약점 점검 또는 기술적 보호 우회를 하지 마세요.",
            "Benedict Interactive를 사칭하거나 후원, 소유권, 승인 관계에 대해 다른 사람을 오도하기 위해 사이트나 콘텐츠를 사용하지 마세요."
          ]
        },
        {
          "id": "ip",
          "heading": "4. 지식재산권",
          "paragraphs": [
            "제3자 자료임이 명시된 경우를 제외하고 사이트 디자인, 원문, Benedict Interactive 브랜드 자산, 일러스트, 소프트웨어 자료 및 기타 원본 콘텐츠는 Benedict Interactive가 소유하거나 적법하게 라이선스받아 사용하며 관련 법률의 보호를 받습니다. 사이트 이용만으로 지식재산권이 사용자에게 이전되지 않습니다. 일반적인 브라우저 캐시와 개인적인 참고는 허용되지만, 더 넓은 범위의 복제, 재배포, 재게시, 재판매 또는 상업적 재사용에는 법률상 별도 권리가 없는 한 허가가 필요합니다."
          ]
        },
        {
          "id": "software",
          "heading": "5. 소프트웨어는 별도 라이선스를 적용합니다",
          "paragraphs": [
            "Benedict Interactive가 배포하는 소프트웨어에는 이 웹사이트 약관만이 아니라 해당 소프트웨어 라이선스 또는 제품별 조건이 적용됩니다. 일반 소프트웨어 라이선스는 이 사이트에서 확인할 수 있으며, 제품 출시 시 제품별 조건으로 보완되거나 대체될 수 있습니다."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. 제3자 서비스와 링크",
          "paragraphs": [
            "사이트는 앱 스토어, 배포 서비스, 호스팅, 이메일, 결제, 문서 등 제3자 서비스로 연결될 수 있습니다. 각 서비스는 자체 운영자가 관리하며 별도의 약관, 개인정보 정책, 이용 가능 여부와 비용이 적용될 수 있습니다. 링크가 있다는 이유만으로 Benedict Interactive가 목적지의 모든 내용이나 정책을 보증하는 것은 아닙니다."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. 사이트 제공과 보증 제한",
          "paragraphs": [
            "사이트와 공개 정보는 이용 가능한 상태를 기준으로 제공됩니다. 법률이 허용하는 최대 범위에서 Benedict Interactive는 중단 없는 접속, 오류 없는 작동 또는 모든 정보가 항상 최신 상태로 유지된다는 점을 보증하지 않습니다. 소비자 보호법상 배제할 수 없는 권리나 보증은 이 약관으로 제한되지 않습니다."
          ]
        },
        {
          "id": "liability",
          "heading": "8. 책임 제한",
          "paragraphs": [
            "적용 법률이 허용하는 최대 범위에서 Benedict Interactive는 이 공개 웹사이트의 이용만으로 발생한 간접적, 부수적, 특별 또는 결과적 손실에 대해 책임을 지지 않습니다. 법률상 책임을 제한하거나 배제할 수 없는 경우에는 이 제한이 적용되지 않습니다."
          ]
        },
        {
          "id": "changes",
          "heading": "9. 약관 변경",
          "paragraphs": [
            "사이트, 제품, 법률 또는 사업 모델이 바뀌면 약관을 업데이트할 수 있습니다. 가격, 환불, 결제수단, 이용 권한 규칙 등 중요한 상업 조건은 관련 시스템이 실제로 준비되었을 때 공개합니다."
          ]
        },
        {
          "id": "law",
          "heading": "10. 준거법과 강행적 권리",
          "paragraphs": [
            "이 약관은 태국 법률의 적용을 받습니다. 다만 사용자의 거주지 법률에 따라 반드시 보장되는 소비자 권리나 법정 권리를 제한하지 않습니다."
          ]
        },
        {
          "id": "contact",
          "heading": "11. 문의",
          "paragraphs": [
            "약관 관련 문의는 benedict.support@gmail.com으로 보내 주세요. Benedict Interactive는 태국 방콕에서 운영됩니다."
          ]
        }
      ]
    },
    "license": {
      "title": "소프트웨어 라이선스",
      "metaDescription": "Benedict Interactive가 배포하는 소프트웨어의 일반 라이선스 조건입니다.",
      "lead": "제품별 조건에서 달리 정하지 않는 한 Bearagnostic을 포함한 Benedict Interactive 소프트웨어에 적용되는 일반 라이선스 체계입니다.",
      "updated": "2026년 9월 25일",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 적용 범위",
          "paragraphs": [
            "이 일반 라이선스는 Benedict Interactive가 배포하는 소프트웨어 또는 다운로드 페이지가 본 라이선스를 참조하고 별도의 제품별 라이선스가 이를 대체하지 않는 경우 적용됩니다. 제품별 조건이 내용을 추가하거나 일부에 우선할 수 있습니다. 공개 제품 페이지 자체만으로 라이선스가 부여되는 것은 아니며, 소프트웨어가 실제로 이 조건 아래 제공될 때 라이선스가 적용됩니다."
          ]
        },
        {
          "id": "grant",
          "heading": "2. 라이선스 부여",
          "paragraphs": [
            "이 조건을 준수하는 것을 전제로 Benedict Interactive는 사용자가 소유하거나 관리하는 기기에 소프트웨어를 설치하고 제품 및 해당 구매 조건에서 허용하는 합법적인 개인 용도 또는 내부 업무 용도로 사용할 수 있는 제한적·비독점적·양도 불가·재라이선스 불가 권리를 부여합니다. 소프트웨어는 판매가 아니라 라이선스 형태로 제공되며 소유권과 지식재산권은 Benedict Interactive 및 해당 라이선서에게 남습니다."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. 제한 사항",
          "paragraphs": [
            "적용 법률이 제한할 수 없는 권리를 명시적으로 인정하는 경우를 제외하고 다음 행위를 할 수 없습니다."
          ],
          "bullets": [
            "서면 허가 없이 소프트웨어를 재배포, 재판매, 재라이선스, 임대, 리스하거나 hosted service 형태로 제공하는 행위",
            "저작권, 출처, 상표, 라이선스 또는 소유권 표시를 제거하거나 허위로 변경하는 행위",
            "Benedict Interactive를 사칭하거나 수정·오인 가능성이 있는 build를 공식판처럼 배포하기 위해 소프트웨어, 브랜드 또는 제품 정체성을 사용하는 행위",
            "라이선스, entitlement, 보안 또는 무결성 제어를 우회하는 행위",
            "법률이 본 제한에도 불구하고 명시적으로 허용하는 범위를 제외한 reverse engineering, decompile 또는 disassemble"
          ]
        },
        {
          "id": "copies",
          "heading": "4. 백업과 기기",
          "paragraphs": [
            "허가된 사용에 합리적으로 필요한 범위에서 백업 사본을 만들 수 있으며 소유권 및 라이선스 표시를 유지해야 합니다. 제품별로 공개된 기기 수, 계정, 복구 또는 entitlement 제한도 함께 적용됩니다."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. 오픈소스 및 제3자 구성요소",
          "paragraphs": [
            "소프트웨어에는 제3자 또는 오픈소스 구성요소가 포함될 수 있습니다. 해당 구성요소에는 각자의 라이선스와 고지가 계속 적용됩니다. 제3자 라이선스가 본 일반 라이선스와 다른 권리를 부여한다면 해당 구성요소에는 제3자 라이선스가 우선합니다."
          ]
        },
        {
          "id": "updates",
          "heading": "6. 업데이트와 서비스",
          "paragraphs": [
            "업데이트는 기능을 추가, 변경, 수정 또는 제거할 수 있습니다. 제품별로 명시적인 약속이 없는 한 Benedict Interactive는 모든 버전, 플랫폼, 연동, 스토어 또는 온라인 서비스가 영구히 제공된다고 약속하지 않습니다. 보안, 개인정보 및 데이터 처리 방식은 실제 사용 중인 버전과 최신 문서를 기준으로 확인해야 합니다."
          ]
        },
        {
          "id": "pro",
          "heading": "7. 유료 기능과 Pro 이용 권한",
          "paragraphs": [
            "제품이 유료 또는 Pro 기능을 제공하는 경우, 현재 운영 중인 구매 절차나 최신 제품 문서에 게시된 구매, 환불, 복원, 기기 및 이용 권한 조건이 적용됩니다. 향후 구매에 대한 제공 여부, 가격 및 복원 방법은 변경될 수 있으며, 관련 법률과 유효한 구매에 적용되는 조건을 따릅니다."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. 개인정보",
          "paragraphs": [
            "연결형 온라인 서비스를 사용할 때는 해당 개인정보 처리방침도 적용됩니다. 기기 파일, 진단 정보, 계정 정보 또는 기타 데이터를 처리하는 제품은 제품별 개인정보 처리 방식을 별도로 설명할 수 있습니다."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. 보증과 책임",
          "paragraphs": [
            "법률이 허용하는 최대 범위에서 소프트웨어에는 제품 또는 구매 조건에서 명시한 것 외의 보증이 제공되지 않습니다. 법률상 배제하거나 제한할 수 없는 권리나 책임은 이 라이선스로 제거되지 않습니다."
          ]
        },
        {
          "id": "termination",
          "heading": "10. 종료",
          "paragraphs": [
            "사용자가 본 조건을 중대하게 위반하고 법률상 시정 기회가 필요한 경우에도 이를 시정하지 않으면 라이선스가 종료됩니다. 종료 후에는 더 이상 허가되지 않은 사본의 사용을 중단해야 합니다. 소유권, 제3자 권리, 면책 및 성격상 종료 후에도 효력이 있어야 하는 조항은 계속 적용됩니다."
          ]
        },
        {
          "id": "law",
          "heading": "11. 준거법",
          "paragraphs": [
            "이 라이선스는 태국 법률의 적용을 받으며, 사용자의 관할지역에서 강행적으로 보장되는 법정 권리 또는 소비자 권리를 제한하지 않습니다."
          ]
        },
        {
          "id": "contact",
          "heading": "12. 문의",
          "paragraphs": [
            "라이선스 관련 질문과 허가 요청은 benedict.support@gmail.com으로 보내 주세요."
          ]
        }
      ]
    },
    "legal": {
      "title": "법적 정보 및 권리",
      "metaDescription": "Benedict Interactive의 저작권, 브랜드, 이용 허가와 권리에 관한 정보입니다.",
      "lead": "소유권, 이용 허가, 제3자 권리, Benedict Interactive 자료 재사용 규칙을 설명합니다.",
      "updated": "2026년 9월 25일",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. 저작권",
          "paragraphs": [
            "© 2026 Benedict Interactive. 모든 권리 보유. 별도 표시가 없는 한 원문, 디자인, 그래픽, 아트워크, 브랜드 자산, 문서와 원본 소프트웨어 자료는 Benedict Interactive가 소유하거나 적법하게 라이선스받아 사용하며 적용 법률의 보호를 받습니다. 저작권 보호는 이 문구가 있어야만 발생하는 것이 아니며, 이 문구는 소유관계와 허용된 이용 범위를 명확히 하기 위한 것입니다."
          ]
        },
        {
          "id": "brands",
          "heading": "2. 브랜드와 제품명",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center와 각 로고, 제품 마크, 관련 시각 정체성은 별도 표시가 없는 한 Benedict Interactive의 브랜드 식별자로 사용됩니다. 명시적으로 등록되었다고 표시하지 않는 한 이 페이지는 상표 등록을 주장하지 않으며, 등록 상태가 뒷받침되지 않는 경우 등록상표 기호를 사용하지 않습니다."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. 자료 재사용 허가",
          "paragraphs": [
            "공개 페이지에 링크하거나 제품을 일반적인 개인적 맥락에서 언급할 수 있습니다. 다만 원문, 아트워크, 스크린샷, 브랜드 자산, 다운로드 파일 또는 소프트웨어의 상당 부분을 상업적 이용, 재판매, 재배포 또는 사칭 목적으로 재게시하려면 법률상 독립된 사용 권리가 없는 한 허가가 필요합니다. 언론, 편집, 교육, 제휴, 배포 또는 기타 재사용은 사전에 Benedict Interactive에 문의해 주세요."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. 제3자 및 오픈소스 권리",
          "paragraphs": [
            "제3자의 이름, 로고, 플랫폼, 서비스, 라이브러리, 폰트, 오픈소스 구성요소와 기타 자료는 각 권리자에게 계속 귀속됩니다. 사이트에 표시된다는 이유로 소유권이 Benedict Interactive로 이전되지 않습니다. 관련 제3자 및 오픈소스 라이선스는 계속 적용되며 Benedict Interactive는 타인의 자료에 대해 독점적 권리를 주장하지 않습니다."
          ]
        },
        {
          "id": "reports",
          "heading": "5. 권리 침해 관련 신고",
          "paragraphs": [
            "사이트의 자료가 본인의 권리를 침해한다고 생각하면 해당 자료, 영향을 받는 권리, 주장 근거, 연락 가능한 방법을 적어 benedict.support@gmail.com으로 보내 주세요. 선의로 접수된 신고는 검토합니다."
          ]
        },
        {
          "id": "location",
          "heading": "6. 스튜디오 연락처",
          "paragraphs": [
            "Benedict Interactive는 태국 방콕에서 운영되는 독립 소프트웨어 스튜디오입니다. 공개 이메일: benedict.support@gmail.com. “Bangkok, Thailand”는 스튜디오의 위치를 나타내며 일반인이 방문할 수 있는 오피스 주소로 안내하는 것이 아닙니다."
          ]
        }
      ]
    }
  },
  "zh-cn": {
    "privacy": {
      "title": "隐私政策",
      "metaDescription": "说明 Benedict Interactive 如何处理网站分析、联系邮件和隐私信息。",
      "lead": "清楚说明本网站会统计什么、不会跟踪什么，以及你联系 Benedict Interactive 时会发生什么。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "overview",
          "heading": "1. 概述",
          "paragraphs": [
            "Benedict Interactive 是一家在泰国曼谷运营的独立软件工作室。本政策说明你访问网站、打开产品链接或通过电子邮件联系我们时，相关信息会如何处理。网站遵循数据最小化原则：我们不使用广告追踪器、行为广告画像，也不设置 Benedict 自有的分析 Cookie。"
          ]
        },
        {
          "id": "analytics",
          "heading": "2. 网站分析",
          "paragraphs": [
            "我们使用 Cloudflare Web Analytics 查看页面、流量、性能、来源、设备和国家等汇总信息。Cloudflare 表示，此类测量不依赖 Cookie 或 localStorage。Benedict Interactive 还会记录少量汇总的产品事件，例如打开产品页、点击下载链接、进入支持页面或对计划中的 Pro 版本表示兴趣。这些数据用于了解产品整体使用情况，而不是跟踪具体个人。"
          ],
          "bullets": [
            "产品事件数据集不会保存 IP 地址、user-agent、referrer、Cookie、localStorage 标识符、账户标识符或用户自由填写的消息内容。",
            "页面路径在记录时会去除 query string 和 URL fragment。",
            "点击下载按钮只会记为一次点击，不会被当作已完成下载或安装。"
          ]
        },
        {
          "id": "contact",
          "heading": "3. 联系与电子邮件",
          "paragraphs": [
            "网站上的联系编辑器会在你的浏览器中准备消息，再把草稿交给你选择的邮件应用或邮件服务。在你决定发送前，网站不会接收或保存草稿正文。如果你向 Benedict Interactive 发送电子邮件，我们会收到邮件中包含的信息，例如姓名、邮箱地址、主题、正文以及你主动提供的其他内容。目前 Benedict Interactive 使用 Google 的 Gmail 处理邮件往来。"
          ]
        },
        {
          "id": "purpose",
          "heading": "4. 信息的用途",
          "paragraphs": [
            "汇总分析用于了解网站是否运行良好、哪些产品页面受到关注，以及哪些地方需要改进性能或易用性。联系信息用于回复支持请求、反馈、商务咨询和其他来信。如果适用法律要求具备处理依据，我们会根据具体活动采用相应依据，例如应你的要求采取措施、运营和改进网站的合法利益，或履行法律义务。"
          ]
        },
        {
          "id": "providers",
          "heading": "5. 服务提供商",
          "paragraphs": [
            "Cloudflare 提供网站交付、Pages hosting、Web Analytics 和 Analytics Engine；Google 提供 Benedict Interactive 用于邮件往来的 Gmail。上述服务商会依据各自的条款和隐私做法处理信息。Benedict Interactive 不出售个人信息，也不会把联系消息提供给广告商或数据经纪商。"
          ]
        },
        {
          "id": "retention",
          "heading": "6. 保存期限",
          "paragraphs": [
            "汇总分析数据按照 Cloudflare 服务的设置和保存上限保留，我们不会尝试把这些数据变成长期访客画像。电子邮件只在合理必要的期限内保存，用于回复、保留必要的支持或业务记录、解决争议、保护服务或履行法律义务，因此具体期限会因消息和情境不同而有所差异。"
          ]
        },
        {
          "id": "rights",
          "heading": "7. 你的隐私权利",
          "paragraphs": [
            "根据你所在地区的法律，你可能享有访问、更正、删除、限制处理、反对、数据可携带等权利，也可能有权向主管数据保护机构投诉。需要提出隐私请求时，请发送邮件至 benedict.support@gmail.com。我们可能需要足够的信息来核实请求并找到相关往来记录。"
          ]
        },
        {
          "id": "international",
          "heading": "8. 跨境处理",
          "paragraphs": [
            "Cloudflare 和 Google 在多个国家开展业务，因此通过其服务处理的信息可能会在你所在国家以外的地区处理，并受服务商采用的保护措施、条款以及适用法律约束。"
          ]
        },
        {
          "id": "children",
          "heading": "9. 儿童",
          "paragraphs": [
            "本网站是面向公众的软件工作室和产品信息网站，并非为收集儿童个人信息而设计。如果你认为儿童向 Benedict Interactive 提交了个人信息，请联系我们，以便我们核实并妥善处理。"
          ]
        },
        {
          "id": "changes",
          "heading": "10. 变更与联系",
          "paragraphs": [
            "当网站、分析方式、联系系统、产品或法律要求发生变化时，我们可能更新本政策。页面顶部的日期为最近修订日期。有关隐私的问题可发送至 benedict.support@gmail.com。Benedict Interactive 在泰国曼谷运营。"
          ]
        }
      ]
    },
    "terms": {
      "title": "使用条款",
      "metaDescription": "适用于 Benedict Interactive 网站及其公开内容的使用条款。",
      "lead": "以清晰易懂的方式说明如何使用 Benedict Interactive 网站、内容和公开产品信息。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 适用范围与接受",
          "paragraphs": [
            "本条款适用于 Benedict Interactive 网站及其公开内容。在适用法律允许的范围内，你使用本网站即表示接受本条款。如果不同意，请不要使用本网站。本文中的“Benedict Interactive”“我们”等表述，是指这家以泰国曼谷为运营地的独立软件工作室网站运营方。"
          ]
        },
        {
          "id": "information",
          "heading": "2. 产品信息与可用状态",
          "paragraphs": [
            "产品、功能、分发渠道、价格、购买系统和服务可能处于不同的上线或可用阶段。标注为“计划中”或“稍后提供”的内容，并不代表承诺会在特定日期或以特定形式推出。我们会尽量保持信息最新，但当前产品、发行说明、购买流程或产品专用文档可能会取代网站上的旧说明。"
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. 合理使用",
          "paragraphs": [
            "你可以合法浏览网站、评估产品、获取支持和进行联系，但不得滥用网站或干扰其正常运行。"
          ],
          "bullets": [
            "不得未经授权尝试访问非公开系统、管理工具、凭证或数据。",
            "不得故意中断或使服务过载，不得滥用式抓取、未经授权测试漏洞或绕过技术保护措施。",
            "不得利用网站或其内容冒充 Benedict Interactive，或在赞助、所有权、认可关系方面误导他人。"
          ]
        },
        {
          "id": "ip",
          "heading": "4. 知识产权",
          "paragraphs": [
            "除明确标示为第三方内容的材料外，网站设计、原创文字、Benedict Interactive 品牌资产、原创美术、软件材料和其他原创内容均由 Benedict Interactive 拥有或经授权使用，并受适用知识产权法律保护。使用网站不会把任何知识产权转让给你。普通浏览器缓存和个人参考用途可以接受；更广泛的复制、再分发、重新发布、转售或商业再利用需获得许可，法律另有规定的除外。"
          ]
        },
        {
          "id": "software",
          "heading": "5. 软件另行适用许可",
          "paragraphs": [
            "Benedict Interactive 分发的软件适用相应的软件许可或产品专用条款，而不只是本网站使用条款。通用软件许可可在本站查阅，产品发布时可能由产品专用条款补充或取代。"
          ]
        },
        {
          "id": "third-party",
          "heading": "6. 第三方服务与链接",
          "paragraphs": [
            "网站可能链接到应用商店、分发服务、托管、邮件、支付、文档或其他第三方服务。这些服务由各自运营方控制，可能有不同的条款、隐私政策、可用性和费用。提供链接本身并不表示 Benedict Interactive 认可目标网站上的所有内容、产品或政策。"
          ]
        },
        {
          "id": "warranty",
          "heading": "7. 网站可用性与免责声明",
          "paragraphs": [
            "网站及公开信息按可用状态提供。在法律允许的最大范围内，Benedict Interactive 不保证持续访问、完全无错误运行，也不保证所有公开信息永久保持最新。本条款不排除消费者保护法或其他适用法律规定不得排除的权利或保证。"
          ]
        },
        {
          "id": "liability",
          "heading": "8. 责任限制",
          "paragraphs": [
            "在适用法律允许的最大范围内，对于仅因使用本公开网站而产生的间接、附带、特殊或后果性损失，Benedict Interactive 不承担责任。法律不允许限制或排除责任的情况除外。"
          ]
        },
        {
          "id": "changes",
          "heading": "9. 条款变更",
          "paragraphs": [
            "当网站、产品、法律要求或商业模式发生变化时，我们可能更新本条款。价格、退款、支付方式、使用权等重要商业条件，只会在相关系统真正准备好后发布。"
          ]
        },
        {
          "id": "law",
          "heading": "10. 适用法律与强制性权利",
          "paragraphs": [
            "本条款受泰国法律管辖，但不会限制你依据居住地法律享有且不得被排除的消费者权利或其他法定权利。"
          ]
        },
        {
          "id": "contact",
          "heading": "11. 联系",
          "paragraphs": [
            "有关本条款的问题可发送至 benedict.support@gmail.com。Benedict Interactive 在泰国曼谷运营。"
          ]
        }
      ]
    },
    "license": {
      "title": "软件许可",
      "metaDescription": "Benedict Interactive 分发软件所适用的通用许可条款。",
      "lead": "Benedict Interactive 软件的通用许可框架，包括 Bearagnostic，除非产品专用条款另有规定。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 适用范围",
          "paragraphs": [
            "当 Benedict Interactive 分发的软件或其下载页面引用本许可，且没有产品专用许可取代本许可时，本通用软件许可适用。产品专用条款可能补充或优先于本许可。公开产品页面本身并不构成软件许可授予；只有在软件实际依据这些条件向你提供时，许可才适用。"
          ]
        },
        {
          "id": "grant",
          "heading": "2. 许可授予",
          "paragraphs": [
            "在遵守这些条件的前提下，Benedict Interactive 授予你有限的、非独占的、不可转让且不可再许可的使用权，可在你拥有或控制的设备上安装并使用软件，用于产品及适用购买条款允许的合法个人用途或企业内部用途。软件是许可使用而不是出售，其所有权和知识产权仍归 Benedict Interactive 及其许可方所有。"
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. 限制",
          "paragraphs": [
            "除非适用法律明确赋予你不得被限制的权利，否则你不得："
          ],
          "bullets": [
            "未经书面许可重新分发、转售、再许可、出租、租赁软件，或将软件作为托管服务提供；",
            "删除或伪造版权、署名、商标、许可或所有权声明；",
            "利用软件、品牌或产品身份冒充 Benedict Interactive，或把修改版、误导性 build 作为官方版本分发；",
            "规避许可、entitlement、安全或完整性控制；",
            "进行 reverse engineering、decompile 或 disassemble，除非适用法律即使存在本限制仍明确允许。"
          ]
        },
        {
          "id": "copies",
          "heading": "4. 备份与设备",
          "paragraphs": [
            "为你自己的已获许可使用而合理需要时，可以制作备份副本，但必须保留所有权和许可声明。特定产品公布的设备数量、账户、恢复或 entitlement 限制也同样适用。"
          ]
        },
        {
          "id": "third-party",
          "heading": "5. 开源和第三方组件",
          "paragraphs": [
            "软件可能包含第三方或开源组件，这些组件继续适用其各自的许可和声明。如果第三方许可授予与你在本通用许可下不同的权利，则对相应组件以该第三方许可为准。"
          ]
        },
        {
          "id": "updates",
          "heading": "6. 更新与服务",
          "paragraphs": [
            "更新可能增加、修改、修复或移除功能。除非产品另有明确承诺，Benedict Interactive 不保证每个版本、平台、集成、商店或在线服务会永久提供。安全、隐私和数据处理方式应以你实际使用的版本和当前产品文档为准。"
          ]
        },
        {
          "id": "pro",
          "heading": "7. 付费功能与 Pro 权益",
          "paragraphs": [
            "当产品提供付费或 Pro 功能时，以当前实际购买流程或最新产品文档中公布的购买、退款、恢复、设备和权益条款为准。未来购买的可用范围、价格和恢复方式可能发生变化，并始终受适用法律及有效购买所对应条款的约束。"
          ]
        },
        {
          "id": "privacy",
          "heading": "8. 隐私",
          "paragraphs": [
            "使用任何联网服务时，也需遵守相应的隐私政策。若软件会处理设备文件、诊断数据、账户信息或其他数据，产品可能另行说明其具体隐私处理方式。"
          ]
        },
        {
          "id": "warranty",
          "heading": "9. 保证与责任",
          "paragraphs": [
            "在法律允许的最大范围内，除产品或购买条款明确说明的保证外，软件不附带其他保证。本许可不排除法律规定不得排除或限制的法定权利或责任。"
          ]
        },
        {
          "id": "termination",
          "heading": "10. 终止",
          "paragraphs": [
            "如果你严重违反本条件，并且在法律要求给予补救机会时仍未纠正，许可将终止。许可终止后，你必须停止使用不再获许可的副本。有关所有权、第三方权利、免责声明以及按其性质应继续有效的条款，在终止后仍然适用。"
          ]
        },
        {
          "id": "law",
          "heading": "11. 适用法律",
          "paragraphs": [
            "本许可受泰国法律管辖，但不限制你所在司法辖区内适用且不得排除的法定权利或消费者权利。"
          ]
        },
        {
          "id": "contact",
          "heading": "12. 联系",
          "paragraphs": [
            "许可问题和授权申请可发送至 benedict.support@gmail.com。"
          ]
        }
      ]
    },
    "legal": {
      "title": "法律信息与权利",
      "metaDescription": "Benedict Interactive 的版权、品牌、授权和权利信息。",
      "lead": "说明所有权、授权、第三方权利，以及如何使用 Benedict Interactive 的材料。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. 版权",
          "paragraphs": [
            "© 2026 Benedict Interactive。保留所有权利。除另有说明外，网站原创文字、设计、图形、美术作品、品牌资产、文档和原创软件材料均由 Benedict Interactive 拥有或经授权使用，并受适用法律保护。版权保护并不取决于是否显示本声明；本声明用于更清楚地说明所有权和允许的使用范围。"
          ]
        },
        {
          "id": "brands",
          "heading": "2. 品牌与产品名称",
          "paragraphs": [
            "Benedict Interactive、Bearagnostic、Benedict Test Center，以及相关徽标、产品标志和视觉识别，除另有说明外均作为 Benedict Interactive 的品牌标识使用。除非明确注明已注册，本页面不主张任何标志已经完成商标注册；在没有相应注册依据时，也不会使用注册商标符号。"
          ]
        },
        {
          "id": "permissions",
          "heading": "3. 材料再利用授权",
          "paragraphs": [
            "你可以链接到公开页面，并以正常的个人方式提及 Benedict Interactive 产品。若要大量重新发布原创文字、美术作品、截图、品牌资产、可下载文件或软件，并用于商业用途、转售、再分发或冒充，则需要获得许可，法律另行允许的除外。如需用于媒体、编辑、教育、合作、分发或其他再利用，请先联系 Benedict Interactive。"
          ]
        },
        {
          "id": "third-party",
          "heading": "4. 第三方与开源权利",
          "paragraphs": [
            "第三方名称、徽标、平台、服务、库、字体、开源组件及其他第三方材料仍归各自权利人所有。它们出现在本网站并不表示所有权转移给 Benedict Interactive。相关第三方和开源许可仍对相应材料有效；Benedict Interactive 不会对属于他人的材料主张排他性权利。"
          ]
        },
        {
          "id": "reports",
          "heading": "5. 权利或侵权问题",
          "paragraphs": [
            "如果你认为网站上的材料侵犯了你的权利，请发送邮件至 benedict.support@gmail.com，清楚说明相关材料、你认为受到影响的权利、提出主张的依据以及可靠的联系方式。我们会审核善意提交的报告。"
          ]
        },
        {
          "id": "location",
          "heading": "6. 工作室联系信息",
          "paragraphs": [
            "Benedict Interactive 是一家在泰国曼谷运营的独立软件工作室。公开联系邮箱：benedict.support@gmail.com。“Bangkok, Thailand”仅用于说明工作室所在地区，并非对外开放、可直接到访的办公室地址。"
          ]
        }
      ]
    }
  },
  "zh-tw": {
    "privacy": {
      "title": "隱私權政策",
      "metaDescription": "說明 Benedict Interactive 如何處理網站分析、聯絡郵件與隱私資訊。",
      "lead": "清楚說明這個網站會統計什麼、不會追蹤什麼，以及你聯絡 Benedict Interactive 時會發生什麼。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "overview",
          "heading": "1. 概述",
          "paragraphs": [
            "Benedict Interactive 是一家在泰國曼谷營運的獨立軟體工作室。本政策說明你瀏覽網站、開啟產品連結或透過電子郵件與我們聯絡時，相關資訊會如何處理。網站以資料最小化為原則：我們不使用廣告追蹤器、行為廣告個人輪廓，也不設定 Benedict 自有的分析 Cookie。"
          ]
        },
        {
          "id": "analytics",
          "heading": "2. 網站分析",
          "paragraphs": [
            "我們使用 Cloudflare Web Analytics 檢視頁面、流量、效能、來源、裝置與國家等彙整資訊。Cloudflare 表示，這類測量不依賴 Cookie 或 localStorage。Benedict Interactive 也會記錄少量彙整的產品事件，例如開啟產品頁、點擊下載連結、進入支援頁面，或對規劃中的 Pro 方案表示興趣。用途是了解產品整體使用情況，而不是追蹤個別使用者。"
          ],
          "bullets": [
            "產品事件資料集不會儲存 IP 位址、user-agent、referrer、Cookie、localStorage 識別碼、帳號識別碼或使用者自由輸入的訊息內容。",
            "頁面路徑在記錄時會移除 query string 與 URL fragment。",
            "點擊下載按鈕只會記為一次點擊，不會被當成已完成下載或安裝。"
          ]
        },
        {
          "id": "contact",
          "heading": "3. 聯絡與電子郵件",
          "paragraphs": [
            "網站上的聯絡編輯器會先在你的瀏覽器中準備訊息，再把草稿交給你選擇的郵件 App 或郵件服務。在你決定送出之前，網站不會接收或儲存草稿內容。如果你寄信給 Benedict Interactive，我們會收到郵件中包含的資訊，例如姓名、電子郵件地址、主旨、內文，以及你主動提供的其他內容。目前 Benedict Interactive 使用 Google 的 Gmail 處理郵件往來。"
          ]
        },
        {
          "id": "purpose",
          "heading": "4. 資訊的用途",
          "paragraphs": [
            "彙整分析用來了解網站是否運作良好、哪些產品頁面較受關注，以及哪些地方需要改善效能或易用性。聯絡資訊用來回覆支援需求、意見回饋、商務洽詢與其他來信。若適用法律要求具備處理依據，我們會依活動採用適當的法律基礎，例如依你的要求採取措施、營運及改善網站的正當利益，或履行法律義務。"
          ]
        },
        {
          "id": "providers",
          "heading": "5. 服務供應商",
          "paragraphs": [
            "Cloudflare 提供網站傳遞、Pages hosting、Web Analytics 與 Analytics Engine；Google 提供 Benedict Interactive 用於郵件往來的 Gmail。這些供應商依各自的條款與隱私做法處理資訊。Benedict Interactive 不販售個人資訊，也不會把聯絡訊息交給廣告商或資料仲介商。"
          ]
        },
        {
          "id": "retention",
          "heading": "6. 保存期間",
          "paragraphs": [
            "彙整分析資料依 Cloudflare 服務的設定與保存上限保留，我們不會嘗試把這些資料建立成永久的訪客輪廓。電子郵件只會在合理必要的期間內保存，用於回覆、保留必要的支援或業務紀錄、處理爭議、保護服務或履行法律義務，因此實際期間可能依訊息與情況不同而有所差異。"
          ]
        },
        {
          "id": "rights",
          "heading": "7. 你的隱私權利",
          "paragraphs": [
            "依你所在地的法律，你可能享有存取、更正、刪除、限制處理、反對、資料可攜等權利，也可能有權向主管資料保護機關提出申訴。若要提出隱私權請求，請寄信至 benedict.support@gmail.com。我們可能需要足夠的資訊，以確認請求並找到相關往來紀錄。"
          ]
        },
        {
          "id": "international",
          "heading": "8. 跨境處理",
          "paragraphs": [
            "Cloudflare 與 Google 在多個國家營運，因此透過這些服務處理的資訊可能會在你所在國家以外的地區處理，並受供應商採取的保護措施、條款與適用法律約束。"
          ]
        },
        {
          "id": "children",
          "heading": "9. 兒童",
          "paragraphs": [
            "本網站是一般性的軟體工作室與產品資訊網站，並非為蒐集兒童個人資訊而設計。如果你認為有兒童向 Benedict Interactive 提供了個人資訊，請與我們聯絡，以便我們檢視並妥善處理。"
          ]
        },
        {
          "id": "changes",
          "heading": "10. 變更與聯絡",
          "paragraphs": [
            "當網站、分析方式、聯絡系統、產品或法律要求改變時，我們可能更新本政策。頁面上方的日期為最近修訂日期。隱私相關問題可寄至 benedict.support@gmail.com。Benedict Interactive 在泰國曼谷營運。"
          ]
        }
      ]
    },
    "terms": {
      "title": "使用條款",
      "metaDescription": "適用於 Benedict Interactive 網站與公開內容的使用條款。",
      "lead": "用簡單清楚的方式說明如何使用 Benedict Interactive 網站、內容與公開產品資訊。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 適用範圍與接受",
          "paragraphs": [
            "本條款適用於 Benedict Interactive 網站及其公開內容。在適用法律允許的範圍內，你使用網站即表示接受本條款。如果不同意，請不要使用本網站。本文中的「Benedict Interactive」「我們」等稱呼，是指這家以泰國曼谷為營運地的獨立軟體工作室網站營運方。"
          ]
        },
        {
          "id": "information",
          "heading": "2. 產品資訊與可用狀態",
          "paragraphs": [
            "產品、功能、發布管道、價格、購買系統與服務可能處於不同的上線或可用階段。標示為「規劃中」或「稍後提供」的內容，不代表承諾會在特定日期或以特定形式推出。我們會盡量維持資訊最新，但目前產品、版本說明、購買流程或產品專屬文件可能取代網站上的舊說明。"
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. 合理使用",
          "paragraphs": [
            "你可以合法瀏覽網站、評估產品、取得支援與聯絡我們，但不得濫用網站或干擾正常運作。"
          ],
          "bullets": [
            "不得未經授權嘗試存取非公開系統、管理工具、憑證或資料。",
            "不得故意中斷或使服務超載，不得濫用式抓取、未經授權測試漏洞或繞過技術保護措施。",
            "不得利用網站或內容冒充 Benedict Interactive，或在贊助、所有權、認可關係上誤導他人。"
          ]
        },
        {
          "id": "ip",
          "heading": "4. 智慧財產權",
          "paragraphs": [
            "除明確標示為第三方內容的材料外，網站設計、原創文字、Benedict Interactive 品牌資產、原創美術、軟體材料及其他原創內容均由 Benedict Interactive 擁有或依法獲授權使用，並受適用智慧財產權法律保護。使用網站不會把任何智慧財產權移轉給你。一般瀏覽器快取與個人參考用途可以接受；更廣泛的複製、再散布、重新發佈、轉售或商業再利用，除非法律另有授權，均需要取得許可。"
          ]
        },
        {
          "id": "software",
          "heading": "5. 軟體另行適用授權條款",
          "paragraphs": [
            "Benedict Interactive 發佈的軟體會依適用的軟體授權或產品專屬條款規範，而不只受本網站使用條款約束。通用軟體授權可在本站查閱，產品發布時可能由產品專屬條款補充或取代。"
          ]
        },
        {
          "id": "third-party",
          "heading": "6. 第三方服務與連結",
          "paragraphs": [
            "網站可能連到 App 商店、發佈服務、主機、電子郵件、付款、文件或其他第三方服務。這些服務由各自的營運方管理，可能有不同條款、隱私政策、可用性與費用。提供連結本身不代表 Benedict Interactive 認可目的地上的所有內容、產品或政策。"
          ]
        },
        {
          "id": "warranty",
          "heading": "7. 網站可用性與免責",
          "paragraphs": [
            "網站及公開資訊依可用狀態提供。在法律允許的最大範圍內，Benedict Interactive 不保證持續可存取、完全無錯誤運作，也不保證所有公開資訊永久保持最新。本條款不會排除消費者保護法或其他適用法律規定不得排除的權利或保證。"
          ]
        },
        {
          "id": "liability",
          "heading": "8. 責任限制",
          "paragraphs": [
            "在適用法律允許的最大範圍內，Benedict Interactive 對僅因使用本公開網站而產生的間接、附帶、特殊或衍生損失不負責。法律不允許限制或排除責任的情況除外。"
          ]
        },
        {
          "id": "changes",
          "heading": "9. 條款變更",
          "paragraphs": [
            "當網站、產品、法律要求或商業模式變動時，我們可能更新本條款。價格、退款、付款方式、使用權等重要商業條件，只會在相關系統真正準備好後公布。"
          ]
        },
        {
          "id": "law",
          "heading": "10. 適用法律與強制性權利",
          "paragraphs": [
            "本條款受泰國法律管轄，但不會限制你依居住地法律享有且不得被排除的消費者權利或其他法定權利。"
          ]
        },
        {
          "id": "contact",
          "heading": "11. 聯絡",
          "paragraphs": [
            "本條款相關問題可寄至 benedict.support@gmail.com。Benedict Interactive 在泰國曼谷營運。"
          ]
        }
      ]
    },
    "license": {
      "title": "軟體授權",
      "metaDescription": "Benedict Interactive 發佈軟體所適用的通用授權條款。",
      "lead": "Benedict Interactive 軟體的通用授權架構，包括 Bearagnostic，除非產品專屬條款另有規定。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "scope",
          "heading": "1. 適用範圍",
          "paragraphs": [
            "當 Benedict Interactive 發佈的軟體或下載頁面引用本授權，且沒有產品專屬授權取代它時，本通用軟體授權適用。產品專屬條款可能補充或優先於本授權。公開產品頁面本身並不構成軟體授權；只有在軟體實際依這些條件提供給你時，授權才生效。"
          ]
        },
        {
          "id": "grant",
          "heading": "2. 授權授予",
          "paragraphs": [
            "在遵守這些條件的前提下，Benedict Interactive 授予你有限、非專屬、不可轉讓且不可再授權的使用權，可在你擁有或控制的裝置上安裝與使用軟體，用於產品與適用購買條款允許的合法個人用途或企業內部用途。軟體是授權使用而非出售，其所有權與智慧財產權仍歸 Benedict Interactive 及其授權人所有。"
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. 限制",
          "paragraphs": [
            "除非適用法律明確賦予你不得被限制的權利，否則你不得："
          ],
          "bullets": [
            "未經書面許可重新散布、轉售、再授權、出租、租賃軟體，或把軟體作為代管服務提供；",
            "移除或偽造著作權、署名、商標、授權或所有權聲明；",
            "利用軟體、品牌或產品識別冒充 Benedict Interactive，或把修改版、具誤導性的 build 當成官方版本散布；",
            "繞過授權、entitlement、安全或完整性控制；",
            "進行 reverse engineering、decompile 或 disassemble，除非適用法律即使有本限制仍明確允許。"
          ]
        },
        {
          "id": "copies",
          "heading": "4. 備份與裝置",
          "paragraphs": [
            "為自身已獲授權的使用而有合理需要時，可以製作備份副本，但必須保留所有權與授權聲明。特定產品公布的裝置數、帳號、復原或 entitlement 限制也同樣適用。"
          ]
        },
        {
          "id": "third-party",
          "heading": "5. 開源與第三方元件",
          "paragraphs": [
            "軟體可能包含第三方或開源元件，這些元件仍受各自的授權與聲明約束。如果第三方授權賦予你的權利與本通用授權不同，則對該元件以第三方授權為準。"
          ]
        },
        {
          "id": "updates",
          "heading": "6. 更新與服務",
          "paragraphs": [
            "更新可能增加、修改、修正或移除功能。除非產品另有明確承諾，Benedict Interactive 不保證每個版本、平台、整合、商店或線上服務會永久提供。安全、隱私與資料處理方式應以你實際使用的版本與目前產品文件為準。"
          ]
        },
        {
          "id": "pro",
          "heading": "7. 付費功能與 Pro 權益",
          "paragraphs": [
            "當產品提供付費或 Pro 功能時，以目前實際購買流程或最新產品文件中公布的購買、退款、復原、裝置與權益條款為準。未來購買的可用範圍、價格與復原方式可能調整，並始終受適用法律及有效購買所對應條款約束。"
          ]
        },
        {
          "id": "privacy",
          "heading": "8. 隱私",
          "paragraphs": [
            "使用任何連線型線上服務時，也需遵守相應的隱私權政策。若軟體會處理裝置檔案、診斷資料、帳號資訊或其他資料，產品可能另外說明其特定隱私處理方式。"
          ]
        },
        {
          "id": "warranty",
          "heading": "9. 保證與責任",
          "paragraphs": [
            "在法律允許的最大範圍內，除產品或購買條款明確說明的保證外，軟體不附帶其他保證。本授權不排除法律規定不得排除或限制的法定權利或責任。"
          ]
        },
        {
          "id": "termination",
          "heading": "10. 終止",
          "paragraphs": [
            "如果你重大違反本條件，並且在法律要求給予補救機會時仍未改正，授權將終止。授權終止後，必須停止使用不再獲授權的副本。關於所有權、第三方權利、免責及依其性質應繼續有效的條款，在終止後仍然適用。"
          ]
        },
        {
          "id": "law",
          "heading": "11. 適用法律",
          "paragraphs": [
            "本授權受泰國法律管轄，但不限制你所在司法管轄區內適用且不得排除的法定權利或消費者權利。"
          ]
        },
        {
          "id": "contact",
          "heading": "12. 聯絡",
          "paragraphs": [
            "授權相關問題與許可申請可寄至 benedict.support@gmail.com。"
          ]
        }
      ]
    },
    "legal": {
      "title": "法律資訊與權利",
      "metaDescription": "Benedict Interactive 的著作權、品牌、授權與權利資訊。",
      "lead": "說明所有權、授權、第三方權利，以及 Benedict Interactive 材料的使用規則。",
      "updated": "2026年9月25日",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. 著作權",
          "paragraphs": [
            "© 2026 Benedict Interactive。保留所有權利。除另有說明外，網站原創文字、設計、圖像、美術作品、品牌資產、文件及原創軟體材料均由 Benedict Interactive 擁有或依法獲授權使用，並受適用法律保護。著作權保護不取決於是否顯示本聲明；本聲明是為了更清楚說明所有權與允許的使用範圍。"
          ]
        },
        {
          "id": "brands",
          "heading": "2. 品牌與產品名稱",
          "paragraphs": [
            "Benedict Interactive、Bearagnostic、Benedict Test Center，以及相關標誌、產品標記與視覺識別，除另有說明外均作為 Benedict Interactive 的品牌識別使用。除非明確標示已註冊，本頁不主張任何標記已完成商標註冊；沒有相應註冊依據時，也不會使用註冊商標符號。"
          ]
        },
        {
          "id": "permissions",
          "heading": "3. 材料再利用許可",
          "paragraphs": [
            "你可以連結公開頁面，並以一般個人方式提及 Benedict Interactive 產品。若要大量重新發布原創文字、美術作品、截圖、品牌資產、可下載檔案或軟體，並用於商業用途、轉售、再散布或冒用身份，除非法律另有允許，均需取得許可。若要用於媒體、編輯、教育、合作、發佈或其他再利用，請先聯絡 Benedict Interactive。"
          ]
        },
        {
          "id": "third-party",
          "heading": "4. 第三方與開源權利",
          "paragraphs": [
            "第三方名稱、標誌、平台、服務、函式庫、字型、開源元件及其他材料仍歸各自權利人所有。它們出現在網站上不會把所有權移轉給 Benedict Interactive。相關第三方與開源授權仍對相應材料有效；Benedict Interactive 不會對屬於他人的內容主張排他性權利。"
          ]
        },
        {
          "id": "reports",
          "heading": "5. 權利或侵權問題",
          "paragraphs": [
            "若你認為網站上的材料侵害你的權利，請寄信至 benedict.support@gmail.com，清楚說明相關材料、你認為受影響的權利、主張依據，以及可靠的聯絡方式。我們會審查基於善意提出的報告。"
          ]
        },
        {
          "id": "location",
          "heading": "6. 工作室聯絡資訊",
          "paragraphs": [
            "Benedict Interactive 是一家在泰國曼谷營運的獨立軟體工作室。公開聯絡信箱：benedict.support@gmail.com。「Bangkok, Thailand」僅用於說明工作室所在地區，並不是對外開放、可直接到訪的辦公室地址。"
          ]
        }
      ]
    }
  },
  "hi": {
    "privacy": {
      "title": "गोपनीयता नीति",
      "metaDescription": "Benedict Interactive वेबसाइट एनालिटिक्स, संपर्क संदेशों और गोपनीयता से जुड़ी जानकारी को कैसे संभालता है।",
      "lead": "सरल भाषा में बताया गया है कि यह वेबसाइट क्या मापती है, क्या ट्रैक नहीं करती और Benedict Interactive से संपर्क करने पर क्या होता है।",
      "updated": "25 सितंबर 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. परिचय",
          "paragraphs": [
            "Benedict Interactive एक स्वतंत्र सॉफ़्टवेयर स्टूडियो है, जिसका संचालन बैंकॉक, थाईलैंड से होता है। यह नीति बताती है कि वेबसाइट देखने, उत्पाद लिंक खोलने या हमें ईमेल करने पर जानकारी कैसे संभाली जाती है। वेबसाइट को कम से कम डेटा एकत्र करने के सिद्धांत पर बनाया गया है: हम विज्ञापन ट्रैकर, व्यवहार-आधारित विज्ञापन प्रोफ़ाइल या Benedict द्वारा सेट किए गए एनालिटिक्स कुकीज़ का उपयोग नहीं करते।"
          ]
        },
        {
          "id": "analytics",
          "heading": "2. वेबसाइट एनालिटिक्स",
          "paragraphs": [
            "हम पेज, ट्रैफ़िक, प्रदर्शन, रेफ़रल स्रोत, डिवाइस और देश से जुड़ी समेकित जानकारी देखने के लिए Cloudflare Web Analytics का उपयोग करते हैं। Cloudflare के अनुसार, इन मापों के लिए कुकीज़ या localStorage का उपयोग नहीं किया जाता। Benedict Interactive कुछ सीमित उत्पाद घटनाएँ भी समेकित रूप में दर्ज करता है—जैसे उत्पाद पेज खोलना, डाउनलोड लिंक पर क्लिक करना, सहायता पेज खोलना या भविष्य की Pro पेशकश में रुचि दिखाना—ताकि उत्पाद का उपयोग समझा जा सके, न कि किसी व्यक्ति को ट्रैक करने के लिए।"
          ],
          "bullets": [
            "उत्पाद इवेंट डेटा में IP address, user-agent, referrer, cookies, localStorage identifiers, account identifiers या स्वतंत्र रूप से लिखे गए संदेश की सामग्री संग्रहीत नहीं की जाती।",
            "पेज पाथ query string और URL fragment के बिना दर्ज किए जाते हैं।",
            "डाउनलोड बटन पर क्लिक को केवल एक क्लिक माना जाता है; इसे पूरा हुआ डाउनलोड या इंस्टॉलेशन नहीं माना जाता।"
          ]
        },
        {
          "id": "contact",
          "heading": "3. संपर्क और ईमेल",
          "paragraphs": [
            "संपर्क कंपोज़र आपके ब्राउज़र में संदेश तैयार करता है और फिर ड्राफ़्ट को आपकी चुनी हुई ईमेल ऐप या सेवा में भेजता है। आपके भेजने का निर्णय लेने से पहले वेबसाइट उस ड्राफ़्ट की सामग्री प्राप्त या संग्रहीत नहीं करती। यदि आप Benedict Interactive को ईमेल भेजते हैं, तो हमें ईमेल में शामिल जानकारी मिलती है—जैसे नाम, ईमेल पता, विषय, संदेश और आपके द्वारा स्वेच्छा से दी गई अन्य जानकारी। फिलहाल Benedict Interactive का ईमेल Google की Gmail सेवा के माध्यम से संभाला जाता है।"
          ]
        },
        {
          "id": "purpose",
          "heading": "4. जानकारी का उपयोग क्यों किया जाता है",
          "paragraphs": [
            "समेकित एनालिटिक्स का उपयोग यह समझने के लिए किया जाता है कि वेबसाइट ठीक से काम कर रही है या नहीं, कौन-से उत्पाद पेज अधिक देखे जा रहे हैं और प्रदर्शन या उपयोगिता में कहाँ सुधार चाहिए। संपर्क जानकारी का उपयोग सहायता अनुरोध, प्रतिक्रिया, व्यावसायिक पूछताछ और अन्य संदेशों का जवाब देने के लिए किया जाता है। जहाँ कानून किसी कानूनी आधार की माँग करता है, वहाँ गतिविधि के अनुसार उपयुक्त आधार लागू किया जाता है—जैसे आपके अनुरोध पर कार्रवाई करना, वेबसाइट चलाने और सुधारने का वैध हित, या कानूनी दायित्व पूरा करना।"
          ]
        },
        {
          "id": "providers",
          "heading": "5. सेवा प्रदाता",
          "paragraphs": [
            "Cloudflare वेबसाइट डिलीवरी, Pages hosting, Web Analytics और Analytics Engine प्रदान करता है। Google, Benedict Interactive की ईमेल बातचीत के लिए Gmail प्रदान करता है। ये सेवा प्रदाता अपनी शर्तों और गोपनीयता नीतियों के अनुसार जानकारी संसाधित करते हैं। Benedict Interactive व्यक्तिगत जानकारी नहीं बेचता और संपर्क संदेश विज्ञापनदाताओं या डेटा ब्रोकरों को नहीं देता।"
          ]
        },
        {
          "id": "retention",
          "heading": "6. जानकारी कितने समय तक रखी जाती है",
          "paragraphs": [
            "समेकित एनालिटिक्स डेटा Cloudflare की सेवा सेटिंग और रिटेंशन सीमाओं के अनुसार रखा जाता है; हम इससे स्थायी विज़िटर प्रोफ़ाइल बनाने की कोशिश नहीं करते। ईमेल केवल उतने समय तक रखे जाते हैं जितना जवाब देने, ज़रूरी सहायता या व्यावसायिक रिकॉर्ड रखने, विवाद सुलझाने, सेवा की सुरक्षा या कानूनी दायित्व निभाने के लिए उचित रूप से आवश्यक हो। इसलिए अवधि संदेश और परिस्थिति के अनुसार बदल सकती है।"
          ]
        },
        {
          "id": "rights",
          "heading": "7. आपके गोपनीयता अधिकार",
          "paragraphs": [
            "आप जहाँ रहते हैं, वहाँ के कानून के आधार पर आपको अपनी व्यक्तिगत जानकारी तक पहुँच, सुधार, हटाने, प्रोसेसिंग सीमित करने, आपत्ति करने, डेटा पोर्टेबिलिटी या अन्य अधिकार मिल सकते हैं। आपको संबंधित डेटा संरक्षण प्राधिकरण से शिकायत करने का अधिकार भी हो सकता है। अनुरोध के लिए benedict.support@gmail.com पर ईमेल करें। अनुरोध सत्यापित करने और संबंधित पत्राचार खोजने के लिए हम आवश्यक जानकारी माँग सकते हैं।"
          ]
        },
        {
          "id": "international",
          "heading": "8. अंतरराष्ट्रीय प्रोसेसिंग",
          "paragraphs": [
            "Cloudflare और Google कई देशों में काम करते हैं। इसलिए उनकी सेवाओं के माध्यम से संसाधित जानकारी आपके देश के बाहर भी संभाली जा सकती है, संबंधित सेवा प्रदाताओं की सुरक्षा व्यवस्थाओं, शर्तों और लागू कानून के अधीन।"
          ]
        },
        {
          "id": "children",
          "heading": "9. बच्चे",
          "paragraphs": [
            "यह एक सामान्य सॉफ़्टवेयर स्टूडियो और उत्पाद जानकारी वाली वेबसाइट है और बच्चों की व्यक्तिगत जानकारी एकत्र करने के लिए नहीं बनाई गई है। यदि आपको लगता है कि किसी बच्चे ने Benedict Interactive को व्यक्तिगत जानकारी भेजी है, तो कृपया हमसे संपर्क करें ताकि स्थिति की समीक्षा की जा सके।"
          ]
        },
        {
          "id": "changes",
          "heading": "10. बदलाव और संपर्क",
          "paragraphs": [
            "वेबसाइट, एनालिटिक्स, संपर्क प्रणाली, उत्पाद या कानूनी आवश्यकताओं में बदलाव होने पर इस नीति को अपडेट किया जा सकता है। ऊपर दिया गया दिनांक नवीनतम संशोधन बताता है। गोपनीयता संबंधी प्रश्न benedict.support@gmail.com पर भेजे जा सकते हैं। Benedict Interactive का संचालन बैंकॉक, थाईलैंड से होता है।"
          ]
        }
      ]
    },
    "terms": {
      "title": "उपयोग की शर्तें",
      "metaDescription": "Benedict Interactive वेबसाइट और सार्वजनिक सामग्री के उपयोग पर लागू शर्तें।",
      "lead": "Benedict Interactive वेबसाइट, उसकी सामग्री और सार्वजनिक उत्पाद जानकारी के उपयोग के लिए साफ़ और समझने योग्य नियम।",
      "updated": "25 सितंबर 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. दायरा और सहमति",
          "paragraphs": [
            "ये शर्तें Benedict Interactive वेबसाइट और उसकी सार्वजनिक सामग्री पर लागू होती हैं। लागू कानून जितनी अनुमति देता है, वेबसाइट का उपयोग करने पर आप इन शर्तों से सहमत माने जाते हैं। यदि सहमत नहीं हैं, तो वेबसाइट का उपयोग न करें। इस दस्तावेज़ में “Benedict Interactive”, “हम” और इसी अर्थ वाले शब्द बैंकॉक, थाईलैंड में स्थित इस स्वतंत्र सॉफ़्टवेयर स्टूडियो वेबसाइट के संचालक को दर्शाते हैं।"
          ]
        },
        {
          "id": "information",
          "heading": "2. उत्पाद जानकारी और उपलब्धता",
          "paragraphs": [
            "उत्पाद, फ़ीचर, वितरण चैनल, कीमतें, खरीद प्रणाली और सेवाएँ अलग-अलग उपलब्धता या रोलआउट चरणों में हो सकती हैं। किसी चीज़ को ‘योजनाबद्ध’ या ‘बाद में उपलब्ध’ बताना किसी तय तारीख या रूप में उपलब्ध कराने का वादा नहीं है। हम जानकारी को यथासंभव नया रखते हैं, लेकिन मौजूदा उत्पाद, रिलीज़ नोट्स, खरीद प्रक्रिया या उत्पाद-विशिष्ट दस्तावेज़ वेबसाइट के पुराने विवरणों की जगह ले सकते हैं।"
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. स्वीकार्य उपयोग",
          "paragraphs": [
            "आप वेबसाइट का उपयोग कानूनी ब्राउज़िंग, उत्पाद मूल्यांकन, सहायता और संपर्क के लिए कर सकते हैं। वेबसाइट का दुरुपयोग या उसके संचालन में बाधा नहीं डालनी चाहिए।"
          ],
          "bullets": [
            "गैर-सार्वजनिक सिस्टम, एडमिन टूल, क्रेडेंशियल या डेटा तक बिना अनुमति पहुँचने की कोशिश न करें।",
            "जानबूझकर सेवा बाधित या ओवरलोड न करें, दुरुपयोग वाली scraping न करें, बिना अनुमति vulnerability testing न करें और तकनीकी सुरक्षा को बायपास न करें।",
            "वेबसाइट या उसकी सामग्री का उपयोग Benedict Interactive बनकर दिखाने या sponsorship, ownership या endorsement के बारे में लोगों को भ्रमित करने के लिए न करें।"
          ]
        },
        {
          "id": "ip",
          "heading": "4. बौद्धिक संपदा",
          "paragraphs": [
            "जहाँ किसी सामग्री को स्पष्ट रूप से तीसरे पक्ष की सामग्री बताया गया है, उसे छोड़कर वेबसाइट डिज़ाइन, मूल लेखन, Benedict Interactive ब्रांड एसेट, चित्रण, सॉफ़्टवेयर सामग्री और अन्य मूल सामग्री Benedict Interactive की है या लाइसेंस के तहत उपयोग की जाती है और लागू कानून से सुरक्षित है। वेबसाइट का उपयोग करने से कोई बौद्धिक संपदा अधिकार आपको हस्तांतरित नहीं होता। सामान्य ब्राउज़र कैश और व्यक्तिगत संदर्भ स्वीकार्य हैं; व्यापक कॉपी, पुनर्वितरण, पुनर्प्रकाशन, पुनर्विक्रय या व्यावसायिक उपयोग के लिए अनुमति चाहिए, जब तक कानून अलग अधिकार न देता हो।"
          ]
        },
        {
          "id": "software",
          "heading": "5. सॉफ़्टवेयर के लिए अलग लाइसेंस लागू होता है",
          "paragraphs": [
            "Benedict Interactive द्वारा वितरित सॉफ़्टवेयर पर लागू सॉफ़्टवेयर लाइसेंस या उत्पाद-विशिष्ट शर्तें लागू होती हैं, केवल ये वेबसाइट शर्तें नहीं। सामान्य सॉफ़्टवेयर लाइसेंस इस साइट पर उपलब्ध है और उत्पाद जारी होने पर उत्पाद-विशिष्ट शर्तें उसे पूरक या प्रतिस्थापित कर सकती हैं।"
          ]
        },
        {
          "id": "third-party",
          "heading": "6. तीसरे पक्ष की सेवाएँ और लिंक",
          "paragraphs": [
            "वेबसाइट ऐप स्टोर, वितरण सेवाओं, होस्टिंग, ईमेल, भुगतान, दस्तावेज़ या अन्य तीसरे पक्ष की सेवाओं से लिंक कर सकती है। हर सेवा अपने संचालक के नियंत्रण में होती है और उसकी अपनी शर्तें, गोपनीयता नीति, उपलब्धता या शुल्क हो सकते हैं। केवल लिंक दिए जाने से यह नहीं माना जाना चाहिए कि Benedict Interactive उस गंतव्य की हर बात, उत्पाद या नीति का समर्थन करता है।"
          ]
        },
        {
          "id": "warranty",
          "heading": "7. वेबसाइट उपलब्धता और अस्वीकरण",
          "paragraphs": [
            "वेबसाइट और सार्वजनिक जानकारी उपलब्धता के आधार पर प्रदान की जाती है। कानून जितनी अधिकतम अनुमति देता है, Benedict Interactive लगातार उपलब्धता, त्रुटिरहित संचालन या हर जानकारी के हमेशा अद्यतन रहने की गारंटी नहीं देता। उपभोक्ता कानून के तहत जिन अधिकारों या गारंटी को हटाया नहीं जा सकता, वे इन शर्तों से प्रभावित नहीं होंगे।"
          ]
        },
        {
          "id": "liability",
          "heading": "8. दायित्व की सीमा",
          "paragraphs": [
            "लागू कानून जितनी अनुमति देता है, Benedict Interactive इस सार्वजनिक वेबसाइट के उपयोग मात्र से होने वाले अप्रत्यक्ष, आकस्मिक, विशेष या परिणामी नुकसान के लिए उत्तरदायी नहीं होगा। जहाँ कानून दायित्व को सीमित या बाहर करने की अनुमति नहीं देता, वहाँ यह सीमा लागू नहीं होगी।"
          ]
        },
        {
          "id": "changes",
          "heading": "9. शर्तों में बदलाव",
          "paragraphs": [
            "वेबसाइट, उत्पाद, कानून या व्यवसाय मॉडल बदलने पर इन शर्तों को अपडेट किया जा सकता है। कीमत, रिफंड, भुगतान के तरीके और entitlement नियम जैसी महत्वपूर्ण व्यावसायिक शर्तें तभी प्रकाशित होंगी जब संबंधित सिस्टम वास्तव में तैयार हों।"
          ]
        },
        {
          "id": "law",
          "heading": "10. लागू कानून और अनिवार्य अधिकार",
          "paragraphs": [
            "ये शर्तें थाईलैंड के कानूनों के अधीन हैं, लेकिन आपके निवास स्थान के कानून के तहत मिलने वाले अनिवार्य उपभोक्ता या अन्य वैधानिक अधिकारों को सीमित नहीं करतीं।"
          ]
        },
        {
          "id": "contact",
          "heading": "11. संपर्क",
          "paragraphs": [
            "इन शर्तों से जुड़े प्रश्न benedict.support@gmail.com पर भेजे जा सकते हैं। Benedict Interactive का संचालन बैंकॉक, थाईलैंड से होता है।"
          ]
        }
      ]
    },
    "license": {
      "title": "सॉफ़्टवेयर लाइसेंस",
      "metaDescription": "Benedict Interactive द्वारा वितरित सॉफ़्टवेयर पर लागू सामान्य लाइसेंस शर्तें।",
      "lead": "Benedict Interactive सॉफ़्टवेयर के लिए सामान्य लाइसेंस ढाँचा, जिसमें Bearagnostic भी शामिल है जब तक उत्पाद-विशिष्ट शर्तें कुछ और न कहें।",
      "updated": "25 सितंबर 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. दायरा",
          "paragraphs": [
            "यह सामान्य लाइसेंस Benedict Interactive द्वारा वितरित उस सॉफ़्टवेयर पर लागू होता है, जहाँ सॉफ़्टवेयर या उसका डाउनलोड पेज इस लाइसेंस का उल्लेख करता है और कोई उत्पाद-विशिष्ट लाइसेंस इसे बदल नहीं रहा। उत्पाद-विशिष्ट शर्तें इसमें जोड़ सकती हैं या कुछ मामलों में इससे ऊपर लागू हो सकती हैं। केवल सार्वजनिक उत्पाद पेज दिखना अपने आप लाइसेंस नहीं देता; लाइसेंस तब लागू होता है जब सॉफ़्टवेयर वास्तव में इन शर्तों के तहत आपको उपलब्ध कराया जाता है।"
          ]
        },
        {
          "id": "grant",
          "heading": "2. लाइसेंस प्रदान करना",
          "paragraphs": [
            "इन शर्तों के अधीन Benedict Interactive आपको सीमित, गैर-अनन्य, गैर-हस्तांतरणीय और गैर-सबलाइसेंस योग्य अधिकार देता है कि आप अपने स्वामित्व या नियंत्रण वाले उपकरणों पर सॉफ़्टवेयर इंस्टॉल और उपयोग कर सकें, वैध व्यक्तिगत उपयोग या आंतरिक व्यावसायिक उपयोग के लिए, जैसा उत्पाद और लागू खरीद शर्तें अनुमति दें। सॉफ़्टवेयर बेचा नहीं जाता, लाइसेंस के तहत दिया जाता है; स्वामित्व और बौद्धिक संपदा अधिकार Benedict Interactive और उसके licensors के पास रहते हैं।"
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. प्रतिबंध",
          "paragraphs": [
            "जब तक लागू कानून आपको ऐसा अधिकार स्पष्ट रूप से न देता हो जिसे सीमित नहीं किया जा सकता, आप यह नहीं कर सकते:"
          ],
          "bullets": [
            "लिखित अनुमति के बिना सॉफ़्टवेयर को पुनर्वितरित, पुनर्विक्रय, sublicense, किराये पर देना, lease करना या hosted service के रूप में उपलब्ध कराना;",
            "copyright, attribution, trademark, license या ownership notices हटाना या झूठा दिखाना;",
            "सॉफ़्टवेयर, ब्रांड या उत्पाद पहचान का उपयोग Benedict Interactive बनकर दिखाने या बदले/भ्रामक build को आधिकारिक रिलीज़ बताकर बाँटने के लिए करना;",
            "license, entitlement, security या integrity controls को बायपास करना;",
            "reverse engineering, decompile या disassemble करना, सिवाय उस सीमा तक जहाँ लागू कानून इस प्रतिबंध के बावजूद इसे स्पष्ट रूप से अनुमति देता हो।"
          ]
        },
        {
          "id": "copies",
          "heading": "4. प्रतियाँ और डिवाइस",
          "paragraphs": [
            "अपने लाइसेंस प्राप्त उपयोग के लिए आवश्यकता होने पर उचित संख्या में बैकअप प्रतियाँ बनाई जा सकती हैं, बशर्ते ownership और license notices बने रहें। किसी उत्पाद के लिए प्रकाशित device, account, restoration या entitlement सीमाएँ भी लागू रहेंगी।"
          ]
        },
        {
          "id": "third-party",
          "heading": "5. ओपन-सोर्स और तीसरे पक्ष के घटक",
          "paragraphs": [
            "सॉफ़्टवेयर में तीसरे पक्ष या ओपन-सोर्स घटक शामिल हो सकते हैं। उन पर उनके अपने लाइसेंस और notices लागू रहेंगे। यदि किसी तीसरे पक्ष का लाइसेंस इस सामान्य लाइसेंस से अलग अधिकार देता है, तो संबंधित घटक पर वही तीसरे पक्ष का लाइसेंस लागू होगा।"
          ]
        },
        {
          "id": "updates",
          "heading": "6. अपडेट और सेवाएँ",
          "paragraphs": [
            "अपडेट फ़ीचर जोड़, बदल, सुधार या हटा सकते हैं। किसी उत्पाद के लिए अलग स्पष्ट वादा न हो तो Benedict Interactive यह गारंटी नहीं देता कि हर संस्करण, प्लेटफ़ॉर्म, integration, स्टोर या ऑनलाइन सेवा हमेशा उपलब्ध रहेगी। सुरक्षा, गोपनीयता और डेटा व्यवहार का मूल्यांकन उस संस्करण और वर्तमान दस्तावेज़ के आधार पर किया जाना चाहिए जिसे आप वास्तव में उपयोग कर रहे हैं।"
          ]
        },
        {
          "id": "pro",
          "heading": "7. भुगतान वाले फ़ीचर और Pro entitlement",
          "paragraphs": [
            "जहाँ कोई उत्पाद भुगतान वाले या Pro फ़ीचर देता है, वहाँ खरीद, रिफंड, बहाली, डिवाइस और उपयोग-अधिकार से जुड़ी वही शर्तें लागू होंगी जो सक्रिय बिक्री प्रक्रिया या मौजूदा उत्पाद दस्तावेज़ में प्रकाशित हैं। भविष्य की खरीदों के लिए उपलब्धता, कीमत और बहाली के तरीके बदल सकते हैं, और वे लागू कानून तथा वैध खरीद पर लागू शर्तों के अधीन रहेंगे।"
          ]
        },
        {
          "id": "privacy",
          "heading": "8. गोपनीयता",
          "paragraphs": [
            "कनेक्टेड ऑनलाइन सेवाओं के उपयोग पर संबंधित गोपनीयता नीति भी लागू होती है। यदि कोई उत्पाद डिवाइस फ़ाइल, डायग्नोस्टिक डेटा, अकाउंट जानकारी या अन्य डेटा संसाधित करता है, तो उसके लिए अलग उत्पाद-विशिष्ट गोपनीयता जानकारी दी जा सकती है।"
          ]
        },
        {
          "id": "warranty",
          "heading": "9. वारंटी और दायित्व",
          "paragraphs": [
            "कानून जितनी अधिकतम अनुमति देता है, सॉफ़्टवेयर पर उन वारंटी के अलावा कोई अतिरिक्त वारंटी नहीं है जो उत्पाद या खरीद शर्तों में स्पष्ट रूप से दी गई हों। यह लाइसेंस ऐसे वैधानिक अधिकार या दायित्व को समाप्त नहीं करता जिन्हें कानूनन बाहर या सीमित नहीं किया जा सकता।"
          ]
        },
        {
          "id": "termination",
          "heading": "10. समाप्ति",
          "paragraphs": [
            "यदि आप इन शर्तों का गंभीर उल्लंघन करते हैं और जहाँ कानून सुधार का अवसर आवश्यक बनाता है वहाँ उल्लंघन ठीक नहीं करते, तो लाइसेंस समाप्त हो जाता है। समाप्ति के बाद उन प्रतियों का उपयोग बंद करना होगा जिनके लिए लाइसेंस नहीं रहा। ownership, तीसरे पक्ष के अधिकार, अस्वीकरण और स्वभाव से समाप्ति के बाद भी लागू रहने वाली अन्य शर्तें जारी रहेंगी।"
          ]
        },
        {
          "id": "law",
          "heading": "11. लागू कानून",
          "paragraphs": [
            "यह लाइसेंस थाईलैंड के कानूनों के अधीन है, लेकिन आपके क्षेत्र में लागू अनिवार्य वैधानिक या उपभोक्ता अधिकारों को सीमित नहीं करता।"
          ]
        },
        {
          "id": "contact",
          "heading": "12. संपर्क",
          "paragraphs": [
            "लाइसेंस से जुड़े प्रश्न और अनुमति अनुरोध benedict.support@gmail.com पर भेजे जा सकते हैं।"
          ]
        }
      ]
    },
    "legal": {
      "title": "कानूनी जानकारी और अधिकार",
      "metaDescription": "Benedict Interactive के कॉपीराइट, ब्रांड, अनुमति और अधिकारों की जानकारी।",
      "lead": "स्वामित्व, अनुमति, तीसरे पक्ष के अधिकार और Benedict Interactive की सामग्री के उपयोग से जुड़े नियम।",
      "updated": "25 सितंबर 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. कॉपीराइट",
          "paragraphs": [
            "© 2026 Benedict Interactive. सर्वाधिकार सुरक्षित। जहाँ अलग से कुछ न लिखा हो, वेबसाइट का मूल पाठ, डिज़ाइन, ग्राफ़िक्स, कलाकृति, ब्रांड एसेट, दस्तावेज़ और मूल सॉफ़्टवेयर सामग्री Benedict Interactive की है या लाइसेंस के तहत उपयोग की जाती है और लागू कानून से सुरक्षित है। कॉपीराइट सुरक्षा इस नोटिस की मौजूदगी पर निर्भर नहीं करती; यह नोटिस स्वामित्व और अनुमत उपयोग को स्पष्ट करने के लिए है।"
          ]
        },
        {
          "id": "brands",
          "heading": "2. ब्रांड और उत्पाद नाम",
          "paragraphs": [
            "Benedict Interactive, Bearagnostic, Benedict Test Center, उनके लोगो, उत्पाद चिह्न और संबंधित दृश्य पहचान, जब तक अलग न लिखा हो, Benedict Interactive के ब्रांड पहचान-चिह्न के रूप में उपयोग किए जाते हैं। जब तक स्पष्ट रूप से पंजीकृत न बताया जाए, यह पेज किसी चिह्न के पंजीकृत होने का दावा नहीं करता; पंजीकरण की पुष्टि के बिना registered trademark symbol का उपयोग नहीं किया जाता।"
          ]
        },
        {
          "id": "permissions",
          "heading": "3. सामग्री दोबारा उपयोग करने की अनुमति",
          "paragraphs": [
            "आप सार्वजनिक पेजों से लिंक कर सकते हैं और उत्पादों का सामान्य व्यक्तिगत संदर्भ दे सकते हैं। लेकिन मूल लेखन, कलाकृति, स्क्रीनशॉट, ब्रांड एसेट, डाउनलोड फ़ाइल या सॉफ़्टवेयर का महत्वपूर्ण हिस्सा व्यावसायिक उपयोग, पुनर्विक्रय, पुनर्वितरण या प्रतिरूपण के लिए पुनर्प्रकाशित करने के लिए अनुमति चाहिए, जब तक कानून स्वतंत्र रूप से उस उपयोग की अनुमति न देता हो। प्रेस, संपादकीय, शिक्षा, साझेदारी, वितरण या अन्य पुन: उपयोग के लिए पहले Benedict Interactive से संपर्क करें।"
          ]
        },
        {
          "id": "third-party",
          "heading": "4. तीसरे पक्ष और ओपन-सोर्स अधिकार",
          "paragraphs": [
            "तीसरे पक्ष के नाम, लोगो, प्लेटफ़ॉर्म, सेवाएँ, लाइब्रेरी, फ़ॉन्ट, ओपन-सोर्स घटक और अन्य सामग्री उनके संबंधित मालिकों की ही रहती है। साइट पर दिखाई देने से उनका स्वामित्व Benedict Interactive को स्थानांतरित नहीं होता। संबंधित तीसरे पक्ष और ओपन-सोर्स लाइसेंस लागू रहते हैं; Benedict Interactive दूसरों की सामग्री पर विशेष अधिकार का दावा नहीं करता।"
          ]
        },
        {
          "id": "reports",
          "heading": "5. अधिकार या उल्लंघन संबंधी शिकायत",
          "paragraphs": [
            "यदि आपको लगता है कि साइट की कोई सामग्री आपके अधिकारों का उल्लंघन करती है, तो benedict.support@gmail.com पर स्पष्ट सूचना भेजें जिसमें संबंधित सामग्री, प्रभावित अधिकार, दावे का आधार और भरोसेमंद संपर्क तरीका हो। सद्भावना से भेजी गई रिपोर्ट की समीक्षा की जाएगी।"
          ]
        },
        {
          "id": "location",
          "heading": "6. स्टूडियो संपर्क",
          "paragraphs": [
            "Benedict Interactive एक स्वतंत्र सॉफ़्टवेयर स्टूडियो है, जिसका संचालन बैंकॉक, थाईलैंड से होता है। सार्वजनिक संपर्क ईमेल: benedict.support@gmail.com। “Bangkok, Thailand” स्टूडियो की लोकेशन बताता है; इसे आम लोगों के लिए खुला walk-in office address नहीं बताया गया है।"
          ]
        }
      ]
    }
  },
  "ar": {
    "privacy": {
      "title": "سياسة الخصوصية",
      "metaDescription": "توضح هذه السياسة كيف تتعامل Benedict Interactive مع تحليلات الموقع ورسائل التواصل والخصوصية.",
      "lead": "شرح واضح لما يقيسه هذا الموقع، وما لا يتتبعه، وما الذي يحدث عندما تتواصل مع Benedict Interactive.",
      "updated": "25 سبتمبر 2026",
      "sections": [
        {
          "id": "overview",
          "heading": "1. نظرة عامة",
          "paragraphs": [
            "Benedict Interactive استوديو برمجيات مستقل يعمل من بانكوك، تايلاند. توضح هذه السياسة كيفية التعامل مع المعلومات عند زيارة الموقع أو فتح روابط المنتجات أو التواصل معنا عبر البريد الإلكتروني. صُمم الموقع وفق مبدأ تقليل البيانات إلى الحد الضروري؛ فلا نستخدم أدوات تتبع إعلانية، أو ملفات تعريف للإعلانات السلوكية، أو ملفات تعريف ارتباط تحليلية تضعها Benedict بنفسها."
          ]
        },
        {
          "id": "analytics",
          "heading": "2. تحليلات الموقع",
          "paragraphs": [
            "نستخدم Cloudflare Web Analytics للحصول على معلومات مجمعة عن الصفحات وحركة الزيارات والأداء ومصادر الإحالة والأجهزة والبلدان. وتذكر Cloudflare أن هذه القياسات لا تعتمد على ملفات تعريف الارتباط أو localStorage. كما تسجل Benedict Interactive عدداً محدوداً من أحداث المنتجات بصورة مجمعة، مثل فتح صفحة منتج، أو النقر على رابط تنزيل، أو فتح صفحة الدعم، أو إبداء الاهتمام بخيار Pro مخطط له. والهدف هو فهم استخدام المنتج، لا تتبع الأفراد."
          ],
          "bullets": [
            "لا تحفظ بيانات أحداث المنتج عناوين IP أو user-agent أو referrer أو ملفات تعريف الارتباط أو معرّفات localStorage أو معرّفات الحساب أو محتوى الرسائل الحرة.",
            "تُسجل مسارات الصفحات من دون query string أو URL fragment.",
            "يُحسب الضغط على زر التنزيل كنقرة فقط، ولا يُعامل على أنه تنزيل أو تثبيت مكتمل."
          ]
        },
        {
          "id": "contact",
          "heading": "3. التواصل والبريد الإلكتروني",
          "paragraphs": [
            "يقوم محرر التواصل بإعداد الرسالة داخل متصفحك ثم يمرر المسودة إلى تطبيق البريد أو الخدمة التي تختارها. لا يتلقى الموقع محتوى المسودة ولا يخزنه قبل أن تقرر إرسالها. إذا أرسلت بريداً إلى Benedict Interactive فسنستلم المعلومات الموجودة في الرسالة، مثل الاسم وعنوان البريد والموضوع والمحتوى وأي معلومات أخرى تختار إضافتها. حالياً تُدار مراسلات Benedict Interactive عبر Gmail، وهي خدمة من Google."
          ]
        },
        {
          "id": "purpose",
          "heading": "4. لماذا نستخدم المعلومات",
          "paragraphs": [
            "تساعدنا التحليلات المجمعة على معرفة ما إذا كان الموقع يعمل جيداً، وأي صفحات المنتجات تحظى بالاهتمام، وأين يمكن تحسين الأداء أو سهولة الاستخدام. تُستخدم معلومات التواصل للرد على طلبات الدعم والملاحظات والاستفسارات التجارية والمراسلات الأخرى. وعندما يفرض القانون وجود أساس قانوني للمعالجة، نعتمد الأساس المناسب للنشاط، مثل تنفيذ ما طلبته، أو المصلحة المشروعة في تشغيل الموقع وتحسينه، أو الوفاء بالتزامات قانونية."
          ]
        },
        {
          "id": "providers",
          "heading": "5. مزودو الخدمات",
          "paragraphs": [
            "تقدم Cloudflare خدمات توصيل الموقع وPages hosting وWeb Analytics وAnalytics Engine. وتقدم Google خدمة Gmail المستخدمة في مراسلات Benedict Interactive. يعالج هؤلاء المزودون المعلومات وفق شروطهم وممارسات الخصوصية الخاصة بهم. لا تبيع Benedict Interactive المعلومات الشخصية ولا تقدم رسائل التواصل إلى المعلنين أو وسطاء البيانات."
          ]
        },
        {
          "id": "retention",
          "heading": "6. مدة الاحتفاظ",
          "paragraphs": [
            "تُحفظ بيانات التحليلات المجمعة وفق إعدادات وحدود الاحتفاظ في خدمات Cloudflare، ولا نحاول تحويلها إلى ملفات تعريف دائمة للزوار. أما البريد الإلكتروني فيُحتفظ به فقط للمدة المعقولة اللازمة للرد، أو حفظ سجلات دعم أو أعمال مهمة، أو حل النزاعات، أو حماية الخدمة، أو الوفاء بالالتزامات القانونية. لذلك قد تختلف المدة بحسب الرسالة والسياق."
          ]
        },
        {
          "id": "rights",
          "heading": "7. حقوقك المتعلقة بالخصوصية",
          "paragraphs": [
            "بحسب مكان إقامتك، قد يمنحك القانون حقوقاً في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها أو تقييد معالجتها أو الاعتراض عليها أو نقلها، إضافة إلى حقوق أخرى، وقد يكون لك أيضاً حق الشكوى لدى جهة حماية بيانات مختصة. لتقديم طلب، راسل benedict.support@gmail.com. وقد نطلب معلومات كافية للتحقق من الطلب والعثور على المراسلات ذات الصلة."
          ]
        },
        {
          "id": "international",
          "heading": "8. المعالجة الدولية",
          "paragraphs": [
            "تعمل Cloudflare وGoogle على مستوى دولي، ولذلك قد تُعالج المعلومات عبر خدماتهما في بلدان غير بلدك، وفق الضمانات والشروط التي يعتمدها المزودون والقانون المعمول به."
          ]
        },
        {
          "id": "children",
          "heading": "9. الأطفال",
          "paragraphs": [
            "هذا الموقع موقع عام لاستوديو برمجيات ومعلومات منتجات، ولم يُصمم لجمع معلومات شخصية من الأطفال. إذا كنت تعتقد أن طفلاً أرسل معلومات شخصية إلى Benedict Interactive، فتواصل معنا حتى نتمكن من مراجعة الحالة."
          ]
        },
        {
          "id": "changes",
          "heading": "10. التغييرات والتواصل",
          "paragraphs": [
            "قد نحدّث هذه السياسة عندما يتغير الموقع أو أدوات التحليل أو نظام التواصل أو المنتجات أو المتطلبات القانونية. ويظهر التاريخ أعلى الصفحة آخر مراجعة. يمكن إرسال أسئلة الخصوصية إلى benedict.support@gmail.com. تعمل Benedict Interactive من بانكوك، تايلاند."
          ]
        }
      ]
    },
    "terms": {
      "title": "شروط الاستخدام",
      "metaDescription": "الشروط التي تحكم استخدام موقع Benedict Interactive ومحتواه العام.",
      "lead": "قواعد مباشرة وسهلة الفهم لاستخدام موقع Benedict Interactive ومحتواه ومعلومات المنتجات العامة.",
      "updated": "25 سبتمبر 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. النطاق والموافقة",
          "paragraphs": [
            "تنطبق هذه الشروط على موقع Benedict Interactive ومحتواه العام. باستخدامك الموقع، فإنك توافق على هذه الشروط بالقدر الذي يسمح به القانون. إذا لم توافق، فلا تستخدم الموقع. في هذه الوثيقة، تشير عبارات «Benedict Interactive» و«نحن» وما شابهها إلى الجهة التي تدير موقع هذا الاستوديو البرمجي المستقل في بانكوك، تايلاند."
          ]
        },
        {
          "id": "information",
          "heading": "2. معلومات المنتج ومدى التوفر",
          "paragraphs": [
            "قد تختلف حالة توفر المنتجات والميزات وقنوات التوزيع والأسعار وأنظمة الشراء والخدمات بحسب مرحلة الإطلاق. وإذا وُصف شيء بأنه مخطط له أو سيُتاح لاحقاً، فهذا لا يعد وعداً بتاريخ أو شكل محدد. نحرص على إبقاء المعلومات محدثة، لكن المنتج الحالي أو ملاحظات الإصدار أو مسار الشراء أو وثائق المنتج قد تحل محل أوصاف أقدم على الموقع."
          ]
        },
        {
          "id": "acceptable-use",
          "heading": "3. الاستخدام المقبول",
          "paragraphs": [
            "يمكنك استخدام الموقع للتصفح والتقييم والحصول على الدعم والتواصل بصورة قانونية. ولا يجوز إساءة استخدام الموقع أو التدخل في تشغيله."
          ],
          "bullets": [
            "لا تحاول الوصول من دون إذن إلى أنظمة غير عامة أو أدوات الإدارة أو بيانات الاعتماد أو البيانات.",
            "لا تتعمد تعطيل الخدمة أو تحميلها فوق طاقتها، ولا تمارس scraping بشكل مسيء، ولا تختبر الثغرات من دون تصريح، ولا تتجاوز وسائل الحماية التقنية.",
            "لا تستخدم الموقع أو محتواه لانتحال صفة Benedict Interactive أو لتضليل الآخرين بشأن الرعاية أو الملكية أو التأييد."
          ]
        },
        {
          "id": "ip",
          "heading": "4. الملكية الفكرية",
          "paragraphs": [
            "باستثناء المواد المعرّفة صراحة على أنها لطرف ثالث، فإن تصميم الموقع والنصوص الأصلية وأصول علامة Benedict Interactive والأعمال الفنية ومواد البرمجيات وغيرها من المحتوى الأصلي مملوك لـ Benedict Interactive أو مرخّص لها، ومحمي بالقوانين المعمول بها. استخدام الموقع لا ينقل إليك ملكية أي حق من حقوق الملكية الفكرية. يُسمح بالتخزين المؤقت العادي في المتصفح والاستخدام الشخصي كمرجع، أما النسخ أو إعادة التوزيع أو إعادة النشر أو إعادة البيع أو الاستخدام التجاري الأوسع فيحتاج إلى إذن ما لم يمنح القانون حقاً مستقلاً بذلك."
          ]
        },
        {
          "id": "software",
          "heading": "5. للبرمجيات ترخيص منفصل",
          "paragraphs": [
            "البرمجيات التي توزعها Benedict Interactive تخضع للترخيص المطبق أو لشروط خاصة بالمنتج، وليس لهذه الشروط الخاصة بالموقع وحدها. يتوفر الترخيص العام للبرمجيات على هذا الموقع، وقد تكمّله أو تستبدله شروط خاصة بالمنتج عند إطلاقه."
          ]
        },
        {
          "id": "third-party",
          "heading": "6. خدمات وروابط الأطراف الثالثة",
          "paragraphs": [
            "قد يحتوي الموقع على روابط لمتاجر التطبيقات أو خدمات التوزيع أو الاستضافة أو البريد الإلكتروني أو الدفع أو الوثائق أو خدمات أخرى تابعة لأطراف ثالثة. لكل خدمة مشغلها وشروطها وسياسة الخصوصية وتوافرها ورسومها المحتملة. وجود رابط لا يعني أن Benedict Interactive تؤيد كل ما يرد في الوجهة."
          ]
        },
        {
          "id": "warranty",
          "heading": "7. توافر الموقع وإخلاء المسؤولية",
          "paragraphs": [
            "يُقدم الموقع ومعلوماته العامة حسب التوافر. وإلى أقصى حد يسمح به القانون، لا تضمن Benedict Interactive وصولاً متواصلاً أو تشغيلاً خالياً تماماً من الأخطاء أو بقاء كل المعلومات محدثة إلى الأبد. ولا تستبعد هذه الشروط أي حقوق أو ضمانات لا يسمح قانون حماية المستهلك باستبعادها."
          ]
        },
        {
          "id": "liability",
          "heading": "8. تحديد المسؤولية",
          "paragraphs": [
            "إلى أقصى حد يسمح به القانون المعمول به، لا تتحمل Benedict Interactive مسؤولية الخسائر غير المباشرة أو العرضية أو الخاصة أو التبعية الناتجة فقط عن استخدام هذا الموقع العام. ولا ينطبق هذا التحديد إذا كان القانون لا يسمح بتحديد المسؤولية أو استبعادها."
          ]
        },
        {
          "id": "changes",
          "heading": "9. تعديل الشروط",
          "paragraphs": [
            "قد نحدّث هذه الشروط عندما يتغير الموقع أو المنتجات أو القانون أو نموذج الأعمال. ولن تُنشر الشروط التجارية المهمة، مثل الأسعار والاسترداد وطرق الدفع وقواعد entitlement، إلا عندما تصبح الأنظمة ذات الصلة جاهزة فعلياً."
          ]
        },
        {
          "id": "law",
          "heading": "10. القانون المطبق والحقوق الإلزامية",
          "paragraphs": [
            "تخضع هذه الشروط لقوانين تايلاند، من دون الحد من حقوق المستهلك أو الحقوق القانونية الإلزامية التي تنطبق عليك وفق قانون مكان إقامتك."
          ]
        },
        {
          "id": "contact",
          "heading": "11. التواصل",
          "paragraphs": [
            "يمكن إرسال الأسئلة المتعلقة بهذه الشروط إلى benedict.support@gmail.com. تعمل Benedict Interactive من بانكوك، تايلاند."
          ]
        }
      ]
    },
    "license": {
      "title": "ترخيص البرمجيات",
      "metaDescription": "شروط الترخيص العامة للبرمجيات التي توزعها Benedict Interactive.",
      "lead": "إطار الترخيص العام لبرمجيات Benedict Interactive، بما في ذلك Bearagnostic ما لم تنص شروط خاصة بالمنتج على غير ذلك.",
      "updated": "25 سبتمبر 2026",
      "sections": [
        {
          "id": "scope",
          "heading": "1. النطاق",
          "paragraphs": [
            "ينطبق هذا الترخيص العام على البرمجيات التي توزعها Benedict Interactive عندما تشير البرمجية أو صفحة تنزيلها إلى هذا الترخيص ولا يحل محله ترخيص خاص بالمنتج. وقد تضيف شروط خاصة بالمنتج أحكاماً أخرى أو تكون لها الأولوية. صفحة المنتج العامة وحدها لا تمنح ترخيصاً؛ يبدأ الترخيص عندما تُتاح لك البرمجية فعلياً بموجب هذه الشروط."
          ]
        },
        {
          "id": "grant",
          "heading": "2. منح الترخيص",
          "paragraphs": [
            "بموجب هذه الشروط، تمنحك Benedict Interactive ترخيصاً محدوداً وغير حصري وغير قابل للتحويل أو الترخيص من الباطن لتثبيت البرمجية واستخدامها على أجهزة تملكها أو تتحكم بها، للاستخدام الشخصي القانوني أو الاستخدام الداخلي للأعمال وفق ما يسمح به المنتج وشروط الشراء المطبقة. البرمجية مرخّصة وليست مبيعة؛ وتبقى الملكية وحقوق الملكية الفكرية لـ Benedict Interactive والجهات المرخِّصة لها."
          ]
        },
        {
          "id": "restrictions",
          "heading": "3. القيود",
          "paragraphs": [
            "ما لم يمنحك القانون المطبق صراحة حقاً لا يمكن تقييده، فلا يجوز لك:"
          ],
          "bullets": [
            "إعادة توزيع البرمجية أو بيعها أو ترخيصها من الباطن أو تأجيرها أو تقديمها كخدمة مستضافة من دون إذن خطي؛",
            "إزالة أو تزوير إشعارات حقوق النشر أو النسب أو العلامات التجارية أو الترخيص أو الملكية؛",
            "استخدام البرمجية أو العلامة أو هوية المنتج لانتحال صفة Benedict Interactive أو توزيع نسخ معدلة أو مضللة على أنها رسمية؛",
            "تجاوز ضوابط الترخيص أو entitlement أو الأمان أو سلامة البرمجية؛",
            "إجراء reverse engineering أو decompile أو disassemble إلا بالقدر الذي يسمح به القانون صراحة رغم هذا القيد."
          ]
        },
        {
          "id": "copies",
          "heading": "4. النسخ والأجهزة",
          "paragraphs": [
            "يمكن إنشاء نسخ احتياطية معقولة عندما تكون ضرورية لاستخدامك المرخّص، مع الإبقاء على إشعارات الملكية والترخيص. وتظل أي حدود معلنة لعدد الأجهزة أو الحسابات أو الاستعادة أو entitlement الخاصة بمنتج معين سارية."
          ]
        },
        {
          "id": "third-party",
          "heading": "5. مكونات المصدر المفتوح والأطراف الثالثة",
          "paragraphs": [
            "قد تتضمن البرمجية مكونات من أطراف ثالثة أو مفتوحة المصدر. وتظل هذه المكونات خاضعة لتراخيصها وإشعاراتها الخاصة. وإذا منح ترخيص طرف ثالث حقوقاً تختلف عن هذا الترخيص العام، فيكون ذلك الترخيص هو الحاكم للمكون المعني."
          ]
        },
        {
          "id": "updates",
          "heading": "6. التحديثات والخدمات",
          "paragraphs": [
            "قد تضيف التحديثات ميزات أو تغيرها أو تصلحها أو تزيلها. وما لم يوجد التزام خاص بالمنتج، لا تعد Benedict Interactive بأن كل إصدار أو منصة أو تكامل أو متجر أو خدمة عبر الإنترنت سيظل متاحاً إلى أجل غير مسمى. ينبغي تقييم الأمان والخصوصية وطريقة التعامل مع البيانات وفق الإصدار الذي تستخدمه فعلياً والوثائق الحالية."
          ]
        },
        {
          "id": "pro",
          "heading": "7. الميزات المدفوعة وحقوق Pro",
          "paragraphs": [
            "عندما يقدّم منتج ميزات مدفوعة أو Pro، تسري شروط الشراء والاسترداد والاستعادة والأجهزة وحقوق الاستخدام المنشورة ضمن مسار البيع الفعلي أو وثائق المنتج الحالية. وقد تتغير حالة التوفر والأسعار وطرق الاستعادة للمشتريات المستقبلية، مع الخضوع للقانون المعمول به والشروط المطبقة على أي عملية شراء صحيحة."
          ]
        },
        {
          "id": "privacy",
          "heading": "8. الخصوصية",
          "paragraphs": [
            "يخضع استخدام أي خدمة متصلة عبر الإنترنت أيضاً لسياسة الخصوصية المناسبة. وقد يوضح المنتج بشكل منفصل كيفية معالجة ملفات الجهاز أو بيانات التشخيص أو معلومات الحساب أو غيرها من البيانات."
          ]
        },
        {
          "id": "warranty",
          "heading": "9. الضمان والمسؤولية",
          "paragraphs": [
            "إلى أقصى حد يسمح به القانون، تُقدم البرمجية من دون ضمانات غير تلك المذكورة صراحة في شروط المنتج أو الشراء. ولا يستبعد هذا الترخيص أي حقوق قانونية أو مسؤوليات لا يجوز استبعادها أو تقييدها قانوناً."
          ]
        },
        {
          "id": "termination",
          "heading": "10. إنهاء الترخيص",
          "paragraphs": [
            "ينتهي الترخيص إذا ارتكبت مخالفة جوهرية لهذه الشروط ولم تعالجها عندما يفرض القانون إتاحة فرصة للمعالجة. بعد انتهاء الترخيص يجب التوقف عن استخدام النسخ التي لم تعد مرخصة. وتستمر الأحكام المتعلقة بالملكية وحقوق الأطراف الثالثة وإخلاء المسؤولية وغيرها من الأحكام التي تستمر بطبيعتها بعد الانتهاء."
          ]
        },
        {
          "id": "law",
          "heading": "11. القانون المطبق",
          "paragraphs": [
            "يخضع هذا الترخيص لقوانين تايلاند، من دون الحد من الحقوق القانونية أو حقوق المستهلك الإلزامية المطبقة في نطاقك القضائي."
          ]
        },
        {
          "id": "contact",
          "heading": "12. التواصل",
          "paragraphs": [
            "يمكن إرسال أسئلة الترخيص وطلبات الإذن إلى benedict.support@gmail.com."
          ]
        }
      ]
    },
    "legal": {
      "title": "المعلومات القانونية والحقوق",
      "metaDescription": "معلومات حقوق النشر والعلامات التجارية والأذونات والحقوق الخاصة بـ Benedict Interactive.",
      "lead": "الملكية والأذونات وحقوق الأطراف الثالثة وقواعد استخدام مواد Benedict Interactive.",
      "updated": "25 سبتمبر 2026",
      "sections": [
        {
          "id": "copyright",
          "heading": "1. حقوق النشر",
          "paragraphs": [
            "© 2026 Benedict Interactive. جميع الحقوق محفوظة. ما لم يُذكر خلاف ذلك، فإن النصوص الأصلية والتصميم والرسومات والأعمال الفنية وأصول العلامة التجارية والوثائق ومواد البرمجيات الأصلية مملوكة لـ Benedict Interactive أو مرخّصة لها، ومحمية بالقوانين المعمول بها. حماية حقوق النشر لا تعتمد على وجود هذا الإشعار؛ إنما وُضع لتوضيح الملكية والاستخدام المسموح."
          ]
        },
        {
          "id": "brands",
          "heading": "2. العلامات وأسماء المنتجات",
          "paragraphs": [
            "تُستخدم Benedict Interactive وBearagnostic وBenedict Test Center وشعاراتها وعلامات المنتجات وهوياتها البصرية كعلامات تعريفية لـ Benedict Interactive ما لم يُذكر خلاف ذلك. لا تدّعي هذه الصفحة أن أي علامة مسجلة ما لم يُذكر ذلك صراحة، ولا نستخدم رمز العلامة المسجلة من دون وجود تسجيل يدعمه."
          ]
        },
        {
          "id": "permissions",
          "heading": "3. الإذن بإعادة استخدام المواد",
          "paragraphs": [
            "يمكنك وضع روابط للصفحات العامة والإشارة إلى المنتجات في الاستخدام الشخصي المعتاد. أما إعادة نشر جزء كبير من النصوص الأصلية أو الأعمال الفنية أو لقطات الشاشة أو أصول العلامة أو الملفات القابلة للتنزيل أو البرمجيات لأغراض تجارية أو لإعادة البيع أو التوزيع أو الانتحال فتحتاج إلى إذن، ما لم يسمح القانون بالاستخدام بشكل مستقل. للاستخدام الصحفي أو التحريري أو التعليمي أو للشراكات أو التوزيع أو أي إعادة استخدام أخرى، تواصل مع Benedict Interactive أولاً."
          ]
        },
        {
          "id": "third-party",
          "heading": "4. حقوق الأطراف الثالثة والمصدر المفتوح",
          "paragraphs": [
            "تبقى أسماء الأطراف الثالثة وشعاراتها ومنصاتها وخدماتها ومكتباتها وخطوطها ومكونات المصدر المفتوح وغيرها من المواد ملكاً لأصحابها. ظهورها على الموقع لا ينقل ملكيتها إلى Benedict Interactive. وتظل تراخيص وإشعارات الأطراف الثالثة سارية على المواد ذات الصلة؛ ولا تدعي Benedict Interactive حقوقاً حصرية على ما يملكه الآخرون."
          ]
        },
        {
          "id": "reports",
          "heading": "5. بلاغات الحقوق أو الانتهاك",
          "paragraphs": [
            "إذا كنت تعتقد أن مادة على الموقع تنتهك حقوقك، فأرسل إشعاراً واضحاً إلى benedict.support@gmail.com يحدد المادة والحق الذي تعتقد أنه تأثر وأساس مطالبتك وطريقة موثوقة للتواصل معك. سنراجع البلاغات المقدمة بحسن نية."
          ]
        },
        {
          "id": "location",
          "heading": "6. التواصل مع الاستوديو",
          "paragraphs": [
            "Benedict Interactive استوديو برمجيات مستقل يعمل من بانكوك، تايلاند. البريد العام للتواصل: benedict.support@gmail.com. عبارة «Bangkok, Thailand» تصف موقع الاستوديو ولا تُعرض كعنوان مكتب مفتوح للزيارات العامة."
          ]
        }
      ]
    }
  }
} satisfies Record<LocalizedLegalLocale, Record<LegalDocumentKey, LegalDocument>>;
