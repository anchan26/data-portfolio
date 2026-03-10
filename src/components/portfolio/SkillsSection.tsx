const skillCategories = [
  { title: 'Languages', skills: ['Python', 'SQL', 'R', 'Excel'] }, /* [cite: 34] */
  { title: 'Cloud & Data', skills: ['AWS', 'GCP', 'Snowflake', 'Snowpipe'] }, /* [cite: 7, 34, 35] */
  { title: 'BI & Analytics', skills: ['PowerBI', 'Tableau', 'Qlik', 'Zoho Analytics'] }, /* [cite: 17, 35] */
  { title: 'ETL Tools', skills: ['Alteryx', 'KNIME', 'Power Automate', 'SOPs'] }, /* [cite: 21, 35] */
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-subtle">
      <h2 className="text-3xl mb-12">Technical Toolkit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map(category => (
          <div key={category.title} className="bg-surface border border-subtle p-6 rounded-lg">
            <h3 className="text-xl mb-4 text-primary">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map(skill => (
                <li key={skill}>+ {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}