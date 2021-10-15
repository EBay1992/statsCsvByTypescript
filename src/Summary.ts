import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./ReportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public OutputTarget: OutputTarget) {}

  static WinsAnalyzerWithHtmlReport(
    team: string,
    filename: string = "report"
  ): Summary {
    return new Summary(new WinsAnalyzer(team), new HtmlReport(filename));
  }
  buildAndPrint(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.OutputTarget.print(output);
  }
}
