import { useEffect } from "react";
import vbcsQuestions from "../data/vbcsQuestions";

function QuestionList() {
  return (
    <div className="question-list">
      {vbcsQuestions.map((item, index) => (
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

function VBCSQuestions() {
    useEffect(() => {
  document.title =
    "VBCS Interview Questions and Answers | Oracle Visual Builder";

  const description =
    "Prepare for VBCS interviews with practical Visual Builder Cloud Service interview questions and answers covering Business Objects, REST APIs, Service Connections, Oracle JET, ADP, SDP and real-world scenarios.";

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
            <a href="/oic-interview-questions">OIC</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">ORACLE VISUAL BUILDER</p>

            <h1>VBCS Interview Questions and Answers</h1>

            <p className="hero-text">
  Prepare for Visual Builder Cloud Service interviews with practical,
  scenario-based questions and answers covering Business Objects, REST APIs,
  Service Connections, Oracle JET, ADP, SDP and real-world application
  development scenarios.
</p>
          </div>
        </section>

        <section className="questions container">
          <div className="section-heading">
            <p className="eyebrow">VBCS INTERVIEW PREPARATION</p>

            <h2>
              Visual Builder Cloud Service Interview Questions and Answers
            </h2>

            <p>
  These VBCS interview questions focus on practical application development
  scenarios rather than only definitions. They cover Business Objects, REST
  APIs, Service Connections, Oracle JET, SDP, ADP and real-world Visual
  Builder development.
</p>
          </div>

          <div className="question-list-intro">
  <h2>Practical VBCS Interview Questions</h2>

  <p>
    Use these questions to prepare for real-world Visual Builder Cloud Service
    interview discussions, including application development, REST APIs,
    Business Objects, Service Connections and Oracle JET.
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

export default VBCSQuestions;