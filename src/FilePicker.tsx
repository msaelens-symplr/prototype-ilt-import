import { SymplLabel, SymplSecondaryButton, SymplSpinner } from "@symplr-ux/alloy-components/dist/react-bindings";
import { CSSProperties, useState, FunctionComponent } from "react";
import { fileOpen } from "browser-fs-access";

const styles = {
    spanLabel: {
        marginLeft: "1rem"
    } as CSSProperties,
    buttonInline: {
        marginLeft: "1rem"
    } as CSSProperties,
    spinner: {
        height: "1.5rem",
        width: "1.5rem",
        top: "0.5rem",
        left: "1rem"
    }
};

interface Props {
    setFile: (file: any) => void;
}

const FilePicker: FunctionComponent<Props> = ({ setFile }) => {
    const loadingMessage: string = "Loading...";
    const noFileMessage: string = "";
    const [selectedFileName, setSelectedFileName] = useState(noFileMessage);
    const [hasFocus, setHasFocus] = useState(false);
    const [loading, setLoading] = useState(false);

    function onButtonClick(e: any) {
        setHasFocus(false);
        setLoading(true);
        fileOpen({ description: "CSV file", extensions: [".csv"], mimeTypes: ["text/*"] })
            .then((file) => {
                setFile(file);
                setSelectedFileName(file.name);
            })
            .catch(() => {
                // Do nothing; User canceled.
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function onFocus(e: any) {
        setHasFocus(true);
    }

    function onReset() {
        setSelectedFileName(noFileMessage);
        setFile(null);
    }

    return (
        <>
            <SymplSecondaryButton text='Select...' icon='si-download si-sm' onClick={onButtonClick} onFocus={onFocus} />
            <SymplLabel style={styles.spanLabel}>{loading && hasFocus ? loadingMessage : selectedFileName}</SymplLabel>
            {loading && hasFocus && <SymplSpinner style={styles.spinner} />}
            {selectedFileName !== noFileMessage && (
                <SymplSecondaryButton text='Reset' style={styles.buttonInline} onClick={onReset}></SymplSecondaryButton>
            )}
        </>
    );
};

export default FilePicker;
