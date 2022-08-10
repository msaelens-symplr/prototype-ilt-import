import { SymplLabel, SymplSecondaryButton, SymplSpinner } from "@symplr-ux/alloy-components/dist/react-bindings";
import { CSSProperties, useState } from "react";
import { fileOpen } from "browser-fs-access";

const styles = {
    spanLabel: {
        marginLeft: "1em"
    } as CSSProperties
};

function FilePicker() {
    const loadingMessage: string = "Loading...";
    const noFileMessage: string = "";
    const [selectedFileName, setSelectedFileName] = useState(noFileMessage);
    const [hasFocus, setHasFocus] = useState(false);

    function onButtonClick(e: any) {
        setHasFocus(false);
        setSelectedFileName(loadingMessage);
        fileOpen({ description: "CSV file", extensions: [".csv"], mimeTypes: ["text/*"] })
            .then((file) => {
                setSelectedFileName(file.name);
                console.log("Chosen: " + file.name);
            })
            .catch(() => {
                setSelectedFileName(noFileMessage);
            });
    }

    function onFocus(e: any) {
        console.log("onFocus");
        setHasFocus(true);
    }

    return (
        <>
            <SymplSecondaryButton text='Select...' icon='si-download si-sm' onClick={onButtonClick} onFocus={onFocus} />
            <SymplLabel style={styles.spanLabel}>{selectedFileName}</SymplLabel>
            {selectedFileName === loadingMessage && hasFocus && (
                <div>
                    <SymplSpinner />
                </div>
            )}
        </>
    );
}

export default FilePicker;
