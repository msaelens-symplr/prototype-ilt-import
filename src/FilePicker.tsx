import { SymplLabel, SymplSecondaryButton, SymplSpinner } from "@symplr-ux/alloy-components/dist/react-bindings";
import { CSSProperties, useState, FunctionComponent } from "react";
import { fileOpen } from "browser-fs-access";

const styles = {
    spanLabel: {
        marginLeft: "1rem"
    } as CSSProperties,
    marginTop: {
        marginTop: "1rem"
    } as CSSProperties
};

interface Props {
    setFile: (file: any) => void;
}

const FilePicker: FunctionComponent<Props> = ({ setFile }) => {
    const loadingMessage: string = "Loading...";
    const noFileMessage: string = "";
    const [selectedFileName, setSelectedFileName] = useState(noFileMessage);
    const [hasFocus, setHasFocus] = useState(false);

    function onButtonClick(e: any) {
        setHasFocus(false);
        setSelectedFileName(loadingMessage);
        fileOpen({ description: "CSV file", extensions: [".csv"], mimeTypes: ["text/*"] })
            .then((file) => {
                setFile(file);
                setSelectedFileName(file.name);
            })
            .catch(() => {
                setSelectedFileName(noFileMessage);
                setFile(null);
            });
    }

    function onFocus(e: any) {
        setHasFocus(true);
    }

    return (
        <>
            <SymplSecondaryButton text='Select...' icon='si-download si-sm' onClick={onButtonClick} onFocus={onFocus} />
            <SymplLabel style={styles.spanLabel}>{selectedFileName}</SymplLabel>
            {selectedFileName === loadingMessage && hasFocus && (
                <div style={styles.marginTop}>
                    <SymplSpinner />
                </div>
            )}
        </>
    );
};

export default FilePicker;
