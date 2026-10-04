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

          <p>{item.answer}</p>
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
              OIC Interview Questions
            </h1>

            <p className="hero-text">
              Practical Oracle Integration Cloud interview questions and
              answers covering integrations, adapters, REST, SOAP, fault
              handling, lookups, mappings and real-world scenarios.
            </p>
          </div>
        </section>

        <section className="questions container">
          <div className="section-heading">
            <p className="eyebrow">OIC INTERVIEW PREPARATION</p>

            <h2>
              Oracle Integration Cloud Interview Questions and Answers
            </h2>
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