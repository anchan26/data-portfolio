{/* 4. STACK (With Live Logos) */}
<section className="max-w-4xl mx-auto px-6 mb-32">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">Stack</h3>
  <div className="space-y-16">
    {[
      { 
        label: "Data Engineering", 
        items: [
          { name: 'Snowflake', slug: 'snowflake' },
          { name: 'AWS', slug: 'amazonaws' },
          { name: 'Airflow', slug: 'apacheairflow' },
          { name: 'dbt', slug: 'dbt' },
          { name: 'PostgreSQL', slug: 'postgresql' },
          { name: 'Terraform', slug: 'terraform' },
          { name: 'Kafka', slug: 'apachekafka' }
        ] 
      },
      { 
        label: "Analytics", 
        items: [
          { name: 'Python', slug: 'python' },
          { name: 'Pandas', slug: 'pandas' },
          { name: 'Tableau', slug: 'tableau' },
          { name: 'Power BI', slug: 'powerbi' },
          { name: 'SQL', slug: 'mysql' } // Using MySQL icon for generic SQL
        ] 
      },
      { 
        label: "AI & LLM Production", 
        items: [
          { name: 'OpenAI', slug: 'openai' },
          { name: 'LangChain', slug: 'chainlink' }, // Close approximation
          { name: 'HuggingFace', slug: 'huggingface' },
          { name: 'Pinecone', slug: 'pinecone' },
          { name: 'PyTorch', slug: 'pytorch' }
        ] 
      },
      { 
        label: "Tools", 
        items: [
          { name: 'Git', slug: 'git' },
          { name: 'GitHub', slug: 'github' },
          { name: 'Docker', slug: 'docker' },
          { name: 'Vercel', slug: 'vercel' }
        ] 
      }
    ].map((cat) => (
      <div key={cat.label}>
        <h4 className="text-xs font-bold text-gray-800 mb-6 uppercase tracking-wider">{cat.label}</h4>
        <div className="flex flex-wrap gap-3">
          {cat.items.map((item) => (
            <div key={item.name} className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:border-gray-400 transition-all cursor-default">
              {/* This img tag fetches the logo automatically */}
              <img 
                src={`https://cdn.simpleicons.org/${item.slug}/1a1a1a`} 
                alt={item.name}
                className="w-4 h-4 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if icon fails
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>