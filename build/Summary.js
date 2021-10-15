"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
var HtmlReport_1 = require("./ReportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, OutputTarget) {
        this.analyzer = analyzer;
        this.OutputTarget = OutputTarget;
    }
    Summary.WinsAnalyzerWithHtmlReport = function (team, filename) {
        if (filename === void 0) { filename = "report"; }
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(team), new HtmlReport_1.HtmlReport(filename));
    };
    Summary.prototype.buildAndPrint = function (matches) {
        var output = this.analyzer.run(matches);
        this.OutputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
