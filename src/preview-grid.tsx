import "./App.scss";
import {
    SymplDataGrid,
    SymplDgRow,
    SymplDgHead,
    SymplDgHeaderCell,
    SymplDgCell,
    SymplDgBody,
    SymplDgFoot
} from "@symplr-ux/alloy-components/dist/react-bindings";
import { FunctionComponent } from "react";

interface Props {
    headerRow: string[];
    dataRows: string[][];
}

function rowIsValid(cells: string[]): boolean {
    return cells[2] !== "Session C";
}

function rowStatus(cells: string[]): string {
    return rowIsValid(cells) ? "Valid" : "Invalid";
}

function rowStatusIcon(row: string[]): string {
    return rowIsValid(row) ? "si-check" : "si-x";
}

function renderRowCells(row: string[]): JSX.Element[] {
    var rowCells: JSX.Element[] = [];

    rowCells.push(
        <SymplDgCell key={0}>
            <i className={rowStatusIcon(row)}></i>
            {rowStatus(row)}
        </SymplDgCell>
    );
    row.map((cellData: any, index: number) => {
        rowCells.push(<SymplDgCell key={index + 1}>{cellData}</SymplDgCell>);
    });
    return rowCells;
}

function renderRows(rows: string[][]): JSX.Element[] {
    return rows.map((row: any, index: number) => {
        return <SymplDgRow key={index}>{renderRowCells(row)}</SymplDgRow>;
    });
}

function renderHeaderCells(headers: string[]): JSX.Element[] {
    var headerCells: JSX.Element[] = [];

    headerCells.push(<SymplDgHeaderCell key={0}>Status</SymplDgHeaderCell>);
    headers.map((header: any, index: number) => {
        headerCells.push(<SymplDgHeaderCell key={index + 1}>{header}</SymplDgHeaderCell>);
    });
    return headerCells;
}

const PreviewGrid: FunctionComponent<Props> = ({ headerRow, dataRows }) => {
    if (dataRows.length === 0) {
        return <></>;
    }

    const renderedHeader = renderHeaderCells(headerRow);
    const renderedRows = renderRows(dataRows);
    const title = `Instructor-Led Classes, ${dataRows.length} sessions`;

    return (
        <SymplDataGrid title={title} selectionMode='checkbox' maxHeight='600px'>
            <SymplDgHead sticky={true} slot='header'>
                <SymplDgRow>{renderedHeader}</SymplDgRow>
            </SymplDgHead>
            <SymplDgBody slot='body'>{renderedRows}</SymplDgBody>
            <SymplDgFoot slot='footer'>
                <div></div>
            </SymplDgFoot>
        </SymplDataGrid>
    );
};

export default PreviewGrid;
