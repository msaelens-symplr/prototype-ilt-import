import { useEffect, useState } from "react";
import "./App.scss";
import {
    SymplDataGrid,
    SymplDgRow,
    SymplDgHead,
    SymplDgHeaderCell,
    SymplDgCell,
    SymplDgBody,
    SymplSpinner
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
    row.forEach((cellData: string, index: number) => {
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

async function renderRows(headers: string[], rows: string[][]): Promise<JSX.Element[]> {
    return rows.map((row: any, index: number) => {
        return <SymplDgRow key={index}>{renderRowCells(headers, row)}</SymplDgRow>;
    });
}

async function renderHeaderCells(headers: string[]): Promise<JSX.Element[]> {
    var headerCells: JSX.Element[] = [];

    headerCells.push(<SymplDgHeaderCell key={0}>Status</SymplDgHeaderCell>);
    headers.forEach((header: any, index: number) => {
        headerCells.push(<SymplDgHeaderCell key={index + 1}>{header}</SymplDgHeaderCell>);
    });
    return headerCells;
}

const PreviewGrid: FunctionComponent<Props> = ({ headerRow, dataRows }) => {
    const [renderedHeader, setRenderedHeader] = useState(new Array<JSX.Element>());
    const [renderedRows, setRenderedRows] = useState(new Array<JSX.Element>());

    useEffect(() => {
        (async () => {
            if (renderedHeader.length === 0) {
                setRenderedHeader(await renderHeaderCells(headerRow));
            }
            if (renderedRows.length === 0) {
                setRenderedRows(await renderRows(headerRow, dataRows));
            }
        })();
    });

    if (renderedRows.length < dataRows.length) {
        return (
            <div>
                <SymplSpinner></SymplSpinner>
            </div>
        );
    }

    const title = `Instructor-Led Classes, ${dataRows.length} sessions`;

    return (
        <SymplDataGrid title={title} selectionMode='checkbox' maxHeight='600px'>
            <SymplDgHead sticky={true} slot='header'>
                <SymplDgRow>{renderedHeader}</SymplDgRow>
            </SymplDgHead>
            <SymplDgBody slot='body'>{renderedRows}</SymplDgBody>
        </SymplDataGrid>
    );
};

export default PreviewGrid;
