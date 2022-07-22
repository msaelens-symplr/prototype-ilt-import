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
                    <SymplStep name='Select File'>
                        <SymplSecondaryButton text='Download CSV template'></SymplSecondaryButton>
                        <p>Select a comma-delimited (CSV) file to upload</p>
                        <SymplFileSelector
                            onSymplvalue={onFileSelected}
                            icon='si-upload'
                            maxFiles={1}
                            accept='.csv'
                            label='Select...'></SymplFileSelector>
                    </SymplStep>
                    <SymplStep name='Upload'>
                        <SymplPrimaryButton text='Upload'></SymplPrimaryButton>
                    </SymplStep>
                    <SymplStep name='Verify and Import'>
                        <SymplDataGrid title='Instructor Lead Classes' selectionMode='checkbox' infinite maxHeight='300px'>
                            <SymplDgHead sticky={true} slot='header'>
                                <SymplDgRow>
                                    <SymplDgHeaderCell>Class Name</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Session</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Room</SymplDgHeaderCell>
                                </SymplDgRow>
                            </SymplDgHead>
                            <SymplDgBody slot='body'>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>301</SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intermediate SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>10B</SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Advanced SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>22-b</SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                </SymplDgRow>
                            </SymplDgBody>
                            <SymplDgFoot slot='footer'>
                                <div></div>
                            </SymplDgFoot>
                        </SymplDataGrid>
                        <SymplPrimaryButton text='Import'></SymplPrimaryButton>
                    </SymplStep>
                </SymplStepper>
            </form>
            <SymplFooter year='2022'></SymplFooter>
        </>
    );
}

export default App;
