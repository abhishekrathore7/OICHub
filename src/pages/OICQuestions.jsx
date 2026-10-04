import { useEffect } from "react";
import oicQuestions from "../data/oicQuestions";

function QuestionList() {
  return (
    <div className="question-list">
      {oicQuestions.map((item, index) => (
        <article className="question" key={index}>
          <h3>
            {index + 1}. {item.question}
          </h3>

         <p>
  <strong>Answer:</strong> {item.answer}
</p>
        </article>
      ))}
    </div>
  );
}

function OICQuestions() {

    useEffect(() => {
  document.title =
    "OIC Interview Questions and Answers | Oracle Integration Cloud";

  const description =
    "Prepare for Oracle Integration Cloud interviews with practical OIC interview questions and answers covering integrations, REST, SOAP, adapters, mappings, lookups, fault handling and real-world scenarios.";

  const meta = document.querySelector('meta[name="description"]');

  if (meta) {
    meta.setAttribute("content", description);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = description;
    document.head.appendChild(newMeta);
  }
}, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            Oracle Interview Hub
          </a>

          <nav>
            <a href="/">Home</a>
            <a href="/vbcs-interview-questions">VBCS</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">ORACLE INTEGRATION CLOUD</p>

            <h1>
  OIC Interview Questions and Answers
</h1>

            <p className="hero-text">
  Prepare for Oracle Integration Cloud interviews with practical,
  scenario-based questions and answers covering REST and SOAP APIs,
  pagination, adapters, fault handling, retries, idempotency,
  Fusion integrations, BIP, ATP and real-world integration design.
</p>
          </div>
        </section>

        <section className="questions container">
          <div className="section-heading">
            <p className="eyebrow">OIC INTERVIEW PREPARATION</p>

            <h2>
              Oracle Integration Cloud Interview Questions and Answers
            </h2>

            <p>
  These OIC interview questions focus on practical integration scenarios
  rather than only definitions. They cover performance optimization,
  pagination, error handling, retries, idempotency, Fusion integrations,
  BIP, ATP and integration architecture.
</p>
          </div>

          <div className="question-list-intro">
  <h2>Practical OIC Interview Questions</h2>

  <p>
    Use these questions to prepare for real-world Oracle Integration Cloud
    interview discussions, including integration design, API processing,
    error handling, performance and enterprise integration scenarios.
  </p>
</div>

<QuestionList />
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

export default OICQuestions;