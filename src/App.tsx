import "./App.scss";
import { CSSProperties, useState } from "react";
import {
    SymplFileSelector,
    SymplPrimaryButton,
    SymplStep,
    SymplStepper
} from "@symplr-ux/alloy-components/dist/react-bindings";
import PreviewGrid from "./preview-grid";
import DownloadButton from "./DownloadButton";
import Papa from "papaparse";

const styles = {
    buttonRow: {
        marginTop: "16px"
    } as CSSProperties,
    label: {
        marginBottom: "16px"
    } as CSSProperties,
    content: {
        background: "white",
        padding: "16px"
    } as CSSProperties
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
            <SymplStepper>
                <SymplStep name='Download Template' icon='si-download'>
                    <div style={styles.content}>
                        <h6 style={styles.label}>Download Template</h6>
                        <DownloadButton text='Download Template'></DownloadButton>
                    </div>
                </SymplStep>
                <SymplStep name='Upload File' icon={haveData ? "si-check" : "si-eye"}>
                    <div style={styles.content}>
                        <h6 style={styles.label}>Upload file to import</h6>
                        <SymplFileSelector
                            maxFileSize={30 * 1024 * 1024}
                            label='Select File'
                            icon='si-upload'
                            accept='.csv,.txt'
                            onSymplvalue={setFileAndParse}
                        />
                    </div>
                </SymplStep>
                <SymplStep name='Preview & Import' icon='si-file-input'>
                    <div style={styles.content}>
                        {haveData && (
                            <>
                                <PreviewGrid headerRow={headerRow} dataRows={dataRows}></PreviewGrid>
                                <div style={styles.buttonRow}>
                                    <SymplPrimaryButton text='Import'></SymplPrimaryButton>
                                </div>
                            </>
                        )}
                    </div>
                </SymplStep>
            </SymplStepper>
        </form>
    );
}

export default App;
