import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { HtmlReport } from "./ReportTargets/HtmlReport";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summaryWithLog = new Summary(
//   new WinsAnalyzer("Man United"),
//   new ConsoleReport()
// );
// const summaryWithHtml = new Summary(
//   new WinsAnalyzer("Liverpool"),
//   new HtmlReport("liverpoolReport")
// );

const summaryUsingShortcut = Summary.WinsAnalyzerWithHtmlReport(
  "Arsenal",
  "arsenalReport"
);

// summaryWithLog.buildAndPrint(matchReader.matches);
// summaryWithHtml.buildAndPrint(matchReader.matches);
summaryUsingShortcut.buildAndPrint(matchReader.matches);
