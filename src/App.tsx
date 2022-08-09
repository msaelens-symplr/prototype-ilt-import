import "./App.scss";
import { CSSProperties, useState } from "react";
import { SymplPrimaryButton } from "@symplr-ux/alloy-components/dist/react-bindings";
import PreviewGrid from "./preview-grid";
import { useCSVReader } from "react-papaparse";
import DownloadButton from "./DownloadButton";

const styles = {
    csvReader: {
        display: "flex",
        flexDirection: "row",
        marginTop: "1rem",
        marginBottom: 10
    } as CSSProperties,
    button: {
        fontFamily: "'Lato', Tahoma, Verdana, sans-serif",
        borderRadius: 4,
        color: "#2d4460",
        border: "1px solid #007b97",
        backgroundColor: "#fff",
        minWidth: 0,
        height: "2.125rem",
        padding: "0 1rem"
    } as CSSProperties,
    acceptedFile: {
        border: "1px solid #ccc",
        height: "2.125rem",
        lineHeight: 2.5,
        paddingLeft: 10,
        width: "20%",
        margin: "0 1rem"
    } as CSSProperties,
    progressBar: {
        backgroundColor: "green"
    } as CSSProperties,
    buttonRow: {
        marginTop: "1em"
    },
    invisible: {
        visibility: "hidden"
    }
};

function App() {
    const { CSVReader } = useCSVReader();
    const [headerRow, setHeaderRow] = useState([]);
    const [dataRows, setDataRows] = useState([]);

    function beforeFirstChunk() {
        console.log("beforeFirstChunk");
    }

    function chunk() {
        console.log("chunk");
    }

    return (
        <form>
            <p>Download a comma-delimited (CSV) template, if you don't have one already.</p>
            <DownloadButton text='Download CSV Template'></DownloadButton>
            <br />
            <p>Select a comma-delimited (CSV) file to upload</p>
            <CSVReader
                config={{ localChunkSize: 128, beforeFirstChunk: beforeFirstChunk, chunk: chunk }}
                onUploadAccepted={(results: any) => {
                    setHeaderRow(results.data[0]);
                    setDataRows(results.data.splice(1));
                }}>
                {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }: any) => (
                    <>
                        <div style={styles.csvReader}>
                            <button type='button' {...getRootProps()} style={styles.button}>
                                Select...
                            </button>
                            <div style={styles.acceptedFile}>{acceptedFile ? acceptedFile.name : ""}</div>
                            <button {...getRemoveFileProps()} style={acceptedFile ? styles.button : styles.invisible}>
                                Remove
                            </button>
                        </div>
                    </>
                )}
            </CSVReader>

            {dataRows.length > 0 && (
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
