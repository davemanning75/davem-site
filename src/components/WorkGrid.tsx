export default function WorkGrid() {
  return (
    <section id="work">
      <div className="work-inner">
        <div className="work-header reveal">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Production AI.<br />Real Outcomes.</h2>
        </div>
        <div className="work-grid">
          <div className="case-card reveal">
            <p className="case-type">Agentic AI · Production Delivery</p>
            <h3>The AI Factory — Enterprise AI Operating Model</h3>
            <p>
              Architected AI Factory Services Model: a production delivery model
              enabling enterprise clients to move beyond POC and deploy multiple
              Agentic AI use cases per month at measurable, predictable velocity.
            </p>
            <div className="case-outcomes">
              <span className="outcome">
                AI COE framework, Landing Zone & Agent Factory designed from
                scratch
              </span>
              <span className="outcome">
                Pro-code solutions on Azure OpenAI, AI Foundry, Microsoft Fabric
              </span>
              <span className="outcome">
                Reusable governed architecture across parallel client engagements
              </span>
            </div>
          </div>
          <div className="case-card reveal" style={{ transitionDelay: "0.1s" }}>
            <p className="case-type">
              AI Agent · Contact Center · Financial Services
            </p>
            <h3>AI-Powered Contact Center Agent</h3>
            <p>
              Solutioned and delivered a production-grade AI contact center agent
              integrating Genesys Cloud, Salesforce, and Azure OpenAI —
              eliminating manual after-call work and creating auditable CRM
              records at scale.
            </p>
            <div className="case-outcomes">
              <span className="outcome">
                Automated call summarization end-to-end
              </span>
              <span className="outcome">
                Eliminated manual after-call work for agents
              </span>
              <span className="outcome">
                Auditable CRM records for compliance in regulated environment
              </span>
            </div>
          </div>
          <div className="case-card reveal" style={{ transitionDelay: "0.1s" }}>
            <p className="case-type">
              GenAI · Knowledge Management · Regulated Industry
            </p>
            <h3>GenAI Knowledge Assistant</h3>
            <p>
              Delivered a secure, governed GenAI knowledge assistant providing
              role-based access to regulatory content — reducing SME dependency,
              accelerating compliance workflows, and managing risk at scale.
            </p>
            <div className="case-outcomes">
              <span className="outcome">
                Role-based access to sensitive regulatory content
              </span>
              <span className="outcome">
                Reduced reliance on manual SME support
              </span>
              <span className="outcome">
                Compliance risk managed through governed AI architecture
              </span>
            </div>
          </div>
          <div className="case-card reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="case-type">IT Strategy · Cloud · Enterprise</p>
            <h3>Enterprise IT Roadmaps & Cloud Transformation</h3>
            <p>
              Led IT strategy engagements for large enterprise clients across
              financial services, public sector, and manufacturing — delivering
              comprehensive roadmaps from current-state assessment to target
              architecture.
            </p>
            <div className="case-outcomes">
              <span className="outcome">
                Multi-million dollar cloud transformation programs
              </span>
              <span className="outcome">
                Azure, AWS, and hybrid architecture strategies
              </span>
              <span className="outcome">
                Business-aligned IT roadmaps tied to measurable outcomes
              </span>
            </div>
          </div>
          <div className="case-card reveal" style={{ transitionDelay: "0.3s" }}>
            <p className="case-type">Internal Productivity · RFP Intelligence</p>
            <h3>RFP Bid/No-Bid & Response Automation</h3>
            <p>
              Built a pair of internal Copilot agents that accelerate RFP response
              velocity: one evaluates bids against real capabilities, the other
              drafts compliant responses from a growing repository of past
              RFPs and Q&A.
            </p>
            <div className="case-outcomes">
              <span className="outcome">
                Automates bid/no-bid scoring with gap analysis and next-step
                recommendations
              </span>
              <span className="outcome">
                Reduces response time by 50–70% by indexing historical RFP
                content and optimizing draft generation
              </span>
              <span className="outcome">
                Ensures consistency, brand tone, and compliance using an
                evolving knowledge base
              </span>
            </div>
          </div>
          <div className="case-card reveal" style={{ transitionDelay: "0.4s" }}>
            <p className="case-type">Internal Productivity · Presales Enablement</p>
            <h3>Call Prep & SOW Automation Agents</h3>
            <p>
              Developed agents that prep sales and solution architects for
              discovery calls and streamline SOW creation, ensuring alignment to
              compliance, deliverables, and operational metrics.
            </p>
            <div className="case-outcomes">
              <span className="outcome">
                Provides call-specific questions, talk tracks, and opportunity
                insights based on integrated knowledge sources
              </span>
              <span className="outcome">
                Accelerates SOW drafting, review, and handover with compliance
                workflows and KPI tracking
              </span>
              <span className="outcome">
                Links documentation to project management tools for seamless
                operational readiness
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
