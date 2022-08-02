import "./App.scss";
import { CSSProperties, useState } from "react";
import {
    SymplStepper,
    SymplStep,
    SymplFooter,
    SymplPrimaryButton,
    SymplDataGrid,
    SymplDgRow,
    SymplDgHead,
    SymplDgHeaderCell,
    SymplDgCell,
    SymplDgBody,
    SymplDgFoot,
    SymplSecondaryButton
} from "@symplr-ux/alloy-components/dist/react-bindings";
import PreviewGrid from "./preview-grid";
import { useCSVReader } from "react-papaparse";

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
    } as CSSProperties
};

function App() {
    const { CSVReader } = useCSVReader();
    const [headerRow, setHeaderRow] = useState([]);
    const [dataRows, setDataRows] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <form>
                <SymplStepper activeIndex={activeIndex}>
                    <SymplStep name='Upload' icon='si-upload'>
                        <p>Download a comma-delimited (CSV) template, if you don't have one already.</p>
                        <SymplSecondaryButton text='Download CSV template'></SymplSecondaryButton>
                        <br />
                        <p>Select a comma-delimited (CSV) file to upload</p>
                        <CSVReader
                            onUploadAccepted={(results: any) => {
                                setHeaderRow(results.data[0]);
                                setDataRows(results.data.splice(1));
                                setActiveIndex(1);
                            }}>
                            {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }: any) => (
                                <>
                                    <div style={styles.csvReader}>
                                        <button type='button' {...getRootProps()} style={styles.button}>
                                            Select...
                                        </button>
                                        <div style={styles.acceptedFile}>{acceptedFile ? acceptedFile.name : ""}</div>
                                        <button {...getRemoveFileProps()} style={styles.button}>
                                            Remove
                                        </button>
                                    </div>
                                    <div style={styles.progressBar}>
                                        <ProgressBar />
                                    </div>
                                </>
                            )}
                        </CSVReader>
                    </SymplStep>
                    <SymplStep name='Preview and Import' icon='si-import'>
                        {activeIndex === 1 && (
                            <>
                                <PreviewGrid headerRow={headerRow} dataRows={dataRows}></PreviewGrid>
                                <SymplPrimaryButton text='Import'></SymplPrimaryButton>
                            </>
                        )}
                    </SymplStep>
                    <SymplStep name='Verify' icon='si-verified'>
                        <SymplDataGrid title='Instructor-Led Classes' selectionMode='checkbox' infinite maxHeight='300px'>
                            <SymplDgHead sticky={true} slot='header'>
                                <SymplDgRow>
                                    <SymplDgHeaderCell>Class Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Course Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Session Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Start Date &amp, Time</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>End Date &amp, Time</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Location</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Room</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Class Notes</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Max Enroll</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Min Enroll</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Instructor ID</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Coordinator</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Originator</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Type</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Status</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Credit Types</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Credit Value</SymplDgHeaderCell>
                                </SymplDgRow>
                            </SymplDgHead>
                            <SymplDgBody slot='body'>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>301</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intermediate SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>10B</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Advanced SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>22-b</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                            </SymplDgBody>
                            <SymplDgFoot slot='footer'>
                                <div></div>
                            </SymplDgFoot>
                        </SymplDataGrid>
                        <h4>Summary</h4>
                    </SymplStep>
                </SymplStepper>
            </form>
            <SymplFooter year='2022'></SymplFooter>
        </>
    );
}

export default App;
