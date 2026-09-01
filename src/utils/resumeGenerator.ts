import { jsPDF } from 'jspdf';
import { 
  PERSONAL_INFO, 
  CAREER_JOURNEY, 
  EDUCATION_LIST, 
  PROFESSIONAL_TRAINING 
} from '../data/portfolioData';

/**
 * Generates and downloads a clean, beautifully formatted PDF of Joy L. Perez's CV
 * with strict line-height math and no overlapping text or lines.
 */
export const downloadResumePdf = (): boolean => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();   // 595.28 pt
    const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
    const margin = 40;
    const contentWidth = pageWidth - margin * 2; // 515.28 pt
    const bottomLimit = pageHeight - 45;
    let y = margin;

    // Helper: Ensure page break if needed
    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > bottomLimit) {
        doc.addPage();
        y = margin;
        
        // Top header accent line on continuation pages
        doc.setFillColor(7, 25, 56);
        doc.rect(margin, y, contentWidth, 3, 'F');
        doc.setFillColor(56, 189, 248);
        doc.rect(margin, y + 3, 80, 2, 'F');
        y += 22;
      }
    };

    // Helper: Draw multi-line paragraph with strict coordinate tracking
    const drawParagraph = (
      text: string,
      x: number,
      startY: number,
      maxWidth: number,
      fontSize: number,
      textColor: [number, number, number] = [51, 65, 85],
      fontStyle: 'normal' | 'bold' | 'italic' = 'normal',
      bottomGap = 8
    ): number => {
      doc.setFont('helvetica', fontStyle);
      doc.setFontSize(fontSize);
      doc.setTextColor(textColor[0], textColor[1], textColor[2]);
      doc.setLineHeightFactor(1.3);

      const lines = doc.splitTextToSize(text, maxWidth);
      const lineHeight = doc.getLineHeight();

      // Check if this paragraph fits on the current page
      const totalBlockHeight = lines.length * lineHeight;
      if (startY + totalBlockHeight > bottomLimit) {
        checkPageBreak(totalBlockHeight + 10);
        startY = y;
      }

      doc.text(lines, x, startY);
      return startY + totalBlockHeight + bottomGap;
    };

    // Helper: Draw Section Header with clean decorative bar and underline
    const drawSectionHeading = (title: string) => {
      checkPageBreak(50);
      
      // Decorative pill
      doc.setFillColor(56, 189, 248); // Cyan-blue
      doc.rect(margin, y, 4, 14, 'F');
      doc.setFillColor(249, 115, 22); // Orange accent dot
      doc.circle(margin + 2, y + 17, 1.5, 'F');

      // Title Text
      doc.setTextColor(7, 25, 56);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11.5);
      doc.text(title, margin + 12, y + 11);

      // Subtle divider line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.75);
      doc.line(margin + 12, y + 16, margin + contentWidth, y + 16);

      y += 26;
    };

    // ==========================================
    // PAGE 1: HEADER BANNER
    // ==========================================
    // Navy Header Background
    const headerHeight = 76;
    doc.setFillColor(7, 25, 56);
    doc.rect(margin, y, contentWidth, headerHeight, 'F');

    // Bottom accent multi-tone border
    doc.setFillColor(56, 189, 248); // Cyan
    doc.rect(margin, y + headerHeight, contentWidth * 0.6, 3, 'F');
    doc.setFillColor(16, 185, 129); // Emerald
    doc.rect(margin + contentWidth * 0.6, y + headerHeight, contentWidth * 0.2, 3, 'F');
    doc.setFillColor(249, 115, 22); // Orange
    doc.rect(margin + contentWidth * 0.8, y + headerHeight, contentWidth * 0.2, 3, 'F');

    // Name
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(PERSONAL_INFO.name, margin + 16, y + 24);

    // Title / Specialization
    doc.setTextColor(56, 189, 248);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('SPECIAL EDUCATION TEACHER  •  15+ YEARS UAE PRACTICE', margin + 16, y + 40);

    // Contact Information
    doc.setTextColor(226, 232, 240);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text(`Location: ${PERSONAL_INFO.location}   |   Email: ${PERSONAL_INFO.email}   |   Languages: English & Tagalog`, margin + 16, y + 58);

    y += headerHeight + 20;

    // ==========================================
    // SECTION 1: PROFESSIONAL PROFILE
    // ==========================================
    drawSectionHeading('PROFESSIONAL PROFILE');

    y = drawParagraph(
      'Passionate and dedicated Special Education professional with over 15 years of continuous practice in Dubai, creating individualized, inclusive, and multi-sensory learning pathways for students with diverse developmental and cognitive abilities. Combines structured Individualized Education Programs (IEPs), differentiated instruction, positive behavior support (RBT® trained), assistive technology (AAC & PECS), and multidisciplinary collaboration across speech and occupational therapy teams. Distinctively bridges special needs pedagogy with foundational clinical training in Physical Therapy.',
      margin,
      y,
      contentWidth,
      8.5,
      [51, 65, 85],
      'normal',
      12
    );

    // ==========================================
    // SECTION 2: CORE COMPETENCIES (2 COLUMNS)
    // ==========================================
    drawSectionHeading('CORE COMPETENCIES & AREAS OF EXPERTISE');

    const competencies = [
      '• Individualized Education Programs (IEP)',
      '• Differentiated & Multi-Sensory Instruction',
      '• Registered Behavior Technician (RBT®) Trained',
      '• Assistive Tech (AAC, PECS & Visuals)',
      '• Continuous Milestone Assessment & Tracking',
      '• Multidisciplinary Collaboration (OT/SLP)',
      '• Inclusive Classroom Management & Safety',
      '• Physical Therapy & Motor Development'
    ];

    const colWidth = (contentWidth - 20) / 2;
    const col2X = margin + colWidth + 20;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(30, 41, 59);

    for (let i = 0; i < competencies.length; i += 2) {
      checkPageBreak(16);
      doc.text(competencies[i], margin + 4, y);
      if (competencies[i + 1]) {
        doc.text(competencies[i + 1], col2X, y);
      }
      y += 14;
    }
    y += 10;

    // ==========================================
    // SECTION 3: PROFESSIONAL EXPERIENCE
    // ==========================================
    drawSectionHeading('PROFESSIONAL EXPERIENCE');

    CAREER_JOURNEY.forEach((role) => {
      // Calculate needed space for role header + summary
      checkPageBreak(85);

      // Role Header Pill/Box
      const roleBoxHeight = 20;
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(margin, y, contentWidth, roleBoxHeight, 3, 3, 'F');

      // Role Title
      doc.setTextColor(7, 25, 56);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text(role.title, margin + 8, y + 13.5);

      // Role Period (Right-aligned)
      doc.setTextColor(234, 88, 12); // Amber Orange
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      const periodWidth = doc.getTextWidth(role.period);
      doc.text(role.period, margin + contentWidth - periodWidth - 8, y + 13.5);

      y += roleBoxHeight + 8;

      // Organization & Location
      doc.setTextColor(71, 85, 105);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(`${role.organization}  •  ${role.location}`, margin + 6, y);
      y += 12;

      // Role Summary
      y = drawParagraph(
        role.summary,
        margin + 6,
        y,
        contentWidth - 12,
        8,
        [71, 85, 105],
        'normal',
        6
      );

      // Key Contributions
      role.keyContributions.forEach((contrib) => {
        checkPageBreak(22);
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(56, 189, 248);
        doc.text('–', margin + 8, y);

        y = drawParagraph(
          contrib,
          margin + 18,
          y,
          contentWidth - 26,
          8,
          [51, 65, 85],
          'normal',
          4
        );
      });

      y += 8;
    });

    // ==========================================
    // SECTION 4: EDUCATION & QUALIFICATIONS
    // ==========================================
    drawSectionHeading('EDUCATION & QUALIFICATIONS');

    EDUCATION_LIST.forEach((edu) => {
      checkPageBreak(50);

      // Degree Title
      doc.setTextColor(7, 25, 56);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(edu.degree, margin + 6, y);

      // Graduation Date
      doc.setTextColor(234, 88, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      const dateWidth = doc.getTextWidth(edu.graduationDate);
      doc.text(edu.graduationDate, margin + contentWidth - dateWidth - 6, y);
      y += 12;

      // Institution & Location
      doc.setTextColor(71, 85, 105);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.text(`${edu.institution}${edu.location ? ` • ${edu.location}` : ''}`, margin + 6, y);
      y += 11;

      // Details
      y = drawParagraph(
        edu.details,
        margin + 6,
        y,
        contentWidth - 12,
        8,
        [100, 116, 139],
        'normal',
        8
      );
    });

    // ==========================================
    // SECTION 5: CONTINUOUS PROFESSIONAL TRAINING
    // ==========================================
    drawSectionHeading('CONTINUOUS PROFESSIONAL DEVELOPMENT & CREDENTIALS');

    PROFESSIONAL_TRAINING.forEach((tr) => {
      checkPageBreak(38);

      // Title & Year
      doc.setTextColor(7, 25, 56);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(`•  ${tr.title}`, margin + 6, y);

      doc.setTextColor(234, 88, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      const yrWidth = doc.getTextWidth(tr.year);
      doc.text(tr.year, margin + contentWidth - yrWidth - 6, y);
      y += 11;

      // Organization & Description
      const descText = `${tr.organization}${tr.location ? ` (${tr.location})` : ''} — ${tr.description}`;
      y = drawParagraph(
        descText,
        margin + 16,
        y,
        contentWidth - 24,
        8,
        [71, 85, 105],
        'normal',
        6
      );
    });

    // ==========================================
    // GLOBAL FOOTER ON ALL PAGES
    // ==========================================
    const totalPages = doc.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      doc.setPage(p);
      
      // Footer divider line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(margin, pageHeight - 26, margin + contentWidth, pageHeight - 26);

      // Left Footer text
      doc.setTextColor(148, 163, 184);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.text('Executive Curriculum Vitae  •  Joy L. Perez  •  Special Education Teacher', margin, pageHeight - 14);

      // Right Footer text (Page X of Y)
      const pageStr = `Page ${p} of ${totalPages}`;
      const pageStrWidth = doc.getTextWidth(pageStr);
      doc.text(pageStr, margin + contentWidth - pageStrWidth, pageHeight - 14);
    }

    // Save and Trigger Download
    doc.save('Joy_L_Perez_Special_Education_Resume.pdf');
    return true;
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    window.print();
    return false;
  }
};

