import "./App.scss";
import {
    SymplStepper,
    SymplStep,
    SymplFileSelector,
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

function onFileSelected(fileEvent: CustomEvent<File | File[]>) {
    console.log(fileEvent);
}

function App() {
    return (
        <>
            <form>
                <SymplStepper activeIndex={0}>
                    <SymplStep name='Upload' icon='si-upload'>
                        <p>Download a comma-delimited (CSV) template, if you don't have one already.</p>
                        <SymplSecondaryButton text='Download CSV template'></SymplSecondaryButton>
                        <br />
                        <p>Select a comma-delimited (CSV) file and upload</p>
                        <SymplFileSelector
                            onSymplvalue={onFileSelected}
                            icon='si-upload'
                            maxFiles={1}
                            accept='.csv'
                            label='Select...'></SymplFileSelector>
                    </SymplStep>
                    <SymplStep name='Preview and Import' icon='si-import'>
                        <SymplDataGrid title='Instructor-Led Classes' selectionMode='checkbox' infinite maxHeight='300px'>
                            <SymplDgHead sticky={true} slot='header'>
                                <SymplDgRow>
                                    <SymplDgHeaderCell>Class Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Course Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Session Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Start Date &amp; Time</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>End Date &amp; Time</SymplDgHeaderCell>
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
                        <SymplPrimaryButton text='Import'></SymplPrimaryButton>
                    </SymplStep>
                    <SymplStep name='Verify' icon='si-verified'>
                        <SymplDataGrid title='Instructor-Led Classes' selectionMode='checkbox' infinite maxHeight='300px'>
                            <SymplDgHead sticky={true} slot='header'>
                                <SymplDgRow>
                                    <SymplDgHeaderCell>Class Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Course Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Session Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Start Date &amp; Time</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>End Date &amp; Time</SymplDgHeaderCell>
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
