import "./App.scss";
import { CSSProperties, useState } from "react";
import { SymplPrimaryButton } from "@symplr-ux/alloy-components/dist/react-bindings";
import PreviewGrid from "./preview-grid";
import DownloadButton from "./DownloadButton";
import FilePicker from "./FilePicker";
import Papa from "papaparse";

const styles = {
    buttonRow: {
        marginTop: "1rem"
    } as CSSProperties
};

function App() {
    const [headerRow, setHeaderRow] = useState([]);
    const [dataRows, setDataRows] = useState([]);

    function setFileAndParse(file: any) {
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
            <p>Download a comma-delimited (CSV) template, if you don't have one already.</p>
            <DownloadButton text='Download CSV Template'></DownloadButton>
            <br />
            <p>Select a comma-delimited (CSV) file to upload</p>
            <FilePicker setFile={setFileAndParse} />
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
