import "./App.scss";
import { CSSProperties, useState } from "react";
import { SymplFileSelector, SymplPrimaryButton } from "@symplr-ux/alloy-components/dist/react-bindings";
import PreviewGrid from "./preview-grid";
import DownloadButton from "./DownloadButton";
import Papa from "papaparse";

const styles = {
    buttonRow: {
        marginTop: "16px"
    } as CSSProperties,
    label: {
        margin: "16px 0"
    }
};

function App() {
    const [headerRow, setHeaderRow] = useState([]);
    const [dataRows, setDataRows] = useState([]);

    function setFileAndParse(event: any) {
        const file = event.detail;
        setHeaderRow([]);
        setDataRows([]);
        if (file !== null) {
            Papa.parse(file, {
                complete: (results: any) => {
                    setHeaderRow(results.data[0]);
                    setDataRows(results.data.splice(1));
                }
            });
        }
    }
    const haveData = dataRows.length > 0;

    return (
        <form>
            <h6>Download Template</h6>
            <DownloadButton text='Download Template'></DownloadButton>
            <h6 style={styles.label}>Upload file to import</h6>
            <SymplFileSelector
                maxFileSize={30 * 1024 * 1024}
                label='Select File'
                icon='si-upload'
                accept='.csv,.txt'
                onSymplvalue={setFileAndParse}
            />
            {haveData && (
                <>
                    <PreviewGrid headerRow={headerRow} dataRows={dataRows}></PreviewGrid>
                    <div style={styles.buttonRow}>
                        <SymplPrimaryButton text='Import'></SymplPrimaryButton>
                    </div>
                </>
            )}
        </form>
    );
}

export default App;
