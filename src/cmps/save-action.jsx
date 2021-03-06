import { CSVLink } from "react-csv";
import { downloadService } from "../services/download.service"

export const SaveAction = (props) => {
    const domainToDownload = { ...props.domain }

    //Preparing the object to display in file
    delete domainToDownload.adsToDisplay
    delete domainToDownload.maxItemsInPage

    const csvData = downloadService.getCsvData(domainToDownload)

    const downloadJsonFile = async () => {
        downloadService.downloadFile(domainToDownload)
    }

    return (
        <section className="save-actions">
            Download As:
            <button className="download-btn" onClick={downloadJsonFile}>JSON</button>
            <button className="download-btn">
                <CSVLink className="clean-link" data={csvData} filename={domainToDownload.name + '.csv'}>CSV</CSVLink>
            </button>
        </section>
    )
}