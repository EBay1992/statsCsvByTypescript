import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, "utf8")
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
