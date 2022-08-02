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

function renderRowCells(row: string[]): JSX.Element[] {
    return row.map((cellData: any, index: number) => {
        return <SymplDgCell key={index}>{cellData}</SymplDgCell>;
    });
}

function renderRows(rows: string[][]): JSX.Element[] {
    return rows.map((row: any, index: number) => {
        return <SymplDgRow key={index}>{renderRowCells(row)}</SymplDgRow>;
    });
}

function renderHeaderCells(headers: string[]): JSX.Element[] {
    return headers.map((header: any, index: number) => {
        return <SymplDgHeaderCell key={index}>{header}</SymplDgHeaderCell>;
    });
}

const PreviewGrid: FunctionComponent<Props> = ({ headerRow, dataRows }) => {
    if (dataRows.length === 0) {
        return <></>;
    }

    const renderedHeader = renderHeaderCells(headerRow);
    const renderedRows = renderRows(dataRows);

    return (
        <SymplDataGrid title='Instructor-Led Classes' selectionMode='checkbox' infinite maxHeight='600px'>
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
