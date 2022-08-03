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
import { validityMessage } from "./dataValidation";

interface Props {
    headerRow: string[];
    dataRows: string[][];
}

function rowStatus(errorMessage: string): string {
    return errorMessage.length === 0 ? "Valid" : errorMessage;
}

function rowStatusIcon(valid: boolean): string {
    return valid ? "si-check" : "si-x";
}

function renderRowCells(headers: string[], row: string[]): JSX.Element[] {
    let rowCells: JSX.Element[] = [];
    const validMessage: string = validityMessage(headers, row);

    rowCells.push(
        <SymplDgCell key={0}>
            <i className={rowStatusIcon(validMessage.length === 0)}></i>
            {rowStatus(validMessage)}
        </SymplDgCell>
    );
    row.map((cellData: string, index: number) => {
        rowCells.push(
            cellData.length > 0 ? (
                <SymplDgCell key={index + 1}>{cellData}</SymplDgCell>
            ) : (
                <SymplDgCell key={index + 1}>
                    <span style={{ color: "red" }}>Required*</span>
                </SymplDgCell>
            )
        );
    });
    return rowCells;
}

function renderRows(headers: string[], rows: string[][]): JSX.Element[] {
    return rows.map((row: any, index: number) => {
        return <SymplDgRow key={index}>{renderRowCells(headers, row)}</SymplDgRow>;
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
    const renderedRows = renderRows(headerRow, dataRows);
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
