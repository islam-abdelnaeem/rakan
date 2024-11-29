import React from 'react';
import { Card } from 'react-bootstrap';

const Details = ({ language = 'en' }) => {
  const content = {
    en: {
      title: "Details",
      subtitle: "Wood and Veneers",
      paragraphs:[
        "Specialists in All Carpentry and Interior and Exterior Decoration Works. We offer all carpentry services and everything related to wood, whether natural or synthetic materials. We execute all drawings and engineering plans. We have highly skilled technicians with great expertise and experience in implementing all engineering designs and plans for the required works with great accuracy and at feasible costs.",
        "We Also Offer Maintenance and Modifications Services. We also have expertise in modifying any work, whether it involves painting, additional work based on engineering drawings, or not. We also provide maintenance services for all wooden decorations, doors, libraries, rooms, and anything related to wood and decoration works.",
        "Painting Department. We offer all necessary painting services for wood, including staining, color changes, and additions that ensure the durability of the paint for extended periods.",
        "Exhibitions, Booths, and Events. We carry out all works for exhibitions, booths, and events, including the execution of approved and required plans and designs. We have experience with many important conferences and events."
      ]
    },
    ar: {
      title: "التفاصيل",
      subtitle: "الأخشاب والقشرة",
      paragraphs: [
        "متخصصون بكافة أعمال النجارة وأعمال الديكور الداخلي والخارجي. نقدم كافة أعمال النجارة وما يتعلق بالأخشاب سواء كانت مواد طبيعية أو مواد صناعية. وتنفيذ كافة الرسومات والمخططات الهندسية. نمتلك فنيين متخصصين على درجة عالية من المهارة والكفاءة والخبرة الكبيرة في تنفيذ كافة الرسومات والمخططات الهندسية لكافة الأعمال المطلوبة بدقة شديدة وبتكاليف ممكنة.",
        "كما نقدم خدمات الصيانة والتعديلات. نمتلك أيضًا خبرة في تعديل أي عمل من دهانات أو إضافات برسم هندسي أو بدون. وأيضًا أعمال الصيانة لكافة الديكورات الخشبية والأبواب والمكتبات والغرف وكل ما هو متعلق بأعمال الديكورات والأخشاب.",
        "قسم الدهانات. نقدم كافة أعمال الدهانات الضرورية للأخشاب والصباغات وتغيير الألوان والإضافات اللازمة التي تحافظ على دوام الدهانات لفترات طويلة.",
        "أعمال المعارض والبوثات والفعاليات. تنفيذ كافة أعمال المعارض والبوثات والفعاليات وتنفيذ المخططات والتصاميم المعتمدة والمطلوبة. وخبرة بالعديد من المؤتمرات والفعاليات المهمة."
      ]
    }
  };

  // Fallback content in case `language` does not match a key in `content`
  const currentContent = content[language] || content['en'];

  return (
    <Card className="my-3 p-3 shadow-sm text-start" style={{maxWidth:'75%', margin:'auto'}} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Card.Body style={{margin:'auto', textAlign:language === 'ar' ? 'right' : 'left' }}>
      <div style={{display:'flex'}}>  <Card.Title className="text-center">{currentContent.title}</Card.Title></div>
        <Card.Subtitle className="mb-2 text-muted text-center">{currentContent.subtitle}</Card.Subtitle>
        {currentContent.paragraphs.map((text, index) => (
          <Card.Text key={index}>{text}</Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Details;
