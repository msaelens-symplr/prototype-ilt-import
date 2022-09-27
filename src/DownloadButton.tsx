import { SymplSecondaryButton } from "@symplr-ux/alloy-components/dist/react-bindings";
import fileDownload from "js-file-download";
import { FunctionComponent } from "react";
import { getDataTemplateCsv } from "./dataValidation";

interface Props {
    text: string;
}

const DownloadButton: FunctionComponent<Props> = ({ text }) => {
    const onClick = () => {
        fileDownload(getDataTemplateCsv(), "Class-Import-Template.csv");
    };

    return <SymplSecondaryButton onClick={onClick} text={text}></SymplSecondaryButton>;
};

export default DownloadButton;
