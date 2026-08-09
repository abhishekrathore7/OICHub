import "./App.css";
import oicQuestions from "./data/oicQuestions";
import vbcsQuestions from "./data/vbcsQuestions";

function QuestionList({ questions }) {
  return (
    <div className="question-list">
      {questions.map((item, index) => (
        <article className="question" key={index}>
          <h3>
            {index + 1}. {item.question}
          </h3>

          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">
            Oracle Interview Hub
          </a>

          <nav>
            <a href="#oic">OIC</a>
            <a href="#vbcs">VBCS</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">ORACLE CLOUD INTERVIEW PREPARATION</p>

            <h1>
              Oracle Cloud
              <br />
              Interview Questions
            </h1>

            <p className="hero-text">
              Practical interview questions and answers for Oracle Integration
              Cloud and Visual Builder Cloud Service.
            </p>

            <div className="hero-buttons">
              <a href="#oic" className="button primary">
                OIC Questions
              </a>

              <a href="#vbcs" className="button secondary">
                VBCS Questions
              </a>
            </div>
          </div>
        </section>

        <section className="topics container">
          <div className="topic-card" id="oic">
            <span className="topic-number">01</span>

            <h2>Oracle Integration Cloud</h2>

            <p>
              Interview questions covering integrations, adapters, REST, SOAP,
              lookups, fault handling and real-world OIC scenarios.
            </p>

            <a href="#oic-questions">Read OIC Questions →</a>
          </div>

          <div className="topic-card" id="vbcs">
            <span className="topic-number">02</span>

            <h2>Visual Builder Cloud Service</h2>

            <p>
              Interview questions covering VBCS, Business Objects, Service
              Connections, REST APIs, Oracle JET, SDP and ADP.
            </p>

            <a href="#vbcs-questions">Read VBCS Questions →</a>
          </div>
        </section>

        <section className="questions container" id="oic-questions">
          <div className="section-heading">
            <p className="eyebrow">SECTION 01</p>
            <h2>OIC Interview Questions</h2>
          </div>

          <QuestionList questions={oicQuestions} />
        </section>

        <section className="questions container" id="vbcs-questions">
          <div className="section-heading">
            <p className="eyebrow">SECTION 02</p>
            <h2>VBCS Interview Questions</h2>
          </div>

          <QuestionList questions={vbcsQuestions} />
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Oracle Interview Hub · Built for Oracle Cloud developers</p>
        </div>
      </footer>
    </div>
  );
}

export default App;