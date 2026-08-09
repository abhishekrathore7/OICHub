const vbcsQuestions = [
  {
    question:
      "You need to build a VBCS application that displays 50,000 records from a REST API. How would you design it to avoid performance issues?",
    answer:
      "I would avoid loading all records into the browser at once. I would use server-side pagination where the REST API supports it and configure the application's data provider to retrieve only the required page. I would also avoid unnecessary client-side transformations and reduce the amount of data returned by selecting only the fields required by the UI."
  },

  {
    question:
      "What is the difference between an Array Data Provider (ADP) and a Service Data Provider (SDP)?",
    answer:
      "An ADP is generally used when the application already has array-based data available on the client side. An SDP is designed to work with service-based data, typically REST endpoints, and provides capabilities such as fetching, paging and interacting with remote data. The choice depends on whether the data is local or service-backed."
  },

  {
    question:
      "A VBCS table displays data correctly initially but does not refresh after an update. How would you troubleshoot it?",
    answer:
      "I would first verify that the update action completed successfully. Then I would check whether the data provider or variable used by the table is being refreshed after the update. Depending on the implementation, I may need to refresh the SDP, re-fetch the data or update the underlying variable so that the table receives the latest data."
  },

  {
    question:
      "How would you implement pagination for a large REST API in VBCS?",
    answer:
      "I would first determine how the REST API exposes pagination, such as limit/offset, page number or next links. I would configure the Service Data Provider and REST service appropriately so that only the required records are retrieved for each page. Pagination should preferably happen on the server rather than retrieving the complete dataset into the browser."
  },

  {
    question:
      "What is a Service Connection in VBCS and why is it useful?",
    answer:
      "A Service Connection defines how a VBCS application communicates with an external service. It centralizes information such as the service endpoint, available operations and authentication configuration, allowing pages and action chains to consume the service without hard-coding connection details throughout the application."
  },

  {
    question:
      "You need to consume an Oracle Fusion REST API from VBCS. How would you approach the integration?",
    answer:
      "I would create a Service Connection for the Fusion REST endpoint and configure the appropriate authentication and service definition. I would then expose the required operation to the application and use it through action chains or other page logic. I would also ensure that the Fusion user or integration identity has the required privileges."
  },

  {
    question:
      "A REST API works correctly in Postman but returns 401 from VBCS. What would you investigate?",
    answer:
      "I would compare the authentication method, credentials, authorization headers, endpoint and environment configuration between Postman and VBCS. I would also verify that the identity used by VBCS has the required permissions in the target system. If OAuth is involved, I would verify the token configuration and scopes."
  },

  {
    question:
      "What is an Action Chain in VBCS?",
    answer:
      "An Action Chain is a sequence of actions used to implement application behavior. Actions can include calling REST services, assigning variables, navigating between pages, displaying notifications, running JavaScript and performing conditional logic."
  },

  {
    question:
      "How would you handle a REST call that must happen only after another REST call succeeds?",
    answer:
      "I would place the operations sequentially in an Action Chain and evaluate the result of the first call before executing the second. Success and failure paths can be handled using conditional logic and appropriate error handling actions."
  },

  {
    question:
      "How would you handle errors from a REST API in a VBCS application?",
    answer:
      "I would capture the error response from the REST action and provide meaningful feedback to the user rather than exposing raw technical errors. Depending on the application, I may also log important diagnostic information, handle specific HTTP status codes differently and prevent subsequent actions from executing when a critical operation fails."
  },

  {
    question:
      "When would you use JavaScript in VBCS instead of declarative actions?",
    answer:
      "I would prefer declarative actions for standard application behavior because they are easier to maintain and understand. JavaScript is appropriate when the required behavior is difficult to express declaratively, when custom data manipulation is required, or when reusable client-side logic is needed."
  },

  {
    question:
      "A VBCS application contains complex JavaScript logic on multiple pages. How would you improve maintainability?",
    answer:
      "I would identify repeated logic and move it into reusable JavaScript modules or functions where appropriate. I would also reduce page-specific logic, use meaningful names and keep business rules separate from UI-specific behavior. Declarative functionality should be preferred when it can accomplish the same requirement cleanly."
  },

  {
    question:
      "What are Business Objects in VBCS and when would you use them?",
    answer:
      "Business Objects provide a declarative way to model and persist application data within VBCS. They are useful when an application requires its own data model, CRUD operations, relationships, validation and application-level REST endpoints without requiring a separate backend application."
  },

  {
    question:
      "When would you choose a Business Object over an external REST service?",
    answer:
      "I would use a Business Object when the application owns the data and needs VBCS-managed persistence and CRUD functionality. I would use an external REST service when the authoritative data belongs to another application, such as Oracle Fusion, and the VBCS application is primarily consuming or updating that system."
  },

  {
    question:
      "You need to display Fusion data and VBCS Business Object data on the same page. How would you design it?",
    answer:
      "I would expose the Fusion API through a Service Connection and access the Business Object through the VBCS application's data model. I would keep the two data sources logically separate and combine them at the UI or application-logic level only when required. If complex joins are needed, I would consider whether the backend should provide a consolidated API instead."
  },

  {
    question:
      "A VBCS table uses an SDP and contains thousands of records. The page becomes slow when opening. What would you check?",
    answer:
      "I would check whether the application is fetching too many records initially, whether pagination is configured correctly, and whether the REST endpoint supports server-side filtering and sorting. I would also inspect the number of components and action chains executed during page initialization and remove unnecessary requests."
  },

  {
    question:
      "What is the purpose of variables in VBCS?",
    answer:
      "Variables store application data during runtime. They can represent page-level, application-level or other scoped data depending on how they are defined. Variables are commonly used to hold API responses, user input, selected records and intermediate values used by action chains."
  },

  {
    question:
      "A page variable contains an API response, but a child component does not reflect changes to that variable. How would you troubleshoot it?",
    answer:
      "I would verify the variable scope and the component's data binding. I would check whether the variable is actually being updated and whether the component is bound to the expected property. I would also inspect whether the component or data provider requires an explicit refresh when the underlying data changes."
  },

  {
    question:
      "How would you pass data from one VBCS page to another?",
    answer:
      "Depending on the requirement, I can use page input parameters, application-level variables or navigation parameters. For example, when navigating to an edit page, the selected record ID can be passed as a page parameter and then used to retrieve the complete record."
  },

  {
    question:
      "How would you design an edit page where the user selects a record from a table and then updates it?",
    answer:
      "I would capture the selected record or its unique identifier, navigate to the edit page and use that identifier to retrieve the latest version of the record. The form would bind to the retrieved data and an Action Chain would invoke the update operation. After a successful update, the previous page can refresh its data."
  },

  {
    question:
      "How would you prevent users from submitting the same form multiple times?",
    answer:
      "I would disable the submit action while the request is executing and re-enable it after completion or failure. I would also consider backend idempotency where duplicate transactions would have serious consequences, because UI-level protection alone cannot guarantee that duplicate requests will never occur."
  },

  {
    question:
      "A user clicks Save and receives an error, but the record was actually created in the backend. How would you design the application to handle this situation?",
    answer:
      "I would investigate whether the timeout or network error occurred after the backend committed the transaction. The application should use a reliable business identifier or idempotency mechanism where possible so that retrying does not create duplicates. The UI should also distinguish between a confirmed failure and an unknown transaction state."
  },

  {
    question:
      "How would you secure a VBCS application that contains different functionality for different user roles?",
    answer:
      "I would use application roles and appropriate authorization controls to restrict functionality. UI-level hiding can improve the user experience, but security should also be enforced by the backend APIs because a user should not gain access simply by manipulating the browser."
  },

  {
    question:
      "Why should backend authorization not rely only on hiding buttons in VBCS?",
    answer:
      "UI controls are not a security boundary. A user can potentially call the underlying API directly. Therefore, authorization must also be enforced by the backend service or API using appropriate roles, privileges and authentication."
  },

  {
    question:
      "A VBCS application works for one user but another user receives an authorization error when performing the same operation. How would you troubleshoot it?",
    answer:
      "I would compare the users' application roles, backend roles and privileges. I would also check whether the Service Connection uses the logged-in user's identity or a shared integration identity. Finally, I would inspect the actual API response to determine whether the failure originates in VBCS or the backend system."
  },

  {
    question:
      "How would you troubleshoot a VBCS page that suddenly starts making many unnecessary REST calls?",
    answer:
      "I would inspect page initialization events, variable assignments, Action Chains and component lifecycle behavior. I would look for actions that are triggering repeatedly due to variable changes or event bindings. I would then consolidate requests, remove duplicate calls and ensure that data is loaded only when it is actually required."
  },

  {
    question:
      "How would you design a VBCS application that needs to work with a slow backend API?",
    answer:
      "I would avoid blocking the UI unnecessarily and provide loading indicators while requests are running. I would minimize the amount of data retrieved, use pagination and filtering, cache data where appropriate and avoid making multiple sequential calls when they can be combined. Long-running backend processing may also require an asynchronous pattern."
  },

  {
    question:
      "You need to display data from three REST APIs on one dashboard. Would you call all three APIs sequentially?",
    answer:
      "Not necessarily. If the APIs are independent, I would avoid unnecessary sequential execution and consider parallel execution where the application architecture allows it. If the data is tightly related or one API depends on another, sequential processing may be necessary. I would also consider whether a backend aggregation API would provide a cleaner and more efficient design."
  },

  {
    question:
      "A VBCS application contains many components and becomes difficult to maintain. How would you structure it?",
    answer:
      "I would separate the application into logical pages and reusable components, keep action chains focused on specific responsibilities and avoid duplicating UI logic. Common functionality should be reused rather than copied across pages. Data access and business logic should also be separated from purely presentational concerns where practical."
  },

  {
    question:
      "How would you approach debugging an Action Chain that is not behaving as expected?",
    answer:
      "I would inspect the Action Chain execution step by step and verify the values of variables before and after important actions. I would check REST request and response data, conditional branches and event triggers. I would also isolate the failing action rather than assuming the problem is with the entire chain."
  },

  {
    question:
      "A VBCS application needs to upload a file and then send its contents to a REST API. How would you approach the design?",
    answer:
      "I would use the appropriate VBCS file handling capability to capture the uploaded file and determine whether the target API expects multipart data, base64 content or another representation. For large files, I would avoid unnecessarily loading or transforming the entire file in the browser and would consider whether an integration layer such as OIC should handle the file processing."
  },

  {
    question:
      "When would you use OIC between VBCS and a backend system instead of calling the backend directly from VBCS?",
    answer:
      "I would consider OIC when the interaction requires orchestration across multiple systems, complex transformations, enterprise-level error handling, retries, scheduled processing or integration with systems that should not be directly exposed to the browser. Direct REST calls are appropriate for simpler interactions where the backend API is already designed for application consumption."
  },

  {
    question:
      "A VBCS application needs to update Fusion and then update an external system only if the Fusion transaction succeeds. How would you design it?",
    answer:
      "For a simple operation, an Action Chain could execute the Fusion update and then invoke the external API after validating the response. For a more complex enterprise process involving retries, multiple systems and guaranteed recovery, I would consider placing the orchestration in OIC and letting VBCS interact with the integration rather than coordinating the entire process in the browser."
  },

  {
    question:
      "How would you design a VBCS application so that business logic is not tightly coupled to the UI?",
    answer:
      "I would keep complex business rules and enterprise integration logic in backend services or OIC rather than implementing everything in page JavaScript. VBCS should primarily manage presentation, user interaction and lightweight client-side logic. This makes the application easier to maintain and allows the same business logic to be reused by other applications."
  },

  {
    question:
      "What are common mistakes that make VBCS applications difficult to maintain?",
    answer:
      "Common problems include excessive JavaScript, duplicated Action Chains, large page definitions, unnecessary REST calls, poor variable scoping, putting business logic directly into UI components, lack of reusable components and relying on UI restrictions for security. A maintainable VBCS application should keep responsibilities clear and use declarative capabilities wherever practical."
  }
];

export default vbcsQuestions;