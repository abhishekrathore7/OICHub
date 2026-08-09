const oicQuestions = [
  {
    question:
      "You need to process 50,000 records from a REST API in OIC. How would you design the integration to avoid performance and memory issues?",
    answer:
      "I would avoid retrieving and processing all records in a single operation. I would implement pagination at the source, process records in manageable batches, and avoid unnecessary data transformations or API calls inside loops. If the source supports filtering, I would also retrieve only the records required for the current run. For very large volumes, I would consider staging the data and moving heavy transformations or database operations to ATP rather than performing everything inside OIC."
  },

  {
    question:
      "A REST API uses offset and limit parameters for pagination. How would you implement pagination in OIC?",
    answer:
      "I would initialize the offset and page size, invoke the API, process the returned records, and determine whether another page exists based on the response metadata or number of records returned. The offset would then be incremented by the page size and the API would be invoked again until all pages are processed. The implementation can use a While loop or another appropriate looping structure depending on the API behavior."
  },

  {
    question:
      "A REST API provides a next-page URL in its response. How would you consume all pages from OIC?",
    answer:
      "I would capture the next-page URL from the response and use it for the subsequent request. The integration would continue requesting pages while a valid next-page URL is returned. This is preferable to calculating offsets manually when the API itself controls pagination."
  },

  {
    question:
      "An OIC integration is calling a REST API inside a For-Each loop 10,000 times and is running very slowly. How would you optimize it?",
    answer:
      "I would first determine whether the target API supports bulk operations. If it does, I would replace individual calls with batch requests. I would also remove unnecessary calls, filter the source data before entering the loop, and consider moving database-side processing to ATP. If individual calls are unavoidable, I would examine whether the integration can be redesigned to process smaller batches or use an asynchronous architecture."
  },

  {
    question:
      "A scheduled OIC integration processes the same business record twice. How would you prevent duplicate processing?",
    answer:
      "I would introduce idempotency using a reliable business key or unique transaction identifier. A tracking table can store the records already processed and their status. Before processing a record, the integration can check whether that identifier has already been successfully processed. Depending on the business requirement, database constraints can also provide an additional layer of duplicate protection."
  },

  {
    question:
      "How would you design an OIC integration so that it can safely be re-run after a partial failure?",
    answer:
      "I would design the integration to be restartable and idempotent. Each transaction should have a unique identifier and its processing status should be tracked. If the integration fails after processing some records, a subsequent run should identify completed records and avoid processing them again while retrying only the incomplete transactions."
  },

  {
    question:
      "An external API intermittently returns HTTP 429. How would you handle this in OIC?",
    answer:
      "HTTP 429 indicates that the target is applying rate limiting. I would inspect the API's rate-limit and retry requirements and implement controlled retry behavior rather than continuously retrying immediately. Depending on the API, exponential backoff, a maximum retry count and delayed reprocessing may be appropriate. I would also investigate whether the integration can reduce request volume through batching."
  },

  {
    question:
      "An external API returns HTTP 500 intermittently. How would you design retry handling?",
    answer:
      "I would distinguish transient errors from permanent business or validation errors. For transient server errors such as HTTP 500, I would implement controlled retries with a maximum number of attempts. Each retry should be logged and the transaction should eventually be moved to an error or retry queue if the target continues failing."
  },

  {
    question:
      "When would you use a Scope Fault Handler instead of a Global Fault Handler?",
    answer:
      "A Scope Fault Handler is useful when a particular section of an integration requires specific recovery or error handling logic. A Global Fault Handler is more appropriate for errors that need centralized handling across the integration. For example, a local scope might handle a business-specific API failure while global handling can capture unexpected integration-level failures."
  },

  {
    question:
      "An OIC integration calls three APIs sequentially. The third API must execute only when the second API succeeds. How would you design this?",
    answer:
      "I would place the calls sequentially in an orchestration and explicitly evaluate the response from the second API before proceeding. The response can be validated using a Switch or appropriate conditional logic. If the second operation fails, the flow should move into the appropriate fault or recovery path rather than invoking the third API."
  },

  {
    question:
      "When would you choose a synchronous integration versus an asynchronous integration in OIC?",
    answer:
      "I would use synchronous processing when the caller needs an immediate response and the operation is expected to complete within an acceptable response time. I would use asynchronous processing when the operation is long-running, involves multiple downstream systems, handles large volumes, or does not require the caller to wait for completion."
  },

  {
    question:
      "A Fusion API takes several minutes to complete. The calling application expects a quick response. How would you design the OIC integration?",
    answer:
      "I would avoid keeping the caller waiting for the long-running Fusion operation. I would consider an asynchronous pattern where OIC accepts the request, initiates the downstream process, stores the transaction state, and returns an appropriate acknowledgement. Completion can then be handled through a callback, polling mechanism, scheduled process or another event-driven approach depending on what the Fusion service supports."
  },

  {
    question:
      "A BIP report returns multiple rows for the same Purchase Order because the PO contains multiple lines. OIC then calls the same PO API once for every row. How would you fix this?",
    answer:
      "I would identify the PO as the business-level unique key rather than treating every BIP row as a separate PO transaction. The data can be grouped or deduplicated before the API invocation. If the records are staged in ATP, the SQL or PL/SQL layer can also produce one record per PO before OIC consumes the data. This ensures that the PO API is invoked only once per PO."
  },

  {
    question:
      "You need to process a BIP report containing millions of records. Would you process everything directly in OIC?",
    answer:
      "Not necessarily. I would first determine whether BIP can filter the data to the required incremental or batch scope. I would also consider staging the report output and performing heavy transformation or deduplication in ATP. OIC should primarily orchestrate the process rather than become the location for unnecessarily expensive data processing."
  },

  {
    question:
      "How would you implement incremental data extraction from a source containing millions of records?",
    answer:
      "I would identify a reliable incremental attribute such as last update timestamp, sequence number or another source-system watermark. The integration would store the last successfully processed value and use it during the next execution to retrieve only changed or new records. The watermark should be updated only after successful processing to prevent data loss."
  },

  {
    question:
      "How would you handle a situation where the source system does not provide a reliable unique identifier?",
    answer:
      "I would work with the business and source-system team to identify a composite business key or another deterministic identifier. If necessary, I would create a controlled tracking mechanism in ATP. The key requirement is that the integration must be able to distinguish a new transaction from a previously processed transaction."
  },

  {
    question:
      "How would you prevent duplicate transactions when the source system sends the same event more than once?",
    answer:
      "I would implement idempotency using the source event ID or another unique business identifier. The identifier can be stored in a tracking table and checked before processing. The target transaction should only be created when that identifier has not already been successfully processed."
  },

  {
    question:
      "An OIC integration works correctly in TEST but fails in PROD. What would you investigate?",
    answer:
      "I would compare environment-specific configuration first. This includes connection credentials, endpoints, security policies, certificates, lookup values, integration properties, schedules, roles and target-system configuration. I would then compare the actual request and response payloads from both environments before assuming the mapping or business logic is incorrect."
  },

  {
    question:
      "A Fusion REST API returns HTTP 401 from OIC even though the connection configuration appears correct. How would you troubleshoot it?",
    answer:
      "I would verify that the credentials or OAuth configuration are valid and that the Fusion user has the required roles and privileges. I would also check the endpoint URL, authentication policy and whether the request is being made against the correct Fusion environment. If authentication is valid, I would inspect whether the issue is actually authorization rather than authentication."
  },

  {
    question:
      "An OIC integration receives a successful HTTP response from a target API, but the business transaction was not actually created. What would you investigate?",
    answer:
      "I would inspect the complete response payload rather than relying only on the HTTP status code. Some APIs return HTTP success while providing business-level errors in the response body. I would verify the target application's transaction status, request payload, response payload and any asynchronous processing that occurs after the API call."
  },

  {
    question:
      "How would you design error tracking so that business users can identify failed transactions without accessing OIC Monitoring?",
    answer:
      "I would maintain an application-level tracking table containing the business identifier, processing status, timestamps, error message, retry count and other useful attributes. OIC can update this table during processing. A report or dashboard can then expose failed transactions to business users without giving them direct access to OIC monitoring."
  },

  {
    question:
      "An OIC integration contains one very large orchestration with dozens of actions and nested scopes. How would you improve its maintainability?",
    answer:
      "I would first identify reusable or logically independent functionality and separate it where appropriate. Common logic can be moved into reusable integrations or procedures. I would also use meaningful names, consistent error handling, clear scopes and minimal nesting. The objective is to make each integration responsible for a clear business function rather than creating one large flow containing unrelated responsibilities."
  },

  {
    question:
      "You need to validate every transaction against several business rules before calling a Fusion API. Where would you implement the validations?",
    answer:
      "The location depends on the complexity and nature of the rules. Simple routing or field-level validations can be handled in OIC. Complex validations involving large datasets, multiple joins or database lookups may be more efficient in ATP using SQL or PL/SQL. OIC can then orchestrate the process and act on the validation result."
  },

  {
    question:
      "When would you use ATP for processing instead of performing the transformation entirely inside OIC?",
    answer:
      "I would consider ATP when the transformation involves large datasets, complex joins, aggregations, deduplication or reusable database logic. SQL and PL/SQL can be much more efficient for set-based processing than iterating through large numbers of records in OIC. OIC can then retrieve the prepared result and orchestrate downstream APIs."
  },

  {
    question:
      "How would you design an integration where one failed record should not cause an entire batch to fail?",
    answer:
      "I would isolate record-level processing and error handling from the overall batch. Each transaction can be processed independently, with its success or failure stored in a tracking mechanism. Failed records can then be retried separately while successful transactions remain completed."
  },

  {
    question:
      "How would you design an OIC integration that needs to retry failed records seven days later?",
    answer:
      "I would persist the failed transaction, failure timestamp, retry count and next retry date in a tracking table. A scheduled integration can periodically query records whose retry date has arrived and process them again. This is more reliable than keeping the original integration execution open while waiting for a long period."
  },

  {
    question:
      "How would you troubleshoot an OIC integration that suddenly became slower without any code changes?",
    answer:
      "I would compare recent execution times and identify which activity has increased in duration. I would inspect source data volume, target API response times, database performance, network or connectivity issues and changes in downstream systems. I would also check whether a query or report is returning significantly more data than before."
  },

  {
    question:
      "What factors would you consider when deciding whether an integration should be synchronous, asynchronous, scheduled or event-driven?",
    answer:
      "I would consider the business requirement, expected response time, transaction volume, processing duration, availability of events, target-system capabilities, error recovery requirements and whether the caller needs the final result immediately. The integration pattern should be selected based on the business process rather than simply choosing the easiest implementation."
  },

  {
    question:
      "What are some common mistakes that make OIC integrations difficult to maintain?",
    answer:
      "Common problems include hard-coded values, excessive API calls inside loops, large monolithic orchestrations, poor fault handling, lack of business tracking, duplicated mapping logic, unclear naming, unnecessary database calls and no idempotency strategy. A maintainable integration should be modular, observable, restartable and designed around clear business transactions."
  }
];

export default oicQuestions;