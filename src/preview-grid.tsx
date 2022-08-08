import "./App.scss";
import {
    SymplDataGrid,
    SymplDgRow,
    SymplDgHead,
    SymplDgHeaderCell,
    SymplDgCell,
    SymplDgBody
} from "@symplr-ux/alloy-components/dist/react-bindings";
import { FunctionComponent, useState } from "react";
import { columnIsRequired, validityMessage } from "./dataValidation";

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
    row.forEach((cellData: string, index: number) => {
        rowCells.push(
            cellData.length > 0 || !columnIsRequired(headers[index]) ? (
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

function renderRows(end: number, headers: string[], rows: string[][]): JSX.Element[] {
    let result: JSX.Element[] = [];
    for (let index = 0; index < end; index += 1) {
        result.push(<SymplDgRow key={index}>{renderRowCells(headers, rows[index])}</SymplDgRow>);
    }
    return result;
}

function renderHeaderCells(headers: string[]): JSX.Element[] {
    var headerCells: JSX.Element[] = [];

    headerCells.push(<SymplDgHeaderCell key={0}>Status</SymplDgHeaderCell>);
    headers.forEach((header: any, index: number) => {
        headerCells.push(<SymplDgHeaderCell key={index + 1}>{header}</SymplDgHeaderCell>);
    });
    return headerCells;
}

const PreviewGrid: FunctionComponent<Props> = ({ headerRow, dataRows }) => {
    const increment: number = 20;
    const renderedHeader = renderHeaderCells(headerRow);
    const [endRow, setEndRow] = useState(Math.min(increment - 1, dataRows.length - 1));
    const title = `Instructor-Led Classes, ${dataRows.length} sessions, ${endRow + 1} rendered.`;

    const onInfiniteScroll = (e: CustomEvent<void>) => {
        if (endRow + increment > dataRows.length) {
            setEndRow(dataRows.length - 1);
        } else {
            setEndRow(endRow + increment);
        }
    };

    const renderedRows = renderRows(endRow, headerRow, dataRows);

    return (
        <>
            <h4>{title}</h4>
            <SymplDataGrid selectionMode='checkbox' infinite maxHeight='600px'>
                <SymplDgHead sticky={true} slot='header'>
                    <SymplDgRow>{renderedHeader}</SymplDgRow>
                </SymplDgHead>
                <SymplDgBody slot='body' onInfiniteScroll={onInfiniteScroll}>
                    {renderedRows}
                </SymplDgBody>
            </SymplDataGrid>
        </>
    );
};

export default PreviewGrid;
