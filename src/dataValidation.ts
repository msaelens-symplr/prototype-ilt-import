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

function getFirstMissingRequiredColumn(row: object): string {
    if (!columnPresent(row, "Class Title")) return "Missing Class Title";
    if (!columnPresent(row, "Course Title")) return "Missing Course Title";
    if (!columnPresent(row, "Session Title")) return "Missing Session Title";
    if (!columnPresent(row, "Session Title")) return "Missing Session Title";
    if (!columnPresent(row, "Start Date & Time")) return "Missing Start Date & Time";
    if (!columnPresent(row, "End Date & Time")) return "End Date & Time";
    if (!columnPresent(row, "Location")) return "Missing Location";
    if (!columnPresent(row, "Room")) return "Missing Room";
    if (!columnPresent(row, "Class Notes")) return "Missing Class Notes";
    if (!columnPresent(row, "Max Enroll")) return "Missing Max Enroll";
    if (!columnPresent(row, "Min Enroll")) return "Missing Min Enroll";
    if (!columnPresent(row, "Instructor ID")) return "Missing Instructor ID";
    if (!columnPresent(row, "Coordinator")) return "Missing Coordinator";
    if (!columnPresent(row, "Originator")) return "Missing Originator";
    if (!columnPresent(row, "Type")) return "Missing Type";
    if (!columnPresent(row, "Status")) return "Missing Status";
    if (!columnPresent(row, "Credit Types")) return "Missing Credit Types";
    if (!columnPresent(row, "Credit Value")) return "Missing Credit Value";
    return "";
}

export function validityMessage(columnNames: string[], columns: string[]): string {
    const row:any = csvColumnsToRowObject(columnNames, columns);
    const message = getFirstMissingRequiredColumn(row);

    return message;
}