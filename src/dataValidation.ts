import pad from "lodash/pad";
import join from "lodash/join";

export function csvColumnsToRowObject(columnNames: string[], columns: string[]): {} {
    let result: any = {};

    columnNames.forEach((columnName, index) => {
        result[columnName] = columns[index];
    })

    return result;
}

function columnPresent(row: any, name: string): boolean {
    if (typeof row[name] === undefined || row[name].length === 0) {
        return false;
    }
    return true;
}

const requiredColumns: string[] = [
    "Class Title",
    "Course Title",
    "Session Title",
    "Session Title",
    "Start Date & Time",
    "End Date & Time",
    "Location",
    "Room",
    "Class Notes",
    "Max Enroll",
    "Min Enroll",
    "Instructor ID",
    "Coordinator",
    "Originator",
    "Type",
    "Status",
    "Credit Types",
    "Credit Value"
];

function getFirstMissingRequiredColumn(row: object): string {
    let result = "";
    requiredColumns.forEach(column => {
        if (!columnPresent(row, column) && result.length === 0) {
            result = `Missing ${column}`;
        }
    })
    return result;
}

export function validityMessage(columnNames: string[], columns: string[]): string {
    const row:any = csvColumnsToRowObject(columnNames, columns);
    const message = getFirstMissingRequiredColumn(row);

    return message;
}

export function getDataTemplateCsv(): string {
    let result = join(requiredColumns, ",") + "\n";
    result += pad("", requiredColumns.length - 1, ",") + "\n";
    result += pad("", requiredColumns.length - 1, ",") + "\n";
    result += pad("", requiredColumns.length - 1, ",") + "\n";
    result += pad("", requiredColumns.length - 1, ",") + "\n";
    result += pad("", requiredColumns.length - 1, ",") + "\n";
    result += pad("", requiredColumns.length - 1, ",") + "\n";
    return result;
}