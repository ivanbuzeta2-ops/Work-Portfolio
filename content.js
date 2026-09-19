/* ==========================================================================
   CONTENT DATA — edit this file to add, remove, or change certifications
   and work samples. No other code needs to change.

   HOW TO ADD A WORK SAMPLE
   1. Put the PDF in  assets/documents/estimated-plans/
   2. (Optional) Put a preview image in  assets/images/samples/
   3. Copy one block in `samples` below and change the values.

   HOW TO ADD A CERTIFICATE FILE
   1. Put the PDF in  assets/documents/certificates/
   2. In the matching certification below, set  file: "assets/documents/certificates/Your_File.pdf"
      (or use `files: [ {label, href}, ... ]` when there is more than one PDF).
   Credential IDs: use  credentialId: "..."  for one ID, or  credentialIds: [ {label, id}, ... ]  for several.
      A "View certificate" button appears automatically when a file is set.
   ========================================================================== */

window.SITE_CONTENT = {

  /* ---------- Sample estimated plans (Portfolio section) ---------- */
  plansZip: {
    href: "assets/documents/estimated-plans/All_Sample_Estimated_Plans.zip",
    downloadName: "Ivan_Buzeta_Sample_Estimated_Plans.zip"
  },

  samples: [
    {
      title: "Foundation, Shear Wall & Roof Framing Takeoff",
      description:
        "Color-coded takeoff of a residential structural drawing set: wall footings and slab-on-grade, exterior and interior shear walls, roof trusses and rafters, and asphalt shingle roofing, with an itemized cost sheet organized by division.",
      skills: ["Plan reading", "Roofing takeoff", "Foundation & slab", "Shear walls", "Cost estimating"],
      file: "assets/documents/estimated-plans/Sample_Plan_01.pdf",
      downloadName: "Ivan_Buzeta_Sample_Plan_01_Foundation_ShearWall_Roof.pdf",
      image: "assets/images/samples/sample-01.jpg",
      imageAlt:
        "Roof framing plan with color-coded takeoff overlays for rafters, trusses, hip, valley and ridge, and a quantity legend.",
      type: "PDF",
      pages: 7,
      size: "664 KB"
    },
    {
      title: "Exterior Wall Framing Takeoff",
      description:
        "Shear wall layout marked up for framing quantities (corner and intersection stud pairs, headers, sheathing, and openings), carried into an Excel estimate with waste factors, labor productivity, markups, and overhead and profit.",
      skills: ["Wall framing takeoff", "Excel estimating", "Waste factors", "Labor productivity"],
      file: "assets/documents/estimated-plans/Sample_Plan_02.pdf",
      downloadName: "Ivan_Buzeta_Sample_Plan_02_Wall_Framing.pdf",
      image: "assets/images/samples/sample-02.jpg",
      imageAlt:
        "Proposed shear wall layout plan with colored markups showing framing takeoff for exterior walls.",
      type: "PDF",
      pages: 5,
      size: "273 KB"
    },
    {
      title: "Exterior Stucco & Painting Takeoff: Accessory Dwelling Unit",
      description:
        "Elevation takeoff of stucco and paint finishes by color (sage green and bone white areas, plus corner beads), priced in Excel with material quantities, waste factors, labor hours, markups, and overhead and profit.",
      skills: ["Elevation takeoff", "Stucco & painting", "Excel estimating", "Material quantities"],
      file: "assets/documents/estimated-plans/Sample_Plan_03.pdf",
      downloadName: "Ivan_Buzeta_Sample_Plan_03_Stucco_ADU.pdf",
      image: "assets/images/samples/sample-03.jpg",
      imageAlt:
        "Four building elevations of an accessory dwelling unit with color-coded paint and corner bead takeoff and a quantity legend.",
      type: "PDF",
      pages: 4,
      size: "383 KB"
    },
    {
      title: "Exterior Stucco & Painting Takeoff: Main Residence",
      description:
        "The same finish takeoff method applied to a three-story main residence: elevation areas by color, corner beads, and a full stucco system estimate covering materials, labor hours, markups, and overhead and profit.",
      skills: ["Elevation takeoff", "Stucco & painting", "Excel estimating", "Labor hours"],
      file: "assets/documents/estimated-plans/Sample_Plan_04.pdf",
      downloadName: "Ivan_Buzeta_Sample_Plan_04_Stucco_Main_Residence.pdf",
      image: "assets/images/samples/sample-04.jpg",
      imageAlt:
        "Four elevations of a main residence with yellow and green takeoff markups for exterior paint and corner beads.",
      type: "PDF",
      pages: 4,
      size: "321 KB"
    }
  ],

  /* ---------- Certifications & training ----------
     kind:     "licence" | "course" | "self"
     category: "licence" | "estimating" | "excel-pm" | "language"  (used by the filter buttons)
  */
  certificationCategories: [
    { id: "all", label: "All" },
    { id: "licence", label: "Licensure & safety" },
    { id: "estimating", label: "Estimating, drawings & BIM" },
    { id: "excel-pm", label: "Excel & project management" },
    { id: "language", label: "English" }
  ],

  certifications: [
    {
      title: "Civil Engineering Licensure Examination (CELE)",
      issuer: "Professional Regulation Commission",
      date: "2023",
      kind: "licence",
      category: "licence",
      facts: ["Registered Civil Engineer (RCE)"],
      credentialId: "",          /* add your PRC license number here if you want it shown */
      file: null                 /* e.g. "assets/documents/certificates/PRC_License.pdf" */
    },
    {
      title: "Safety Officer II",
      issuer: "JGDC Occupational Safety and Health Consultancy",
      date: "2022",
      kind: "licence",
      category: "licence",
      facts: ["Occupational safety and health training"],
      credentialId: "",
      file: null
    },
    {
      title: "Bluebeam Revu: Construction Takeoffs",
      issuer: "LinkedIn Learning",
      date: "Apr 26, 2026",
      kind: "course",
      category: "estimating",
      facts: ["2 h 55 min course", "Skills: Construction Estimating, Bluebeam"],
      credentialId: "8eddc5d6b081ba433cb7038e86cd5aee182d00b7eb94763cef2194f18343ee5f",
      file: "assets/documents/certificates/Bluebeam_Revu_Construction_Takeoffs.pdf"
    },
    {
      title: "Construction Estimating Takeoff",
      issuer: "LinkedIn Learning",
      date: "Apr 26, 2026",
      kind: "course",
      category: "estimating",
      facts: ["23 min course", "Skills: Construction Estimating"],
      credentialId: "4c71e70c2e3bb3180a62cf6ecdfc4ab39ce3174415e3fe3e4194ad62ea530a50",
      file: "assets/documents/certificates/Construction_Estimating_Takeoff.pdf"
    },
    {
      title: "Construction Management: Reading Drawings and Specifications",
      issuer: "LinkedIn Learning",
      date: "Apr 27, 2026",
      kind: "course",
      category: "estimating",
      facts: [
        "PMI Registered Education Provider #4101, 2.25 PDUs",
        "Activity #: 41016L6RW0",
        "Skills: Construction Drawings"
      ],
      credentialId: "3966e88e1a794ffa852e28517e49bd1d0592da4d777edbe6ab750acb2e5618cb",
      file: "assets/documents/certificates/Reading_Drawings_and_Specifications_PMI.pdf"
    },
    {
      title: "Quantity Takeoffs for BIM",
      issuer: "LinkedIn Learning",
      date: "May 5, 2026",
      kind: "course",
      category: "estimating",
      facts: ["1 h 39 min course", "Skills: Building Information Modeling (BIM)"],
      credentialId: "cf4c31aad9f2f1a93f5e7e554234d63f39e824c643e26eb1d2d783277c213a44",
      file: "assets/documents/certificates/Quantity_Takeoffs_for_BIM.pdf"
    },
    {
      title: "Navisworks Essential Training 2023",
      issuer: "LinkedIn Learning",
      date: "May 3, 2026",
      kind: "course",
      category: "estimating",
      facts: ["3 h 45 min course", "Skills: Navisworks, Building Information Modeling (BIM)"],
      credentialId: "ceb9b56e06c4d3b1e63388001954134c7c83a9895f778c716e2e002ccf8be002",
      file: "assets/documents/certificates/Navisworks_Essential_Training.pdf"
    },
    {
      title: "Mechanical Systems: Reading HVAC, Plumbing and Other Drawings and Schematics",
      issuer: "LinkedIn Learning",
      date: "2026",
      kind: "course",
      category: "estimating",
      facts: ["Completed in 2026, as listed on my CV"],
      credentialId: "",
      file: null                 /* add the certificate PDF path here when you have it */
    },
    {
      title: "Excel Formulas and Functions Quick Tips",
      issuer: "LinkedIn Learning",
      date: "Apr 26, 2026",
      kind: "course",
      category: "excel-pm",
      facts: ["46 min course", "Skills: Microsoft Excel"],
      credentialId: "d8a21acd4d3adfbe281a43cb3eb774c14cecff2609bcb12f0124803a20ff6651",
      file: "assets/documents/certificates/Excel_Formulas_and_Functions.pdf"
    },
    {
      title: "Excel: PivotTables for Beginners",
      issuer: "LinkedIn Learning",
      date: "May 25, 2026",
      kind: "course",
      category: "excel-pm",
      facts: ["26 min course", "Skills: Pivot Tables, Microsoft Excel"],
      credentialId: "01a0f40ccbc8157ccb7bf1286f947dec8b16a6bc98f739441609e2eed64cd85c",
      file: "assets/documents/certificates/Excel_PivotTables_for_Beginners.pdf"
    },
    {
      title: "Managing Multiple Projects",
      issuer: "LinkedIn Learning and PMI",
      date: "Apr 26, 2026",
      kind: "course",
      category: "excel-pm",
      facts: [
        "19 min course",
        "PMI Registered Education Provider #4101, 0.25 PDUs",
        "Activity #: 4101LZ5WRR",
        "Skills: Priority Management, Project Management"
      ],
      credentialIds: [
        { label: "LinkedIn Learning", id: "741f39948edc472f8429986fbb9ea94d0fe6db2ef3ba52bff63a3400741106e1" },
        { label: "PMI", id: "92e8e911b9645812817aa3ce1843c49d98a284866247296d4daf20050d866889" }
      ],
      files: [
        { label: "LinkedIn certificate", href: "assets/documents/certificates/Managing_Multiple_Projects_LinkedIn.pdf" },
        { label: "PMI certificate", href: "assets/documents/certificates/Managing_Multiple_Projects_PMI.pdf" }
      ]
    },
    {
      title: "English Proficiency: C1 Advanced (CEFR)",
      issuer: "Exam English",
      date: "Jul 12, 2026",
      kind: "self",
      category: "language",
      badge: "Self-assessment",
      facts: [
        "Grammar & Vocabulary level test: C1 Advanced",
        "Listening level test: C1 Advanced",
        "Free online tests. They are self-assessment tools, not official examination results."
      ],
      credentialId: "",
      files: [
        { label: "Grammar & Vocabulary", href: "assets/documents/certificates/English_C1_Grammar_Vocabulary.pdf" },
        { label: "Listening", href: "assets/documents/certificates/English_C1_Listening.pdf" }
      ]
    }
  ]
};
