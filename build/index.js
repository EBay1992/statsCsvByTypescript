"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// const summaryWithLog = new Summary(
//   new WinsAnalyzer("Man United"),
//   new ConsoleReport()
// );
// const summaryWithHtml = new Summary(
//   new WinsAnalyzer("Liverpool"),
//   new HtmlReport("liverpoolReport")
// );
var summaryUsingShortcut = Summary_1.Summary.WinsAnalyzerWithHtmlReport("Arsenal", "arsenalReport");
// summaryWithLog.buildAndPrint(matchReader.matches);
// summaryWithHtml.buildAndPrint(matchReader.matches);
summaryUsingShortcut.buildAndPrint(matchReader.matches);
